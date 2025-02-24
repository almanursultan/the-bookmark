import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bookClubsFilePath = path.resolve(__dirname, "../data/bookClubs2025.json");

router.get("/", (req, res) => {
  try {
    if (!fs.existsSync(bookClubsFilePath)) {
      return res.status(404).json({ error: "File not found" });
    }

    const data = fs.readFileSync(bookClubsFilePath, "utf8");
    const clubs = JSON.parse(data);
    return res.status(200).json(clubs);
  } catch (error) {
    console.error("Error reading book clubs file:", error);
    return res.status(500).json({ error: "Error reading book clubs file" });
  }
});

router.get("/:title", (req, res) => {
  try {
    const { title } = req.params;
    if (!fs.existsSync(bookClubsFilePath)) {
      return res.status(404).json({ error: "File not found" });
    }

    const data = fs.readFileSync(bookClubsFilePath, "utf8");
    const clubs = JSON.parse(data);

    const matchedClubs = clubs.filter((club) =>
      club.title.toLowerCase().includes(title.toLowerCase())
    );

    if (matchedClubs.length === 0) {
      return res
        .status(404)
        .json({ message: "No book club found for this title" });
    }

    return res.status(200).json(matchedClubs);
  } catch (error) {
    console.error("Error reading book clubs file:", error);
    return res.status(500).json({ error: "Error reading book clubs file" });
  }
});

router.post("/:title/comments", (req, res) => {
  try {
    const { title } = req.params;
    const { name, comment } = req.body;

    if (!name || !comment) {
      return res.status(400).json({ error: "Name and comment are required" });
    }

    const data = fs.readFileSync(bookClubsFilePath, "utf8");
    const clubs = JSON.parse(data);

    const decodedTitle = decodeURIComponent(title);

    const club = clubs.find(
      (club) => club.title.toLowerCase() === decodedTitle.toLowerCase()
    );

    if (!club) {
      return res
        .status(404)
        .json({ error: `No book club found for the title "${decodedTitle}"` });
    }

    const newComment = {
      id: uuidv4(),
      name,
      text: comment,
      timestamp: new Date().toISOString(),
    };

    if (!club.comments) {
      club.comments = [];
    }

    club.comments.push(newComment);

    fs.writeFileSync(bookClubsFilePath, JSON.stringify(clubs, null, 2));

    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

export default router;
