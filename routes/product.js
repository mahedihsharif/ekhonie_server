const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createProduct,
  getProducts,
} = require("../controllers/productController");
const upload = require("../utils/multer");

// Create product
router.post("/", authMiddleware, upload.single("image"), createProduct);

// Get all products
router.get("/", getProducts);

module.exports = router;
