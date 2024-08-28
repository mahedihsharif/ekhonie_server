const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  totalProducts: { type: Number, default: 0 },
});

module.exports = mongoose.model("Category", CategorySchema);
