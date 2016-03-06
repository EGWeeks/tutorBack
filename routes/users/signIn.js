'use strict';

var Table = require('../../db/knex'),
    Users = Table('users');
    require('dotenv').load();
// var jwt = require('jsonwebtoken');

var crypto = require('../../utilities/crypto');

function signInUserHandler(req, res) {
  // TODO Check That Email Is Valid

  Users()
  .where('email', req.body.email)
  .first()
  .then(function(user) {
    crypto.comparePassword(req.body.password, user, function(isEqual) {
      if(isEqual) {
        delete user.password;
        // var myToken = jwt.sign({"user": req.body.email}, process.env.JWT_SECRET);
        // console.log(typeof myToken);
        res.json("signed in!!");
      } else {
        res.status(401).send('Invalid username or password');
      }
    });
  })
  .catch(function(err) {
    res.send(err);
  });
}

module.exports = signInUserHandler;
