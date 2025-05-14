const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// PostgreSQL connection config
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

// POST - Create a new post
app.post("/api/posts", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO public.posts (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Error saving post" });
  }
});

// GET - Fetch all posts
app.get("/api/posts", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.posts ORDER BY created_at DESC"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// DELETE - Delete a specific post
app.delete("/api/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the post exists
    const result = await pool.query(
      "SELECT * FROM public.posts WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Proceed to delete the post
    await pool.query("DELETE FROM public.posts WHERE id = $1", [id]);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Error deleting post" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
