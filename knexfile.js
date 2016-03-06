// Update with your config settings.
'user strict';

require('dotenv').load();


module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
