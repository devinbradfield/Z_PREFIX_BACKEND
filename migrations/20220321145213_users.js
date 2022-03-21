/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("firstname").notNullable();
      table.string("lastname").notNullable();
      table.string("username").notNullable().unique();
      table.string("passwordhashed").notNullable();

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
