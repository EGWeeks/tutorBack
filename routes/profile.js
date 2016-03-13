'use strict';

var express = require('express');
var router  = express.Router();

var	getProfile  = require('./profile/getProfile'),
		putProfile  = require('./profile/putProfile'),
		delProfile  = require('./profile/delProfile');

	router.get('/:id', getProfile); // <--------- GET ‘/:id’ - shows individual resource
	router.put('/:id', putProfile); // <--------- PUT ‘/:id’ - updates individual resource
	router.delete('/:id', delProfile); // <--- DELETE ‘/:id’ - removes resource

module.exports = router;
