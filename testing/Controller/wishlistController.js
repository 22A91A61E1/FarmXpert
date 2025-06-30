// controllers/wishlistController.js
const WishlistItem = require('../Models/wishlistModel');

// Add item to wishlist
const addToWishlist = async (req, res) => {
  try {
    console.log("Add request received:", req.body);
    const { name, image, price, type } = req.body;

    const existingItem = await WishlistItem.findOne({ name });
    if (existingItem) {
      return res.status(200).json({ message: 'Item already in wishlist' });
    }

    const newItem = new WishlistItem({ name, image, price, type });
    await newItem.save();
    res.status(201).json({ message: 'Item added to wishlist', item: newItem });
  } catch (err) {
    res.status(500).json({ error: 'Error adding to wishlist', details: err.message });
  }
};

// Remove item from wishlist
const removeFromWishlist = async (req, res) => {
  try {
    const decodedName = decodeURIComponent(req.params.name);
    const deletedItem = await WishlistItem.findOneAndDelete({ name: decodedName });

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found in wishlist' });
    }

    res.status(200).json({ message: 'Item removed from wishlist', item: deletedItem });
  } catch (err) {
    res.status(500).json({ error: 'Error removing from wishlist', details: err.message });
  }
};

// Get all wishlist items
const getAllWishlistItems = async (req, res) => {
  try {
    const items = await WishlistItem.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching wishlist', details: err.message });
  }
};

module.exports = {
  addToWishlist,
  removeFromWishlist,
  getAllWishlistItems
};
