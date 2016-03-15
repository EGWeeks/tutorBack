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

  Posts()
    .returning()
    .insert(post, 'id')
    .then(function(id) {
      console.log('id ----- '+ id);
    })
    .then(function(something) {
      console.log('something________ '+ something);
    })
    .catch(function(err) {
      res.send('Error handling your post submission. Error: ' + err);
    });

}

module.exports = newPostHandler;