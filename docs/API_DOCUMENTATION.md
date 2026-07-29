# KrishiVerse AI - REST & WebSocket API Documentation

## Base URL
`http://localhost:8000/api/v1`

---

## 1. Authentication Endpoints

### `POST /auth/login`
Authenticates a user (Farmer, Officer, Admin) and returns a JWT bearer token.

**Request Body (`multipart/form-data`):**
```json
{
  "username": "9876543210",
  "password": "farmer_password",
  "role": "farmer"
}
```

**Response (200 OK):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1Ni...",
  "token_type": "bearer",
  "user": {
    "name": "Ramesh Patel",
    "role": "farmer",
    "village": "Rampur",
    "district": "Pune"
  }
}
```

---

## 2. AI Crop Doctor (YOLOv11 Computer Vision)

### `POST /ai/crop-doctor`
Uploads a leaf image for YOLOv11 disease, pest, and nutrient deficiency detection.

**Request Body (`multipart/form-data`):**
- `file`: Image binary (JPEG/PNG)
- `crop_type`: `tomato` | `cotton` | `wheat` | `rice`

**Response (200 OK):**
```json
{
  "success": true,
  "crop": "Tomato",
  "detected_disease": "Early Blight (Alternaria solani)",
  "category": "Fungal Infection",
  "confidence_score": 0.9845,
  "confidence_percent": "98.5%",
  "severity": "Medium",
  "organic_treatment": "Spray Neem Oil (5ml/L water)...",
  "chemical_treatment": "Apply Mancozeb 75% WP @ 2g/L...",
  "precautions": "Avoid overhead irrigation...",
  "bounding_boxes": [
    {
      "label": "Early Blight",
      "confidence": 0.9845,
      "box": [120, 85, 340, 410]
    }
  ],
  "model_version": "YOLOv11-Agri-v3.2",
  "inference_time_ms": 112
}
```

---

## 3. Multi-Agent AI Decision Pipeline

### `POST /ai/multi-agent`
Executes the 7-agent sequential LangGraph pipeline:
`Weather Agent` ➔ `Soil Agent` ➔ `Crop Agent` ➔ `Disease Agent` ➔ `Market Agent` ➔ `Finance Agent` ➔ `Government Scheme Agent` ➔ `Master AI`

**Response (200 OK):**
```json
{
  "success": true,
  "execution_pipeline": [ ... ],
  "master_ai_recommendation": "FOR 2.5 ACRES FARM: Plant Hybrid Tomato...",
  "pipeline_latency_ms": 284,
  "agent_count": 7
}
```

---

## 4. Agri Digital Passport (1st Prize Feature)

### `GET /passport/{farm_id}`
Retrieves farm's digital passport, carbon footprint, QR code hash, and AI Health Score.

**Response (200 OK):**
```json
{
  "passport_id": "PASSPORT-KV-A491F",
  "farm_id": "farm-101",
  "farmer_name": "Ramesh Patel",
  "qr_hash": "KV-PASSPORT-A491F92B",
  "ai_health_score": 92.5,
  "carbon_footprint": {
    "rating": "A+ (Eco-Certified)",
    "co2_sequestration_tons_per_year": 4.5
  }
}
```
