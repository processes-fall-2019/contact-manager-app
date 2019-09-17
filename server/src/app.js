
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

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

// app.get('/status', (req, res) => {
//   res.send({
//     message: 'hello world!'
//   })
// })

// app.post('/register', (req, res) => {
//   res.send({
//     message: `Hello ${req.body.email}, your user was registered!`
//   })
// })

// GET request that retrives all contacts from database
// TODO: implement retrieving based on a specific user_id
app.get('/contacts', (req, res) => {
  knex.select().from('contacts').then(function (contact) {
    res.send(contact)
  })
})

// POST request that adds a user to the database everytime the
// register button is pressed
app.post('/register', async (req, res) => {
  await knex('users').insert({
    name: 'test',
    email: req.body.email,
    password: req.body.password
  }).then(function (user) {
    // res.send(user)
    res.send({
      message: `Hello ${req.body.email}, your user was registered!`
    })
  })
})

app.listen(process.env.PORT || 8081)
console.log(`Serveer started on port: 8081`)
console.log('In another terminal window, but in the same directory, run npm run dev to launch app.');
