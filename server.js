require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.ORIGIN_URL.replace(/\/$/, "") // Remove trailing slash if any
}));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working on Vercel!" });
});

// ✅ Export the app for Vercel (NO app.listen())
module.exports = app;
