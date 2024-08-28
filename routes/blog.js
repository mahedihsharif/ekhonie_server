const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createBlog, getBlogs } = require("../controllers/blogController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create blog
router.post("/", auth, upload.single("image"), createBlog);

// Get all blogs
router.get("/", getBlogs);

module.exports = router;
