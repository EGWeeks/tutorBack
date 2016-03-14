'use strict';

var Table = require('../../db/knex.js'),
    Users = Table('users');

    require('dotenv').load();

var jwt = require('jsonwebtoken');

// GET ‘/:id’ - shows users profile
function getProfile(req, res) {

  var decoded = jwt.decode(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET);
  var paramsId = parseFloat(req.params.id);

  if(decoded.id === paramsId) {
    Users()
    .where({
      id: Number(req.params.id)
    })
    .first()
    .select('first_name', 'last_name', 'email')
    .then(function(userData) {
      delete userData.password;
      // console.log(userData);
      res.json( {
        user: userData
      });
    })
    .catch(function(err) {
      console.log(err);
      res.json('Get Profile Error ' + err);
    });
  } else {
    res.json('token id and request parameters did not match');
  }
}

module.exports = getProfile;
