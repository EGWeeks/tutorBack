'use strict';

var express = require('express');
var router  = express.Router();

var  getFeed = require('./feed/getFeed');

	router.get('/', getFeed);	// <-- GET '/' - gets postings for home page feed

module.exports = router;
