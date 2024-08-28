const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  file: { type: String },
  shortDescription: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  mrp: { type: Number },
  reviews: { type: Number, enum: [1, 2, 3, 4, 5], default: 1 },
  tags: [{ type: String }],
  availability: {
    type: String,
    enum: ["In Stock", "Out Of Stock"],
    default: "In Stock",
  },
  slug: { type: String, unique: true },
  quantity: { type: Number },
  soldQuantity: { type: Number },
  offer: { type: Number },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Product", ProductSchema);
