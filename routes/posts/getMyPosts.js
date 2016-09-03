'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// https://obscure-earth-64971.herokuapp.com

// GET ‘my/:id’ - shows user posts 
function getUserPostsHandler(req, res) {
  console.log("stuff...............stufff");
  var currentDate = new Date();  

  Posts()
    .where({
      user_id: Number(req.params.id)
    })
    .select()
    .then(function(data) {

      data.forEach(function(post){
        // Check all rows with status = Active and if todays date is greater than expiration date
        if(post.status === 'Active' && currentDate > post.expiration) {
          console.log(post.expiration + ' made into the post.status if');
          // If expired Update that row status = Expired
          Posts()
            .where({
              id: post.id
            })
            .update('status', 'Expired');

          // Change the status property in post to Expired
          // Before sending to the client
          post.status = 'Expired';
        }
      });

      res.json( {
        posts: data
      });
    });
}

module.exports = getUserPostsHandler;