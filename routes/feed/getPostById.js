'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘/:id’ - shows individual resource
function getPostById(req, res) {

  Posts()
    .innerJoin('users', 'posts.user_id', 'users.id')
    .where('posts.id', '=', req.params.id)
    .select()
    .then(function(postData) {
      delete postData[0].password;
      res.json({
        post: postData
      });
    });
}

module.exports = getPostById;