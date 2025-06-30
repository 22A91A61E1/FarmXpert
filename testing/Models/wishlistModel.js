// models/wishlistModel.js
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
}, { timestamps: true });

const WishlistItem = mongoose.model('WishlistItem', wishlistSchema);
module.exports = WishlistItem;
