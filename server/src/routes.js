const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app, knex) => {
  app.post('/register', AuthenticationControllerPolicy.register, async (req, res) => {
    await knex('users')
      .insert({
        name: 'test',
        email: req.body.email,
        password: req.body.password
      })
      .then(function (user) {
        res.send({
          message: `Hello ${req.body.email}, your user was registered!`
        })
      })
      .catch(e => {
        res.send({
          error: 'This email is already in use.'
        })
      })
  })

  app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const user = await knex.select().from('users')
      .where({ email: email, password: password })
      .then()
      .catch(e => {
        res.send({
          error: 'Error when fetching user from database.'
        })
      })

    if (user.length === 0) {
      return res.send({
        error: 'User not found.'
      })
    }

    res.send({
      message: `Hello ${req.body.email}, Welcome back.`,
      user: user
    })
  })

  app.get('/contacts', async (req, res) => {
  })
}
