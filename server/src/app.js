
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const config = require('./config/config')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// establish connection with database using Knex ORM
// var knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host: '127.0.0.1',
//     port: '5437',
//     user: 'postgres',
//     password: '',
//     database: 'contact-manager-database'
//   }
// })

var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://ipegmfaesrtcna:128e2a8ba320ada09c23c83b24cbb9961d10d087d0d49266ac41e4cce8ad0a22@ec2-54-235-180-123.compute-1.amazonaws.com:5432/d49ogkgahtr92q',
  migrations: {
    tableName: 'knex_migrations'
  },
  ssl: true
})

require('./routes')(app, knex)

app.listen(config.port)
console.log(`Server started on port: 8081`)
