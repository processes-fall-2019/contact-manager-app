
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const config = require('./config/config')
var path = require('path')
var serveStatic = require('serve-static')


app.use(express.static(__dirname + 'dist')) // del

app.get('/', function (req, res) {        // del
  res.sendFile(__dirname + '/dist/index.html')
})


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

// // for production database
// var knex = require('knex')({
//   client: 'pg',
//   connection: 'postgres://ethoesmmnzcunu:901dc9decc44710ccf9b2a38b3c8562efb358f46ddb9ada48aa0492da190dc8c@ec2-54-235-180-123.compute-1.amazonaws.com:5432/dde8k4u6i7hq2m',
//   migrations: {
//     tableName: 'knex_migrations'
//   },
//   ssl: true
// })

// app.get('/', function (req, res) {
//   res.redirect('/HelloWorld')
// })

// app.use('/', express.static(path.join(__dirname, '/client/build')))
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '/HelloWorld'))
// })
// app.use(express.static(path.join(__dirname, 'client', 'build')))
// app.get('/', function (req, res) {
//   // res.sendFile(path.join(__dirname, '../../src/main.js'))
//   res.render('../../src/components/HelloWorld.vue')
// })
// app.get('/', function (req, res) {
//   require('./routes')(app, knex)
// })
// app.get('/', function (req, res) {
// })
// app.get('/', function (req, res) {
//   res.redirect('./routes/HelloWorld')
// })

// app.use(express.static(path.join(__dirname, 'client', 'build')))

// app.use(serveStatic(__dirname + "/dist"))
// app.get('/', function (req, res) {
//   res.send('gotten')
// })


require('./routes')(app, knex)

// app.get('*', (req, res) => {
//   res.redirect('/HelloWorld')
// })

// app.listen(config.port)
app.listen(process.env.PORT || 8081)

console.log(`Server started on port: 8081`)
