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
  }

};
