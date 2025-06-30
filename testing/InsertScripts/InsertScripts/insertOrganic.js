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

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema, "organic"); 

const fertilizers = [
    {
        name: "Vermicompost",
        price: "₹250",
        image: "o_1",
        description: "Decomposed organic waste processed by earthworms.",
        unitPrice: 325,
        packaging: "25–50 kg",
        crops: "Vegetables, fruits, flowers; all soils",
        nutrients: "~1–3% N, 1–2% P, 1–2% K",
        usage: "2–3 tons per acre before sowing or transplanting",
        benefits: "Enhances microbial activity, improves soil texture",
        precautions: "Store in cool, dry area; do not mix with chemical fertilizers directly"
      },
      {
        name: "Cow Dung Manure (Well-rotted)",
        price: "₹200",
        image: "o_2",
        description: "Traditional manure rich in microbes and organic matter.",
        unitPrice: 150,
        packaging: "50 kg",
        crops: "All field crops; sandy/loamy soils",
        nutrients: "~0.5% N, 0.2% P, 0.5% K",
        usage: "4–5 tons per acre during land prep",
        benefits: "Improves soil structure and fertility",
        precautions: "Must be decomposed to avoid pests and weeds"
      },
      {
        name: "Poultry Manure",
        price: "₹250",
        image: "o_3",
        description: "Organic fertilizer made from chicken droppings.",
        unitPrice: 200,
        packaging: "50 kg",
        crops: "Vegetables, paddy, sugarcane",
        nutrients: "3% N, 2.5% P, 1.5% K",
        usage: "1–2 tons per acre 10–15 days before sowing",
        benefits: "Rich in nutrients and fast acting",
        precautions: "Avoid using fresh manure; compost it first"
      },
      {
        name: "Green Manure (e.g., Dhaincha, Sunhemp)",
        price: "₹1,000",
        image: "o_4",
        description: "Leguminous crops grown and plowed into the soil.",
        unitPrice: 1100,
        packaging: "Seed bags (~10–15 kg)",
        crops: "Paddy, sugarcane, cotton; low-nitrogen soils",
        nutrients: "Adds 40–60 kg N per acre",
        usage: "Grow for 40 days, then plow into soil",
        benefits: "Adds organic matter and nitrogen",
        precautions: "Requires time and space before main crop"
      },
      {
        name: "Panchagavya",
        price: "₹200 per liter",
        image: "o_5",
        description: "Liquid organic fertilizer made from 5 cow products.",
        unitPrice: 300,
        packaging: "1–5 liter bottles",
        crops: "All crops; acidic or depleted soils",
        nutrients: "Trace nutrients + beneficial microbes",
        usage: "Foliar spray or soil drench (1:30 dilution)",
        benefits: "Boosts immunity, growth hormones",
        precautions: "Must be properly fermented; avoid direct sun"
      },
      {
        name: "Jeevamrut",
        price: "₹100/liter",
        image: "o_6",
        description: "Microbial solution prepared from cow dung, urine, jaggery, and pulse flour.",
        unitPrice: 75,
        packaging: "1–5 L",
        crops: "All crops; especially used in Zero Budget Farming",
        nutrients: "Microbial nutrients",
        usage: "Soil drenching or foliar spray",
        benefits: "Activates microbial life, improves soil fertility",
        precautions: "Must be used fresh; store up to 7 days only"
      },
      {
        name: "City Compost",
        price: "₹150",
        image: "o_7",
        description: "Organic fertilizer made from treated urban waste.",
        unitPrice: 125,
        packaging: "50 kg",
        crops: "Vegetables, flowers; peri-urban farms",
        nutrients: "1–2% NPK + micronutrients",
        usage: "Mix with soil before sowing",
        benefits: "Reduces waste, improves organic matter",
        precautions: "Ensure certified and heavy-metal-free compost"
      },
      {
        name: "Pressmud (Sugar Industry Waste)",
        price: "₹300",
        image: "o_8",
        description: "Byproduct of sugar mills rich in organic carbon.",
        unitPrice: 250,
        packaging: "40–50 kg",
        crops: "Sugarcane, paddy, wheat",
        nutrients: "1.5% N, 2% P, 1% K",
        usage: "2–4 tons/acre during soil prep",
        benefits: "Adds bulk organic matter",
        precautions: "Compost before application"
      },
      {
        name: "Bone Meal",
        price: "₹450",
        image: "o_9",
        description: "Finely ground animal bones; phosphorus-rich.",
        unitPrice: 400,
        packaging: "5–25 kg",
        crops: "Fruit crops, flowering plants; acidic soils",
        nutrients: "~15% P, 4% N",
        usage: "Apply near roots or mix into planting pits",
        benefits: "Promotes root and flower development",
        precautions: "Avoid waterlogging; slow-release"
      },
      {
        name: "Fish Amino Acid",
        price: "₹600 per liter",
        image: "o_10",
        description: "Liquid made by fermenting fish waste.",
        unitPrice: 500,
        packaging: "1 liter",
        crops: "Vegetables, paddy; sandy soils",
        nutrients: "Nitrogen, amino acids",
        usage: "1:100 dilution as foliar spray",
        benefits: "Enhances vegetative growth",
        precautions: "Store in a cool, dark place; smells strong"
      },
      {
        name: "Seaweed Extract",
        price: "₹800 per liter",
        image: "o_11",
        description: "Derived from marine algae; bio-stimulant",
        unitPrice: 600,
        packaging: "250 ml – 1 liter",
        crops: "Horticultural, fruit crops",
        nutrients: "Trace nutrients, growth hormones",
        usage: "1:100 dilution; spray every 15 days",
        benefits: "Improves flowering and fruit set",
        precautions: "Use in early morning or late evening"
      },
      {
        name: "Castor Cake",
        price: "₹700",
        image: "o_12",
        description: "Residue after oil is extracted from castor seeds.",
        unitPrice: 850,
        packaging: "25–50 kg",
        crops: "Paddy, cotton, sugarcane",
        nutrients: "~4% N, 2% P, 1% K",
        usage: "Basal application, mix in soil",
        benefits: "Acts as pest repellent",
        precautions: "Toxic to humans/pets if ingested"
      },
      {
        name: "Neem Cake",
        price: "₹800",
        image: "o_13",
        description: "Organic residue after neem oil extraction",
        unitPrice: 900,
        packaging: "25–50 kg",
        crops: "All crops; especially for root protection",
        nutrients: "~5% N, 1% P, 2% K + azadirachtin (pesticidal)",
        usage: "Basal mix during field preparation",
        benefits: "Improves yield and controls nematodes",
        precautions: "Avoid inhalation of dust during handling"
      },
      {
        name: "Farm Yard Manure (FYM)",
        price: "₹100",
        image: "o_14",
        description: "Compost made from mixed animal waste and bedding material.",
        unitPrice: 125,
        packaging: "50 kg",
        crops: "All field crops",
        nutrients: "0.5% N, 0.2% P, 0.5% K",
        usage: "4–5 tons/acre before sowing",
        benefits: "Enhances soil texture and water retention",
        precautions: "Should be well-decomposed"
      },
      {
        name: "Coconut Husk Compost",
        price: "₹200",
        image: "o_15",
        description: "Compost made from coconut coir pith and husks.",
        unitPrice: 275,
        packaging: "25–50 kg",
        crops: "Horticulture, nursery plants",
        nutrients: "Rich in potassium",
        usage: "Mix with topsoil or potting mix",
        benefits: "Retains moisture and aerates soil",
        precautions: "Avoid over-watering due to high water retention"
      },
      {
        name: "Rock Phosphate",
        price: "₹650",
        image: "o_16",
        description: "Natural source of phosphorus from phosphate rocks",
        unitPrice: 600,
        packaging: "25–50 kg",
        crops: "Pulses, oilseeds; acidic soils",
        nutrients: "16%–20% P₂O₅",
        usage: "Apply during land prep or basal application",
        benefits: "Slow-release P, suitable for long-term soil health",
        precautions: "Less effective in neutral or alkaline soils"
      }
];

const MONGO_URI = "mongodb://127.0.0.1:27017/fertilizerDB";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
    await Fertilizer.insertMany(fertilizers);
    console.log("🎉 Inserted 16 fertilizers into 'organic' collection");
  } catch (err) {
    console.error("❌ Error inserting:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();
