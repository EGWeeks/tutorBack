'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressJWT = require('express-jwt');
var cors = require('cors');

var users = require('./routes/users'),
  profile = require('./routes/profile'),
  posts   = require('./routes/posts'),
  feed    = require('./routes/feed');

var app = express();

require('dotenv').load();
 
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(expressJWT({secret: process.env.JWT_SECRET})
   .unless({path: ['/', '/users/new', '/users/signin']}));

app.use('/users', users);
app.use('/profile', profile);
app.use('/posts', posts);
app.use('/feed', feed);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
