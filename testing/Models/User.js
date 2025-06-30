const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  mobile: { type: String, unique: true },
  age: Number,
  gender: String,
  profilePicture: String,
  password: String,
  
});

module.exports = mongoose.model("User", UserSchema);
