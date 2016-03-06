'use strict';

var Table = require('../../db/knex'),
  Users = Table('users');

var crypto = require('../../utilities/crypto');

// POST ‘/new’ - creates individual
function postNewUserHandler(req, res) {
  var user = {};

  user.first_name = req.body.firstName;
  user.last_name = req.body.lastName;
  user.email = req.body.email;
  user.password = req.body.password;

  crypto.hashPassword(user, function() {
    Users()
      .where({
        email: user.email
      })
      .first()
      .then(function(userExists){
        if(!userExists) {
          Users()
            .returning()
            .insert(user, 'id')
            .then(function(id) {
              // req.session.user = user;
              res.json({message: 'Successfully created user: ' + user.first_name + ' with id number: ' + id});
            })
            .catch(function(err) {
              res.send('Error handling your submission');
            });
        } else {
          res.status(409);
          res.send('/login.html?error=You have already signed up. Please login.');
        }
      })
      .catch(function(err) {
        res.send(err);
      });
  });
}

module.exports = postNewUserHandler;
