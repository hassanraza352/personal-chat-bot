
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const healthRoutes = require("./routes/health.routes");

const app = express();

// Security headers
app.use(helmet());

// Allow React frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

// Read JSON request bodies
app.use(express.json({ limit: "1mb" }));

// Health check route
app.use("/api/health", healthRoutes);

module.exports = app;
