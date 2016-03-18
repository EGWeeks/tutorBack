'use strict';

var Table = require('../../db/knex'),
    Posts = Table('posts');
   
// POST ‘/new’ - creates individual
function newPostHandler(req, res) {

  //Created at date
  var today = new Date();

  //Creating a new date 
  var expire = new Date();
  //milliExpire is 30 days from right now 
  //returns millseconds
  var milliExpire = expire.setDate(expire.getDate() + 30);
  //milliExpire is 30 days from date in milliseconds
  //formattedExpire formats milliseond to normailized data
  //(example: Thu Mar 17 2016 20:10:51 GMT-0600 (MDT))
  var formattedExpire = new Date(milliExpire);

  var post = {};
  //newly created posts get a default value of 'active'
  post.user_id    = req.body.user_id;
  post.status     = 'active';
  post.type       = req.body.type;
  post.subject    = req.body.subject;
  post.avail      = req.body.avail;
  post.desc       = req.body.desc;
  post.rate       = req.body.rate;
  post.created_at = today;
  post.expiration = formattedExpire;
  
  // TODO: ?efficient way to return the data needed
  // TODO: ?nesting .then()?
  Posts()
    .returning('user_id', 'status', 'type', 'subject', 'avail', 'desc', 'rate', 'created_at', 'expiration')
    .insert(post)
    .then(function(postInfo) {
      res.json(postInfo);
    })
    .catch(function(err) {
      res.send('Error handling your post submission. Error: ' + err);
    });

}

module.exports = newPostHandler;