
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const config = require('./config/config')
var path = require('path')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// // establish connection with database using Knex ORM
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

// for production database
var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://ethoesmmnzcunu:901dc9decc44710ccf9b2a38b3c8562efb358f46ddb9ada48aa0492da190dc8c@ec2-54-235-180-123.compute-1.amazonaws.com:5432/dde8k4u6i7hq2m',
  migrations: {
    tableName: 'knex_migrations'
  },
  ssl: true
})

app.use('/', express.static(path.join(__dirname, '/client/build')))

require('./routes')(app, knex)

// app.listen(config.port)
app.listen(process.env.PORT || 8081)

console.log(`Server started on port: 8081`)
