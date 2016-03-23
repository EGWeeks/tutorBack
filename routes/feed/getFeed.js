'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘/:id’ - shows individual resource
function getOneUserHandler(req, res) {
  //Query posts and users table where status equals 'Active' limited to 15 rows
  Posts()
  .join('users', 'posts.user_id', '=', 'users.id')
  .where('status', 'Active')
  .select('posts.id','user_id', 'type', 'sport', 'avail', 'desc', 'rate', 'created_at', 'first_name', 'last_name', 'email', 'bio', 'location', 'img')
  .limit(15)
  .then(function(postData) {
    res.json({
      posts: postData
    });
  });
}

module.exports = getOneUserHandler;