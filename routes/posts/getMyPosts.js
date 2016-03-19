'use strict';

var Table = require('../../db/knex.js'),
  Posts = Table('posts');

// GET ‘my/:id’ - shows user posts 
function getUserPostsHandler(req, res) {

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