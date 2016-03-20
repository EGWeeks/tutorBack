'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘/:id’ - shows individual resource
function getOneUserHandler(req, res) {

  Posts()
  .join('users', 'posts.user_id', '=', 'users.id')
  .then(function(postData) {
    res.json({
      post: postData
    });
  });
}

module.exports = getOneUserHandler;