const Blog = require("../models/Blog");
const cloudinary = require("../config/cloudinary");

exports.createBlog = async (req, res) => {
  const { title, file, description } = req.body;

  try {
    const result = await cloudinary.uploader.upload(file);
    const newBlog = new Blog({
      title: title,
      file: result.secure_url,
      description: description,
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
