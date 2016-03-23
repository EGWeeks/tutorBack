'use strict';

var express = require('express');
var router  = express.Router();

var  getFeed = require('./feed/getFeed'),
getFeedLocal = require('./feed/getFeedLocation');

	router.get('/', getFeed);	// <-- GET '/' - gets postings for home page feed
	router.get('/location', getFeedLocal);
module.exports = router;
