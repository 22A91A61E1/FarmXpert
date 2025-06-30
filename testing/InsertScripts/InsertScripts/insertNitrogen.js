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

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema, "nitrogen"); 
const fertilizers = [
  {
      name: "Urea (46% N)",
      price: "₹270",
      image: "n_1",
      description: "Highly concentrated nitrogen fertilizer in granular form.",
      unitPrice: 270,
      packaging: "45 kg",
      crops: "All crops; loamy and clayey soils",
      nutrients: "46% Nitrogen",
      usage: "Apply during planting and top-dressing stages; split doses recommended.",
      benefits: "Promotes lush vegetative growth, cost-effective.",
      precautions: "Volatilizes quickly; incorporate into soil to reduce nitrogen loss."
    },
    {
      name: "Ammonium Sulphate",
      price: "₹320",
      image: "n_2",
      description: "Nitrogen fertilizer with sulfur, suitable for acidic soils.",
      unitPrice: 320,
      packaging: "50 kg",
      crops: "Paddy, sugarcane, and tea; acidic soils",
      nutrients: "21% Nitrogen, 24% Sulfur",
      usage: "Apply before planting or as basal dose.",
      benefits: "Improves protein synthesis; provides sulfur.",
      precautions: "Not ideal for alkaline soils; apply with caution in high pH."
    },
    {
      name: "Calcium Ammonium Nitrate (CAN)",
      price: "₹500",
      image: "n_3",
      description: "Granular fertilizer with quick-release nitrogen and calcium.",
      unitPrice: 500,
      packaging: "50 kg",
      crops: "Vegetables, fruits; neutral to acidic soils",
      nutrients: "27% Nitrogen, 8–10% Calcium",
      usage: "Apply as top dressing in moist soil.",
      benefits: "Improves fruit quality, neutral pH effect.",
      precautions: "Avoid overuse in already calcareous soils."
    },
    {
      name: "Ammonium Nitrate",
      price: "₹680",
      image: "n_4",
      description: "Highly soluble nitrogen fertilizer with rapid action.",
      unitPrice: 600,
      packaging: "50 kg",
      crops: "Cereal crops, vegetables; well-drained soils",
      nutrients: "33–34% Nitrogen",
      usage: "Broadcast in split doses; water immediately.",
      benefits: "Fast-acting, ideal for quick nitrogen boost.",
      precautions: "Can be explosive in large quantities; handle safely."
    },
    {
      name: "Liquid Ammonia (Anhydrous)",
      price: "₹830",
      image: "n_5",
      description: "Concentrated nitrogen source in gaseous/liquid form.",
      unitPrice: 800,
      packaging: "Bulk via tanks or pipelines",
      crops: "Commercial farming on large fields",
      nutrients: "82% Nitrogen",
      usage: "Injected into soil using applicators.",
      benefits: "Very high nitrogen content.",
      precautions: "Corrosive and hazardous; professional application required."
    },
    {
      name: "Urea Ammonium Nitrate (UAN)",
      price: "₹135",
      image: "n_6",
      description: "Liquid nitrogen fertilizer blend of urea and ammonium nitrate.",
      unitPrice: 18,
      packaging: "20L, 200L drums",
      crops: "Corn, wheat; irrigated systems",
      nutrients: "28–32% Nitrogen",
      usage: "Apply via fertigation or foliar spray.",
      benefits: "Uniform distribution; fast absorption.",
      precautions: "Can burn leaves if overapplied."
    },
    {
      name: "Diammonium Phosphate (DAP)",
      price: "₹1450",
      image: "n_7",
      description: "Contains both nitrogen and phosphorus.",
      unitPrice: 1350,
      packaging: "50 kg",
      crops: "All crops; phosphorus-deficient soils",
      nutrients: "18% N, 46% P₂O₅",
      usage: "Basal application before sowing.",
      benefits: "Boosts root development and early plant growth.",
      precautions: "Do not overapply near seeds."
    },
    {
      name: "Nitrophosphate",
      price: "₹950",
      image: "n_8",
      description: "Complex fertilizer containing nitrogen and phosphorus.",
      unitPrice: 950,
      packaging: "50 kg",
      crops: "Cereals, pulses, and oilseeds",
      nutrients: "20% N, 20% P₂O₅",
      usage: "Apply as basal dose.",
      benefits: "Balanced nutrition for early stages.",
      precautions: "Store in dry place; avoid wet conditions."
    },
    {
      name: "Ammonium Chloride",
      price: "₹250",
      image: "n_9",
      description: "Nitrogen source with chlorine; used in specific crops.",
      unitPrice: 250,
      packaging: "50 kg",
      crops: "Paddy, sugarcane; not suitable for chloride-sensitive crops",
      nutrients: "25% Nitrogen",
      usage: "Basal or top dressing.",
      benefits: "Effective for crops tolerant to chlorine.",
      precautions: "Avoid on potato, tobacco, and citrus."
    },
    {
      name: "Urea Coated with Neem (NCU)",
      price: "₹270",
      image: "n_10",
      description: "Neem-coated urea for slow nitrogen release.",
      unitPrice: 270,
      packaging: "45 kg",
      crops: "All crops; nitrogen-leaching soils",
      nutrients: "46% Nitrogen",
      usage: "Apply in split doses.",
      benefits: "Reduces nitrogen loss, increases efficiency.",
      precautions: "Store away from moisture."
    },
    {
      name: "Controlled Release Urea",
      price: "₹1200",
      image: "n_11",
      description: "Urea with polymer coating for prolonged nitrogen availability.",
      unitPrice: 1000,
      packaging: "50 kg",
      crops: "High-value crops, vegetables",
      nutrients: "44–46% Nitrogen",
      usage: "Single application per season.",
      benefits: "Reduces application frequency; long-lasting.",
      precautions: "Avoid damage to coating; handle gently."
    },
    {
      name: "Urea Super Granules (USG)",
      price: "₹25",
      image: "n_12",
      description: "Large-sized urea granules placed deep in soil.",
      unitPrice: 20,
      packaging: "1 kg, 10 kg",
      crops: "Rice; flood-prone areas",
      nutrients: "46% Nitrogen",
      usage: "Deep placement near root zone using applicators.",
      benefits: "Reduces nitrogen loss in flooded conditions.",
      precautions: "Manual placement needed."
    },
    {
      name: "NPK 20-10-10",
      price: "₹1200",
      image: "n_13",
      description: "Complex fertilizer with high nitrogen content.",
      unitPrice: 1200,
      packaging: "50 kg",
      crops: "Vegetables, cereals",
      nutrients: "20% N, 10% P₂O₅, 10% K₂O",
      usage: "Apply before sowing and at vegetative stage.",
      benefits: "Balanced nutrient supply with nitrogen dominance.",
      precautions: "Avoid overuse; follow soil test results."
    },
    {
      name: "NPK 28-28-0",
      price: "₹1400",
      image: "n_14",
      description: "Complex fertilizer with high nitrogen and phosphorus.",
      unitPrice: 1300,
      packaging: "50 kg",
      crops: "Pulses, maize, oilseeds",
      nutrients: "28% N, 28% P₂O₅",
      usage: "Apply as basal dose.",
      benefits: "High early-stage nutrition.",
      precautions: "Avoid contact with seeds during sowing."
    },
    {
      name: "NPK 30-10-10 (High-N Nitrofert)",
      price: "₹1600",
      image: "n_15",
      description: "Specialty fertilizer for leafy crops.",
      unitPrice: 1400,
      packaging: "50 kg",
      crops: "Spinach, cabbage, and other leafy vegetables",
      nutrients: "30% N, 10% P, 10% K",
      usage: "Apply at vegetative stage.",
      benefits: "Enhances leaf growth and green color.",
      precautions: "Excess can lead to nitrate accumulation."
    },
    {
      name: "Urea Briquettes",
      price: "₹80",
      image: "n_16",
      description: "Pressed form of urea for deep placement.",
      unitPrice: 80,
      packaging: "1 kg, 10 kg",
      crops: "Rice; clayey and loamy soils",
      nutrients: "46% Nitrogen",
      usage: "Deep placement between rows using a briquette applicator.",
      benefits: "Minimizes nitrogen loss; boosts yield.",
      precautions: "Manual labor or applicator needed."
    }
  
];

const MONGO_URI = "mongodb://127.0.0.1:27017/fertilizerDB";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
    await Fertilizer.insertMany(fertilizers);
    console.log("🎉 Inserted 16 fertilizers into 'nitrogen' collection");
  } catch (err) {
    console.error("❌ Error inserting:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();