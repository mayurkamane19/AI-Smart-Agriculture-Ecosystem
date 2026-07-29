-- KrishiVerse AI Enterprise Database Schema
-- Compatible with PostgreSQL 14+ / PostGIS

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User Enums
CREATE TYPE user_role AS ENUM ('farmer', 'officer', 'admin');
CREATE TYPE farm_type AS ENUM ('irrigated', 'rainfed', 'greenhouse', 'organic');
CREATE TYPE severity_level AS ENUM ('low', 'medium', 'high', 'critical');
CREATE TYPE sos_status AS ENUM ('pending', 'dispatched', 'resolved');

-- 1. Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(120) NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    email VARCHAR(120) UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    role user_role DEFAULT 'farmer',
    aadhaar_number VARCHAR(12) UNIQUE,
    village VARCHAR(100),
    district VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    preferred_language VARCHAR(10) DEFAULT 'hi',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Farms Table
CREATE TABLE farms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farmer_id UUID REFERENCES users(id) ON DELETE CASCADE,
    farm_name VARCHAR(100) NOT NULL,
    land_size_acres NUMERIC(8,2) NOT NULL,
    soil_type VARCHAR(50),
    type farm_type DEFAULT 'irrigated',
    latitude NUMERIC(10,8),
    longitude NUMERIC(11,8),
    village VARCHAR(100),
    district VARCHAR(100),
    state VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Agri Digital Passport Table (1st Prize Unique Feature)
CREATE TABLE agri_digital_passports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farm_id UUID UNIQUE REFERENCES farms(id) ON DELETE CASCADE,
    passport_qr_hash VARCHAR(255) NOT NULL,
    ai_health_score NUMERIC(5,2) DEFAULT 85.00,
    carbon_footprint_rating VARCHAR(10) DEFAULT 'A+',
    soil_ph NUMERIC(4,2) DEFAULT 6.8,
    nitrogen_level NUMERIC(6,2) DEFAULT 140.0,
    phosphorus_level NUMERIC(6,2) DEFAULT 45.0,
    potassium_level NUMERIC(6,2) DEFAULT 180.0,
    organic_carbon_percent NUMERIC(4,2) DEFAULT 0.75,
    water_efficiency_score NUMERIC(5,2) DEFAULT 91.5,
    verified_by_officer BOOLEAN DEFAULT TRUE,
    issued_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Crop Cycles Table
CREATE TABLE crop_cycles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farm_id UUID REFERENCES farms(id) ON DELETE CASCADE,
    crop_name VARCHAR(100) NOT NULL,
    variety VARCHAR(100),
    sowing_date DATE NOT NULL,
    expected_harvest_date DATE,
    actual_harvest_date DATE,
    area_allocated_acres NUMERIC(6,2),
    expected_yield_quintals NUMERIC(8,2),
    actual_yield_quintals NUMERIC(8,2),
    status VARCHAR(30) DEFAULT 'active' -- active, harvested, failed
);

-- 5. AI Leaf Disease Scans (YOLOv11 Detection Logs)
CREATE TABLE leaf_disease_scans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farmer_id UUID REFERENCES users(id) ON DELETE CASCADE,
    farm_id UUID REFERENCES farms(id),
    image_url VARCHAR(500) NOT NULL,
    detected_disease VARCHAR(150) NOT NULL,
    confidence_score NUMERIC(5,4) NOT NULL, -- e.g. 0.9845
    affected_area_percentage NUMERIC(5,2),
    organic_treatment TEXT,
    chemical_treatment TEXT,
    precautions TEXT,
    yolo_boxes_json JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Mandi Market Intelligence Prices
CREATE TABLE mandi_prices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    commodity VARCHAR(100) NOT NULL,
    variety VARCHAR(100),
    mandi_name VARCHAR(150) NOT NULL,
    district VARCHAR(100),
    state VARCHAR(100),
    min_price_per_quintal NUMERIC(10,2) NOT NULL,
    max_price_per_quintal NUMERIC(10,2) NOT NULL,
    modal_price_per_quintal NUMERIC(10,2) NOT NULL,
    price_date DATE NOT NULL,
    ai_15day_forecast_modal NUMERIC(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Farm Expenses & Financials
CREATE TABLE farm_expenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farm_id UUID REFERENCES farms(id) ON DELETE CASCADE,
    category VARCHAR(50) NOT NULL, -- seeds, fertilizer, labor, fuel, machinery, pesticide
    amount NUMERIC(10,2) NOT NULL,
    description TEXT,
    expense_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. IoT Telemetry Stream
CREATE TABLE iot_telemetry (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farm_id UUID REFERENCES farms(id) ON DELETE CASCADE,
    sensor_id VARCHAR(50) NOT NULL,
    soil_temperature_c NUMERIC(5,2),
    soil_moisture_percent NUMERIC(5,2),
    ambient_temp_c NUMERIC(5,2),
    humidity_percent NUMERIC(5,2),
    soil_ph NUMERIC(4,2),
    nitrogen_ppm NUMERIC(6,2),
    phosphorus_ppm NUMERIC(6,2),
    potassium_ppm NUMERIC(6,2),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. Emergency SOS Alerts
CREATE TABLE emergency_sos_alerts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farmer_id UUID REFERENCES users(id) ON DELETE CASCADE,
    farm_id UUID REFERENCES farms(id),
    latitude NUMERIC(10,8) NOT NULL,
    longitude NUMERIC(11,8) NOT NULL,
    alert_type VARCHAR(50) DEFAULT 'crop_emergency', -- flood, pest_outbreak, fire, medical
    notes TEXT,
    status sos_status DEFAULT 'pending',
    assigned_officer_id UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP WITH TIME ZONE
);

-- 10. AI Model Performance & Monitoring Logs (Admin View)
CREATE TABLE ai_model_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    model_name VARCHAR(50) NOT NULL, -- YOLOv11, Gemini-Flash, LangGraph-MultiAgent
    inference_time_ms INTEGER NOT NULL,
    input_tokens INTEGER DEFAULT 0,
    output_tokens INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'success',
    error_message TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_farms_farmer ON farms(farmer_id);
CREATE INDEX idx_scans_farmer ON leaf_disease_scans(farmer_id);
CREATE INDEX idx_mandi_commodity_date ON mandi_prices(commodity, price_date);
CREATE INDEX idx_iot_farm_timestamp ON iot_telemetry(farm_id, timestamp DESC);
