const Category = require("../models/Category");
const cloudinary = require("../config/cloudinary");

exports.createCategory = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newCategory = new Category({
      title: req.body.title,
      image: result.secure_url,
      totalProducts: 0,
    });

    const category = await newCategory.save();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
