 
const User = require('../models/User');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL, pass: process.env.PASSWORD }
});

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePic = req.file ? req.file.path : null;

    const newUser = new User({ name, email, password: hashedPassword, profilePic });
    await newUser.save();

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Welcome!',
      text: `Hello ${name}, welcome to our platform!`
    };
    transporter.sendMail(mailOptions);

    res.status(201).json({ message: "User registered & email sent!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch Users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
  