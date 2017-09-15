var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose')

require('dotenv').load();
require('./configs/db.config');
var corsConfig = require('./configs/cors.config');

var cardRoutes = require('./routes/cards.routes');
var listRoutes = require('./routes/lists.routes');

var app = express();

app.use(cors(corsConfig))

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// TODO: use .env config
const apiPrefix = '/api';
app.use(`${apiPrefix}/cards`, cardRoutes);
app.use(`${apiPrefix}/lists`, listRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (err instanceof mongoose.Error.ValidationError) {
    err.status = 400;
  }
  res.status(err.status || 500);
  res.json({ message: err.message });
});

module.exports = app;
