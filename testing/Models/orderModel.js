const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    fertilizerName: String,
    fertilizerImage: String,
    quantity: Number,
    totalPrice: Number,
    fullName: String,
    email: String,
    phone: String,
    city: String,
    state: String,
    pinCode: String,
    address: String,
    payment: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);

