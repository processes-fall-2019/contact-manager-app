// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: '5437',
      user: 'postgres',
      password: '',
      database: 'contact-manager-database'
    }
  },

  staging: {
      client: 'pg',
      connection: {
      host: '127.0.0.1',
      port: '5437',
      user: 'postgres',
      password: '',
      database: 'contact-manager-database'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
      client: 'pg',
      connection: 'postgres://ethoesmmnzcunu:901dc9decc44710ccf9b2a38b3c8562efb358f46ddb9ada48aa0492da190dc8c@ec2-54-235-180-123.compute-1.amazonaws.com:5432/dde8k4u6i7hq2m',
      pool: {
        min: 2,
        max: 11
      },
      migrations: {
        tableName: 'knex_migrations'
      ,
      ssl: true
    }
  }
}
