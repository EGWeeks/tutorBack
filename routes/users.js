'use strict';

var express = require('express');
var router  = express.Router();

var getAll  = require('./users/getAll'),
		postNew = require('./users/postNew'),
		getOne  = require('./users/getOne'),
		signIn  = require('./users/signIn');

	router.get('/', getAll); // <------------ GET ‘/’ - shows all resources
	router.post('/new', postNew); // <------- POST ‘/new’ - creates individual
	router.get('/:id', getOne); // <--------- GET ‘/:id’ - shows individual resource
	router.post('/signin', signIn); // <----- POST '/signin' - authenticates user on sign in

module.exports = router;
