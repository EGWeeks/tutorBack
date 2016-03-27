'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘/:id’ - shows individual resource
function getOneUserHandler(req, res) {
  //Query posts and users table where status equals 'Active' limited to 15 rows
  Posts()
  .join('users', 'posts.user_id', '=', 'users.id')
  .where('sport', req.params.sport)
  .select('posts.id', 'user_id', 'type', 'sport', 'avail', 'desc', 'rate', 'created_at', 'first_name', 'last_name', 'email', 'bio', 'users.location', 'img')
  .then(function(postData) {
    console.log(postData);
    res.json({
      posts: postData
    });
  });
}

module.exports = getOneUserHandler;