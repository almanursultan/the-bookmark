import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookRoutes from "./src/routes/bookRoutes.js";
import bookClubRoutes from "./src/routes/bookClubRoutes.js";
import db from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

db.raw("SELECT 1")
  .then(() => console.log("✅ Connected to MySQL database via Knex"))
  .catch((err) => console.error("❌ Database connection failed:", err));

app.get("/", (req, res) => {
  res.send("📚 Welcome to the Book Club API!");
});

app.use("/api/books", bookRoutes);
app.use("/api/book-clubs", bookClubRoutes);

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
