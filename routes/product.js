const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createProduct,
  getProducts,
} = require("../controllers/productController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create product
router.post("/", auth, upload.single("image"), createProduct);

// Get all products
router.get("/", getProducts);

module.exports = router;
