const mongoose = require("mongoose");

const fertilizerSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  description: String,
  unitPrice: Number,
  packaging: String,
  crops: String,
  nutrients: String,
  usage: String,
  benefits: String,
  precautions: String,
});

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema, "potassium"); 
const fertilizers = [
  {
      name: "Muriate of Potash (MOP / Potassium Chloride)",
      price: "₹850 per 50 kg",
      image: "k_1",
      description: "Most widely used potassium fertilizer, chloride-based.",
      unitPrice: 850,
      packaging: "50 kg",
      crops: "Paddy, wheat, sugarcane; chloride-tolerant soils",
      nutrients: "60% K₂O",
      usage: "Apply as basal or top dressing",
      benefits: "Improves water retention, disease resistance",
      precautions: "Avoid in chloride-sensitive crops like tobacco, potato"
    },
    {
      name: "Sulfate of Potash (SOP)",
      price: "₹2500 per 50 kg",
      image: "k_2",
      description: "High-quality potassium fertilizer with sulfur.",
      unitPrice: 2500,
      packaging: "50 kg",
      crops: "Fruits, vegetables; saline or chloride-sensitive soils",
      nutrients: "50% K₂O, 17% Sulfur",
      usage: "Apply during flowering or fruiting stages",
      benefits: "Enhances flavor, color, and disease resistance",
      precautions: "More expensive than MOP"
    },
    {
      name: "Potassium Nitrate (KNO₃)",
      price: "₹90 per kg",
      image: "k_3",
      description: "Water-soluble source of potassium and nitrogen.",
      unitPrice: 70,
      packaging: "1 kg, 25 kg",
      crops: "Horticulture, vegetables",
      nutrients: "13% N, 46% K₂O",
      usage: "Use in drip irrigation or foliar spray",
      benefits: "Fast nutrient uptake; encourages flowering",
      precautions: "Store in dry place; avoid overuse"
    },
    {
      name: "Potassium Sulfate-Magnesia",
      price: "₹80 per kg",
      image: "k_4",
      description: "Compound fertilizer with K, Mg, and S.",
      unitPrice: 60,
      packaging: "25 kg, 50 kg",
      crops: "Coconut, banana, sugarcane",
      nutrients: "30% K₂O, 10% MgO, 17% Sulfur",
      usage: "Apply in root zone before flowering",
      benefits: "Boosts photosynthesis and sugar formation",
      precautions: "Use soil testing to determine quantity"
    },
    {
      name: "NPK 0:0:50",
      price: "₹65 per kg",
      image: "k_5",
      description: "100% potassium fertilizer for targeted application.",
      unitPrice: 65,
      packaging: "1 kg, 25 kg",
      crops: "All fruit crops, flowering plants",
      nutrients: "50% K₂O",
      usage: "Foliar spray or drip irrigation",
      benefits: "Promotes flowering and fruit development",
      precautions: "Combine with other NPK if N and P are needed"
    },
    {
      name: "NPK 19:19:19",
      price: "₹75 per kg",
      image: "k_6",
      description: "Balanced water-soluble fertilizer including K.",
      unitPrice: 60,
      packaging: "1 kg, 25 kg",
      crops: "Vegetables, flowers",
      nutrients: "19% N, 19% P₂O₅, 19% K₂O",
      usage: "Use weekly through drip or foliar",
      benefits: "Balanced growth and flowering",
      precautions: "Avoid mixing with incompatible solutions"
    },
    {
      name: "Wood Ash (Organic)",
      price: "₹20 per kg",
      image: "k_7",
      description: "Traditional potassium source from burnt plant material.",
      unitPrice: 10,
      packaging: "Varies",
      crops: "Organic farming; acidic soils",
      nutrients: "5–7% K₂O, calcium, magnesium",
      usage: "Apply directly to soil; avoid young plants",
      benefits: "Improves pH and adds micro-elements",
      precautions: "Don’t apply near seedlings; high alkalinity"
    },
    {
      name: "Potash Mobilizing Bacteria (Biofertilizer)",
      price: "₹150 per liter or kg",
      image: "k_8",
      description: "Biofertilizer that unlocks soil potassium.",
      unitPrice: 150,
      packaging: "1L, 5L",
      crops: "All crops",
      nutrients: "Not direct K; increases bioavailability",
      usage: "Mix with compost or apply in root zone",
      benefits: "Sustainable nutrient management",
      precautions: "Don’t use with fungicides or chemical fertilizers"
    },
    {
      name: "Potassium Schoenite",
      price: "₹85 per kg",
      image: "k_9",
      description: "Natural mineral containing both potassium and magnesium.",
      unitPrice: 65,
      packaging: "25 kg",
      crops: "Coconut, banana, grapes",
      nutrients: "22% K₂O, 11% MgO",
      usage: "Apply as basal or top dressing",
      benefits: "Improves fruit quality and photosynthesis",
      precautions: "Not suitable for foliar spray"
    },
    {
      name: "Liquid Potash Fertilizer",
      price: "₹250 per liter",
      image: "k_10",
      description: "Potassium in liquid form for rapid absorption.",
      unitPrice: 250,
      packaging: "1L, 5L",
      crops: "Fruits, vegetables",
      nutrients: "10–15% K₂O (varies)",
      usage: "Foliar spray during flowering",
      benefits: "Fast acting; enhances flowering and fruiting",
      precautions: "Avoid spraying under direct sun"
    },
    {
      name: "K-Humate (Potassium Humate)",
      price: "₹250 per kg",
      image: "k_11",
      description: "Organic acid + potassium, improves nutrient uptake.",
      unitPrice: 250,
      packaging: "1 kg, 5 kg",
      crops: "All crops; low organic matter soils",
      nutrients: "12%–15% K₂O, humic acid",
      usage: "Mix with irrigation water or foliar spray",
      benefits: "Improves soil structure and plant growth",
      precautions: "Do not mix with strong acids or calcium fertilizers"
    },
    {
      name: "NPK 13:0:45",
      price: "₹60 per kg",
      image: "k_12",
      description: "High-potassium, nitrogen-rich fertilizer with no phosphorus.",
      unitPrice: 60,
      packaging: "1 kg, 25 kg",
      crops: "Fruits, vegetables",
      nutrients: "13% N, 45% K₂O",
      usage: "Foliar spray or drip irrigation",
      benefits: "Encourages flowering and sugar content",
      precautions: "Do not apply during midday"
    },
    {
      name: "Green Potash (Chelated K Fertilizer)",
      price: "₹400 per liter",
      image: "k_13",
      description: "Liquid potassium fertilizer with chelated technology.",
      unitPrice: 300,
      packaging: "1L",
      crops: "Fruits, horticultural crops",
      nutrients: "~10–15% K₂O (varies)",
      usage: "Foliar application during critical stages",
      benefits: "Quick absorption; minimizes nutrient loss",
      precautions: "Follow dilution guidelines strictly"
    },
    {
      name: "Natural Potash from Banana Peel (DIY/Organic)",
      price: "₹150",
      image: "k_14",
      description: "Homemade organic potassium source.",
      unitPrice: 0,
      packaging: "Household use",
      crops: "Potted plants, vegetables",
      nutrients: "~12% K₂O equivalent",
      usage: "Compost or boil peel water for plants",
      benefits: "Eco-friendly; improves flowering",
      precautions: "Not for large-scale farming"
    },
    {
      name: "Ash-Based Potash Granules",
      price: "₹25 per kg",
      image: "k_15",
      description: "Commercial granulated form of wood/plant ash.",
      unitPrice: 15,
      packaging: "5 kg, 25 kg",
      crops: "Organic farms",
      nutrients: "5–6% K₂O, calcium",
      usage: "Apply to root zone",
      benefits: "Low-cost potassium source",
      precautions: "Avoid high pH soils"
    },
    {
      name: "Fermented Banana Liquid Fertilizer (FBLF)",
      price: "₹150 per liter",
      image: "k_16",
      description: "Organic liquid rich in potassium from fermented fruits.",
      unitPrice: 100,
      packaging: "1L",
      crops: "Home gardens, kitchen farming",
      nutrients: "Natural potassium, amino acids",
      usage: "Dilute 1:10 with water and spray",
      benefits: "Improves flowering, fruiting, and microbial activity",
      precautions: "Use fresh; avoid odor buildup"
    },
];

const MONGO_URI = "mongodb://127.0.0.1:27017/fertilizerDB";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
    await Fertilizer.insertMany(fertilizers);
    console.log("🎉 Inserted 16 fertilizers into 'potassium' collection");
  } catch (err) {
    console.error("❌ Error inserting:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();