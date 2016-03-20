'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘/:id’ - shows individual resource
function getOneUserHandler(req, res) {
  //Query posts and users table where status equals 'Active' limited to 15 rows
  Posts()
  .join('users', 'posts.user_id', '=', 'users.id')
  .where('status', 'Active')
  .limit(15)
  .then(function(postData) {
    res.json({
      posts: postData
    });
  });
}

module.exports = getOneUserHandler;