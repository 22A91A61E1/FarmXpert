const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  soilType: String,
  pH: Number,
  nitrogen: Number,
  phosphorus: Number,
  potassium: Number,
  temperature: Number,
  humidity: Number,
  state: String,
}, { timestamps: true });

module.exports = mongoose.model("FormData", formDataSchema);