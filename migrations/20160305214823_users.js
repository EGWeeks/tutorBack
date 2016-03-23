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
	    table.string('zip'); // zip code --> VARCHAR(255)
	    table.string('lat'); // latitude --> VARCHAR(255)
	    table.string('lng'); // longitude --> VARCHAR(255)
	    table.string('password'); // password --> VARCHAR(255)
	    table.text('img'); // image --> TEXT
	  }),

	  knex.schema.createTable('posts', function(table) {
	  	table.increments(); // id --> SERIAL PRIMARY KEY
	  	table.integer('user_id'); // user ID --> INTEGER
	  	table.string('status'); // status --> VARCHAR(255) active || removed || expired
	  	table.string('type'); // type --> VARCHAR(255) instuctor || student
	  	table.string('sport'); // subject --> VARCHAR(255)
	  	table.string('avail'); // avaiblable --> VARCHAR(255)
	  	table.string('desc'); // description --> VARCHAR(255)
	  	table.string('rate'); // rate --> INTEGER hourly rate price in decimal || n/a
	  	table.timestamp('created_at'); // created_at --> new Date();
	  	table.timestamp('expiration'); // expiration --> new Date(); 30 days + created_at
	  })
	]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('users'),
  	knex.schema.dropTable('posts')
  ]);
};
