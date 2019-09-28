const express = require('express')
const app = express()

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

// add name or not...
export default async function addUser () {
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
}
