
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const config = require('./config/config')
// const addUser = require('../../src/api/addUser.js')

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

// we use this to get all contacts that belong to a certain user (based on user_id)
// GET request that retrives all contacts from database
// TODO: implement retrieving based on a specific user_id
app.get('/contacts', (req, res) => {
  knex.select().from('contacts').where({ user_id: 2 }).then(function (contact) {
    res.send(contact)
  })
})

require('./routes')(app, knex)
// POST request that adds a user to the database everytime the
// register button is pressed
// app.post('/register', async (req, res) => {
//   await knex('users').insert({
//     name: 'test',
//     email: req.body.email,
//     password: req.body.password
//   }).then(function (user) {
//     // res.send(user)
//     res.send({
//       message: `Hello ${req.body.email}, your user was registered!`
//     })
//   })
// })

// app.listen(process.env.PORT || 8081)
app.listen(config.port)
console.log(`Server started on port: 8081`)
