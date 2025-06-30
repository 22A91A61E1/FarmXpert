// Load environment variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

// ✅ Default PORT fallback
const PORT = process.env.PORT || 5000;

// ✅ MongoDB Atlas Connection (using .env variable)
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("✅ MongoDB Atlas connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ✅ Middlewares
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
    'https://farmxpert.vercel.app' // ✅ Vercel frontend allowed
  ],
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// ✅ Import models and routes
const FormData = require("./Models/FormData");
const weatherRoutes = require("./Routes/weatherRoutes");
const wishlistRoutes = require("./Routes/wishlistRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const userRoutes = require("./Routes/userRoutes");

// ✅ Register routes
app.use("/api/weather", weatherRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);
app.use("/api", userRoutes);

// ✅ Save form data (contact, etc.)
app.post("/submit", async (req, res) => {
  try {
    const newForm = new FormData(req.body);
    await newForm.save();
    res.status(200).json({ message: "Data saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save data" });
  }
});

// ✅ Get all form submissions
app.get("/entries", async (req, res) => {
  try {
    const entries = await FormData.find().sort({ createdAt: -1 });
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ error: "Error fetching entries" });
  }
});

// ✅ Crop recommendation logic
app.post("/api/recommend", async (req, res) => {
  try {
    const {
      soilType,
      pH,
      nitrogen,
      phosphorus,
      potassium,
      temperature,
      humidity,
      state,
    } = req.body;

    let recommendation = [];

    if (pH >= 6 && nitrogen > 40) recommendation.push("Wheat");
    if (temperature > 30 && humidity > 50) recommendation.push("Rice");
    if (potassium > 40) recommendation.push("Millets");
    if (recommendation.length === 0) recommendation.push("Maize");

    const newForm = new FormData(req.body);
    await newForm.save();

    res.status(200).json({ recommendation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to recommend crops" });
  }
});

// ✅ Root route for Render deployment
app.get("/", (req, res) => {
  res.send("🚜 FarmXpert Backend is Live! Welcome 🎉");
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
