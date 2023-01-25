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
      database: 'postgres',
      user: 'postgres',
      password: 'rootpassword',
    },
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
