'use strict';

var Table = require('../../db/knex.js'),
    Users = Table('users');

var crypto = require('../../utilities/crypto');

// PUT ‘/:id’ - updates individual resource
function putOneUserHandler(req, res){
  var user = {};

  user.id         = Number(req.params.id);
  user.first_name = req.body.firstName;
  user.last_name  = req.body.lastName;
  user.email      = req.body.email;
  user.password   = req.body.password;

  crypto.hashPassword(user, function() {
    Users()
    .where({
      id: user.id
    })
    .update(user)
    .then(function() {
      res.json({message: 'Updated user: ' + user.id});
    });
  });

}

module.exports = putOneUserHandler;