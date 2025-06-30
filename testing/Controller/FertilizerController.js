const Fertilizer = require('../Models/FertilizerModel');

// Get all fertilizers
exports.getAllFertilizers = async (req, res) => {
  try {
    const data = await Fertilizer.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new fertilizer
exports.addFertilizer = async (req, res) => {
  try {
    const newFertilizer = new Fertilizer(req.body);
    await newFertilizer.save();
    res.status(201).json(newFertilizer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
