var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5437',
    user: 'postgres',
    password: '',
    database: 'contact-manager-database'
  }
})

module.exports = knex
