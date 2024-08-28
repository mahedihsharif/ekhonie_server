const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");
const multer = require("multer");
const upload = require("../utils/multer");

// Create category
router.post("/", authMiddleware, upload.single("image"), createCategory);

// Get all categories
router.get("/", getCategories);

module.exports = router;
