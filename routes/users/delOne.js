'use strict';

var Table = require('../../db/knex.js'),
    Users = Table('users');

// DELETE ‘/:id’ - removes resource
function deleteOneUserHandler(req, res) {
  Users()
  .where({
    id: Number(req.params.id)
  })
  .del()
  .then(function() {
    req.session = {};
    res.json('Deleted user: ' + req.params.id);
  });
}

module.exports = deleteOneUserHandler;