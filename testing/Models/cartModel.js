const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  price: String,
  quantity: Number,
  subtotal: Number,
});

module.exports = mongoose.model('CartItem', cartItemSchema);
