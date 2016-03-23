'use strict';

var Table = require('../../db/knex'),
    Users = Table('users');

var crypto = require('../../utilities/crypto');
   var jwt = require('jsonwebtoken');
   
// POST ‘/new’ - creates individual
function postNewUserHandler(req, res) {
  var user = {};

  user.first_name = req.body.firstName;
  user.last_name  = req.body.lastName;
  user.email      = req.body.email;
  user.password   = req.body.password;
  user.bio        = req.body.bio;
  user.location   = req.body.area;
  user.img        = req.body.img;

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
          var myToken = jwt.sign({"id": id[0], "user": req.body.email}, process.env.JWT_SECRET);
          res.json({id: id[0], location: req.body.area, token: myToken});
        })
        .catch(function(err) {
          res.send('Error handling your submission' + err);
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
