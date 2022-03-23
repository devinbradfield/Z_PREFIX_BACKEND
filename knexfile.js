// Update with your config settings.
require("dotenv").config();

let connectionString = process.env.DATABASE_URL;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
<<<<<<< HEAD
    client: "pg",
    connection: connectionString,
  },
=======
    client: 'pg',
    connection: process.env.CONNECTION_STRING,
    },
>>>>>>> parent of 19a131a (make it better)

  staging: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: { connectionString, ssl: { rejectUnauthorized: false } },
  },
};