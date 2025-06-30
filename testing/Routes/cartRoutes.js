const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, removeFromCart, updateQuantity } = require('../Controller/cartController');

router.post('/add', addToCart);
router.get('/', getCartItems);
router.delete('/remove/:id', removeFromCart);
router.put('/update/:id', updateQuantity);
router.delete("clear", async (req, res) => {
  try {
    await CartItem.deleteMany({});
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
