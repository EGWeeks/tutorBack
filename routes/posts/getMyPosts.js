'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// https://obscure-earth-64971.herokuapp.com

// GET ‘my/:id’ - shows user posts 
function getUserPostsHandler(req, res) {
  var currentDate = new Date(2020, 1);
  console.log(currentDate);
  Posts()
    .where({
      user_id: Number(req.params.id)
    })
    .select()
    .then(function(data) {
      Promise.all(data.map(function(post){
        if(post.status === 'Active' && currentDate >= post.expiration) {
          return Posts()
            .where({id: post.id})
            .update('status', 'Expired')
            .then(function() {
              post.status = 'Expired';
              return post.status;
            });        
        } else {
          return post.status;
        }
      }))
      .then(function() {
        res.json({
          posts: data
        });
      }).catch(function(err) {
        console.log(err);
      });
    });
}

module.exports = getUserPostsHandler;