'use strict';

var Table = require('../../db/knex'),
    Users = Table('users');

// GET ‘/’ - shows all resources
function getAllUsersHandler(req, res) {
  Users()
  .select('first_name', 'last_name', 'email', 'bio', 'location', 'img')
  .then(function(usersData) {
    res.send( {
      title: 'Users',
      users: usersData,
      session: req.session
    });
  });
}

module.exports = getAllUsersHandler;