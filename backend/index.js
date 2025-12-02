import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from './config/db.js'
import createDefaultAdmin from './createAdminHelper.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DB Connection
connectDB().then(() => createDefaultAdmin());

// Routes
app.use("/api/auth", authRoutes);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
