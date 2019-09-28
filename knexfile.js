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
      connection: 'postgres://ipegmfaesrtcna:128e2a8ba320ada09c23c83b24cbb9961d10d087d0d49266ac41e4cce8ad0a22@ec2-54-235-180-123.compute-1.amazonaws.com:5432/d49ogkgahtr92q',
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      ,
      ssl: true
    }
  }
}
