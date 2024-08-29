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
// Configure CORS

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN, // Your Netlify domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // If you need to send cookies or use HTTP authentication
  })
);

// const prodOrigin = [process.env.PROD_ORIGIN];
// const devOrigin = ["http://localhost:5173"];
// const allowOrigins =
//   process.env.NODE_ENV === "production" ? prodOrigin : devOrigin;

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (allowOrigins.includes(origin)) {
//         console.log(origin, allowOrigins);
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
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
