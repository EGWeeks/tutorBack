'use strict';

var Table = require('../../db/knex.js'),
  Users = Table('users');

// GET ‘/:id’ - shows individual resource
function getFeedLocation(req, res) {
  //Query posts and users table where status equals 'Active' limited to 15 rows
  Users()
  .innerJoin('posts', 'users.id', 'posts.user_id')
  .where('posts.status', '=', 'Active')
  .select('posts.id', 'location', 'lat', 'lng')
  .then(function(location) {
    res.json({
      users: location
    });
  });
}

module.exports = getFeedLocation;