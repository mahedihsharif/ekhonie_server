const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
require("dotenv").config();
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Payment Intent API
router.post("/create-checkout-session", authMiddleware, async (req, res) => {
  const { cartItems } = req.body;

  const lineItems = cartItems.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
        images: [product.file],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.cartQuantity,
  }));

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: { allowed_countries: ["US", "CA", "BD"] },
    payment_method_types: ["card"],
    mode: "payment",
    success_url: process.env.CLIENT_URL + "?success=true",
    cancel_url: process.env.CLIENT_URL + "?success=false",
    line_items: lineItems,
  });

  res.json({ id: session.id });
});

module.exports = router;
