'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments(); // id --> SERIAL PRIMARY KEY
    table.string('first_name', 120); // first_name --> VARCHAR(120)
    table.string('last_name', 120); // last_name --> VARCHAR(120)
    table.string('email').unique().notNullable(); // email --> VARCHAR(255) Unique Not Null
    table.string('password'); // password --> VARCHAR(255)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
