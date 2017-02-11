/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import path from 'path';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import React from 'react';
import ReactDOM from 'react-dom/server';
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
import sqlite3 from 'sqlite3';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import routes from './routes';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import { port, databaseUrl } from './config';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const db = new sqlite3.Database(databaseUrl);
const app = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

db.run("CREATE TABLE if not exists LISTS (id VARCHAR(10) PRIMARY KEY NOT NULL, name VARCHAR(50) NOT NULL, description VARCHAR(255))", (err) => {
  db.all("SELECT * FROM LISTS", (err,rows) => {
    if (rows.length == 0){
      db.run("INSERT INTO LISTS VALUES ('wshl','Wishlist','List of my wishes for my friends')");
      db.run("INSERT INTO LISTS VALUES ('shpl','Shoppinglist','List of my future shoppings') ");
    }
  })
  db.run("CREATE TABLE if not exists LIST_ITEMS (id INTEGER PRIMARY KEY NOT NULL, title VARCHAR(100) NOT NULL, description VARCHAR(255), price FLOAT, img VARCHAR(255), url VARCHAR(255), list VARCHAR(10))");
});



app.get('/api/items/all', async (req, res, next) => {
  db.all(`SELECT * FROM LIST_ITEMS`, (err, rows) => {
    if (err) { next(err); }
    res.send(rows);
  });
});

app.get('/api/items', async (req, res, next) => {
  if (req.query.searchQuery){
    db.all(`SELECT * FROM LIST_ITEMS WHERE title like '%${req.query.searchQuery}%' or description like '%${req.query.searchQuery}%'`, (err, rows) => {
      if (err) { next(err); }
      res.send(rows);
    });
  } else {
    db.all(`SELECT * FROM LIST_ITEMS WHERE list ='${req.query.list}'`, (err, rows) => {
      if (err) { next(err); }
      res.send(rows);
    });
  }
});

app.post('/api/items', async (req, res, next) => {     // title,description,price,img,url,list)
    db.all(`SELECT * FROM LIST_ITEMS WHERE title = '${req.body.title}' and url = '${req.body.url}'`, (err, rows) => {
      console.log(rows.length + ' = ' + req.body.title + ' = ' + req.body.url)
      if (rows.length > 0) {
        res.status(500).send('Already exists');
        next(err);
      } else {
        db.run(`INSERT INTO LIST_ITEMS(title,description,price,img,url,list) VALUES ("${req.body.title}","${req.body.descr}","${req.body.price}","${req.body.src}","${req.body.url}","${req.body.list}")`, (err) => {
          if (err) {
            res.status(500).send(err);
            next(err);
          } else {
            res.status(200).send('item added');
          }
        });
      }
    });
});

app.delete('/api/items', async (req, res, next) => {
  db.run(`DELETE FROM LIST_ITEMS WHERE id = "${req.query.item}"`, (err) => {
    if(err !== null) {
      next(err);
    }
    else {
      res.status(200).send('items deleted');
    }
  });
});


app.put('/api/items', async (req, res, next) => {
  console.log()
  db.run(`UPDATE LIST_ITEMS SET list = "${req.query.list}" WHERE id="${req.query.item}" `, (err)=> {
     if(err !== null) {
       next(err);
     } else {
       res.send(200, 'item moved');
     }
   })
});


app.get('/api/lists', async (req, res, next) => {
  db.all('SELECT * FROM LISTS', (err, rows) => {
    if (err) { next(err); }
    res.send(rows);
  });
});

app.post('/api/lists', async (req, res, next) => {
  console.log('insert lists');
  // res.send(200);
  db.all(`INSERT INTO LISTS VALUES ("${req.body.list.id}","${req.body.list.name}","${req.body.list.descr}")`, (err, rows) => {
    if (err) { next(err); }
    res.send(200, 'items inserted');
  });
});


app.delete('/api/lists', async (req, res, next) => {
  db.run(`DELETE FROM LISTS WHERE id = "${req.query.list}"`, (err) => {
    if(err !== null) {
      next(err);
    }
    else {
        db.run(`DELETE FROM LIST_ITEMS WHERE list = "${req.query.list}" `, (err) => {
          if(err !== null) {
            next(err);
          } else {
              res.send(200, 'list deleted');
          }
        })
      }
    });
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get('*', async (req, res, next) => {
  try {
    const css = new Set();
    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {

      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
    };

    const route = await UniversalRouter.resolve(routes, {
      path: req.path,
      query: req.query,
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }
  //
  //
    const data = { ...route };
    data.children = ReactDOM.renderToString(<App context={context}>{route.component}</App>);
    data.style = [...css].join('');
    data.scripts = [
      assets.vendor.js,
      assets.client.js,
    ];
    if (assets[route.chunk]) {
      data.scripts.push(assets[route.chunk].js);
    }

    //console.log(route.component);

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

    console.log(html);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
   } catch (err) {
     next(err);
   }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
