const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { createBlog, getBlogs } = require("../controllers/blogController");
const upload = require("../utils/multer");

// Create blog
router.post("/", authMiddleware, upload.single("image"), createBlog);

// Get all blogs
router.get("/", getBlogs);

module.exports = router;
