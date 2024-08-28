const Blog = require("../models/Blog");
const cloudinary = require("../config/cloudinary");

exports.createBlog = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newBlog = new Blog({
      title: req.body.title,
      image: result.secure_url,
      description: req.body.description,
      date: Date.now(),
    });

    const blog = await newBlog.save();
    res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
