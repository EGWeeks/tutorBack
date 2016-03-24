'use strict';

var express = require('express');
var router  = express.Router();

var  getFeed = require('./feed/getFeed'),
getFeedLocal = require('./feed/getFeedLocation'),
getPostById  = require('./feed/getPostById');

	router.get('/', getFeed);	// <-- GET '/' - gets postings for home page feed
	router.get('/location', getFeedLocal);
	router.get('/:id', getPostById);
module.exports = router;
