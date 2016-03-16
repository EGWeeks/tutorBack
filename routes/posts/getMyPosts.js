'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘my/:id’ - shows user posts 
function getUserPostsHandler(req, res) {
  Posts()
    .where({
      user_id: Number(req.params.id)
    })
    .select()
    .then(function(data) {
      res.json( {
        posts: data
      });
    });
}

module.exports = getUserPostsHandler;