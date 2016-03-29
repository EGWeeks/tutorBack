'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘/:id’ - shows individual resource
function getPostById(req, res) {
  // Using AS notation because users and posts 
  // table share columns with same name
  
  Posts()
    .fullOuterJoin('users AS us', 'posts.user_id', 'us.id')
    .where('posts.id', '=', req.params.id)
    .select('posts.*', 'us.location AS user_location', 'us.bio', 'us.email', 'us.img', 'us.first_name', 'us.last_name')
    .then(function(postData) {
      delete postData[0].password;
      res.json({
        post: postData
      });
    });
}
// 'posts.location', 'posts.type', 'posts.sport', 'posts.avail', 'posts.desc', 'posts.rate', 'posts.created_at', 'users.first_name', 'users.last_name','users.email','users.bio','users.zip','users.img','user.location'
module.exports = getPostById;