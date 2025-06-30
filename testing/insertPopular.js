/****************************************************
 * insertPopular.js – bulk‑insert 16 popular fertilizers
 *   Run with:  node insertPopular.js
 ****************************************************/

const mongoose = require('mongoose');

// ✅ 1) UPDATE THIS PATH if your model lives elsewhere
const Fertilizer = require('./Models/FertilizerModel.js');

// ✅ 2) Make sure this matches the connection string in server.js
const MONGO_URI = 'mongodb://127.0.0.1:27017/fertilizerDB';

// 3) The 16 fertilizer objects
const fertilizers = [
  {
    name: "Urea (46%N)",
    price: "₹266",
    image: "f_1",
    description: "Highly concentrated nitrogen fertilizer.",
    unitPrice: 300,
    packaging: "50 kg",
    crops: "All major crops; nitrogen-deficient soils",
    nutrients: "46% Nitrogen",
    usage: "Apply during sowing and top dressing; 1–2 doses",
    benefits: "Promotes leaf and stem growth",
    precautions: "Avoid overuse; causes excessive vegetative growth"
  },
  {
    name: "DAP(Diammonium Phosphate)",
    price: "₹1200",
    image: "f_2",
    description: "Provides both Nitrogen and Phosphorus",
    unitPrice: 1300,
    packaging: "50 kg",
    crops: "Paddy, wheat, maize, cotton",
    nutrients: "18% Nitrogen, 46% Phosphorus",
    usage: "Apply during sowing",
    benefits: "Boosts root development and yield",
    precautions: "Do not mix with urea"
  },
  {
    name: "MOP(Muriate of Potash)",
    price: "₹1700",
    image: "f_3",
    description: "Potassium-rich fertilizer",
    unitPrice: 1800,
    packaging: "50 kg",
    crops: "Sugarcane, potato, banana",
    nutrients: "60% Potassium",
    usage: "Basal and top dressing",
    benefits: "Enhances disease resistance",
    precautions: "Avoid overuse in saline soils"
  },
  {
    name: "SSP (Single Super Phosphate)",
    price: "₹300 per 50 kg",
    image: "f_4",
    description: "Source of phosphorus and sulphur",
    unitPrice: 300,
    packaging: "50 kg",
    crops: "Pulses, oilseeds; acidic soils",
    nutrients: "16% P, 11% Sulphur",
    usage: "Basal application at sowing",
    benefits: "Promotes root growth and nodule formation",
    precautions: "Store in dry place to prevent caking"
  },
  {
    name: "NPK 10:26:26",
    price: "₹1250 per 50 kg",
    image: "f_5",
    description: "Balanced complex fertilizer",
    unitPrice: 1250,
    packaging: "50 kg",
    crops: "Suitable for cereals, pulses; general soils",
    nutrients: "10% N, 26% P, 26% K",
    usage: "Apply before sowing or early vegetative stage",
    benefits: "Supports full crop development",
    precautions: "Use as per soil test recommendations"
  },
  {
    name: "NPK 12:32:16",
    price: "₹1400 per 50 kg",
    image: "f_6",
    description: "High phosphorus content complex fertilizer",
    unitPrice: 1300,
    packaging: "50 kg",
    crops: "Wheat, maize, soybean; loamy soils",
    nutrients: "12% N, 32% P, 16% K",
    usage: "Basal application",
    benefits: "Enhances root and reproductive development",
    precautions: "Avoid excess use in sandy soils"
  },
  {
    name: "NPK 20:20:0:13 (Sulfureted)",
    price: "₹1200 per 50 kg",
    image: "f_7",
    description: "Balanced fertilizer with sulphur",
    unitPrice: 1100,
    packaging: "50 kg",
    crops: "Suitable for rice, cotton; sulphur-deficient soils",
    nutrients: "20% N, 20% P, 13% Sulphur",
    usage: "Basal or top dressing",
    benefits: "Improves crop vigor and oil content",
    precautions: "Avoid applying on wet soil surface"
  },
  {
    name: "Neem Coated Urea",
    price: "₹310 per 50 kg",
    image: "f_8",
    description: "Urea with neem coating to reduce nitrogen loss",
    unitPrice: 270,
    packaging: "50 kg",
    crops: "All crops; all soil types",
    nutrients: "46% N (slow-release)",
    usage: "Top dressing; use 2–3 weeks after sowing",
    benefits: "Reduces nitrogen leaching and pest attack",
    precautions: "Store in dry place"
  },
  {
    name: "Vermicompost",
    price: "₹250 per 25–50 kg",
    image: "f_9",
    description: "Organic fertilizer from earthworm activity",
    unitPrice: 250,
    packaging: "25–50 kg",
    crops: "Horticultural, vegetable crops; all soils",
    nutrients: "1-3% N, 1-2% P, 1-2% K",
    usage: "Mix with soil before planting or top dress",
    benefits: "Improves soil health, microbial activity",
    precautions: "Avoid mixing with chemical fertilizers immediately"
  },
  {
    name: "Cow Dung Manure",
    price: "₹100 per 50 kg",
    image: "f_10",
    description: "Traditional organic fertilizer",
    unitPrice: 100,
    packaging: "50 kg",
    crops: "All crops; sandy, loamy soils",
    nutrients: "0.5–1% N, P, K",
    usage: "Apply during field preparation",
    benefits: "Improves soil structure and fertility",
    precautions: "Must be well-rotted before use"
  },
  {
    name: "Poultry Manure",
    price: "₹150 per 50 kg",
    image: "f_11",
    description: "Rich organic fertilizer from poultry waste",
    unitPrice: 150,
    packaging: "50 kg",
    crops: "High-demand crops like vegetables",
    nutrients: "3% N, 2.5% P, 1.5% K",
    usage: "Apply 15 days before sowing",
    benefits: "Rapid nutrient release",
    precautions: "Avoid fresh manure; can burn plants"
  },
  {
    name: "Zinc Sulphate (ZnSO₄)",
    price: "₹1,700 per 25 kg",
    image: "f_12",
    description: "Micronutrient fertilizer",
    unitPrice: 1500,
    packaging: "25 kg",
    crops: "Paddy, maize; zinc-deficient soils",
    nutrients: "21% Zinc, 10% Sulphur",
    usage: "Apply as basal or foliar spray",
    benefits: "Improves enzyme function and grain size",
    precautions: "Follow dosage strictly to avoid toxicity"
  },
  {
    name: "Borax (Boron Fertilizer)",
    price: "₹800 per 25 kg",
    image: "f_13",
    description: "Boron-based micronutrient",
    unitPrice: 800,
    packaging: "25 kg",
    crops: "Sugarcane, sunflower; boron-deficient soils",
    nutrients: "~11% Boron",
    usage: "Mix with soil or foliar spray",
    benefits: "Promotes flowering and fruit setting",
    precautions: "Excess boron can be toxic"
  },
  {
    name: "Gypsum",
    price: "₹300 per 50 kg",
    image: "f_14",
    description: "Soil amendment and source of calcium/sulphur",
    unitPrice: 300,
    packaging: "50 kg",
    crops: "Groundnut, cotton; alkaline/saline soils",
    nutrients: "22% Calcium, 18% Sulphur",
    usage: "Apply during field preparation",
    benefits: "Reduces soil salinity, improves structure",
    precautions: "Avoid overuse in already acidic soils"
  },
  {
    name: "City Compost",
    price: "₹150 per 50 kg",
    image: "f_15",
    description: "Organic fertilizer from municipal waste",
    unitPrice: 100,
    packaging: "50 kg",
    crops: "Vegetables, flowers; urban and peri-urban soils",
    nutrients: "Varies; low in NPK",
    usage: "Apply 2 weeks before sowing",
    benefits: "Cost-effective organic matter",
    precautions: "Ensure it is certified and pathogen-free"
  },
  {
    name: "Humic Acid Fertilizer",
    price: "₹700 per liter/kg",
    image: "f_16",
    description: "Plant biostimulant from organic matter",
    unitPrice: 400,
    packaging: "1 liter / 1 kg",
    crops: "All crops; stressed or low-fertility soils",
    nutrients: "Organic carbon, trace minerals",
    usage: "Use with irrigation or foliar spray",
    benefits: "Boosts nutrient uptake, root growth",
    precautions: "Use as supplement, not primary fertilizer"
  }
];

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Optional: clear existing popular docs first
    // await Fertilizer.deleteMany({});
    
    await Fertilizer.insertMany(fertilizers);
    console.log('🎉 16 fertilizers inserted successfully');

  } catch (err) {
    console.error('❌ Insertion error:', err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
}
})();
