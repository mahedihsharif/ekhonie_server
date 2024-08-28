const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");

exports.createProduct = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newProduct = new Product({
      title: req.body.title,
      image: result.secure_url,
      description: req.body.description,
      price: req.body.price,
      reviews: req.body.reviews,
      tags: req.body.tags,
      availability: req.body.availability,
      slug: req.body.slug,
      quantity: req.body.quantity,
      category: req.body.category,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
