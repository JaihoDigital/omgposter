import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import {protect, adminOnly} from '../middleware/auth.js';
import User from "../models/User.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// PROTECTED USER DATA
router.get("/user-info", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

// ADMIN ONLY ROUTE
router.get("/admin-info", protect, adminOnly, async (req, res) => {
  const admin = await User.findById(req.user.id).select("-password");
  res.json(admin);
});

export default router;
