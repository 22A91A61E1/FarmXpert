// routes/wishlistRoutes.js
const express = require('express');
const router = express.Router();
const {
  addToWishlist,
  removeFromWishlist,
  getAllWishlistItems
} = require('../Controller/wishlistController');

router.post('/add', addToWishlist);

router.delete('/remove/:name', removeFromWishlist);

router.get('/', getAllWishlistItems);

module.exports = router;
