'use strict';

var Table = require('../../db/knex.js'),
    Users = Table('users');

var jwt = require('jsonwebtoken');

// GET ‘/:id’ - shows users profile
function getProfile(req, res) {
  Users()
  .where({
    id: Number(req.params.id)
  })
  .first()
  .select('first_name', 'last_name', 'email')
  .then(function(userData) {
    delete userData.password;
    console.log(userData);
    res.json( {
      user: userData
    });
  })
  .catch(function(err) {
    console.log('Get Profile Error ' + err);
  });
}

module.exports = getProfile;
