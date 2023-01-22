module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '9102',
      database: 'armoney-dev',
      user: 'armoney-dev',
      password: 'armoney-dev',
    },
    migrations: {
      directory: '../database/migrations'
    },
    seeds: {
      directory: '../database/seeds'
    }
  },

  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '9102',
      database: 'armoney-test',
      user: 'armoney-test',
      password: 'armoney-test',
    },
    knexConfig:
      searchPath: ['knex', 'public'],
    migrations: {
      directory: '../database/migrations'
    },
    seeds: {
      directory: '../database/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    },
    migrations: {
      directory: '../database/migrations'
    },
    seeds: {
      directory: '../database/seeds'
    }
  }
};
