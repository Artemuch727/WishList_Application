require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _typeof2 = __webpack_require__(1);

  var _typeof3 = _interopRequireDefault(_typeof2);

  var _toConsumableArray2 = __webpack_require__(2);

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  var _extends2 = __webpack_require__(3);

  var _extends3 = _interopRequireDefault(_extends2);

  var _set = __webpack_require__(4);

  var _set2 = _interopRequireDefault(_set);

  var _regenerator = __webpack_require__(5);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(6);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\server.js'; /**
                                                                                * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                *
                                                                                * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                *
                                                                                * This source code is licensed under the MIT license found in the
                                                                                * LICENSE.txt file in the root directory of this source tree.
                                                                                */

  // eslint-disable-line import/no-unresolved

  __webpack_require__(7);

  var _path = __webpack_require__(8);

  var _path2 = _interopRequireDefault(_path);

  var _express = __webpack_require__(9);

  var _express2 = _interopRequireDefault(_express);

  var _cors = __webpack_require__(10);

  var _cors2 = _interopRequireDefault(_cors);

  var _cookieParser = __webpack_require__(11);

  var _cookieParser2 = _interopRequireDefault(_cookieParser);

  var _bodyParser = __webpack_require__(12);

  var _bodyParser2 = _interopRequireDefault(_bodyParser);

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _server = __webpack_require__(14);

  var _server2 = _interopRequireDefault(_server);

  var _universalRouter = __webpack_require__(15);

  var _universalRouter2 = _interopRequireDefault(_universalRouter);

  var _prettyError = __webpack_require__(16);

  var _prettyError2 = _interopRequireDefault(_prettyError);

  var _sqlite = __webpack_require__(17);

  var _sqlite2 = _interopRequireDefault(_sqlite);

  var _reactTapEventPlugin = __webpack_require__(18);

  var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

  var _App = __webpack_require__(19);

  var _App2 = _interopRequireDefault(_App);

  var _Html = __webpack_require__(26);

  var _Html2 = _interopRequireDefault(_Html);

  var _ErrorPage = __webpack_require__(28);

  var _ErrorPage2 = __webpack_require__(30);

  var _ErrorPage3 = _interopRequireDefault(_ErrorPage2);

  var _routes = __webpack_require__(37);

  var _routes2 = _interopRequireDefault(_routes);

  var _assets = __webpack_require__(100);

  var _assets2 = _interopRequireDefault(_assets);

  var _config = __webpack_require__(27);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  (0, _reactTapEventPlugin2.default)();

  var db = new _sqlite2.default.Database(_config.databaseUrl);
  var app = (0, _express2.default)();

  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';

  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use((0, _cookieParser2.default)());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());

  app.use((0, _cors2.default)());

  db.run("CREATE TABLE if not exists LISTS (id VARCHAR(10) PRIMARY KEY NOT NULL, name VARCHAR(50) NOT NULL, description VARCHAR(255))", function (err) {
    db.all("SELECT * FROM LISTS", function (err, rows) {
      if (rows.length == 0) {
        db.run("INSERT INTO LISTS VALUES ('wshl','Wishlist','List of my wishes for my friends')");
        db.run("INSERT INTO LISTS VALUES ('shpl','Shoppinglist','List of my future shoppings') ");
      }
    });
    db.run("CREATE TABLE if not exists LIST_ITEMS (id INTEGER PRIMARY KEY NOT NULL, title VARCHAR(100) NOT NULL, description VARCHAR(255), price FLOAT, img VARCHAR(255), url VARCHAR(255), list VARCHAR(10))");
  });

  app.get('/api/items/all', function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db.all('SELECT * FROM LIST_ITEMS', function (err, rows) {
                if (err) {
                  next(err);
                }
                res.send(rows);
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());

  app.get('/api/items', function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (req.query.searchQuery) {
                db.all('SELECT * FROM LIST_ITEMS WHERE title like \'%' + req.query.searchQuery + '%\' or description like \'%' + req.query.searchQuery + '%\'', function (err, rows) {
                  if (err) {
                    next(err);
                  }
                  res.send(rows);
                });
              } else {
                db.all('SELECT * FROM LIST_ITEMS WHERE list =\'' + req.query.list + '\'', function (err, rows) {
                  if (err) {
                    next(err);
                  }
                  res.send(rows);
                });
              }

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }());

  app.post('/api/items', function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res, next) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // title,description,price,img,url,list)
              db.all('SELECT * FROM LIST_ITEMS WHERE title = \'' + req.body.title + '\' and url = \'' + req.body.url + '\'', function (err, rows) {
                console.log(rows.length + ' = ' + req.body.title + ' = ' + req.body.url);
                if (rows.length > 0) {
                  res.status(500).send('Already exists');
                  next(err);
                } else {
                  db.run('INSERT INTO LIST_ITEMS(title,description,price,img,url,list) VALUES ("' + req.body.title + '","' + req.body.descr + '","' + req.body.price + '","' + req.body.src + '","' + req.body.url + '","' + req.body.list + '")', function (err) {
                    if (err) {
                      res.status(500).send(err);
                      next(err);
                    } else {
                      res.status(200).send('item added');
                    }
                  });
                }
              });

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }());

  app.delete('/api/items', function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res, next) {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              db.run('DELETE FROM LIST_ITEMS WHERE id = "' + req.query.item + '"', function (err) {
                if (err !== null) {
                  next(err);
                } else {
                  res.status(200).send('items deleted');
                }
              });

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }());

  app.put('/api/items', function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(req, res, next) {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log();
              db.run('UPDATE LIST_ITEMS SET list = "' + req.query.list + '" WHERE id="' + req.query.item + '" ', function (err) {
                if (err !== null) {
                  next(err);
                } else {
                  res.send(200, 'item moved');
                }
              });

            case 2:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }());

  app.get('/api/lists', function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(req, res, next) {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              db.all('SELECT * FROM LISTS', function (err, rows) {
                if (err) {
                  next(err);
                }
                res.send(rows);
              });

            case 1:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x16, _x17, _x18) {
      return _ref6.apply(this, arguments);
    };
  }());

  app.post('/api/lists', function () {
    var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(req, res, next) {
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              console.log('insert lists');
              // res.send(200);
              db.all('INSERT INTO LISTS VALUES ("' + req.body.list.id + '","' + req.body.list.name + '","' + req.body.list.descr + '")', function (err, rows) {
                if (err) {
                  next(err);
                }
                res.send(200, 'items inserted');
              });

            case 2:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function (_x19, _x20, _x21) {
      return _ref7.apply(this, arguments);
    };
  }());

  app.delete('/api/lists', function () {
    var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(req, res, next) {
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              db.run('DELETE FROM LISTS WHERE id = "' + req.query.list + '"', function (err) {
                if (err !== null) {
                  next(err);
                } else {
                  db.run('DELETE FROM LIST_ITEMS WHERE list = "' + req.query.list + '" ', function (err) {
                    if (err !== null) {
                      next(err);
                    } else {
                      res.send(200, 'list deleted');
                    }
                  });
                }
              });

            case 1:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined);
    }));

    return function (_x22, _x23, _x24) {
      return _ref8.apply(this, arguments);
    };
  }());

  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------

  app.get('*', function () {
    var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(req, res, next) {
      var _ret;

      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              return _context10.delegateYield(_regenerator2.default.mark(function _callee9() {
                var css, context, route, data, html;
                return _regenerator2.default.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        css = new _set2.default();
                        // Global (context) variables that can be easily accessed from any React component
                        // https://facebook.github.io/react/docs/context.html

                        context = {

                          // Enables critical path CSS rendering
                          // https://github.com/kriasoft/isomorphic-style-loader
                          insertCss: function insertCss() {
                            for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
                              styles[_key] = arguments[_key];
                            }

                            // eslint-disable-next-line no-underscore-dangle
                            styles.forEach(function (style) {
                              return css.add(style._getCss());
                            });
                          }
                        };
                        _context9.next = 4;
                        return _universalRouter2.default.resolve(_routes2.default, {
                          path: req.path,
                          query: req.query
                        });

                      case 4:
                        route = _context9.sent;

                        if (!route.redirect) {
                          _context9.next = 8;
                          break;
                        }

                        res.redirect(route.status || 302, route.redirect);
                        return _context9.abrupt('return', {
                          v: void 0
                        });

                      case 8:
                        //
                        //
                        data = (0, _extends3.default)({}, route);

                        data.children = _server2.default.renderToString(_react2.default.createElement(
                          _App2.default,
                          { context: context, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 196
                            },
                            __self: undefined
                          },
                          route.component
                        ));
                        data.style = [].concat((0, _toConsumableArray3.default)(css)).join('');
                        data.scripts = [_assets2.default.vendor.js, _assets2.default.client.js];
                        if (_assets2.default[route.chunk]) {
                          data.scripts.push(_assets2.default[route.chunk].js);
                        }

                        //console.log(route.component);

                        html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, (0, _extends3.default)({}, data, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 208
                          },
                          __self: undefined
                        })));


                        console.log(html);
                        res.status(route.status || 200);
                        res.send('<!doctype html>' + html);

                      case 17:
                      case 'end':
                        return _context9.stop();
                    }
                  }
                }, _callee9, undefined);
              })(), 't0', 2);

            case 2:
              _ret = _context10.t0;

              if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                _context10.next = 5;
                break;
              }

              return _context10.abrupt('return', _ret.v);

            case 5:
              _context10.next = 10;
              break;

            case 7:
              _context10.prev = 7;
              _context10.t1 = _context10['catch'](0);

              next(_context10.t1);

            case 10:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, undefined, [[0, 7]]);
    }));

    return function (_x25, _x26, _x27) {
      return _ref9.apply(this, arguments);
    };
  }());

  //
  // Error handling
  // -----------------------------------------------------------------------------
  var pe = new _prettyError2.default();
  pe.skipNodeFiles();
  pe.skipPackage('express');

  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(
      _Html2.default,
      {
        title: 'Internal Server Error',
        description: err.message,
        style: _ErrorPage3.default._getCss() // eslint-disable-line no-underscore-dangle
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: undefined
      },
      _server2.default.renderToString(_react2.default.createElement(_ErrorPage.ErrorPageWithoutStyle, { error: err, __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: undefined
      }))
    ));
    res.status(err.status || 500);
    res.send('<!doctype html>' + html);
  });

  //
  // Launch the server
  // -----------------------------------------------------------------------------

  app.listen(_config.port, function () {
    console.log('The server is running at http://localhost:' + _config.port + '/');
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("cors");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("pretty-error");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("sqlite3");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("react-tap-event-plugin");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\App.js'; /**
                                                                                         * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                         *
                                                                                         * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                         *
                                                                                         * This source code is licensed under the MIT license found in the
                                                                                         * LICENSE.txt file in the root directory of this source tree.
                                                                                         */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _MuiThemeProvider = __webpack_require__(25);

  var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ContextType = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: _react.PropTypes.func.isRequired
  };

  var App = function (_React$PureComponent) {
    (0, _inherits3.default)(App, _React$PureComponent);

    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.props.context;
      }
    }, {
      key: 'render',
      value: function render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        return _react2.default.Children.only(_react2.default.createElement(
          _MuiThemeProvider2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          },
          this.props.children
        ));
      }
    }]);
    return App;
  }(_react2.default.PureComponent);

  App.propTypes = {
    context: _react.PropTypes.shape(ContextType).isRequired,
    children: _react.PropTypes.element.isRequired
  };
  App.childContextTypes = ContextType;
    exports.default = App;

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\Html.js'; /**
                                                                                          * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                          *
                                                                                          * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                          *
                                                                                          * This source code is licensed under the MIT license found in the
                                                                                          * LICENSE.txt file in the root directory of this source tree.
                                                                                          */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _config = __webpack_require__(27);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Html = function (_React$Component) {
    (0, _inherits3.default)(Html, _React$Component);

    function Html() {
      (0, _classCallCheck3.default)(this, Html);
      return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
    }

    (0, _createClass3.default)(Html, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            title = _props.title,
            description = _props.description,
            style = _props.style,
            scripts = _props.scripts,
            children = _props.children;

        return _react2.default.createElement(
          'html',
          { className: 'no-js', lang: 'en', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          _react2.default.createElement(
            'head',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            }),
            _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            }),
            _react2.default.createElement(
              'title',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              title
            ),
            _react2.default.createElement('meta', { name: 'description', content: description, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            }),
            style && _react2.default.createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: style }, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'body',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: children }, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            }),
            scripts && scripts.map(function (script) {
              return _react2.default.createElement('script', { key: script, src: script, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                },
                __self: _this2
              });
            })
          )
        );
      }
    }]);
    return Html;
  }(_react2.default.Component);

  Html.propTypes = {
    title: _react.PropTypes.string.isRequired,
    description: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.string,
    scripts: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired),
    children: _react.PropTypes.string
  };
    exports.default = Html;

/***/ },
/* 27 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  /* eslint-disable max-len */

  var port = exports.port = process.env.PORT || 4000;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || 'localhost:' + port;

  var databaseUrl = exports.databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPageWithoutStyle = undefined;

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\routes\\error\\ErrorPage.js'; /**
                                                                                                  * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                  *
                                                                                                  * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                  *
                                                                                                  * This source code is licensed under the MIT license found in the
                                                                                                  * LICENSE.txt file in the root directory of this source tree.
                                                                                                  */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(29);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _ErrorPage = __webpack_require__(30);

  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ErrorPage = function (_React$Component) {
    (0, _inherits3.default)(ErrorPage, _React$Component);

    function ErrorPage() {
      (0, _classCallCheck3.default)(this, ErrorPage);
      return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
    }

    (0, _createClass3.default)(ErrorPage, [{
      key: 'render',
      value: function render() {
        if (true) {
          var error = this.props.error;

          return _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              error.name
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              error.message
            ),
            _react2.default.createElement(
              'pre',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              },
              error.stack
            )
          );
        }

        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          },
          _react2.default.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            'Error'
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            },
            'Sorry, a critical error occurred on this page.'
          )
        );
      }
    }]);
    return ErrorPage;
  }(_react2.default.Component);

  ErrorPage.propTypes = {
    error: _react.PropTypes.object.isRequired
  };
  exports.ErrorPageWithoutStyle = ErrorPage;
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(31);
      var insertCss = __webpack_require__(33);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./ErrorPage.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EAAjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":"webpack://"}]);

  // exports


/***/ },
/* 32 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  var _stringify = __webpack_require__(34);

  var _stringify2 = _interopRequireDefault(_stringify);

  var _slicedToArray2 = __webpack_require__(35);

  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

  var _getIterator2 = __webpack_require__(36);

  var _getIterator3 = _interopRequireDefault(_getIterator2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  var prefix = 's';
  var inserted = {};

  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }

  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;

        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$replace = _ref.replace,
        replace = _ref$replace === undefined ? false : _ref$replace,
        _ref$prepend = _ref.prepend,
        prepend = _ref$prepend === undefined ? false : _ref$prepend;

    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
          moduleId = _styles$i[0],
          css = _styles$i[1],
          media = _styles$i[2],
          sourceMap = _styles$i[3];

      var id = moduleId + '-' + i;

      ids.push(id);

      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }

      inserted[id] = 1;

      var elem = document.getElementById(prefix + id);
      var create = false;

      if (!elem) {
        create = true;

        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;

        if (media) {
          elem.setAttribute('media', media);
        }
      }

      var cssText = css;
      if (sourceMap && btoa) {
        // skip IE9 and below, see http://caniuse.com/atob-btoa
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
      }

      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }

      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }

    return removeCss.bind(null, ids);
  }

  module.exports = insertCss;

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(5);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(6);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */

  /* eslint-disable global-require */

  // The top-level (parent) route

  exports.default = {

    path: '/',

    // Keep in mind, routes are evaluated in order
    children: [__webpack_require__(38).default, __webpack_require__(91).default, __webpack_require__(95).default,
    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    __webpack_require__(96).default],

    action: function action(_ref) {
      var _this = this;

      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();

              case 2:
                route = _context.sent;


                // Provide default values for title, description etc.
                route.title = '' + (route.title || 'Untitled Page');
                route.description = route.description || '';

                return _context.abrupt('return', route);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(5);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(6);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\routes\\home\\index.js'; /**
                                                                                             * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                             *
                                                                                             * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                             *
                                                                                             * This source code is licensed under the MIT license found in the
                                                                                             * LICENSE.txt file in the root directory of this source tree.
                                                                                             */

  //import Home from './Home';

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _WishList = __webpack_require__(42);

  var _WishList2 = _interopRequireDefault(_WishList);

  var _Layout = __webpack_require__(69);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _MuiThemeProvider = __webpack_require__(25);

  var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/',

    action: function action() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', {
                  title: 'Your WishList',
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                      },
                      __self: _this
                    },
                    _react2.default.createElement(
                      _MuiThemeProvider2.default,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 23
                        },
                        __self: _this
                      },
                      _react2.default.createElement(_WishList2.default, { title: 'Your WishList', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 23
                        },
                        __self: _this
                      })
                    )
                  )
                });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends2 = __webpack_require__(3);

  var _extends3 = _interopRequireDefault(_extends2);

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\WishList\\WishList.js'; /**
                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                        *
                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                        *
                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                        */

  var _delete = __webpack_require__(43);

  var _delete2 = _interopRequireDefault(_delete);

  var _FloatingActionButton = __webpack_require__(44);

  var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

  var _FlatButton = __webpack_require__(45);

  var _FlatButton2 = _interopRequireDefault(_FlatButton);

  var _IconButton = __webpack_require__(46);

  var _IconButton2 = _interopRequireDefault(_IconButton);

  var _moreVert = __webpack_require__(47);

  var _moreVert2 = _interopRequireDefault(_moreVert);

  var _IconMenu = __webpack_require__(48);

  var _IconMenu2 = _interopRequireDefault(_IconMenu);

  var _MenuItem = __webpack_require__(49);

  var _MenuItem2 = _interopRequireDefault(_MenuItem);

  var _Paper = __webpack_require__(50);

  var _Paper2 = _interopRequireDefault(_Paper);

  var _navigationArrowDropRight = __webpack_require__(51);

  var _navigationArrowDropRight2 = _interopRequireDefault(_navigationArrowDropRight);

  var _Menu = __webpack_require__(52);

  var _Menu2 = _interopRequireDefault(_Menu);

  var _add = __webpack_require__(53);

  var _add2 = _interopRequireDefault(_add);

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(29);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _WishList = __webpack_require__(54);

  var _WishList2 = _interopRequireDefault(_WishList);

  var _api = __webpack_require__(56);

  var _api2 = _interopRequireDefault(_api);

  var _DialogPopup = __webpack_require__(58);

  var _DialogPopup2 = _interopRequireDefault(_DialogPopup);

  var _ItemsList = __webpack_require__(62);

  var _ItemsList2 = _interopRequireDefault(_ItemsList);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var WishList = function (_React$Component) {
    (0, _inherits3.default)(WishList, _React$Component);

    function WishList(props) {
      (0, _classCallCheck3.default)(this, WishList);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WishList.__proto__ || (0, _getPrototypeOf2.default)(WishList)).call(this, props));

      _this.handleOpen = function () {
        _this.setState((0, _extends3.default)({}, _this.state, { open: true }));
      };

      _this.handleClose = function () {
        _this.setState((0, _extends3.default)({}, _this.state, { open: false }));
      };

      _this.handleListAdd = function (list) {
        var chList = _this.state.lists.filter(function (item) {
          return item.id == list.id;
        });

        if (chList && chList.length > 0) {
          alert('List already ecist!');
        } else {
          _this.setState((0, _extends3.default)({}, _this.state, { open: false, selItem: '', searchRes: '' }));

          _api2.default.addNewListToDB(list).then(function (err) {
            console.log(err);
          }).then(function () {
            return _api2.default.getAllListsFromDB();
          }).then(function (response) {
            _this.setState((0, _extends3.default)({}, _this.state, { lists: response.data }));
          }).then(function () {
            return _api2.default.getListItemsFromDB(_this.state.selList);
          }).then(function (response) {
            return _this.setState((0, _extends3.default)({}, _this.state, { w_items: response.data }));
          });
        }
      };

      _this.handleListDelete = function (list) {
        console.log(list);
        var delCheck = confirm("Are you sure in deleting list??");
        if (delCheck) {
          _api2.default.deleteListFromDB(list).then(function () {
            return _api2.default.getAllListsFromDB();
          }).then(function (response) {
            return _this.setState((0, _extends3.default)({}, _this.state, { lists: response.data, selItem: '', selList: '', searchRes: '' }));
          });
        }
      };

      _this.handleListselect = function (item) {
        _this.setState((0, _extends3.default)({}, _this.state, { selList: item.id, selItem: '' }));
        var w_items = _api2.default.getListItemsFromDB(item.id).then(function (response) {
          _this.setState((0, _extends3.default)({}, _this.state, { w_items: response.data, searchRes: '' }));
        });
      };

      _this.state = {
        open: false,
        error: false,
        selList: '',
        lists: []
      };
      return _this;
    }

    (0, _createClass3.default)(WishList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var lists = _api2.default.getAllListsFromDB().then(function (response) {
          _this2.setState((0, _extends3.default)({}, _this2.state, { lists: response.data }));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var style = {
          marginRight: 20
        };

        var paperStyle = {
          height: 100,
          width: 100,
          margin: 20,
          textAlign: 'center',
          display: 'inline-block'
        };

        var Lists = this.state.lists.map(function (item) {
          return _react2.default.createElement(_MenuItem2.default, {
            key: item.id,
            primaryText: item.name,
            onTouchTap: _this3.handleListselect.bind(_this3, item),
            style: { display: 'flex', alignItems: 'center', width: '82%' },
            rightIcon: _this3.state.selList == item.id ? _react2.default.createElement(_delete2.default, { key: item.id, onTouchTap: _this3.handleListDelete.bind(_this3, item.id), style: { float: "right", position: "absolute", right: '0px' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: _this3
            }) : null,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: _this3
          });
        });

        var selList = this.state.lists.filter(function (item) {
          return item.id == _this3.state.selList;
        });

        return _react2.default.createElement(
          'div',
          { className: _WishList2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _WishList2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _WishList2.default.panel, style: { width: "21%", float: "left", marginRight: "25px", minWidth: '195px' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _WishList2.default.panelHeading + ' ' + _WishList2.default.panelDefault + ' ' + _WishList2.default.panelFlex, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h2',
                  { className: _WishList2.default.panelTitle, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 123
                    },
                    __self: this
                  },
                  'My lists'
                ),
                _react2.default.createElement(
                  _FloatingActionButton2.default,
                  { mini: true, style: style, onTouchTap: this.handleOpen, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 124
                    },
                    __self: this
                  },
                  _react2.default.createElement(_add2.default, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 125
                    },
                    __self: this
                  }),
                  _react2.default.createElement(_DialogPopup2.default, { open: this.state.open, handleClose: this.handleClose, handleSubmit: this.handleListAdd, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 126
                    },
                    __self: this
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _WishList2.default.panelBody, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                  },
                  __self: this
                },
                _react2.default.createElement(
                  _Menu2.default,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 130
                    },
                    __self: this
                  },
                  Lists
                )
              )
            ),
            _react2.default.createElement(_ItemsList2.default, { className: _WishList2.default.listbox, lists: this.state.lists, listSelected: this.state.selList, __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              },
              __self: this
            })
          )
        );
      }
    }]);
    return WishList;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_WishList2.default)(WishList);

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/action/delete");

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = require("material-ui/FloatingActionButton");

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("material-ui/FlatButton");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("material-ui/IconButton");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/navigation/more-vert");

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("material-ui/IconMenu");

/***/ },
/* 49 */
/***/ function(module, exports) {

  module.exports = require("material-ui/MenuItem");

/***/ },
/* 50 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Paper");

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/navigation-arrow-drop-right");

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Menu");

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/content/add");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(55);
      var insertCss = __webpack_require__(33);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./WishList.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./WishList.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.WishList-root-3TwIi {\n  color: #fff;\n}\n\n.WishList-container-30Zra {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n  -webkit-align-items: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  margin: 0 auto;\n  padding: 20px 15px;\n  text-align: left;\n}\n\n/*bootstrap classes*/\n.WishList-panel-1Tu78 {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n\n.WishList-panelBody-3U90o {\n  padding: 15px;\n}\n\n.WishList-panelHeading-8IXUh {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.03);\n  min-height: 48px;\n}\n\n.WishList-panelFlex-j3pX5 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.WishList-panelTitle-3K846 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: #000;\n}\n.WishList-panelDefault-1xxU1 {\n  border-color: #ddd;\n}\n.WishList-panelDefault-1xxU1 > .WishList-panelHeading-8IXUh {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n/*******************/\n\n.WishList-text-1nU21 {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.WishList-textMuted-3s38O {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.WishList-title-o_01G {\n  color: #333;\n}\n\n.WishList-spacer-1xmMU {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.WishList-text-1nU21,\n.WishList-link-3htoP {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.WishList-link-3htoP,\n.WishList-link-3htoP:active,\n.WishList-link-3htoP:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.WishList-link-3htoP:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/./components/WishList/WishList.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,YAAY;CACb;;AAED;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,4BAAsB;EAAtB,8BAAsB;MAAtB,yBAAsB;UAAtB,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;CAClB;;AAED,qBAAqB;AACrB;EACE,oBAAoB;EACpB,uBAAuB;EACvB,8BAA8B;EAC9B,mBAAmB;EAEX,yCAAyC;CAClD;;AAED;EACE,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,qCAAqC;EACrC,4BAA4B;EAC5B,6BAA6B;EAC7B,sCAAsC;EACtC,iBAAiB;CAClB;;AAED;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,0BAA+B;EAA/B,uCAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;CAChC;;AAED;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CACpB;AACD,qBAAqB;;AAErB;EACE,gCAAgC;CACjC;;AAED;EAEE,gCAAgC;CACjC;;AAED;EACE,YAAY;CACb;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"WishList.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  color: #fff;\n}\n\n.container {\n  display: flex;\n  align-items: baseline;\n  margin: 0 auto;\n  padding: 20px 15px;\n  text-align: left;\n}\n\n/*bootstrap classes*/\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n\n.panelBody {\n  padding: 15px;\n}\n\n.panelHeading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.03);\n  min-height: 48px;\n}\n\n.panelFlex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.panelTitle {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: #000;\n}\n.panelDefault {\n  border-color: #ddd;\n}\n.panelDefault > .panelHeading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n/*******************/\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.textMuted {\n  composes: text;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.title {\n  color: #333;\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1200px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "WishList-root-3TwIi",
  	"container": "WishList-container-30Zra",
  	"panel": "WishList-panel-1Tu78",
  	"panelBody": "WishList-panelBody-3U90o",
  	"panelHeading": "WishList-panelHeading-8IXUh",
  	"panelFlex": "WishList-panelFlex-j3pX5",
  	"panelTitle": "WishList-panelTitle-3K846",
  	"panelDefault": "WishList-panelDefault-1xxU1",
  	"text": "WishList-text-1nU21",
  	"textMuted": "WishList-textMuted-3s38O WishList-text-1nU21",
  	"title": "WishList-title-o_01G",
  	"spacer": "WishList-spacer-1xmMU",
  	"link": "WishList-link-3htoP"
  };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });

  var _axios = __webpack_require__(57);

  var _axios2 = _interopRequireDefault(_axios);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var api = {
  	// get all user lists from DB
  	getAllListsFromDB: function getAllListsFromDB() {
  		return _axios2.default.get('/api/lists');
  	},

  	addNewListToDB: function addNewListToDB(list) {
  		return _axios2.default.post('/api/lists', {
  			list: list
  		});
  	},

  	deleteListFromDB: function deleteListFromDB(list) {
  		return (0, _axios2.default)({
  			method: 'delete',
  			url: '/api/lists',
  			params: {
  				list: list
  			}
  		});
  	},

  	// get items from selected list from DB
  	getListItemsFromDB: function getListItemsFromDB(listId) {
  		return _axios2.default.get('/api/items', {
  			params: {
  				list: listId
  			}
  		});
  	},

  	searchItemsByTitle: function searchItemsByTitle(searchQuery) {
  		return _axios2.default.get('/api/items', {
  			params: {
  				searchQuery: searchQuery
  			}
  		});
  	},

  	deleteListItemFromDB: function deleteListItemFromDB(itemId) {
  		return (0, _axios2.default)({
  			method: 'delete',
  			url: '/api/items',
  			params: {
  				item: itemId
  			}
  		});
  	},

  	moveListItemFromDB: function moveListItemFromDB(itemId, listId) {
  		return (0, _axios2.default)({
  			method: 'put',
  			url: '/api/items',
  			params: {
  				item: itemId,
  				list: listId
  			}
  		});
  	}

  };

    exports.default = api;

/***/ },
/* 57 */
/***/ function(module, exports) {

  module.exports = require("axios");

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\WishList\\Dialog\\DialogPopup.js'; /**
                                                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                   *
                                                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                   *
                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                                                   */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Dialog = __webpack_require__(59);

  var _Dialog2 = _interopRequireDefault(_Dialog);

  var _reactAddonsUpdate = __webpack_require__(60);

  var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

  var _FlatButton = __webpack_require__(45);

  var _FlatButton2 = _interopRequireDefault(_FlatButton);

  var _TextField = __webpack_require__(61);

  var _TextField2 = _interopRequireDefault(_TextField);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var DialogPopup = function (_React$Component) {
    (0, _inherits3.default)(DialogPopup, _React$Component);

    function DialogPopup(props) {
      (0, _classCallCheck3.default)(this, DialogPopup);

      var _this = (0, _possibleConstructorReturn3.default)(this, (DialogPopup.__proto__ || (0, _getPrototypeOf2.default)(DialogPopup)).call(this, props));

      _this.handleChange = function (event) {
        var list,
            fType = event.target.name;
        switch (fType) {
          case 'l_id':
            list = (0, _reactAddonsUpdate2.default)(_this.state.list, {
              id: { $set: event.target.value } });
            break;
          case 'l_name':
            list = (0, _reactAddonsUpdate2.default)(_this.state.list, {
              name: { $set: event.target.value } });
            break;
            break;
          case 'l_descr':
            list = (0, _reactAddonsUpdate2.default)(_this.state.list, {
              descr: { $set: event.target.value } });
            break;
          default:
            break;
        }
        _this.setState({ list: list });
      };

      _this.shouldComponentUpdate = function (nextProps, nextState) {
        return _this.state.list !== nextState.list || _this.props.open !== nextProps.open;
      };

      _this.state = {
        list: {
          id: '',
          name: '',
          descr: ''
        }
      };
      return _this;
    }

    (0, _createClass3.default)(DialogPopup, [{
      key: 'render',
      value: function render() {
        var actions = [_react2.default.createElement(_FlatButton2.default, {
          label: 'Cancel',
          primary: true,
          onTouchTap: this.props.handleClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), _react2.default.createElement(_FlatButton2.default, {
          label: 'Submit',
          primary: true,
          onTouchTap: this.props.handleSubmit.bind(this, this.state.list),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        })];
        return _react2.default.createElement(
          _Dialog2.default,
          {
            title: 'Creacte new Wish List',
            actions: actions,
            modal: false,
            open: this.props.open,
            onRequestClose: this.props.handleClose,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { style: { display: "flex", justifyContent: "space-around", width: "100%" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            },
            _react2.default.createElement(_TextField2.default, { style: { width: "15%" }, name: 'l_id', hintText: 'list id', floatingLabelText: 'Input list ID', onChange: this.handleChange.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            }),
            _react2.default.createElement(_TextField2.default, { name: 'l_name', hintText: 'list name', floatingLabelText: 'Input list name', onChange: this.handleChange.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              },
              __self: this
            }),
            _react2.default.createElement(_TextField2.default, { name: 'l_descr', hintText: 'list description', floatingLabelText: 'Input short description', onChange: this.handleChange.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            })
          )
        );
      }
    }]);
    return DialogPopup;
  }(_react2.default.Component);

    exports.default = DialogPopup;

/***/ },
/* 59 */
/***/ function(module, exports) {

  module.exports = require("material-ui/Dialog");

/***/ },
/* 60 */
/***/ function(module, exports) {

  module.exports = require("react-addons-update");

/***/ },
/* 61 */
/***/ function(module, exports) {

  module.exports = require("material-ui/TextField");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends2 = __webpack_require__(3);

  var _extends3 = _interopRequireDefault(_extends2);

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\WishList\\ItemsList\\ItemsList.js'; /**
                                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                    *
                                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                    *
                                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                                    */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _FloatingActionButton = __webpack_require__(44);

  var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

  var _search = __webpack_require__(63);

  var _search2 = _interopRequireDefault(_search);

  var _TextField = __webpack_require__(61);

  var _TextField2 = _interopRequireDefault(_TextField);

  var _withStyles = __webpack_require__(29);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _api = __webpack_require__(56);

  var _api2 = _interopRequireDefault(_api);

  var _DialogPopup = __webpack_require__(58);

  var _DialogPopup2 = _interopRequireDefault(_DialogPopup);

  var _ItemsList = __webpack_require__(64);

  var _ItemsList2 = _interopRequireDefault(_ItemsList);

  var _List = __webpack_require__(66);

  var _colors = __webpack_require__(67);

  var _IconButton = __webpack_require__(46);

  var _IconButton2 = _interopRequireDefault(_IconButton);

  var _moreVert = __webpack_require__(47);

  var _moreVert2 = _interopRequireDefault(_moreVert);

  var _IconMenu = __webpack_require__(48);

  var _IconMenu2 = _interopRequireDefault(_IconMenu);

  var _MenuItem = __webpack_require__(49);

  var _MenuItem2 = _interopRequireDefault(_MenuItem);

  var _navigationArrowDropRight = __webpack_require__(51);

  var _navigationArrowDropRight2 = _interopRequireDefault(_navigationArrowDropRight);

  var _Menu = __webpack_require__(52);

  var _Menu2 = _interopRequireDefault(_Menu);

  var _SearchField = __webpack_require__(68);

  var _SearchField2 = _interopRequireDefault(_SearchField);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ItemsList = function (_React$Component) {
    (0, _inherits3.default)(ItemsList, _React$Component);

    function ItemsList(props) {
      (0, _classCallCheck3.default)(this, ItemsList);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ItemsList.__proto__ || (0, _getPrototypeOf2.default)(ItemsList)).call(this, props));

      _this.handleItemMove = function (listId) {
        _api2.default.moveListItemFromDB(_this.state.selItem, listId).then(function (err) {
          console.log(err);
        }).then(function () {
          return _api2.default.getListItemsFromDB(_this.props.listSelected);
        }).then(function (response) {
          return _this.setState((0, _extends3.default)({}, _this.state, { w_items: response.data, selItem: '' }));
        });
      };

      _this.state = {
        selItem: '',
        w_items: [],
        searchQuery: ''
      };
      return _this;
    }

    (0, _createClass3.default)(ItemsList, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        _api2.default.getListItemsFromDB(nextProps.listSelected).then(function (response) {
          return _this2.setState((0, _extends3.default)({}, _this2.state, { w_items: response.data, selItem: '', searchQuery: '' }));
        });
      }
    }, {
      key: 'handleToggleSearch',
      value: function handleToggleSearch(searchQuery) {
        var _this3 = this;

        if (searchQuery != '') {
          this.setState((0, _extends3.default)({}, this.state, { searchQuery: searchQuery }));
          _api2.default.searchItemsByTitle(searchQuery).then(function (response) {
            return _this3.setState((0, _extends3.default)({}, _this3.state, { w_items: response.data }));
          });
        }
      }
    }, {
      key: 'handleItemSelect',
      value: function handleItemSelect(id) {
        this.setState((0, _extends3.default)({}, this.state, { selItem: id }));
      }
    }, {
      key: 'handleItemDelete',
      value: function handleItemDelete() {
        var _this4 = this;

        var itemId = this.state.selItem;
        _api2.default.deleteListItemFromDB(itemId).then(function (err) {
          console.log(err);
        }).then(function () {
          return _api2.default.getListItemsFromDB(_this4.props.listSelected);
        }).then(function (response) {
          return _this4.setState((0, _extends3.default)({}, _this4.state, { w_items: response.data, selItem: '' }));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this5 = this;

        var iconButtonElement = _react2.default.createElement(
          _IconButton2.default,
          { touch: true, tooltip: 'Actions', tooltipPosition: 'bottom-left', __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          },
          _react2.default.createElement(_moreVert2.default, { color: _colors.grey400, __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          })
        );

        var rightIconMenu = _react2.default.createElement(
          _IconMenu2.default,
          { anchorOrigin: { vertical: 'top', horizontal: 'right' }, iconButtonElement: iconButtonElement, __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          },
          _react2.default.createElement(
            _MenuItem2.default,
            {
              rightIcon: _react2.default.createElement(_navigationArrowDropRight2.default, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                },
                __self: this
              }),
              menuItems: this.props.lists.map(function (item) {
                return _react2.default.createElement(_MenuItem2.default, { key: item.id, primaryText: item.name, onTouchTap: _this5.handleItemMove.bind(_this5, item.id), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  },
                  __self: _this5
                });
              }), __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              },
              __self: this
            },
            'Move to another list'
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { onTouchTap: this.handleItemDelete.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            },
            'Delete item'
          )
        );

        var WishlistItems = this.state.w_items.map(function (item) {
          return _react2.default.createElement(
            _List.ListItem,
            {
              key: item.id,
              style: { minHeight: "180px", cursor: 'initial' },
              onTouchTap: _this5.handleItemSelect.bind(_this5, item.id),
              rightIcon: rightIconMenu,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: _this5
            },
            _react2.default.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                },
                __self: _this5
              },
              _react2.default.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  },
                  __self: _this5
                },
                _react2.default.createElement('img', { src: item.img, style: { float: "left", marginRight: "25px", width: '130px', height: '130px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  },
                  __self: _this5
                })
              ),
              _react2.default.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  },
                  __self: _this5
                },
                _react2.default.createElement(
                  'h3',
                  { style: { margin: '5px 0px', wordWrap: 'break-word' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 109
                    },
                    __self: _this5
                  },
                  item.title
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: 'small', color: 'rgb(123, 123, 123)', margin: '2px 0px' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 110
                    },
                    __self: _this5
                  },
                  'Added from: ',
                  _react2.default.createElement(
                    'a',
                    { href: '`${item.url}`', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110
                      },
                      __self: _this5
                    },
                    item.url
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { style: { fontSize: 'small', color: '#b12704' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    },
                    __self: _this5
                  },
                  '$' + item.price
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: 'small', color: 'rgb(123, 123, 123)', margin: '10px 0px 5px 0px' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112
                    },
                    __self: _this5
                  },
                  'Description:'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { fontSize: '14px', margin: '5px 0px', wordWrap: 'break-word' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 113
                    },
                    __self: _this5
                  },
                  item.description
                )
              )
            )
          );
        });

        var panTitle = void 0; //= selList.length > 0 ? selList[0].name : '';
        if (this.state.searchQuery !== '') {
          panTitle = 'Results of looking for: "' + this.state.searchQuery + '". Total records: ' + this.state.w_items.length;
        } else {
          panTitle = this.props.listSelected != '' ? this.props.lists.filter(function (item) {
            return item.id == _this5.props.listSelected;
          })[0].name : '';
        }

        return _react2.default.createElement(
          'div',
          { className: _ItemsList2.default.panel, style: { minWidth: '450px', width: '77%', display: this.props.listSelected.length == 0 ? 'none' : 'block' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _ItemsList2.default.panelHeading + ' ' + _ItemsList2.default.panelDefault + ' ' + _ItemsList2.default.panelFlex, __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            },
            _react2.default.createElement(
              'h2',
              { className: _ItemsList2.default.panelTitle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 130
                },
                __self: this
              },
              panTitle
            ),
            _react2.default.createElement(_SearchField2.default, { handleToggleSearch: this.handleToggleSearch.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _ItemsList2.default.panelBody, __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            },
            _react2.default.createElement(_List.List, { className: _ItemsList2.default.listbox, children: WishlistItems, __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            })
          )
        );
      }
    }]);
    return ItemsList;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_ItemsList2.default)(ItemsList);

/***/ },
/* 63 */
/***/ function(module, exports) {

  module.exports = require("material-ui/svg-icons/action/search");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(65);
      var insertCss = __webpack_require__(33);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../../node_modules/postcss-loader/index.js?pack=default!./ItemsList.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../../node_modules/postcss-loader/index.js?pack=default!./ItemsList.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\r\n:root {\r\n\r\n  /*\n   * Typography\n   * ======================================================================== */\r\n\r\n  /*\n   * Layout\n   * ======================================================================== */\r\n\r\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\r\n\r\n  /* Extra small screen / phone */\r\n\r\n  /* Small screen / tablet */\r\n\r\n  /* Medium screen / desktop */\r\n\r\n  /* Large screen / wide desktop */\r\n}\r\n\r\n/*bootstrap classes*/\r\n.ItemsList-panel-NLP4U {\r\n  /*width: 100%;*/\r\n  margin-bottom: 20px;\r\n  background-color: #fff;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\r\n}\r\n\r\n.ItemsList-panelBody-1yM8H {\r\n  padding: 15px;\r\n}\r\n\r\n.ItemsList-panelHeading-3QHEd {\r\n  padding: 10px 15px;\r\n  border-bottom: 1px solid transparent;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  min-height: 48px;\r\n}\r\n\r\n.ItemsList-panelFlex-25mCN {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.ItemsList-panelTitle-2NEgb {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  color: #000;\r\n}\r\n.ItemsList-panelDefault-3zEzZ {\r\n  border-color: #ddd;\r\n}\r\n.ItemsList-panelDefault-3zEzZ > .ItemsList-panelHeading-3QHEd {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n/*******************/\r\n", "", {"version":3,"sources":["/./components/variables.css","/./components/WishList/ItemsList/ItemsList.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;AAEH;;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E;;EAErD,gCAAgC;;EAChC,2BAA2B;;EAC3B,6BAA6B;;EAC7B,iCAAiC;CAC3D;;AC5BD,qBAAqB;AACrB;EACE,gBAAgB;EAChB,oBAAoB;EACpB,uBAAuB;EACvB,8BAA8B;EAC9B,mBAAmB;EAEX,yCAAyC;CAClD;;AAED;EACE,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,qCAAqC;EACrC,4BAA4B;EAC5B,6BAA6B;EAC7B,sCAAsC;EACtC,iBAAiB;CAClB;;AAED;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,0BAA+B;EAA/B,uCAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;CAChC;;AAED;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CACpB;AACD,qBAAqB","file":"ItemsList.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1200px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../variables.css';\r\n\r\n/*bootstrap classes*/\r\n.panel {\r\n  /*width: 100%;*/\r\n  margin-bottom: 20px;\r\n  background-color: #fff;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\r\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\r\n}\r\n\r\n.panelBody {\r\n  padding: 15px;\r\n}\r\n\r\n.panelHeading {\r\n  padding: 10px 15px;\r\n  border-bottom: 1px solid transparent;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  min-height: 48px;\r\n}\r\n\r\n.panelFlex {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.panelTitle {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  font-size: 16px;\r\n  color: #000;\r\n}\r\n.panelDefault {\r\n  border-color: #ddd;\r\n}\r\n.panelDefault > .panelHeading {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n/*******************/\r\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"panel": "ItemsList-panel-NLP4U",
  	"panelBody": "ItemsList-panelBody-1yM8H",
  	"panelHeading": "ItemsList-panelHeading-3QHEd",
  	"panelFlex": "ItemsList-panelFlex-25mCN",
  	"panelTitle": "ItemsList-panelTitle-2NEgb",
  	"panelDefault": "ItemsList-panelDefault-3zEzZ"
  };

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("material-ui/List");

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("material-ui/styles/colors");

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends2 = __webpack_require__(3);

  var _extends3 = _interopRequireDefault(_extends2);

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\WishList\\SearchField\\SearchField.js'; /**
                                                                                                                        * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                                        *
                                                                                                                        * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                                        *
                                                                                                                        * This source code is licensed under the MIT license found in the
                                                                                                                        * LICENSE.txt file in the root directory of this source tree.
                                                                                                                        */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _FloatingActionButton = __webpack_require__(44);

  var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

  var _search = __webpack_require__(63);

  var _search2 = _interopRequireDefault(_search);

  var _TextField = __webpack_require__(61);

  var _TextField2 = _interopRequireDefault(_TextField);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var SearchField = function (_React$Component) {
    (0, _inherits3.default)(SearchField, _React$Component);

    function SearchField(props) {
      (0, _classCallCheck3.default)(this, SearchField);

      var _this = (0, _possibleConstructorReturn3.default)(this, (SearchField.__proto__ || (0, _getPrototypeOf2.default)(SearchField)).call(this, props));

      _this.handleShowSearch = function (event) {
        var handleToggleSearch = _this.props.handleToggleSearch;


        if (_this.state.open) {
          handleToggleSearch(_this.state.searchQuery);
          _this.setState((0, _extends3.default)({}, _this.state, { open: false, searchQuery: '' }));
        } else {
          _this.setState((0, _extends3.default)({}, _this.state, { open: true }));
        }
      };

      _this.handleSearchChange = function (event) {
        _this.setState((0, _extends3.default)({}, _this.state, { searchQuery: event.target.value }));
      };

      _this.hendleSearchBegin = function (event) {
        var handleToggleSearch = _this.props.handleToggleSearch;

        if (event.keyCode == 13) {
          handleToggleSearch(_this.state.searchQuery);
          _this.setState((0, _extends3.default)({}, _this.state, { open: false, searchQuery: '' }));
        }
      };

      _this.state = {
        open: false,
        searchQuery: ''
      };
      return _this;
    }

    (0, _createClass3.default)(SearchField, [{
      key: 'render',
      value: function render() {
        var style = {
          marginRight: 20
        };

        return _react2.default.createElement(
          'div',
          { style: { display: "flex", alignItems: "center" }, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          },
          _react2.default.createElement(_TextField2.default, { onKeyUp: this.hendleSearchBegin.bind(this), value: this.state.searchQuery, hintText: 'search...', style: { display: this.state.open ? 'block' : 'none' }, onChange: this.handleSearchChange.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }),
          _react2.default.createElement(
            _FloatingActionButton2.default,
            { mini: true, style: style, onTouchTap: this.handleShowSearch.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            },
            _react2.default.createElement(_search2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            })
          )
        );
      }
    }]);
    return SearchField;
  }(_react2.default.Component);

    exports.default = SearchField;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\Layout\\Layout.js'; /**
                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                    *
                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                    *
                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                    */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(29);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Layout = __webpack_require__(70);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Header = __webpack_require__(72);

  var _Header2 = _interopRequireDefault(_Header);

  var _Footer = __webpack_require__(88);

  var _Footer2 = _interopRequireDefault(_Footer);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);

    function Layout() {
      (0, _classCallCheck3.default)(this, Layout);
      return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
    }

    (0, _createClass3.default)(Layout, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_Header2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }),
          this.props.children,
          _react2.default.createElement(_Footer2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          })
        );
      }
    }]);
    return Layout;
  }(_react2.default.Component);

  Layout.propTypes = {
    children: _react.PropTypes.node.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(71);
      var insertCss = __webpack_require__(33);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif;/* 1 */\n  line-height: 1.15;/* 2 */\n  -ms-text-size-adjust: 100%;/* 3 */\n  -webkit-text-size-adjust: 100%;/* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain {/* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;/* 1 */\n  height: 0;/* 1 */\n  overflow: visible;/* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;/* 1 */\n  font-size: 1em;/* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent;/* 1 */\n  -webkit-text-decoration-skip: objects;/* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;/* 1 */\n  text-decoration: underline;/* 2 */\n  text-decoration: underline dotted;/* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;/* 1 */\n  font-size: 1em;/* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;/* 1 */\n  font-size: 100%;/* 1 */\n  line-height: 1.15;/* 1 */\n  margin: 0;/* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {/* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {/* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;/* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;/* 1 */\n  color: inherit;/* 2 */\n  display: table;/* 1 */\n  max-width: 100%;/* 1 */\n  padding: 0;/* 3 */\n  white-space: normal;/* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block;/* 1 */\n  vertical-align: baseline;/* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;/* 1 */\n  padding: 0;/* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;/* 1 */\n  outline-offset: -2px;/* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;/* 1 */\n  font: inherit;/* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */  \n  background-color: rgba(128, 128, 128, 0.12);\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/./components/Layout/Layout.css","/../node_modules/normalize.css/normalize.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH,4EAA4E;;AAE5E;;;;;GAKG;;AAEH;gFACgF;;AAEhF;EACE,wBAAwB,OAAQ;EAChC,kBAAkB,OAAQ;EAC1B,2BAA2B,OAAQ;EACnC,+BAA+B,OAAQ;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;MAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB,OAAQ;EAChC,UAAU,OAAQ;EAClB,kBAAkB,OAAQ;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,OAAQ;EAC1C,eAAe,OAAQ;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,OAAQ;EACtC,sCAAsC,OAAQ;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,OAAQ;EAC5B,2BAA2B,OAAQ;EACnC,kCAAkC,OAAQ;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,OAAQ;EAC1C,eAAe,OAAQ;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,OAAQ;EAChC,gBAAgB,OAAQ;EACxB,kBAAkB,OAAQ;EAC1B,UAAU,OAAQ;CACnB;;AAED;;;GAGG;;AAEH;OACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;QACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,OAAQ;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB,OAAQ;EAC/B,eAAe,OAAQ;EACvB,eAAe,OAAQ;EACvB,gBAAgB,OAAQ;EACxB,WAAW,OAAQ;EACnB,oBAAoB,OAAQ;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,OAAQ;EAC9B,yBAAyB,OAAQ;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB,OAAQ;EAC/B,WAAW,OAAQ;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,OAAQ;EACtC,qBAAqB,OAAQ;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,OAAQ;EACnC,cAAc,OAAQ;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf;;ADjcD,yEAAyE;;AEXzE;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;AFfD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;EAC/B,4CAA4C;CAC7C;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */  \n  background-color: rgba(128, 128, 128, 0.12);\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n","/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1200px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\Header\\Header.js'; /**
                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                    *
                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                    *
                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                    */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(29);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Header = __webpack_require__(73);

  var _Header2 = _interopRequireDefault(_Header);

  var _Link = __webpack_require__(75);

  var _Link2 = _interopRequireDefault(_Link);

  var _Navigation = __webpack_require__(79);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _logoSmall = __webpack_require__(83);

  var _logoSmall2 = _interopRequireDefault(_logoSmall);

  var _logoSmall2x = __webpack_require__(84);

  var _logoSmall2x2 = _interopRequireDefault(_logoSmall2x);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
      (0, _classCallCheck3.default)(this, Header);
      return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Header2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Header2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(_Navigation2.default, { className: _Header2.default.nav, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            }),
            _react2.default.createElement(
              _Link2.default,
              { className: _Header2.default.brand, to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              _react2.default.createElement('img', { src: _logoSmall2.default, srcSet: _logoSmall2x2.default + ' 2x', width: '38', height: '38', alt: 'React', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              }),
              _react2.default.createElement(
                'span',
                { className: _Header2.default.brandTxt, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                'Your Wishes'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Header2.default.banner, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                },
                __self: this
              },
              _react2.default.createElement(
                'h1',
                { className: _Header2.default.bannerTitle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: this
                },
                'Simple WishList Application'
              ),
              _react2.default.createElement(
                'p',
                { className: _Header2.default.bannerDesc, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  },
                  __self: this
                },
                'Add anything you want from anywhere'
              )
            )
          )
        );
      }
    }]);
    return Header;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Header2.default)(Header);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(74);
      var insertCss = __webpack_require__(33);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Header.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Header.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Header-root-AA5IL {\n  background: #373277;\n  color: #fff;\n}\n\n.Header-container-2ArDX {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1200px;\n}\n\n.Header-brand-w2lzG {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brandTxt-Qj7O1 {\n  margin-left: 10px;\n}\n\n.Header-nav-2n3qz {\n  float: right;\n  margin-top: 6px;\n}\n\n.Header-banner-2t0Sc {\n  text-align: center;\n}\n\n.Header-bannerTitle-3HrPS {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc-32d5W {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/./components/Header/Header.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADfD;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAoC;CACrC;;AAED;EACE,0BAAiD;EACjD,sBAAsB;EACtB,kBAAkB,CAAC,WAAW;CAC/B;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;CACX","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n:root {\n  --brand-color: #61dafb;\n}\n\n.root {\n  background: #373277;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: var(--max-content-width);\n}\n\n.brand {\n  color: color(var(--brand-color) lightness(+10%));\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.brandTxt {\n  margin-left: 10px;\n}\n\n.nav {\n  float: right;\n  margin-top: 6px;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.bannerDesc {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1200px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Header-root-AA5IL",
  	"container": "Header-container-2ArDX",
  	"brand": "Header-brand-w2lzG",
  	"brandTxt": "Header-brandTxt-Qj7O1",
  	"nav": "Header-nav-2n3qz",
  	"banner": "Header-banner-2t0Sc",
  	"bannerTitle": "Header-bannerTitle-3HrPS",
  	"bannerDesc": "Header-bannerDesc-32d5W"
  };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends2 = __webpack_require__(3);

  var _extends3 = _interopRequireDefault(_extends2);

  var _objectWithoutProperties2 = __webpack_require__(76);

  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\Link\\Link.js'; /**
                                                                                                * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                *
                                                                                                * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                *
                                                                                                * This source code is licensed under the MIT license found in the
                                                                                                * LICENSE.txt file in the root directory of this source tree.
                                                                                                */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _history = __webpack_require__(77);

  var _history2 = _interopRequireDefault(_history);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = function (_React$Component) {
    (0, _inherits3.default)(Link, _React$Component);

    function Link() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Link);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (event.defaultPrevented === true) {
          return;
        }

        event.preventDefault();
        _history2.default.push(_this.props.to);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            children = _props.children,
            props = (0, _objectWithoutProperties3.default)(_props, ['to', 'children']);

        return _react2.default.createElement(
          'a',
          (0, _extends3.default)({ href: to }, props, { onClick: this.handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }),
          children
        );
      }
    }]);
    return Link;
  }(_react2.default.Component);

  Link.propTypes = {
    to: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  };
    exports.default = Link;

/***/ },
/* 76 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createBrowserHistory = __webpack_require__(78);

  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  exports.default = (false) && (0, _createBrowserHistory2.default)(); /**
                                                                                   * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                   *
                                                                                   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                   *
                                                                                   * This source code is licensed under the MIT license found in the
                                                                                   * LICENSE.txt file in the root directory of this source tree.
                                                                                   */

/***/ },
/* 78 */
/***/ function(module, exports) {

  module.exports = require("history/createBrowserHistory");

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\Navigation\\Navigation.js'; /**
                                                                                                            * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                            *
                                                                                                            * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                            *
                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                            * LICENSE.txt file in the root directory of this source tree.
                                                                                                            */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _classnames = __webpack_require__(80);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _withStyles = __webpack_require__(29);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Navigation = __webpack_require__(81);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Link = __webpack_require__(75);

  var _Link2 = _interopRequireDefault(_Link);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Navigation = function (_React$Component) {
    (0, _inherits3.default)(Navigation, _React$Component);

    function Navigation() {
      (0, _classCallCheck3.default)(this, Navigation);
      return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).apply(this, arguments));
    }

    (0, _createClass3.default)(Navigation, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(_Navigation2.default.root, this.props.className), role: 'navigation', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(
            _Link2.default,
            { className: _Navigation2.default.link, to: '/about', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'About'
          )
        );
      }
    }]);
    return Navigation;
  }(_react2.default.Component);

  Navigation.propTypes = {
    className: _react.PropTypes.string
  };
    exports.default = (0, _withStyles2.default)(_Navigation2.default)(Navigation);

/***/ },
/* 80 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(82);
      var insertCss = __webpack_require__(33);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Navigation.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-1XYBX {\n  margin: 0;\n}\n\n.Navigation-link-3ALU_ {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-3ALU_,\n.Navigation-link-3ALU_:active,\n.Navigation-link-3ALU_:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-3ALU_:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-highlight-2nHI4 {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.Navigation-highlight-2nHI4:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.Navigation-spacer-3NEA7 {\n  color: rgba(255, 255, 255, 0.3);\n}\n", "", {"version":3,"sources":["/./components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,UAAU;CACX;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  margin: 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Navigation-root-1XYBX",
  	"link": "Navigation-link-3ALU_",
  	"highlight": "Navigation-highlight-2nHI4",
  	"spacer": "Navigation-spacer-3NEA7"
  };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "components/Header/logo-small.png?2f751285";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "components/Header/logo-small@2x.png?8844262b";

/***/ },
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\components\\Footer\\Footer.js'; /**
                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                    *
                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                    *
                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                    */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(29);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Footer = __webpack_require__(89);

  var _Footer2 = _interopRequireDefault(_Footer);

  var _Link = __webpack_require__(75);

  var _Link2 = _interopRequireDefault(_Link);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Footer = function (_React$Component) {
    (0, _inherits3.default)(Footer, _React$Component);

    function Footer() {
      (0, _classCallCheck3.default)(this, Footer);
      return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
    }

    (0, _createClass3.default)(Footer, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Footer2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Footer2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.text, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              '\xA9 Your Wishes'
            ),
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.spacer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                },
                __self: this
              },
              '\xB7'
            ),
            _react2.default.createElement(
              'span',
              { className: _Footer2.default.text, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              },
              '2017'
            )
          )
        );
      }
    }]);
    return Footer;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(90);
      var insertCss = __webpack_require__(33);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.Footer-root-3mW2N {\n  background: #333;\n    color: #fff;\n    bottom: 0;\n    position: relative;;\n    width: 100%;\n}\n\n.Footer-container-3k8Ku {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1200px;\n  text-align: center;\n}\n\n.Footer-text-jehzH {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-textMuted-1yAyF {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-spacer-2eiJ2 {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-jehzH,\n.Footer-link-2Cgkt {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-2Cgkt,\n.Footer-link-2Cgkt:active,\n.Footer-link-2Cgkt:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-2Cgkt:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/./components/Footer/Footer.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,iBAAiB;IACf,YAAY;IACZ,UAAU;IACV,mBAAmB;IACnB,YAAY;CACf;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EAEE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  background: #333;\n    color: #fff;\n    bottom: 0;\n    position: relative;;\n    width: 100%;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.textMuted {\n  composes: text;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1200px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "Footer-root-3mW2N",
  	"container": "Footer-container-3k8Ku",
  	"text": "Footer-text-jehzH",
  	"textMuted": "Footer-textMuted-1yAyF Footer-text-jehzH",
  	"spacer": "Footer-spacer-2eiJ2",
  	"link": "Footer-link-2Cgkt"
  };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\routes\\about\\index.js'; /**
                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                              *
                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                              *
                                                                                              * This source code is licensed under the MIT license found in the
                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                              */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(69);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _About = __webpack_require__(92);

  var _About2 = _interopRequireDefault(_About);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Information';

  exports.default = {

    path: '/about',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_About2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        ),
        status: 200
      };
    }
    };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\routes\\about\\About.js'; /**
                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                              *
                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                              *
                                                                                              * This source code is licensed under the MIT license found in the
                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                              */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(29);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _About = __webpack_require__(93);

  var _About2 = _interopRequireDefault(_About);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var About = function (_React$Component) {
    (0, _inherits3.default)(About, _React$Component);

    function About() {
      (0, _classCallCheck3.default)(this, About);
      return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
    }

    (0, _createClass3.default)(About, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _About2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _About2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              'Link for Bookmark:'
            ),
            _react2.default.createElement(
              'a',
              { href: "javascript:(function(){var w=window,l=w.location,d=w.document,s=d.createElement('script'),e=encodeURIComponent,o='object',n='bookmarkletAPI',u='http://localhost:3000/bookmarklet',r='readyState',T=setTimeout,a='setAttribute',g=function(){console.log('g');d[r] && d[r] != 'complete' ? T(g,200) :!w[n] ? (s[a]('charset','UTF-8'),s[a]('src',u+'.js'),d.body.appendChild(s), f() ) : f() }; f=function(){ !w[n] ? T(f,200) :w[n].createPopup()}; w[n] ? w[n].createPopup():g()})()", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              ' Add To My Wish List '
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              },
              ' \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F '
            ),
            _react2.default.createElement(
              'ul',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              },
              _react2.default.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  },
                  __self: this
                },
                '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043E\u043A\u0432 \u043F\u043E\u0436\u0435\u043B\u0430\u0439\u043D\u0438\u0439 '
              ),
              _react2.default.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: this
                },
                '\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0444\u043E\u0440\u043C\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E \u043A\u043B\u0438\u043A\u0443 \u0431\u0443\u043A\u043C\u0430\u0440\u043A\u043B\u0435\u0442\u0430 '
              ),
              _react2.default.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  },
                  __self: this
                },
                '\u041F\u043E\u0438\u0441\u043A \u0432\u0441\u0435\u0445 \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432 \u0444\u043E\u0440\u043C\u0435 \u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0432 \u0431\u0430\u0437\u0443 \u0434\u0430\u043D\u043D\u044B\u0445 '
              ),
              _react2.default.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: this
                },
                '\u0412\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F \u043F\u043E\u043B\u0435\u0439 \u0432\u0432\u043E\u0434\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 '
              ),
              _react2.default.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: this
                },
                '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u0439 \u0438\u0437 \u0444\u043E\u0440\u043C\u044B \u0431\u0443\u043A\u043C\u0430\u0440\u043A\u043B\u0435\u0442\u0430'
              ),
              _react2.default.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                '\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0435\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u0441\u043F\u0438\u0441\u043A\u0430\u043C\u0438'
              ),
              _react2.default.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  },
                  __self: this
                },
                '\u041F\u043E\u0438\u0441\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0432 \u0441\u043F\u0438\u0441\u043A\u0430\u0445'
              ),
              _react2.default.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: this
                },
                '\u0410\u043B\u0435\u0440\u0442 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0436\u0435 \u0438\u043C\u0435\u044E\u0449\u0443\u044E\u0441\u044F \u0432 \u0431\u0430\u0437\u0435 \u0437\u0430\u043F\u0438\u0441\u044C'
              ),
              _react2.default.createElement(
                'li',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  },
                  __self: this
                },
                '\u0410\u043B\u0435\u0440\u0442 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043B\u0438\u0441\u0442 \u0436\u0435\u043B\u0430\u043D\u0438\u0439'
              )
            )
          )
        );
      }
    }]);
    return About;
  }(_react2.default.Component);

  About.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_About2.default)(About);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(94);
      var insertCss = __webpack_require__(33);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./About.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./About.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.About-root-BTfTC {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.About-container-1h9dC {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1200px;\n  min-height: 550px;\n}\n", "", {"version":3,"sources":["/./routes/about/About.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;EACpC,kBAAkB;CACnB","file":"About.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n  min-height: 550px;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1200px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "About-root-BTfTC",
  	"container": "About-container-1h9dC"
  };

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\routes\\error\\index.js'; /**
                                                                                              * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                              *
                                                                                              * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                              *
                                                                                              * This source code is licensed under the MIT license found in the
                                                                                              * LICENSE.txt file in the root directory of this source tree.
                                                                                              */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _ErrorPage = __webpack_require__(28);

  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/error',

    action: function action(_ref) {
      var error = _ref.error;

      return {
        title: error.name,
        description: error.message,
        component: _react2.default.createElement(_ErrorPage2.default, { error: error, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }),
        status: error.status || 500
      };
    }
    };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\routes\\notFound\\index.js'; /**
                                                                                                 * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                 *
                                                                                                 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                 *
                                                                                                 * This source code is licensed under the MIT license found in the
                                                                                                 * LICENSE.txt file in the root directory of this source tree.
                                                                                                 */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(69);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _NotFound = __webpack_require__(97);

  var _NotFound2 = _interopRequireDefault(_NotFound);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Page Not Found';

  exports.default = {

    path: '*',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          _react2.default.createElement(_NotFound2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })
        ),
        status: 404
      };
    }
    };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(20);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(21);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(22);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(23);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(24);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\User\\Documents\\GitHub\\w1\\src\\routes\\notFound\\NotFound.js'; /**
                                                                                                    * React Starter Kit (https://www.reactstarterkit.com/)
                                                                                                    *
                                                                                                    * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                                                                    *
                                                                                                    * This source code is licensed under the MIT license found in the
                                                                                                    * LICENSE.txt file in the root directory of this source tree.
                                                                                                    */

  var _react = __webpack_require__(13);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(29);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _NotFound = __webpack_require__(98);

  var _NotFound2 = _interopRequireDefault(_NotFound);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NotFound = function (_React$Component) {
    (0, _inherits3.default)(NotFound, _React$Component);

    function NotFound() {
      (0, _classCallCheck3.default)(this, NotFound);
      return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).apply(this, arguments));
    }

    (0, _createClass3.default)(NotFound, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _NotFound2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _NotFound2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              },
              'Sorry, the page you were trying to view does not exist.'
            )
          )
        );
      }
    }]);
    return NotFound;
  }(_react2.default.Component);

  NotFound.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(99);
      var insertCss = __webpack_require__(33);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!./../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(32)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {/*\n   * Typography\n   * ======================================================================== *//*\n   * Layout\n   * ======================================================================== *//*\n   * Media queries breakpoints\n   * ======================================================================== *//* Extra small screen / phone *//* Small screen / tablet *//* Medium screen / desktop *//* Large screen / wide desktop */\n}\n\n.NotFound-root-3G9OW {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-LOS0u {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1200px;\n}\n", "", {"version":3,"sources":["/./routes/notFound/NotFound.css","/./components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH,OACE;;gFAE8E;;gFAMA;;gFAMA,gCAErB,2BACL,6BACE,iCACI;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1200px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":"webpack://"}]);

  // exports
  exports.locals = {
  	"root": "NotFound-root-3G9OW",
  	"container": "NotFound-container-LOS0u"
  };

/***/ },
/* 100 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map