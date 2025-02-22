import db from "../db.js";

export const getBooks = async (_req, res) => {
  try {
    const books = await db("books");
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: `Error retrieving books: ${err.message}` });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await db("books").where({ id: req.params.id });

    if (book.length === 0) {
      return res
        .status(404)
        .json({ message: `Book with ID ${req.params.id} not found` });
    }

    res.status(200).json(book[0]);
  } catch (err) {
    res.status(400).json({ error: `Error retrieving book: ${err.message}` });
  }
};
