
// get knex to connect to database
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

let firstName = 'Francisco'
let lastName = 'Franco'
let email = 'test@gmail.com' // change to get from front end when user inputs email, from json?
let phoneNumber = '123-456-7890' // encode and change

function addContact () {
  return knex('contacts').insert({
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone_number: phoneNumber
  }).then().finally(function () {
    knex.destroy()
  })
}

return addContact()
