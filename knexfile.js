// Update with your config settings.
require("dotenv").config();

let connectionString = process.env.DATABASE_URL;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: connectionString,
  },
  // process.env.CONNECTION_STRING
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