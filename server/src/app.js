
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

require('./routes')(app, knex)

app.listen(config.port)
console.log(`Server started on port: 8081`)
