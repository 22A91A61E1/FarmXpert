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

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema, "flowers_lawns"); 
const fertilizers = [
    {  
      name: "NPK 10:26:26 (Starter Fertilizer)",
      price: "₹75 per kg",
      image: "fl_1",
      description: "High phosphorus fertilizer for strong root development.",
      unitPrice: 60,
      packaging: "1 kg, 50 kg",
      crops: "Flower beds (rose, marigold), ornamental plants",
      nutrients: "10% N, 26% P₂O₅, 26% K₂O",
      usage: "At planting time or before flowering.",
      benefits: "Promotes blooming and strong root systems.",
      precautions: "Avoid contact with young roots."
    },
    {
      name: "Bone Meal (Organic Phosphorus Source)",
      price: "₹70 per kg",
      image: "fl_2",
      description: "Natural, slow-release phosphorus fertilizer.",
      unitPrice: 40,
      packaging: "5 kg, 25 kg",
      crops: "Rose, dahlia, gladiolus",
      nutrients: "15–20% P₂O₅",
      usage: "Mix in soil around base of plant.",
      benefits: "Enhances root and flower development.",
      precautions: "Keep away from pets and animals."
    },
    {
      name: "Urea",
      price: "₹270 per 45 kg",
      image: "fl_3",
      description: "High-nitrogen fertilizer for quick growth.",
      unitPrice: 270,
      packaging: "45 kg",
      crops: "Lawns, leafy ornamental plants",
      nutrients: "46% N",
      usage: "Light broadcast in early morning.",
      benefits: "Promotes lush green foliage.",
      precautions: "Avoid overuse, can cause leaf burn."
    },
    {
      name: "DAP (Di-Ammonium Phosphate)",
      price: "₹1300 per 50 kg",
      image: "fl_4",
      description: "Nitrogen and phosphorus-rich granular fertilizer.",
      unitPrice: 1300,
      packaging: "50 kg",
      crops: "Flowering plants and shrubs",
      nutrients: "18% N, 46% P₂O₅",
      usage: "Pre-planting or early stage.",
      benefits: "Boosts flower bud formation.",
      precautions: "Avoid placing directly on plant roots."
    },
    {
      name: "Compost (Organic)",
      price: "₹40 per kg",
      image: "fl_5",
      description: "Organic matter for general soil enrichment.",
      unitPrice: 40,
      packaging: "10 kg, 50 kg",
      crops: "All flowers and lawns",
      nutrients: "Mild NPK, micronutrients",
      usage: "As mulch or soil mix.",
      benefits: "Improves soil structure and water retention.",
      precautions: "Use well-decomposed compost only."
    },
    {
      name: "Vermicompost",
      price: "₹50 per kg",
      image: "fl_6",
      description: "Earthworm-processed organic compost.",
      unitPrice: 50,
      packaging: "5 kg, 25 kg",
      crops: "Flowering pots, indoor plants",
      nutrients: "1–3% NPK, beneficial microbes",
      usage: "Top dressing or soil mix.",
      benefits: "Enhances flowering and soil health.",
      precautions: "Avoid over-watering."
    },
    {
      name: "Seaweed Extract (Liquid)",
      price: "₹200 per liter",
      image: "fl_7",
      description: "Organic liquid with natural growth hormones.",
      unitPrice: 200,
      packaging: "1L, 5L",
      crops: "Orchids, hibiscus, petunia",
      nutrients: "Cytokinins, auxins, trace nutrients",
      usage: "Spray during active growth.",
      benefits: "Enhances flowering and stress resistance.",
      precautions: "Dilute properly."
    },
    {
      name: "Single Super Phosphate (SSP)",
      price: "₹300 per 50 kg",
      image: "fl_8",
      description: "Phosphorus-rich fertilizer for root growth.",
      unitPrice: 300,
      packaging: "50 kg",
      crops: "Chrysanthemums, lawns",
      nutrients: "16% P₂O₅, 11% S",
      usage: "During soil preparation.",
      benefits: "Encourages root development.",
      precautions: "Avoid direct contact with leaves."
    },
    {
      name: "Neem Cake",
      price: "₹20 per kg",
      image: "fl_9",
      description: "Organic fertilizer and pest repellent.",
      unitPrice: 20,
      packaging: "5 kg, 25 kg",
      crops: "Garden flowers, lawns",
      nutrients: "NPK + azadirachtin",
      usage: "Soil incorporation before planting.",
      benefits: "Fertilizes and controls soil pests.",
      precautions: "Use in moderate quantities."
    },
    {
      name: "NPK 20:20:20",
      price: "₹75 per kg",
      image: "fl_10",
      description: "Balanced water-soluble fertilizer.",
      unitPrice: 75,
      packaging: "1 kg, 25 kg",
      crops: "Annuals, perennials, lawns",
      nutrients: "20% N, 20% P₂O₅, 20% K₂O",
      usage: "Weekly foliar spray.",
      benefits: "Promotes uniform growth and flowering.",
      precautions: "Avoid excessive foliar use."
    },
    {
      name: "Humic Acid (Liquid)",
      price: "₹250 per liter",
      image: "fl_11",
      description: "Improves nutrient uptake and soil health.",
      unitPrice: 250,
      packaging: "1L, 5L",
      crops: "Roses, marigolds, lawns",
      nutrients: "Organic acids, trace minerals",
      usage: "Spray or mix with irrigation.",
      benefits: "Increases root mass and bloom count.",
      precautions: "Do not mix with highly alkaline fertilizers."
    },
    {
      name: "Ferrous Sulphate",
      price: "₹30 per kg",
      image: "fl_12",
      description: "Iron-rich fertilizer to prevent chlorosis.",
      unitPrice: 30,
      packaging: "1 kg, 25 kg",
      crops: "Lawn grass, hibiscus, petunia",
      nutrients: "19% Fe, sulfur",
      usage: "Spray or soil drench.",
      benefits: "Corrects yellowing leaves.",
      precautions: "Avoid overuse; may stain surfaces."
    },
    {
      name: "Micronutrient Mixture (for Flowers)",
      price: "₹400 per kg",
      image: "fl_13",
      description: "Balanced mix for vibrant flower color.",
      unitPrice: 400,
      packaging: "500g, 1 kg",
      crops: "Geraniums, roses, cosmos",
      nutrients: "Fe, Zn, Mn, Cu, B, Mo",
      usage: "Foliar spray monthly.",
      benefits: "Promotes healthy blooms and foliage.",
      precautions: "Follow dilution instructions carefully."
    },
    {
      name: "Panchagavya (Organic Liquid)",
      price: "₹150 per liter",
      image: "fl_14",
      description: "Fermented organic liquid from cow-based ingredients.",
      unitPrice: 150,
      packaging: "1L, 5L",
      crops: "All flowers and lawns",
      nutrients: "Natural hormones, microbes",
      usage: "3% foliar spray every 15 days.",
      benefits: "Boosts flowering and disease resistance.",
      precautions: "Use diluted; not under direct sun."
    },
    {
      name: "Epsom Salt (Magnesium Sulfate)",
      price: "₹60 per kg",
      image: "fl_15",
      description: "Supplies magnesium and sulfur.",
      unitPrice: 60,
      packaging: "1 kg, 5 kg",
      crops: "Lawns, flowering plants",
      nutrients: "10% Mg, 13% S",
      usage: "Dissolve in water and spray.",
      benefits: "Enhances leaf color and flowering.",
      precautions: "Do not overdose."
    },
    {
      name: "Liquid Lawn Tonic",
      price: "₹250 per liter",
      image: "fl_16",
      description: "Ready-to-use nutrient spray for lawns.",
      unitPrice: 250,
      packaging: "500 ml, 1L",
      crops: "Turf grass, ornamental lawns",
      nutrients: "NPK + micronutrients",
      usage: "Spray during early morning.",
      benefits: "Promotes dense, green lawn cover.",
      precautions: "Water lawn after application."
    }
];

const MONGO_URI = "mongodb://127.0.0.1:27017/fertilizerDB";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
    await Fertilizer.insertMany(fertilizers);
    console.log("🎉 Inserted 16 fertilizers into 'flowers_lawns' collection");
  } catch (err) {
    console.error("❌ Error inserting:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();