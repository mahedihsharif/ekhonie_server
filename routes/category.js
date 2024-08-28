const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create category
router.post("/", auth, upload.single("image"), createCategory);

// Get all categories
router.get("/", getCategories);

module.exports = router;
