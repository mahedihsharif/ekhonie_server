const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  file: { type: String },
  totalProducts: { type: Number, default: 0 },
});

module.exports = mongoose.model("Category", CategorySchema);
