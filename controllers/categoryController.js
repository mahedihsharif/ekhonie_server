const Category = require("../models/Category");
const cloudinary = require("../config/cloudinary");

exports.createCategory = async (req, res) => {
  const { title, file, totalProducts } = req.body;

  try {
    const result = await cloudinary.uploader.upload(file);
    const newCategory = new Category({
      title: title,
      file: result.secure_url,
      totalProducts: totalProducts,
    });

    const category = await newCategory.save();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getCategories = async (_, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
