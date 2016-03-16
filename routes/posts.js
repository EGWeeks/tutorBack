'use strict';

var express = require('express');
var router  = express.Router();

var	postNew	= require('./posts/postNew');
		// getPost = require('./posts/getPost'),
		// putPost = require('./posts/putPost'),
		// delPost = require('./posts/delPost');

	router.post('/', postNew);	// <-- POST '/' - creates new post
	// router.get('/:id', getPost); // <-- GET ‘/:id’ - shows individual post
	// router.put('/:id', putPost); // <-- PUT ‘/:id’ - updates individual post
	// router.delete('/:id', delPost); // <-- DELETE ‘/:id’ - removes post

module.exports = router;
