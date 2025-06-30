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

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema, "inorganic");
const MONGO_URI = 'mongodb://127.0.0.1:27017/fertilizerDB';

const fertilizers = [
    {
        name: "Urea (46-0-0)",
        price: "₹270 per 50 kg bag",
        image: "io_1",
        description: "Highly concentrated nitrogen fertilizer.",
        unitPrice: 276.12,
        packaging: "50 kg",
        crops: "All crops; especially cereals like rice and wheat.",
        nutrients: "46% Nitrogen",
        usage: "Apply during sowing and as top dressing; split doses recommended.",
        benefits: "Promotes rapid vegetative growth.",
        precautions: "Overuse can lead to nitrate leaching; store in a dry place."
      },
      {
        name: "Di-Ammonium Phosphate (DAP) (18-46-0)",
        price: "₹1300 per 50 kg bag",
        image: "io_2",
        description: "Provides both nitrogen and phosphorus.",
        unitPrice: 1350,
        packaging: "50 kg",
        crops: "All crops; especially beneficial for legumes and oilseeds.",
        nutrients: "18% Nitrogen, 46% Phosphorus",
        usage: "Apply during sowing; avoid contact with seeds.",
        benefits: "Enhances root development and flowering.",
        precautions: "Excessive use can lead to phosphorus buildup; store away from moisture."
      },
      {
        name: "Muriate of Potash (MOP) (0-0-60)",
        price: "₹850 per 50 kg bag",
        image: "io_3",
        description: "Potassium chloride; supplies potassium.",
        unitPrice: 800,
        packaging: "50 kg",
        crops: "Cereal crops, sugarcane, and vegetables.",
        nutrients: "60% Potassium",
        usage: "Apply during soil preparation or as top dressing.",
        benefits: "Improves drought resistance and disease tolerance.",
        precautions: "Not suitable for chloride-sensitive crops like tobacco and potatoes."
      },
      {
        name: "Single Super Phosphate (SSP) (16-20-0-11)",
        price: "₹350 per 50 kg bag",
        image: "io_4",
        description: "Phosphorus fertilizer with sulfur content.",
        unitPrice: 325,
        packaging: "50 kg",
        crops: "Oilseeds, pulses; sulfur-deficient soils.",
        nutrients: "16% Phosphorus, 11% Sulfur",
        usage: "Apply during land preparation.",
        benefits: "Enhances root growth and oil content in seeds.",
        precautions: "Avoid over-application; can acidify soil over time."
      },
      {
        name: "Triple Super Phosphate (TSP) (0-46-0)",
        price: "₹410 per 50 kg bag",
        image: "io_5",
        description: "Concentrated phosphorus fertilizer.",
        unitPrice: 418.60,
        packaging: "50 kg",
        crops: "All crops; phosphorus-deficient soils.",
        nutrients: "46% Phosphorus",
        usage: "Apply during sowing; incorporate into soil.",
        benefits: "Promotes strong root development.",
        precautions: "Avoid contact with seeds; can cause seedling burn."
      },
      {
        name: "Ammonium Sulphate (21-0-0-24)",
        price: "₹350 per 50 kg bag",
        image: "io_6",
        description: "Nitrogen fertilizer with sulfur.",
        unitPrice: 375,
        packaging: "50 kg",
        crops: "Rice, wheat; sulfur-deficient soils.",
        nutrients: "21% Nitrogen, 24% Sulfur",
        usage: "Apply during sowing or as top dressing.",
        benefits: "Improves protein content in crops.",
        precautions: "Can acidify soil; monitor pH levels."
      },
      {
        name: "Calcium Nitrate (15.5-0-0 + 18.5 Ca)",
        price: "₹56 per kg",
        image: "io_7",
        description: "Water-soluble fertilizer providing calcium and nitrogen.",
        unitPrice: 56,
        packaging: "1 kg, 25 kg",
        crops: "Fruit and vegetable crops; calcium-deficient soils.",
        nutrients: "15.5% Nitrogen, 18.5% Calcium",
        usage: "Apply via fertigation or foliar spray.",
        benefits: "Prevents blossom end rot in fruits.",
        precautions: "Avoid mixing with phosphates; can cause precipitation."
      },
      {
        name: "Potassium Nitrate (13-0-45)",
        price: "₹115 per kg",
        image: "io_8",
        description: "Water-soluble fertilizer supplying potassium and nitrogen.",
        unitPrice: 115,
        packaging: "1 kg, 25 kg",
        crops: "Horticultural crops, vegetables.",
        nutrients: "13% Nitrogen, 45% Potassium",
        usage: "Apply via fertigation or foliar spray.",
        benefits: "Enhances fruit quality and shelf life.",
        precautions: "Store in a cool, dry place; hygroscopic in nature."
      },
      {
        name: "NPK 12-61-0 (Mono Ammonium Phosphate)",
        price: "₹48 per kg",
        image: "io_9",
        description: "Water-soluble fertilizer rich in phosphorus and nitrogen.",
        unitPrice: 48,
        packaging: "25 kg",
        crops: "All crops; phosphorus-deficient soils.",
        nutrients: "12% Nitrogen, 61% Phosphorus",
        usage: "Foliar spray: 4-5 g/L; Fertigation: 1-3 kg/acre.",
        benefits: "Promotes root development and flowering.",
        precautions: "Do not mix with calcium or magnesium fertilizers."
      },
      {
        name: "NPK 19-19-19",
        price: "₹62 per kg",
        image: "io_10",
        description: "Balanced water-soluble fertilizer.",
        unitPrice: 62,
        packaging: "25–50 kg",
        crops: "All crops; ideal for foliar application.",
        nutrients: "19% Nitrogen, 19% Phosphorus, 19% Potassium",
        usage: "Foliar spray or fertigation as per crop requirement.",
        benefits: "Supports overall plant growth.",
        precautions: "Avoid over-application; can cause nutrient imbalance."
      },
      {
        name: "NPK 20-20-0+13S",
        price: "₹368.94 per 50 kg bag",
        image: "io_11",
        description: "Complex fertilizer with sulfur.",
        unitPrice: 368.94,
        packaging: "50 kg",
        crops: "Cereals, pulses; sulfur-deficient soils.",
        nutrients: "20% Nitrogen, 20% Phosphorus, 13% Sulfur",
        usage: "Apply during sowing.",
        benefits: "Enhances protein synthesis and oil content.",
        precautions: "Store in a dry place; avoid moisture exposure."
      },
      {
        name: "NPK 10-26-26",
        price: "₹520 per 50 kg bag",
        image: "io_12",
        description: "High phosphorus and potassium complex fertilizer.",
        unitPrice: 495,
        packaging: "50 kg",
        crops: "Sugarcane, potatoes, pulses, oilseeds; phosphorus- and potassium-deficient soils.",
        nutrients: "10% Nitrogen, 26% Phosphorus, 26% Potassium",
        usage: "Apply as a basal dose before sowing or transplanting.",
        benefits: "Supports flowering, fruiting, and tuber formation.",
        precautions: "Avoid excessive use to prevent nutrient imbalance."
      },
      {
        name: "Ammonium Nitrate (33.5-0-0)",
        price: "₹550 per 50 kg",
        image: "io_13",
        description: "Fast-acting nitrogen fertilizer.",
        unitPrice: 575,
        packaging: "50 kg",
        crops: "Cereal crops, leafy vegetables.",
        nutrients: "33.5% Nitrogen",
        usage: "Apply as top dressing; avoid direct contact with seeds.",
        benefits: "Rapid nitrogen availability for quick vegetative growth.",
        precautions: "Store securely; regulated due to potential misuse in explosives."
      },
      {
        name: "Zinc Sulphate (ZnSO₄)",
        price: "₹180 per 5 kg",
        image: "io_14",
        description: "Micronutrient fertilizer to correct zinc deficiency.",
        unitPrice: 215,
        packaging: "1 kg, 5 kg, 25 kg",
        crops: "Rice, maize, wheat, citrus fruits; zinc-deficient soils.",
        nutrients: "~21% Zinc, 10-11% Sulfur",
        usage: "Soil application: 10–25 kg/acre; foliar spray: 0.5–1%.",
        benefits: "Enhances enzyme activity, chlorophyll production.",
        precautions: "Avoid overuse; may interfere with phosphorus uptake."
      },
      {
        name: "Magnesium Sulphate (MgSO₄)",
        price: "₹35.5 per kg",
        image: "io_15",
        description: "Water-soluble magnesium and sulfur fertilizer.",
        unitPrice: 42.5,
        packaging: "1 kg, 5 kg, 25 kg",
        crops: "Citrus, banana, potato, cotton; magnesium-deficient soils.",
        nutrients: "~9.5% Magnesium, 12% Sulfur",
        usage: "Soil: 10–15 kg/acre; foliar spray: 1–2% solution.",
        benefits: "Helps in chlorophyll formation and energy production.",
        precautions: "Use only if deficiency is confirmed; excessive use may lead to soil salinity."
      },
      {
        name: "Boronated Fertilizer (e.g., Boronated SSP)",
        price: "₹340 per 50 kg bag",
        image: "io_16",
        description: "Phosphatic fertilizer enriched with boron.",
        unitPrice: 375,
        packaging: "50 kg",
        crops: "Groundnut, sunflower, cauliflower; boron-deficient soils.",
        nutrients: "16% P₂O₅, 0.2–0.5% Boron",
        usage: "Apply during land preparation or basal application.",
        benefits: "Prevents flower and fruit drop; improves root elongation.",
        precautions: "Do not overapply boron — toxicity can occur easily."
      },
  
];


(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
    await Fertilizer.insertMany(fertilizers);
    console.log("🎉 Inserted 16 fertilizers into 'inorganic' collection");
  } catch (err) {
    console.error("❌ Error inserting:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();