const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  file: { type: String },
  description: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", BlogSchema);
