const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const User = require("../Models/User");
const nodemailer = require("nodemailer");

require("dotenv").config();

const router = express.Router();

// ✅ Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: "uploads/", // Ensure this folder exists
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage }); // ✅ Define 'upload' here

// ✅ User Signup
router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, mobile, age, gender, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstname,
      lastname,
      email,
      mobile,
      age,
      gender,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Fetch User by Email
router.get("/users/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Edit Profile with File Upload
router.put("/edit-profile", upload.single("profilePicture"), async (req, res) => {
  try {
    const { firstname, lastname, email, mobile, age, gender } = req.body;
    const profilePicture = req.file ? req.file.path : null;

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { firstname, lastname, mobile, age, gender, ...(profilePicture && { profilePicture }) },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "Profile updated successfully!", user: updatedUser });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/send-email", async (req, res) => {
  try {
    const { subject, message } = req.body;

    // ✅ Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS,  
      },
    });

    // ✅ Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,  
      to: process.env.COLLEGE_EMAIL,  
      subject: subject,
      text: message,
    };

    // ✅ Send the email
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email sending error:", err);  // ✅ Print full error
    res.status(500).json({ error: err.message }); // ✅ Send actual error response
  }
});

module.exports = router;
