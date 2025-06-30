const mongoose = require('mongoose');

const FertilizerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  category: String,
  price: String,
  image: String,
  description: String,
  unitPrice: String,
  packaging: String,
  crops: [String],
  nutrients: String,
  usage: String,
  benefits: String,
  precautions: String
});

module.exports = mongoose.model('Fertilizer', FertilizerSchema , "popular");
