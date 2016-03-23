'use strict';

var Table = require('../../db/knex.js'),
    Users = Table('users');

var crypto = require('../../utilities/crypto');

    require('dotenv').load();

var jwt = require('jsonwebtoken');

// PUT ‘/:id’ - updates users profile
function putProfile(req, res){
  var decoded = jwt.decode(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET);
  var paramsId = parseFloat(req.params.id);

  if(decoded.id === paramsId) {
    var user = {};

    user.id         = Number(req.params.id);
    user.first_name = req.body.firstName;
    user.last_name  = req.body.lastName;
    user.email      = req.body.email;
    user.bio        = req.body.bio;
    user.location   = req.body.area;
    user.zip        = req.body.zip;
    user.lat        = req.body.lat;
    user.lng        = req.body.lng;
    user.img        = req.body.img;
    //KNEX - if key has a value of undefined it should be ignored 
    user.password   = req.body.password;
    
    crypto.hashPassword(user, function() {
      Users()
      .where({
        id: user.id
      })
      .update(user)
      .then(function() {
        res.json({message: 'Updated user: ' + user.id});
      })
      .catch(function(err) {
        res.json('Error Edit in user data ' + err);
      });
    });
  } else {
    res.json('Error Editing Profile');
  }

}

module.exports = putProfile;