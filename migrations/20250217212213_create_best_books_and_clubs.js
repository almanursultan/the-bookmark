/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
    .createTable("best_books", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("author").notNullable();
      table.string("genre").notNullable();
      table.text("description");
      table.float("rating");
    })
    .createTable("book_clubs", (table) => {
      table.increments("id").primary();
      table.string("club_name").notNullable();
      table.text("description");
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("best_books").dropTable("book_clubs");
}
