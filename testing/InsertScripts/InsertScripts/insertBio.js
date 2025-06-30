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

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema, "bio"); 
const fertilizers = [
  {
    name: "Rhizobium",
    price: "₹150 per packet",
    image: "bio_1",
    description: "Symbiotic nitrogen-fixing bacteria that form nodules on legume roots.",
    unitPrice: 150,
    packaging: "250g, 500g",
    crops: "Leguminous crops like chickpea, pigeon pea, lentil, groundnut",
    nutrients: "Fixes atmospheric nitrogen",
    usage: "Seed treatment before sowing",
    benefits: "Enhances nitrogen availability, improves soil fertility",
    precautions: "Avoid exposure to direct sunlight; store in a cool, dry place"
  },
  {
    name: "Azotobacter",
    price: "₹250 per 250g packet",
    image: "bio_2",
    description: "Free-living nitrogen-fixing bacteria.",
    unitPrice: 250,
    packaging: "250g, 500g",
    crops: "Non-leguminous crops like wheat, maize, cotton, vegetables",
    nutrients: "Fixes atmospheric nitrogen",
    usage: "Seed treatment or soil application",
    benefits: "Promotes plant growth, improves soil health",
    precautions: "Store in a cool, dry place; avoid mixing with chemical fertilizers"
  },
  {
    name: "Azospirillum",
    price: "₹110 per 250g packet",
    image: "bio_3",
    description: "Associative nitrogen-fixing bacteria that colonize the rhizosphere.",
    unitPrice: 110,
    packaging: "250g, 500g",
    crops: "Cereals like rice, maize, sorghum",
    nutrients: "Fixes atmospheric nitrogen",
    usage: "Seed treatment or soil application",
    benefits: "Enhances root development, increases yield",
    precautions: "Avoid exposure to high temperatures; store properly"
  },
  {
    name: "Acetobacter",
    price: "₹150 per 250g packet",
    image: "bio_4",
    description: "Nitrogen-fixing bacteria beneficial for sugarcane and other crops.",
    unitPrice: 150,
    packaging: "250g, 500g",
    crops: "Sugarcane, sweet potato",
    nutrients: "Fixes atmospheric nitrogen",
    usage: "Soil application or seedling dip",
    benefits: "Improves sugar content, enhances growth",
    precautions: "Store in a cool place; avoid mixing with pesticides"
  },
  {
    name: "Blue-Green Algae (BGA)",
    price: "₹150 per 1kg",
    image: "bio_5",
    description: "Photosynthetic cyanobacteria that fix nitrogen.",
    unitPrice: 150,
    packaging: "1 kg, 5 kg",
    crops: "Paddy fields; waterlogged soils",
    nutrients: "Fixes atmospheric nitrogen",
    usage: "Broadcast in standing water during early crop stages",
    benefits: "Enhances soil fertility, reduces need for chemical nitrogen fertilizers",
    precautions: "Apply in moist conditions; avoid dry soils"
  },
  {
    name: "Azolla-Anabaena Symbiosis",
    price: "₹250 per 1kg",
    image: "bio_6",
    description: "Water fern hosting nitrogen-fixing cyanobacteria.",
    unitPrice: 250,
    packaging: "1 kg, 5 kg",
    crops: "Rice paddies; waterlogged soils",
    nutrients: "Fixes atmospheric nitrogen",
    usage: "Incorporate into fields before transplanting rice",
    benefits: "Improves nitrogen content, enhances soil organic matter",
    precautions: "Maintain adequate water levels; avoid dry conditions"
  },
  {
    name: "Phosphate Solubilizing Bacteria (PSB)",
    price: "₹150 per 250g packet",
    image: "bio_7",
    description: "Microorganisms that convert insoluble phosphorus to soluble forms.",
    unitPrice: 150,
    packaging: "250g, 500g",
    crops: "All crops; phosphorus-deficient soils",
    nutrients: "Solubilizes bound phosphates",
    usage: "Seed treatment or soil application",
    benefits: "Enhances phosphorus availability, promotes root development",
    precautions: "Avoid mixing with chemical phosphorus fertilizers"
  },
  {
    name: "Potash Mobilizing Bacteria (KMB)",
    price: "₹115",
    image: "bio_8",
    description: "Microbes that mobilize potassium from soil minerals.",
    unitPrice: 115,
    packaging: "250g, 500g",
    crops: "All crops; potassium-deficient soils",
    nutrients: "Mobilizes soil potassium",
    usage: "Soil application during land preparation",
    benefits: "Improves potassium uptake, enhances crop quality",
    precautions: "Store in a cool, dry place; avoid direct sunlight"
  },
  {
    name: "Mycorrhizal Fungi (VAM)",
    price: "₹350 per 1kg",
    image: "bio_9",
    description: "Fungi forming symbiotic associations with plant roots.",
    unitPrice: 350,
    packaging: "1 kg, 5 kg",
    crops: "Horticultural crops, trees; various soils",
    nutrients: "Enhances uptake of phosphorus and micronutrients",
    usage: "Soil application near root zones",
    benefits: "Improves nutrient absorption, enhances drought resistance",
    precautions: "Avoid deep plowing post-application; store properly"
  },
  {
    name: "Trichoderma spp.",
    price: "₹150 per 1kg",
    image: "bio_10",
    description: "Fungi with biocontrol properties against soil-borne pathogens.",
    unitPrice: 150,
    packaging: "1 kg, 5 kg",
    crops: "All crops; disease-prone soils",
    nutrients: "Produces enzymes that degrade pathogen cell walls",
    usage: "Soil application or seed treatment",
    benefits: "Suppresses diseases, promotes plant growth",
    precautions: "Avoid mixing with chemical fungicides; store in cool conditions"
  },
  {
    name: "Pseudomonas fluorescens",
    price: "₹150.5 per 1kg",
    image: "bio_11",
    description: "Beneficial bacteria with plant growth-promoting properties.",
    unitPrice: 150.5,
    packaging: "1 kg, 5 kg",
    crops: "Vegetables, cereals; various soils",
    nutrients: "Produces siderophores and antibiotics",
    usage: "Seed treatment or soil application",
    benefits: "Enhances nutrient uptake, suppresses pathogens",
    precautions: "Store away from direct sunlight; avoid chemical pesticide mixing"
  },
  {
    name: "Bacillus subtilis",
    price: "₹180 per 1kg",
    image: "bio_12",
    description: "Soil bacterium with biocontrol and growth-promoting abilities.",
    unitPrice: 180,
    packaging: "1 kg, 5 kg",
    crops: "All crops, especially vegetables, pulses, and cereals",
    nutrients: "Produces enzymes and antibiotics; promotes nutrient solubilization and root development",
    usage: "Seed treatment, soil drench, or root dip; 5–10 kg/acre",
    benefits: "Controls soil-borne pathogens like Fusarium and Pythium; improves plant vigor",
    precautions: "Do not mix with chemical fungicides; store in a dry, cool place away from sunlight"
  },
  {
    name: "Frankia spp.",
    price: "₹200 per 250g packet",
    image: "bio_13",
    description: "Nitrogen-fixing actinobacteria that form root nodules in non-leguminous trees.",
    unitPrice: 250,
    packaging: "250g, 500g",
    crops: "Trees like Casuarina, Alnus, and Myrica",
    nutrients: "Fixes atmospheric nitrogen",
    usage: "Apply as root dip during plantation or direct soil application",
    benefits: "Improves soil fertility in afforestation and agroforestry projects",
    precautions: "Not suitable for legumes; avoid chemical inputs after application"
  },
  {
    name: "Beauveria bassiana",
    price: "₹250 per 1kg",
    image: "bio_14",
    description: "Entomopathogenic fungus used as a bio-insecticide.",
    unitPrice: 250,
    packaging: "1 kg, 5 kg",
    crops: "Vegetables, fruit trees, cotton, and ornamental plants",
    nutrients: "Not a nutrient fertilizer but acts as a biological pest control agent",
    usage: "Spray at 2–5 gm/liter of water or 1 kg/acre",
    benefits: "Kills insect pests like whiteflies, aphids, and mealybugs",
    precautions: "Use in humid conditions; avoid direct sun exposure after application"
  },
  {
    name: "Verticillium lecanii",
    price: "₹200 per 1kg",
    image: "bio_15",
    description: "Fungus used as a bio-control agent against soft-bodied insects.",
    unitPrice: 200,
    packaging: "1 kg",
    crops: "Vegetables, flowers, fruits",
    nutrients: "Controls pests rather than supplying nutrients",
    usage: "Foliar spray: 2–4 gm/liter of water",
    benefits: "Controls aphids, thrips, and whiteflies; environmentally safe",
    precautions: "Apply during high humidity; avoid use with chemical pesticides"
  },
  {
    name: "Metarhizium anisopliae",
    price: "₹300 per 1kg",
    image: "bio_16",
    description: "Bio-insecticide fungus that infects soil-dwelling insect pests.",
    unitPrice: 300,
    packaging: "1 kg, 5 kg",
    crops: "Sugarcane, maize, cotton, and rice",
    nutrients: "Fungal spores act on pests, not nutrients",
    usage: "Apply 1–2 kg/acre mixed with compost or as spray",
    benefits: "Kills termites, root grubs, and stem borers naturally",
    precautions: "Store in dry, cool places; apply in early hours or cloudy weather"
  },
  
];

const MONGO_URI = "mongodb://127.0.0.1:27017/fertilizerDB";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
    await Fertilizer.insertMany(fertilizers);
    console.log("🎉 Inserted 16 fertilizers into 'bio' collection");
  } catch (err) {
    console.error("❌ Error inserting:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();