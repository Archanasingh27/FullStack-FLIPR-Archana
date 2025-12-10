import express from 'express';
import dotenv from 'dotenv';
import connectdb from "./config/db.js";
import cors from 'cors';

import projectRoutes from "./routes/project.routes.js";
import clientRoutes from "./routes/client.routes.js";
import contactRoutes from "./routes/contact.routes.js";
import subscriberRoutes from "./routes/subscriber.routes.js";

dotenv.config();

const app = express();

app.use(cors ({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));




app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribe", subscriberRoutes);
app.use("/uploads", express.static("uploads"));




const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    connectdb();
  console.log(`Server is running on port ${PORT}`);
});