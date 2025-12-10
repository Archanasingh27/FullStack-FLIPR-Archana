import express from 'express';
import dotenv from 'dotenv';
import connectdb from "./config/db.js";
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

import projectRoutes from "./routes/project.routes.js";
import clientRoutes from "./routes/client.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import subscriberRoutes from "./routes/subscriber.routes.js";

dotenv.config();

const app = express();

// ------------ CORS ------------
const allowedOrigins = [
  "http://localhost:5173",
  "https://fullstack-flipr-archana-1.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS blocked: " + origin));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// ------------ BACKEND API ROUTES ------------
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribe", subscriberRoutes);

// ------------ FRONTEND BUILD SETUP ------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend dist folder
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Handle all other frontend routes 
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});


// ------------ START SERVER ------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectdb();
  console.log(`Server running on port ${PORT}`);
});
