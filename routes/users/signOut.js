'use strict';

function signOutUserHandler(req, res) {
  delete req.session.user;
  res.send('this is the sign out log');
}

module.exports = signOutUserHandler;