'use strict';

var express = require('express');
var router  = express.Router();

var  postNew = require('./posts/postNew'),
 	getMyPosts = require('./posts/getMyPosts'),
		 getPost = require('./posts/getPost'),
		 putPost = require('./posts/putPost'),
	 getSearch = require('./posts/getPostingsSearch');

	router.post('/', postNew);	// <-- POST '/' - creates new post
	router.get('/my/:id', getMyPosts); // <-- GET '/my/:id' - shows all that specific users post
	router.get('/my/:id/:post', getPost); // <-- GET ‘/:id/:post’ - shows individual post
	router.put('/my/:id/:post', putPost); // <-- PUT ‘/:id’ - updates individual post
	router.get('/search/:sport/:type', getSearch);

module.exports = router;
