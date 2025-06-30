
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb+srv://vyshu2004:vyshu2004@mycluster.qlrf0.mongodb.net/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected Successfully'))
.catch(err => console.log('MongoDB Connection Failed:', err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  profilePicture: String,
});

const User = mongoose.model('User', userSchema);

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/api/register', upload.single('profilePicture'), async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    const profilePicture = req.file ? req.file.filename : '';

    const newUser = new User({ name, email, mobile, profilePicture });
    await newUser.save();
    res.status(201).json({ message: 'User Registered Successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
