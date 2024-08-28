const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");
const Category = require("../models/Category");

exports.createProduct = async (req, res) => {
  const {
    title,
    file,
    shortDescription,
    description,
    price,
    mrp,
    reviews,
    tags,
    availability,
    slug,
    quantity,
    soldQuantity,
    offer,
    categoryId,
  } = req.body;
  console.log(categoryId);
  // Find the category by ID
  const category = await Category.findById(categoryId);
  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  try {
    const result = await cloudinary.uploader.upload(file);
    const newProduct = new Product({
      title: title,
      file: result.secure_url,
      shortDescription: shortDescription,
      description: description,
      price: price,
      mrp: mrp,
      reviews: reviews,
      tags: tags,
      availability: availability,
      slug: slug,
      quantity: quantity,
      soldQuantity: soldQuantity,
      offer: offer,
      category: category,
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
