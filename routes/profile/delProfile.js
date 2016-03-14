'use strict';

var Table = require('../../db/knex.js'),
    Users = Table('users');

    require('dotenv').load();

var jwt = require('jsonwebtoken');

// DELETE ‘/:id’ - removes users profile
function deleteProfile(req, res) {

	var decoded = jwt.decode(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET);
  var paramsId = parseFloat(req.params.id);

  if(decoded.id === paramsId) {
	  Users()
	  .where({
	    id: Number(req.params.id)
	  })
	  .del()
	  .then(function() {
	    res.json('Deleted user: ' + req.params.id);
	  })
	  .catch(function(err){
	  	console.log(err);
	  	res.json('Delete Profile Error ' + err);
	  });
	} else {
  	res.json('token id and request parameters did not match');
	}
}


module.exports = deleteProfile;