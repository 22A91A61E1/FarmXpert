const Order = require('../Models/orderModel');

const placeOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        const saved = await order.save();
        res.status(201).json({ message: "Order placed!", order: saved });
    } catch (err) {
        console.error("Order error:", err.message);
        res.status(500).json({ error: "Failed to place order" });
    }
};

module.exports = { placeOrder };
