import "dotenv/config";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_LOCAL_DBNAME || "book_club",
    user: process.env.DB_LOCAL_USER || "root",
    password: process.env.DB_LOCAL_PASSWORD || "rootroot",
    charset: "utf8",
  },
};
