'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘/:id’ - shows individual resource
function getOneUserHandler(req, res) {

  Posts()
  .where({
    id: Number(req.params.post),
    user_id: Number(req.params.id)
  })
  .first()
  .select()
  .then(function(postData) {
    res.json( {
      post: postData
    });
  });
}

module.exports = getOneUserHandler;