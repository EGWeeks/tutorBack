'use strict';

exports.up = function(knex, Promise) {
  return Promise.all([
	  knex.schema.createTable('users', function(table){
	    table.increments(); // id --> SERIAL PRIMARY KEY
	    table.string('first_name', 120); // first_name --> VARCHAR(120)
	    table.string('last_name', 120); // last_name --> VARCHAR(120)
	    table.string('email').unique().notNullable(); // email --> VARCHAR(255) Unique Not Null
	    table.text('bio'); // bio --> TEXT
	    table.string('location'); // location --> VARCHAR(255)
	    table.string('password'); // password --> VARCHAR(255)
	    table.text('img'); // image --> TEXT
	  }),

	  knex.schema.createTable('user_post', function(table){
	  	table.increments(); // id --> SERIAL PRIMARY KEY
	  	table.integer('user_id'); // user id --> INTEGER
	  	table.integer('post_id'); //post id --> INTEGER
	  }),

	  knex.schema.createTable('posts', function(table) {
	  	table.increments(); // id --> SERIAL PRIMARY KEY
	  	table.string('subject'); // subject --> VARCHAR(255)
	  	table.string('type'); // type --> VARCHAR(255) instuctor or student
	  	table.integer('rate'); // rate --> INTEGER hourly rate
	  	table.string('avail'); // avaiblable --> VARCHAR(255)
	  	table.string('desc'); // description --> VARCHAR(255)
	  })
	]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('users'),
  	knex.schema.dropTable('user_post'),
  	knex.schema.dropTable('posts')
  ]);
};
