
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


db.run("CREATE TABLE if not exists LISTS (id VARCHAR(10) PRIMARY KEY NOT NULL, name VARCHAR(50) NOT NULL)", (err) => {
  db.all("SELECT * FROM LISTS", (err,rows) => {
    if (rows.length == 0){
      db.run("INSERT INTO LISTS VALUES ('wshl','Wishlist')");
      db.run("INSERT INTO LISTS VALUES ('shpl','Shoppinglist') ");
    }
  })
  db.run("CREATE TABLE if not exists LIST_ITEMS (id INTEGER PRIMARY KEY NOT NULL, title VARCHAR(100) NOT NULL, description VARCHAR(255), price FLOAT, img VARCHAR(255), url VARCHAR(255), list VARCHAR(10))");
});



app.get('/api/items/all', async (req, res, next) => {
  db.all(`SELECT * FROM LIST_ITEMS`, (err, rows) => {
    if (err) { next(err); }
    res.status(200).send(rows);
  });
});

app.get('/api/items', async (req, res, next) => {
  if (req.query.searchQuery){
    db.all(`SELECT * FROM LIST_ITEMS WHERE title like '%${req.query.searchQuery}%' or description like '%${req.query.searchQuery}%'`, (err, rows) => {
      if (err) { next(err); }
      res.status(200).send(rows);
    });
  } else {
    db.all(`SELECT * FROM LIST_ITEMS WHERE list ='${req.query.list}'`, (err, rows) => {
      if (err) { next(err); }
      res.status(200).send(rows);
    });
  }
});

app.post('/api/items', async (req, res, next) => {     // title,description,price,img,url,list)
    db.all(`SELECT * FROM LIST_ITEMS WHERE title = '${req.body.title}' and url = '${req.body.url}'`, (err, rows) => {
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
  if (req.query.list){
    db.run(`UPDATE LIST_ITEMS SET list = "${req.query.list}" WHERE id="${req.query.item}" `, (err)=> {
       if(err !== null) {
         next(err);
       } else {
         res.status(200).send('item moved');
       }
     })
  } else {
    db.run(`UPDATE LIST_ITEMS SET description = "${req.query.newInfo}" WHERE id="${req.query.item}" `, (err)=> {
       if(err !== null) {
         next(err);
       } else {
         res.status(200).send('item changed');
       }
     })
  }
});


app.get('/api/lists', async (req, res, next) => {
  db.all('SELECT l.*, ls.kol FROM LISTS l LEFT JOIN (SELECT COUNT(ls.list) as kol, ls.list  FROM LIST_ITEMS ls GROUP BY ls.list) ls ON ls.list=l.id ', (err, rows) => {
    if (err) { next(err); }
    res.send(rows);
  });
});


app.post('/api/lists', async (req, res, next) => {
  db.all(`INSERT INTO LISTS VALUES ("${req.body.list.id}","${req.body.list.name}")`, (err, rows) => {
    if (err) { next(err); }
    res.status(200).send('items inserted');
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
              res.status(200).send('list deleted');
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

    //console.log(html);
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
