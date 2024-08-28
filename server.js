const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const blogRoutes = require("./routes/blog");
const paymentRoutes = require("./routes/payment");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://ekhonie.netlify.app/", // Replace with your frontend's URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // If you need to handle cookies or other credentials
  })
);
app.use(express.json({ extended: false }));

//single route
app.get("/", (_, res) => res.send("Hello! Ekhonie E-Commerce"));

// Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/payment", paymentRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
