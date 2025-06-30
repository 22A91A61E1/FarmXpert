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

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema, "fruits_vegetables"); 
const fertilizers = [
  {
      name: "NPK 19:19:19 (Water-Soluble Fertilizer)",
      price: "₹75 per kg",
      image: "fv_1",
      description: "Balanced fertilizer for early growth.",
      unitPrice: 60,
      packaging: "1 kg, 25 kg",
      crops: "Tomato, capsicum, spinach, mango",
      nutrients: "19% N, 19% P₂O₅, 19% K₂O",
      usage: "Drip or foliar spray during vegetative stage.",
      benefits: "Promotes balanced growth.",
      precautions: "Avoid over-application."
    },
    {
      name: "Potassium Nitrate (KNO₃)",
      price: "₹70 per kg",
      image: "fv_2",
      description: "Water-soluble source of K and N.",
      unitPrice: 70,
      packaging: "1 kg, 25 kg",
      crops: "Banana, grapes, tomato",
      nutrients: "13% N, 46% K₂O",
      usage: "Foliar spray or fertigation at flowering/fruiting stage.",
      benefits: "Enhances fruit quality and sugar content.",
      precautions: "Store in dry place."
    },
    {
      name: "DAP (Di-Ammonium Phosphate)",
      price: "₹1400 per 50 kg",
      image: "fv_3",
      description: "Common basal phosphorus and nitrogen fertilizer.",
      unitPrice: 1300,
      packaging: "50 kg",
      crops: "Onion, brinjal, watermelon",
      nutrients: "18% N, 46% P₂O₅",
      usage: "At sowing or transplanting.",
      benefits: "Strong root development.",
      precautions: "Avoid direct seed contact."
    },
    {
      name: "Urea",
      price: "₹270 per 45 kg",
      image: "fv_4",
      description: "High-nitrogen fertilizer.",
      unitPrice: 270,
      packaging: "45 kg",
      crops: "Leafy vegetables, cucurbits",
      nutrients: "46% N",
      usage: "Split doses during vegetative growth.",
      benefits: "Stimulates leafy growth.",
      precautions: "Avoid during fruiting stage."
    },
    {
      name: "Sulfate of Potash (SOP)",
      price: "₹2500 per 50 kg",
      image: "fv_5",
      description: "Chloride-free potassium source.",
      unitPrice: 2500,
      packaging: "50 kg",
      crops: "Potato, citrus, strawberry",
      nutrients: "50% K₂O, 17% S",
      usage: "Pre-flowering and fruit development.",
      benefits: "Enhances flavor and disease resistance.",
      precautions: "Costly compared to MOP."
    },
    {
      name: "Calcium Nitrate",
      price: "₹60 per kg",
      image: "fv_6",
      description: "Calcium and nitrogen source.",
      unitPrice: 60,
      packaging: "1 kg, 25 kg",
      crops: "Tomato, capsicum, grapes",
      nutrients: "15.5% N, 18.5% Ca",
      usage: "Foliar spray or drip irrigation.",
      benefits: "Prevents blossom-end rot.",
      precautions: "Store airtight to prevent moisture."
    },
    {
      name: "Micronutrient Mixture (Chelated)",
      price: "₹200 per kg",
      image: "fv_7",
      description: "Mix of Fe, Zn, Mn, Cu, B, Mo.",
      unitPrice: 200,
      packaging: "500g, 1 kg",
      crops: "Vegetables, berries",
      nutrients: "Varies",
      usage: "Foliar spray every 15–20 days.",
      benefits: "Prevents micronutrient deficiency.",
      precautions: "Use recommended dosage only."
    },
    {
      name: "Organic Vermicompost",
      price: "₹10 per kg",
      image: "fv_8",
      description: "Decomposed organic waste by worms.",
      unitPrice: 50,
      packaging: "5 kg, 50 kg",
      crops: "All fruits and vegetables",
      nutrients: "NPK in small quantities; microbes",
      usage: "Soil mixing or top dressing.",
      benefits: "Improves soil structure and moisture.",
      precautions: "Store in dry conditions."
    },
    {
      name: "Biozyme Granules",
      price: "₹250 per 5 kg",
      image: "fv_9",
      description: "Organic granules with enzymes and growth boosters.",
      unitPrice: 250,
      packaging: "5 kg, 10 kg",
      crops: "Chilli, onion, cabbage",
      nutrients: "Organic carbon, amino acids",
      usage: "Apply to soil at root zone.",
      benefits: "Boosts growth and yield naturally.",
      precautions: "Avoid water stagnation."
    },
    {
      name: "Seaweed Extract (Liquid)",
      price: "₹200 per liter",
      image: "fv_10",
      description: "Natural plant growth enhancer from marine algae.",
      unitPrice: 200,
      packaging: "1L, 5L",
      crops: "Tomato, watermelon, guava",
      nutrients: "Trace nutrients, auxins, cytokinins",
      usage: "Foliar spray at vegetative and fruiting stages.",
      benefits: "Enhances flowering and immunity.",
      precautions: "Avoid application under harsh sun."
    },
    {
      name: "Bone Meal (Organic Phosphorus Source)",
      price: "₹70 per kg",
      image: "fv_11",
      description: "Slow-release phosphorus from animal bones.",
      unitPrice: 40,
      packaging: "5 kg, 25 kg",
      crops: "Root vegetables, fruits",
      nutrients: "15%–20% P₂O₅",
      usage: "Mix in soil before planting.",
      benefits: "Strengthens root and flowering.",
      precautions: "Use gloves; can attract animals."
    },
    {
      name: "Trichoderma viride (Biofungicide)",
      price: "₹150 per kg/liter",
      image: "fv_12",
      description: "Fungus that controls soil pathogens.",
      unitPrice: 150,
      packaging: "1 kg, 1L",
      crops: "All vegetables and fruits",
      nutrients: "Biological control agent",
      usage: "Mix with compost or soil near roots.",
      benefits: "Promotes healthy root system.",
      precautions: "Avoid fungicide mix."
    },
    {
      name: "Panchagavya (Organic Liquid)",
      price: "₹200 per liter",
      image: "fv_13",
      description: "Traditional biofertilizer from cow products.",
      unitPrice: 150,
      packaging: "1L, 5L",
      crops: "Tomato, leafy greens, fruit trees",
      nutrients: "Natural enzymes, micronutrients",
      usage: "3% foliar spray every 15 days.",
      benefits: "Enhances immunity and yield.",
      precautions: "Use diluted only; foul smell."
    },
    {
      name: "Humic Acid Fertilizer",
      price: "₹250 per kg",
      image: "fv_14",
      description: "Organic acid improves nutrient uptake.",
      unitPrice: 250,
      packaging: "1 kg, 5 kg",
      crops: "All fruits and vegetables",
      nutrients: "Humic acid, 10%–12% K₂O",
      usage: "Soil application or foliar spray.",
      benefits: "Boosts soil microbes and plant growth.",
      precautions: "Do not mix with calcium fertilizers."
    },
    {
      name: "NPK 13:0:45",
      price: "₹60 per kg",
      image: "fv_15",
      description: "High-potassium fertilizer with nitrogen.",
      unitPrice: 60,
      packaging: "1 kg, 25 kg",
      crops: "Tomato, watermelon, guava",
      nutrients: "13% N, 45% K₂O",
      usage: "Foliar spray during fruiting.",
      benefits: "Improves fruit size and sweetness.",
      precautions: "Use in evening or early morning."
    },
    {
      name: "Neem Cake",
      price: "₹20 per kg",
      image: "fv_16",
      description: "Residue from neem seed oil extraction.",
      unitPrice: 20,
      packaging: "5 kg, 25 kg",
      crops: "All vegetable and fruit crops",
      nutrients: "5% N, 1% P, 1.5% K + azadirachtin",
      usage: "Soil mixing before planting.",
      benefits: "Pest control + slow nutrient release.",
      precautions: "Avoid excess; can be phytotoxic."
    }
];

const MONGO_URI = "mongodb://127.0.0.1:27017/fertilizerDB";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
    await Fertilizer.insertMany(fertilizers);
    console.log("🎉 Inserted 16 fertilizers into 'fruits_vegetables' collection");
  } catch (err) {
    console.error("❌ Error inserting:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();