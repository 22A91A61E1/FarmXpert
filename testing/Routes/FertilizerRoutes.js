const express = require('express');
const router = express.Router();
const {
  getAllFertilizers,
  addFertilizer
} = require('../Controller/FertilizerController');

// Routes
router.get('/fertilizers', getAllFertilizers);
router.post('/fertilizers', addFertilizer); // POST to add new fertilizers

module.exports = router;
