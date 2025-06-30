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

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema, "phosphorus"); 
const fertilizers = [
  {
      name: "Single Super Phosphate (SSP)",
      price: "₹350",
      image: "p_1",
      description: "Most widely used phosphorus fertilizer; also contains sulfur and calcium.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Pulses, oilseeds; phosphorus-deficient and sulfur-deficient soils",
      nutrients: "16% P₂O₅, 11% Sulfur, 19.5% Calcium",
      usage: "Apply as a basal dose before sowing",
      benefits: "Boosts root development and flowering; improves oil content in seeds",
      precautions: "Not effective in alkaline soils; do not apply with urea"
    },
    {
      name: "Triple Super Phosphate (TSP)",
      price: "₹1000",
      image: "p_2",
      description: "Highly concentrated phosphorus fertilizer, water-soluble.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Cereals, pulses, legumes; neutral to acidic soils",
      nutrients: "46% P₂O₅",
      usage: "Apply before sowing or transplanting",
      benefits: "Faster root growth and early maturity",
      precautions: "Store in dry place; avoid mixing with alkaline materials"
    },
    {
      name: "Di-Ammonium Phosphate (DAP)",
      price: "₹1450",
      image: "p_3",
      description: "Fertilizer combining nitrogen and phosphorus.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "All crops; ideal for phosphorus-deficient soils",
      nutrients: "18% Nitrogen, 46% P₂O₅",
      usage: "Basal application at sowing",
      benefits: "Provides both N and P in early growth",
      precautions: "Avoid overapplication; can increase soil pH"
    },
    {
      name: "Rock Phosphate",
      price: "₹400",
      image: "p_4",
      description: "Naturally occurring mineral used in acidic soils.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Legumes, oilseeds; acidic soils",
      nutrients: "15%–30% P₂O₅ (insoluble)",
      usage: "Mix with compost or apply directly in acidic soils",
      benefits: "Long-term P supply; eco-friendly",
      precautions: "Ineffective in neutral/alkaline soils"
    },
    {
      name: "Phosphoric Acid (H₃PO₄)",
      price: "₹80",
      image: "p_5",
      description: "Liquid phosphorus fertilizer, industrial-grade.",
      unitPrice: 1,
      packaging: "20L, 200L drums",
      crops: "Hydroponics, fertigation systems",
      nutrients: "~52% P₂O₅",
      usage: "Use in diluted form in irrigation water",
      benefits: "Instant uptake; pH control in fertigation",
      precautions: "Corrosive; handle with protective gear"
    },
    {
      name: "NP 20-20-0 Fertilizer",
      price: "₹1300",
      image: "p_6",
      description: "Complex fertilizer with equal nitrogen and phosphorus.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Pulses, cereals",
      nutrients: "20% Nitrogen, 20% P₂O₅",
      usage: "Use at early vegetative stage",
      benefits: "Balanced growth and root establishment",
      precautions: "Follow dosage to prevent nutrient imbalance"
    },
    {
      name: "Phospho-Gypsum",
      price: "₹200",
      image: "p_7",
      description: "Byproduct of phosphate fertilizer industry; contains calcium and sulfur.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Sugarcane, cotton; alkaline soils",
      nutrients: "12%–15% P₂O₅, 17% Sulfur",
      usage: "Apply as soil amendment or with compost",
      benefits: "Improves soil texture and root development",
      precautions: "Not a fast-release fertilizer"
    },
    {
      name: "NPK 12-32-16",
      price: "₹1400",
      image: "p_8",
      description: "Fertilizer with high phosphorus content for early-stage crops.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Maize, rice, cotton",
      nutrients: "12% N, 32% P₂O₅, 16% K₂O",
      usage: "Apply at planting",
      benefits: "Strong root system and improved flowering",
      precautions: "Avoid mixing with urea before application"
    },
    {
      name: "Bone Meal (Organic)",
      price: "₹50",
      image: "p_9",
      description: "Natural phosphorus source made from animal bones.",
      unitPrice: 1,
      packaging: "1 kg, 5 kg, 25 kg",
      crops: "Fruit trees, vegetables; acidic soils",
      nutrients: "10–15% P₂O₅, 20% Calcium",
      usage: "Mix into soil during planting",
      benefits: "Slow-release; improves flowering and fruiting",
      precautions: "Avoid overuse; attracts animals"
    },
    {
      name: "Superphosphate Granules (Enriched SSP)",
      price: "₹450",
      image: "p_10",
      description: "SSP granules enriched with micronutrients.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Oilseeds, pulses; sulfur-deficient soils",
      nutrients: "16% P₂O₅, 12% Sulfur, added Zinc/Boron",
      usage: "Basal application",
      benefits: "Better soil distribution and enhanced P availability",
      precautions: "Avoid water exposure before application"
    },
    {
      name: "Fused Magnesium Phosphate (FMP)",
      price: "₹350",
      image: "p_11",
      description: "Insoluble phosphorus source with magnesium.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Tea, coffee, acidic soils",
      nutrients: "15% P₂O₅, 18% MgO",
      usage: "Mix with compost and apply to soil",
      benefits: "Long-lasting phosphorus; improves chlorophyll",
      precautions: "Ineffective in neutral/alkaline soils"
    },
    {
      name: "Dicalcium Phosphate (DCP)",
      price: "₹670",
      image: "p_12",
      description: "Used as phosphorus supplement in feed and fertilizer.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Fruit crops, hydroponics",
      nutrients: "18%–21% P₂O₅, 23% Calcium",
      usage: "Mix into soil before planting",
      benefits: "Provides both calcium and phosphorus",
      precautions: "Not suitable for foliar application"
    },
    {
      name: "Ammonium Polyphosphate (APP)",
      price: "₹100",
      image: "p_13",
      description: "Liquid phosphorus fertilizer for fertigation.",
      unitPrice: 1,
      packaging: "20L, 200L drums",
      crops: "High-value crops; fertigation systems",
      nutrients: "10% N, 34% P₂O₅",
      usage: "Use in drip systems, diluted",
      benefits: "Fast absorption; reduces phosphorus fixation",
      precautions: "Avoid use with hard water"
    },
    {
      name: "Nitrophosphate 20:20:0",
      price: "₹1200",
      image: "p_14",
      description: "Contains nitrogen and phosphorus with zero potash.",
      unitPrice: 50,
      packaging: "50 kg",
      crops: "Wheat, maize, pulses",
      nutrients: "20% N, 20% P₂O₅",
      usage: "Apply as basal or early top dressing",
      benefits: "Strong shoot and root growth",
      precautions: "Combine with potash if K-deficient"
    },
    {
      name: "P-Enriched Organic Manure",
      price: "₹125",
      image: "p_15",
      description: "Compost enriched with phosphorus sources.",
      unitPrice: 1,
      packaging: "5 kg, 25 kg",
      crops: "Organic farming; all soil types",
      nutrients: "3–5% P₂O₅ (depends on source)",
      usage: "Apply during land prep",
      benefits: "Improves soil organic matter and P",
      precautions: "Effectiveness may vary; test soil first"
    },
    {
      name: "Phosphobacteria (Biofertilizer)",
      price: "₹250",
      image: "p_16",
      description: "Bacteria that solubilize insoluble phosphate in soil.",
      unitPrice: 1,
      packaging: "1L, 5L",
      crops: "All crops; phosphorus-deficient soils",
      nutrients: "No direct nutrients; increases P availability",
      usage: "Mix with compost or apply near root zone",
      benefits: "Eco-friendly; enhances soil fertility",
      precautions: "Do not mix with fungicides or chemical fertilizers"
    }  
];

const MONGO_URI = "mongodb://127.0.0.1:27017/fertilizerDB";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
    await Fertilizer.insertMany(fertilizers);
    console.log("🎉 Inserted 16 fertilizers into 'phosphorus' collection");
  } catch (err) {
    console.error("❌ Error inserting:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();