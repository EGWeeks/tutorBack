'use strict';

var express = require('express');
var router  = express.Router();

var	postNew	= require('./posts/postNew'),
 getMyPosts = require('./posts/getMyPosts'),
		getPost = require('./posts/getPost'),
		putPost = require('./posts/putPost');
		// delPost = require('./posts/delPost');

	router.post('/', postNew);	// <-- POST '/' - creates new post
	router.get('/my/:id', getMyPosts);
	router.get('/my/:id/:post', getPost); // <-- GET ‘/:id/:post’ - shows individual post
	router.put('/my/:id/:post', putPost); // <-- PUT ‘/:id’ - updates individual post
	// router.delete('/:id', delPost); // <-- DELETE ‘/:id’ - removes post

module.exports = router;
