'use strict';

var Table = require('../../db/knex.js'),
  Users = Table('users');

// GET ‘/:id’ - shows individual resource
function getOneUserHandler(req, res) {
  Users()
  .where({
    id: Number(req.params.id)
  })
  .first()
  .select('first_name', 'last_name', 'email')
  .then(function(userData) {
    delete userData.password;
    res.json( {
      user: userData,
      session: req.session
    });
  });
}

module.exports = getOneUserHandler;
