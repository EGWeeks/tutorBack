'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘/:id’ - shows individual resource
function getOneUserHandler(req, res) {
  //Query posts and users limited to 15 rows
  Posts()
  .join('users', 'posts.user_id', '=', 'users.id')
  .liit(15)
  .then(function(postData) {
    res.json({
      post: postData
    });
  });
}

module.exports = getOneUserHandler;