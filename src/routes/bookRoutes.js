import express from "express";
import axios from "axios";
import db from "../../db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const recommendedBooksFilePath = path.resolve(
  __dirname,
  "../data/recommendedBooks2025.json"
);

router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: "Query parameter 'q' is required" });
    }

    const googleApiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.API_KEY}`;
    const response = await axios.get(googleApiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books from Google API" });
  }
});

router.get("/best-books", async (req, res) => {
  try {
    const books = await db("best_books");
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Error fetching best books" });
  }
});

router.get("/recommend-books", async (req, res) => {
  try {
    console.log(" Attempting to read the JSON file...");
    console.log(" File path:", recommendedBooksFilePath);

    if (!fs.existsSync(recommendedBooksFilePath)) {
      console.error("File not found:", recommendedBooksFilePath);
      return res
        .status(404)
        .json({ error: "Recommended books file not found" });
    }

    const data = fs.readFileSync(recommendedBooksFilePath, "utf-8");
    const books = JSON.parse(data);
    res.status(200).json(books);
  } catch (err) {
    console.error("Error fetching recommended books:", err.message);
    res.status(500).json({ error: "Error fetching recommended books" });
  }
});

router.get("/book-clubs", async (req, res) => {
  try {
    const clubs = await db("book_clubs");
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).json({ error: "Error fetching book clubs" });
  }
});

router.get("/book-club/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const clubs = await db("book_clubs").where(
      "book_title",
      "like",
      `%${title}%`
    );

    if (clubs.length > 0) {
      res.status(200).json(clubs);
    } else {
      res.status(404).json({ message: "No book clubs found for this book." });
    }
  } catch (err) {
    res.status(500).json({ error: "Error fetching book clubs" });
  }
});

router.get("/random-quote", async (req, res) => {
  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    const quote = response.data[0];

    res.status(200).json({
      quote: quote.q,
      author: quote.a,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

export default router;
