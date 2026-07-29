import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "KrishiVerse AI - Smart Agriculture Ecosystem"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Security
    SECRET_KEY: str = os.getenv("SECRET_KEY", "krishiverse-secret-key-super-secure-2026")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7 # 7 days
    
    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://krishi_user:krishi_pass@localhost:5432/krishiverse_db")
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    
    # AI Models & API Keys
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "mock-gemini-key")
    YOLO_MODEL_PATH: str = os.getenv("YOLO_MODEL_PATH", "models/yolov11_crop_disease.pt")
    
    class Config:
        case_sensitive = True

settings = Settings()
