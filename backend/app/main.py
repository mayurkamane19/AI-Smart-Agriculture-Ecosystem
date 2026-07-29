from fastapi import FastAPI, UploadFile, File, Form, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from backend.app.config import settings
from backend.app.services.yolo_service import yolo_engine
from backend.app.services.multi_agent_service import multi_agent_engine
from backend.app.services.digital_passport_service import digital_passport_engine
from backend.app.auth.jwt import create_access_token

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Enterprise AI Operating System for Smart Agriculture"
)

# Enable CORS for Next.js / React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "system": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "docs_url": "/docs",
        "api_v1": settings.API_V1_STR
    }

# ----------------- AUTHENTICATION -----------------
@app.post(f"{settings.API_V1_STR}/auth/login")
def login(username: str = Form(...), password: str = Form(...), role: str = Form("farmer")):
    # Demo authentication logic
    token = create_access_token(subject=username, role=role)
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "name": username,
            "role": role,
            "village": "Rampur",
            "district": "Pune",
            "state": "Maharashtra"
        }
    }

# ----------------- AI CROP DOCTOR (YOLOv11) -----------------
@app.post(f"{settings.API_V1_STR}/ai/crop-doctor")
async def scan_leaf_disease(
    file: Optional[UploadFile] = File(None),
    crop_type: str = Form("tomato")
):
    image_bytes = await file.read() if file else b""
    result = yolo_engine.detect_disease(image_bytes, crop_hint=crop_type)
    return result

# ----------------- MULTI-AGENT AI -----------------
@app.post(f"{settings.API_V1_STR}/ai/multi-agent")
def run_multi_agent_pipeline(soil_ph: float = 6.8, land_acres: float = 2.5, budget: float = 50000.0):
    context = {"soil_ph": soil_ph, "land_acres": land_acres, "budget": budget}
    result = multi_agent_engine.execute_pipeline(context)
    return result

# ----------------- AGRI DIGITAL PASSPORT -----------------
@app.get(f"{settings.API_V1_STR}/passport/{{farm_id}}")
def get_agri_passport(farm_id: str, farmer_name: str = "Ramesh Patel", land_acres: float = 2.5):
    passport = digital_passport_engine.generate_passport(farm_id, farmer_name, land_acres)
    return passport

# ----------------- OFFICER VILLAGE ANALYTICS -----------------
@app.get(f"{settings.API_V1_STR}/officer/village-analytics")
def get_village_analytics(village: str = "Rampur"):
    return {
        "village": village,
        "total_farmers": 1420,
        "total_acres": 3850,
        "disease_outbreaks": [
            {"crop": "Tomato", "disease": "Early Blight", "affected_acres": 42, "severity": "Medium"},
            {"crop": "Cotton", "disease": "Pink Bollworm", "affected_acres": 15, "severity": "High"}
        ],
        "yield_prediction_tonnes": 14200,
        "water_table_status": "Normal (18 meters)",
        "active_sos_alerts": 1
    }

# ----------------- ADMIN AI MODEL MONITORING -----------------
@app.get(f"{settings.API_V1_STR}/admin/ai-monitoring")
def get_ai_monitoring_logs():
    return {
        "yolov11_stats": {"avg_latency_ms": 112, "accuracy_score": "98.4%", "scans_today": 4820},
        "gemini_stats": {"token_usage_today": 1420500, "avg_response_sec": 1.2, "status": "Healthy"},
        "langgraph_stats": {"workflows_completed": 890, "success_rate": "99.2%"},
        "system_health": "100% Operational"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8000, reload=True)
