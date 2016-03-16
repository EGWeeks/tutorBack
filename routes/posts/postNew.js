'use strict';

var Table = require('../../db/knex'),
    Posts = Table('posts'),
 UserPost = Table('user_post');
   
// POST ‘/new’ - creates individual
function newPostHandler(req, res) {
  var post = {};

  post.subject = req.body.subject;
  post.type    = req.body.type;
  post.rate    = req.body.rate;
  post.avail   = req.body.avail;
  post.desc    = req.body.desc;

  Posts()
    .returning()
    .insert(post, 'id')
    .then(function(id) {
      return id;
    })
    .then(function(postId) {
      var ids = {};
      ids.user_id = req.body.user_id;
      ids.post_id = parseFloat(postId);
      return UserPost().insert(ids, 'id');
    })
    .catch(function(err) {
      res.send('Error handling your post submission. Error: ' + err);
    });

}

module.exports = newPostHandler;