'use strict';

var Table = require('../../db/knex.js'),
    Posts = Table('posts');

    require('dotenv').load();

var jwt = require('jsonwebtoken');

// PUT ‘/:id’ - updates users profile
function putProfile(req, res){

  var decoded = jwt.decode(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET);
  var paramsId = parseFloat(req.params.id);

  if(decoded.id === paramsId) {

    // ONLY update the the created_at and expiration date
    // if status equals Active
    var dates = {};
    if(req.body.status === 'Active') {
      //Created at date
      dates.today = new Date();

      //Creating a new date 
      var expire = new Date();
      //milliExpire is 30 days from right now 
      //returns millseconds
      var milliExpire = expire.setDate(expire.getDate() + 30);
      //milliExpire is 30 days from date in milliseconds
      //formattedExpire formats milliseond to normailized data
      //(example: Thu Mar 17 2016 20:10:51 GMT-0600 (MDT))
      dates.expire = new Date(milliExpire);
    } else {
      // Being explicit setting dates to undefined
      // KNEX will not update the fields with a value of undefined
      dates.today  = undefined;
      dates.expire = undefined;
    }

    var post = {};

    post.status     = req.body.status;
    post.sport      = req.body.sport;
    post.type       = req.body.type;
    post.avail      = req.body.avail;
    post.desc       = req.body.desc;
    post.rate       = req.body.rate;
    post.location   = req.body.location;
    post.lat        = req.body.lat;
    post.lng        = req.body.lng;
    post.created_at = dates.today;
    post.expiration = dates.expire;
    //KNEX - if key has a value of undefined it should be ignored 
    
    Posts()
    .where({
      id: Number(req.params.post), // post_id
      user_id : Number(req.params.id) // user_id
    })
    .update(post)
    .then(function() {
      res.json({message: 'Updated post: ' + post.id});
    })
    .catch(function(err) {
      res.json('Error Edit in post data ' + err);
    });
  } else {
    res.json('Error Editing Profile');
  }

}

module.exports = putProfile;