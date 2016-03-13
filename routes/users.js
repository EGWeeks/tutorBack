'use strict';

var express = require('express');
var router  = express.Router();

var getAll  = require('./users/getAll'),
		postNew = require('./users/postNew'),
		getOne  = require('./users/getOne'),
		putOne  = require('./users/putOne'),
		delOne  = require('./users/delOne'),
		signIn  = require('./users/signIn');

	router.get('/', getAll); // <------------ GET ‘/’ - shows all resources
	router.post('/new', postNew); // <------- POST ‘/new’ - creates individual
	router.get('/:id', getOne); // <--------- GET ‘/:id’ - shows individual resource
	router.put('/:id', putOne); // <--------- PUT ‘/:id’ - updates individual resource
	router.delete('/:id', delOne); // <--- DELETE ‘/:id’ - removes resource
	router.post('/signin', signIn); // <----- POST '/signin' - authenticates user on sign in

module.exports = router;
