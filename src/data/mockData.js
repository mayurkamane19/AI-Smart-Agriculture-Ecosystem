// KrishiVerse AI - Comprehensive Mock Dataset for Offline & Live Operations

export const LANGUAGES = {
  hi: { name: "हिंदी (Hindi)", flag: "🇮🇳" },
  mr: { name: "मराठी (Marathi)", flag: "🇮🇳" },
  te: { name: "తెలుగు (Telugu)", flag: "🇮🇳" },
  en: { name: "English", flag: "🇬🇧" }
};

export const TRANSLATIONS = {
  hi: {
    welcome: "कृषिवर्स AI में आपका स्वागत है",
    tagline: "हर किसान को सशक्त बनाने वाला एक AI प्लेटफॉर्म",
    cropDoctor: "AI फसल डॉक्टर (YOLOv11)",
    soilAnalyzer: "AI मृदा विश्लेषक",
    farmPlanner: "AI फार्म प्लानर",
    irrigationPlanner: "AI सिंचाई योजना",
    marketIntel: "AI मंडी भाव व पूर्वानुमान",
    voiceAssistant: "AI वॉयस असिस्टेंट",
    digitalPassport: "एग्री डिजिटल पासपोर्ट",
    digitalTwin: "AI डिजिटल ट्विन फार्म",
    multiAgent: "मल्टी-एजेंट AI",
    expenses: "व्यय व लाभ प्रबंधक",
    govtSchemes: "सरकारी योजनाएं",
    marketplace: "कृषि बाज़ार",
    iotSensors: "IoT सेंसर टेलीमेट्री",
    droneScan: "ड्रोन हवाई निरीक्षण",
    satelliteNDVI: "सैटेलाइट NDVI मॉनिटर",
    emergencySOS: "आपातकालीन SOS",
    officerDashboard: "कृषि अधिकारी डैशबोर्ड",
    adminPanel: "एडमिन नियंत्रण केंद्र"
  },
  mr: {
    welcome: "कृषिव्हर्स AI मध्ये आपले स्वागत आहे",
    tagline: "प्रत्येक शेतकऱ्याला सक्षम करणारे AI व्यासपीठ",
    cropDoctor: "AI पीक डॉक्टर (YOLOv11)",
    soilAnalyzer: "AI माती विश्लेषक",
    farmPlanner: "AI शेती नियोजन",
    irrigationPlanner: "AI पाणी व्यवस्थापन",
    marketIntel: "AI बाजारभाव व अंदाज",
    voiceAssistant: "AI व्हॉइस असिस्टंट",
    digitalPassport: "अ‍ॅग्री डिजिटल पासपोर्ट",
    digitalTwin: "AI डिजिटल ट्विन फार्म",
    multiAgent: "मल्टी-एजंट AI",
    expenses: "खर्च व नफा व्यवस्थापक",
    govtSchemes: "शासकीय योजना",
    marketplace: "कृषी बाजारपेठ",
    iotSensors: "IoT सेन्सर्स",
    droneScan: "ड्रोन पाहणी",
    satelliteNDVI: "उपग्रह NDVI निरीक्षण",
    emergencySOS: "आणीबाणी SOS",
    officerDashboard: "कृषी अधिकारी डॅशबोर्ड",
    adminPanel: "अ‍ॅडमिन नियंत्रण"
  },
  te: {
    welcome: "కృషివర్స్ AI కి స్వాగతం",
    tagline: "ప్రతి రైతును సాధికారపరిచే ఏకైక AI వేదిక",
    cropDoctor: "AI పంట డాక్టర్ (YOLOv11)",
    soilAnalyzer: "AI నేల విశ్లేషణ",
    farmPlanner: "AI ఫారమ్ ప్లానర్",
    irrigationPlanner: "AI నీటి పారుదల ప్రణాళిక",
    marketIntel: "AI మార్కెట్ ధరలు",
    voiceAssistant: "AI వాయిస్ అసిస్టెంట్",
    digitalPassport: "అగ్రి డిజిటల్ పాస్‌పోర్ట్",
    digitalTwin: "AI డిజిటల్ ట్విన్",
    multiAgent: "మల్టీ-ఏజెంట్ AI",
    expenses: "ఖర్చులు & లాభం",
    govtSchemes: "ప్రభుత్వ పథకాలు",
    marketplace: "వ్యవసాయ మార్కెట్",
    iotSensors: "IoT సెన్సార్లు",
    droneScan: "డ్రోన్ తనిఖీ",
    satelliteNDVI: "శాటిలైట్ NDVI",
    emergencySOS: "అత్యవసర SOS",
    officerDashboard: "వ్యవసాయ అధికారి డాష్‌బోర్డ్",
    adminPanel: "అడ్మిన్ ప్యానెల్"
  },
  en: {
    welcome: "Welcome to KrishiVerse AI",
    tagline: "One AI Platform to Empower Every Farmer",
    cropDoctor: "AI Crop Doctor (YOLOv11)",
    soilAnalyzer: "AI Soil Analyzer",
    farmPlanner: "AI Farm Planner",
    irrigationPlanner: "AI Irrigation Planner",
    marketIntel: "AI Market Intelligence",
    voiceAssistant: "AI Voice Assistant",
    digitalPassport: "Agri Digital Passport",
    digitalTwin: "AI Digital Twin Farm",
    multiAgent: "Multi-Agent AI Engine",
    expenses: "Expense & ROI Manager",
    govtSchemes: "Government Schemes",
    marketplace: "Agri Marketplace",
    iotSensors: "IoT Live Sensors",
    droneScan: "Drone Aerial Scan",
    satelliteNDVI: "Satellite NDVI Monitor",
    emergencySOS: "Emergency SOS",
    officerDashboard: "Agriculture Officer Dashboard",
    adminPanel: "Admin Control Center"
  }
};

export const MOCK_DISEASE_SAMPLES = [
  {
    id: "early_blight",
    name: "Tomato Early Blight",
    pathogen: "Alternaria solani",
    confidence: 0.984,
    category: "Fungal Infection",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23edf?auto=format&fit=crop&w=600&q=80",
    boxes: [{ label: "Early Blight Spot", x: 25, y: 30, w: 45, h: 40 }],
    organic: "Spray 5ml/L Neem Oil + Trichoderma viride bio-fungicide weekly.",
    chemical: "Apply Mancozeb 75% WP @ 2g/L water during low sun hours.",
    precautions: "Drip irrigate to avoid wetting leaves. Remove lower 15cm foliage.",
    stores: [
      { name: "Kisan Krishi Kendra", dist: "2.4 km", phone: "+91 98765 43210" },
      { name: "Pune Agro Services", dist: "4.1 km", phone: "+91 98123 45678" }
    ]
  },
  {
    id: "yellow_curl",
    name: "Tomato Leaf Curl Virus",
    pathogen: "Begomovirus (Whitefly)",
    confidence: 0.962,
    category: "Viral Infection",
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80",
    boxes: [{ label: "Curled Leaf Tissue", x: 15, y: 20, w: 65, h: 55 }],
    organic: "Deploy 12 Yellow Sticky Traps/acre. Spray Sour Milk Extract.",
    chemical: "Imidacloprid 17.8% SL @ 0.5ml/L to control whiteflies.",
    precautions: "Destroy heavily infected plants immediately to prevent swarm spread.",
    stores: [
      { name: "Krishi Vikas Kendra", dist: "1.8 km", phone: "+91 98999 00011" }
    ]
  },
  {
    id: "cotton_rust",
    name: "Cotton Leaf Rust",
    pathogen: "Puccinia cacabata",
    confidence: 0.978,
    category: "Fungal Rust",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
    boxes: [{ label: "Rust Pustules", x: 30, y: 25, w: 40, h: 45 }],
    organic: "Spray Panchagavya 3% solution or Garlic extract.",
    chemical: "Propiconazole 25% EC @ 1ml/L water.",
    precautions: "Ensure optimal field drainage after heavy monsoon rain.",
    stores: [
      { name: "Vidarbha Agro Store", dist: "3.2 km", phone: "+91 97654 32109" }
    ]
  }
];

export const MOCK_MANDI_PRICES = [
  { commodity: "Tomato (Hybrid)", mandi: "Azadpur, Delhi", price: 3450, change: "+8.4%", forecast15d: 3850, bestSellDate: "Nov 18" },
  { commodity: "Wheat (Lok-1)", mandi: "APMC Pune, MH", price: 2850, change: "+2.1%", forecast15d: 2980, bestSellDate: "Nov 22" },
  { commodity: "Soyabean (JS 335)", mandi: "Indore, MP", price: 4620, change: "-1.5%", forecast15d: 4800, bestSellDate: "Dec 02" },
  { commodity: "Cotton (Medium)", mandi: "Rajkot, Gujarat", price: 7100, change: "+4.2%", forecast15d: 7450, bestSellDate: "Nov 25" },
  { commodity: "Onion (Red)", mandi: "Lasalgaon, Nashik", price: 2150, change: "+12.8%", forecast15d: 2600, bestSellDate: "Nov 15" }
];

export const MOCK_GOVT_SCHEMES = [
  {
    id: "pmkisan",
    title: "PM-Kisan Samman Nidhi",
    benefit: "₹6,000 / year direct benefit transfer in 3 installments",
    eligibility: "Small and marginal farmers holding land up to 2 hectares",
    applyUrl: "https://pmkisan.gov.in",
    status: "Eligible"
  },
  {
    id: "pmfby",
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    benefit: "Crop insurance coverage with only 1.5% - 2% premium",
    eligibility: "All farmers growing notified crops in notified areas",
    applyUrl: "https://pmfby.gov.in",
    status: "Eligible"
  },
  {
    id: "soilhealth",
    title: "National Soil Health Card Scheme",
    benefit: "Free comprehensive soil nutrient testing every 2 years",
    eligibility: "Open to all agricultural land owners in India",
    applyUrl: "https://soilhealth.dac.gov.in",
    status: "Claimed"
  },
  {
    id: "solar_pump",
    title: "PM-KUSUM Solar Pump Subsidy",
    benefit: "60% subsidy on stand-alone solar agriculture pumps",
    eligibility: "Farmers with agricultural land and valid grid connection request",
    applyUrl: "https://pmkusum.mnre.gov.in",
    status: "Eligible"
  }
];

export const MOCK_HOTSPOTS = [
  { id: 1, lat: 18.5204, lng: 73.8567, village: "Shirur", disease: "Tomato Early Blight", count: 24, status: "Critical Red" },
  { id: 2, lat: 18.6298, lng: 73.7997, village: "Chakan", disease: "Whitefly Swarm", count: 14, status: "Warning Yellow" },
  { id: 3, lat: 18.4088, lng: 73.9145, village: "Saswad", disease: "Onion Downy Mildew", count: 31, status: "Critical Red" },
  { id: 4, lat: 18.7543, lng: 73.8900, village: "Rajgurunagar", disease: "Drought Stress Zone", count: 42, status: "Drought Warning" }
];
