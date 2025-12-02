import User from "./models/User.js";
import bcrypt from "bcryptjs";

const createDefaultAdmin = async () => {
  const adminExists = await User.findOne({ role: "admin" });

  if (adminExists) {
    console.log("Admin already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Admin",
    email: "admin@site.com",
    password: hashedPassword,
    role: "admin",
  });

  console.log("Default Admin Created → Email: admin@site.com | Password: admin123");
};

export default createDefaultAdmin