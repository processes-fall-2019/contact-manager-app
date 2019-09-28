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

export default function addContact () {
  app.post('/??', async (req, res) => {
    await knex('contacts').insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone_number: req.body.phone_number
    }).then(function (user) {
      // res.send(user)
      res.send({
        message: `Hello ${req.body.email}, your user was registered!`
      })
    })
  })
}
