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

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema, "paddy_others"); 
const fertilizers = [
    {
      name: "Urea",
      price: "₹270 per 45 kg",
      image: "po_1",
      description: "A fast-acting nitrogen fertilizer that supports vegetative growth.",
      unitPrice: 270,
      packaging: "45 kg",
      crops: "Paddy, wheat, maize",
      nutrients: "46% Nitrogen (N)",
      usage: "3 split doses – basal, tillering, and panicle initiation.",
      benefits: "Enhances leaf and tiller growth.",
      precautions: "Overuse may lead to lodging and environmental runoff."
    },
    {
      name: "DAP (Di-Ammonium Phosphate)",
      price: "₹1300 per 50 kg",
      image: "po_2",
      description: "Supplies both nitrogen and phosphorus; used at sowing.",
      unitPrice: 1300,
      packaging: "50 kg",
      crops: "Paddy, wheat, pulses",
      nutrients: "18% N, 46% P₂O₅",
      usage: "Basal application before transplanting.",
      benefits: "Promotes strong root and early seedling development.",
      precautions: "Avoid direct seed contact."
    },
    {
      name: "MOP (Muriate of Potash)",
      price: "₹850 per 50 kg",
      image: "po_3",
      description: "Potassium-rich fertilizer to improve grain filling and disease resistance.",
      unitPrice: 850,
      packaging: "50 kg",
      crops: "Paddy, sugarcane, maize",
      nutrients: "60% K₂O",
      usage: "Basal or early tillering stage.",
      benefits: "Improves grain quality and resistance.",
      precautions: "Excess use can affect soil pH."
    },
    {
      name: "SSP (Single Super Phosphate)",
      price: "₹300 per 50 kg",
      image: "po_4",
      description: "Phosphorus fertilizer with added sulfur.",
      unitPrice: 300,
      packaging: "50 kg",
      crops: "Paddy, pulses, cereals",
      nutrients: "16% P₂O₅, 11% Sulfur",
      usage: "Basal application during field prep.",
      benefits: "Aids in early root establishment.",
      precautions: "Avoid mixing with alkaline fertilizers."
    },
    {
      name: "Zinc Sulphate",
      price: "₹200 per kg",
      image: "po_5",
      description: "Micronutrient supplement to correct zinc deficiency.",
      unitPrice: 200,
      packaging: "1 kg, 25 kg",
      crops: "Paddy, wheat",
      nutrients: "21% Zn",
      usage: "Soil or foliar during early growth stages.",
      benefits: "Prevents stunted growth and boosts yield.",
      precautions: "Don’t mix with phosphate fertilizers directly."
    },
    {
      name: "Green Manure (e.g., Dhaincha)",
      price: "₹60 per kg (seed)",
      image: "po_6",
      description: "Organic fertilizer grown and ploughed into the soil.",
      unitPrice: 60,
      packaging: "5 kg, 25 kg",
      crops: "Paddy",
      nutrients: "Organic NPK and biomass",
      usage: "Sown 30–45 days before paddy transplanting.",
      benefits: "Improves soil fertility and structure.",
      precautions: "Requires time and water availability."
    },
    {
      name: "Azospirillum (Biofertilizer)",
      price: "₹150 per liter",
      image: "po_7",
      description: "Nitrogen-fixing bacteria for non-leguminous crops.",
      unitPrice: 150,
      packaging: "500 ml, 1L",
      crops: "Paddy, maize",
      nutrients: "Live nitrogen-fixing bacteria",
      usage: "Seed, root, or soil treatment.",
      benefits: "Reduces need for synthetic nitrogen.",
      precautions: "Use immediately after opening."
    },
    {
      name: "Azolla",
      price: "₹60 per kg",
      image: "po_8",
      description: "Water fern that fixes atmospheric nitrogen in flooded fields.",
      unitPrice: 60,
      packaging: "1 kg, 5 kg",
      crops: "Paddy",
      nutrients: "Bioavailable nitrogen",
      usage: "Released into paddy fields before transplanting.",
      benefits: "Sustainable nitrogen source.",
      precautions: "Needs shallow, standing water."
    },
    {
      name: "FYM (Farm Yard Manure)",
      price: "₹100 per 50kg",
      image: "po_9",
      description: "Organic waste decomposed to improve soil health.",
      unitPrice: 100,
      packaging: "Bulk or 50 kg",
      crops: "Paddy, wheat, sugarcane",
      nutrients: "Low NPK + organic matter",
      usage: "During field preparation.",
      benefits: "Enhances soil structure and microbial life.",
      precautions: "Use well-rotted manure only."
    },
    {
      name: "Potash Mobilizing Bacteria (Biofertilizer)",
      price: "₹150 per liter",
      image: "po_10",
      description: "Mobilizes insoluble potassium in soil.",
      unitPrice: 150,
      packaging: "1L, 5L",
      crops: "Paddy, maize, sugarcane",
      nutrients: "Live potassium-mobilizing microbes",
      usage: "Seed or soil treatment.",
      benefits: "Improves potassium uptake naturally.",
      precautions: "Do not mix with chemical fungicides."
    },
    {
      name: "Phosphate Solubilizing Bacteria (PSB)",
      price: "₹120 per liter",
      image: "po_11",
      description: "Converts insoluble phosphorus to available form.",
      unitPrice: 120,
      packaging: "1L, 5L",
      crops: "Paddy, cereals",
      nutrients: "Phosphate-solubilizing microbes",
      usage: "Seed treatment or soil application.",
      benefits: "Enhances P efficiency and yield.",
      precautions: "Avoid mixing with acidic fertilizers."
    },
    {
      name: "NPK 20:20:0",
      price: "₹75 per kg",
      image: "po_12",
      description: "Balanced granular fertilizer for vegetative and root growth.",
      unitPrice: 75,
      packaging: "1 kg, 25 kg",
      crops: "Paddy, cereals",
      nutrients: "20% N, 20% P, 0% K",
      usage: "Early vegetative stage.",
      benefits: "Boosts plant vigor and early development.",
      precautions: "Ensure even distribution."
    },
    {
      name: "Liquid Urea (Foliar)",
      price: "₹250 per liter",
      image: "po_13",
      description: "Quick-absorption nitrogen source.",
      unitPrice: 250,
      packaging: "1L, 5L",
      crops: "Paddy, wheat",
      nutrients: "40–46% N",
      usage: "Foliar spray at tillering.",
      benefits: "Instant nitrogen absorption.",
      precautions: "Avoid spraying in hot sun."
    },
    {
      name: "Neem Coated Urea",
      price: "₹280 per 45 kg",
      image: "po_14",
      description: "Slower release urea, reduces nitrogen loss.",
      unitPrice: 280,
      packaging: "45 kg",
      crops: "Paddy, wheat",
      nutrients: "46% N (coated)",
      usage: "Basal or top-dressing.",
      benefits: "Reduces leaching and volatilization.",
      precautions: "Store in dry place."
    },
    {
      name: "Paddy Special Micronutrient Mix",
      price: "₹300 per kg",
      image: "po_15",
      description: "Specific blend for paddy crop micronutrient needs.",
      unitPrice: 300,
      packaging: "1 kg, 5 kg",
      crops: "Paddy",
      nutrients: "Zn, Fe, Mn, Cu, B",
      usage: "Foliar spray at panicle initiation.",
      benefits: "Prevents micronutrient deficiencies.",
      precautions: "Do not overdose."
    },
    {
      name: "Gypsum",
      price: "₹10 per kg",
      image: "po_16",
      description: "Soil conditioner and calcium/sulfur supplier.",
      unitPrice: 250,
      packaging: "25 kg, 50 kg",
      crops: "Paddy in sodic soils",
      nutrients: "Calcium and sulfur",
      usage: "Field application at land prep.",
      benefits: "Improves sodic soil structure.",
      precautions: "Use only if soil test indicates sodicity."
    }
];

const MONGO_URI = "mongodb://127.0.0.1:27017/fertilizerDB";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
    await Fertilizer.insertMany(fertilizers);
    console.log("🎉 Inserted 16 fertilizers into 'paddy_others' collection");
  } catch (err) {
    console.error("❌ Error inserting:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();