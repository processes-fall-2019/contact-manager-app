
// get knex to connect to database
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5437',
    user : 'postgres',
    password : '',
    database : 'contact-manager-database'
  }
})

let name = 'Francisco Franco'
let email = 'fhfranco32@gmail.com'  // change to get from front end when user inputs email, from json?
let password = 'hello' // encode and change

function addUser() {
  return knex('users').insert({
    name: name,
    email: email,
    password: password
  }).then().finally(function () {
    knex.destroy()
  })
}

return addUser()
