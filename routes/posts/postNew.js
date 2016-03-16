'use strict';

var Table = require('../../db/knex'),
    Posts = Table('posts');
   
// POST ‘/new’ - creates individual
function newPostHandler(req, res) {
  var post = {};

  post.subject = req.body.subject;
  post.type    = req.body.type;
  post.rate    = req.body.rate;
  post.avail   = req.body.avail;
  post.desc    = req.body.desc;
  post.user_id = req.body.user_id;
  // TODO: ?efficient way to return the data needed
  // TODO: ?nesting .then()?
  Posts()
    .returning('subject', 'type', 'rate', 'avail', 'desc', 'user_id')
    .insert(post)
    .then(function(postInfo) {
      res.json(postInfo);
    })
    .catch(function(err) {
      res.send('Error handling your post submission. Error: ' + err);
    });

}

module.exports = newPostHandler;