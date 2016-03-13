'use strict';

var Table = require('../../db/knex.js'),
    Users = Table('users');

// DELETE ‘/:id’ - removes users profile
function deleteProfile(req, res) {
  Users()
  .where({
    id: Number(req.params.id)
  })
  .del()
  .then(function() {
    res.json('Deleted user: ' + req.params.id);
  });
}

module.exports = deleteProfile;