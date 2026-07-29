import React, { useState } from 'react';
import { MapPin, Layers, Radio, Bug, Droplets, CloudSun, Globe, Plane, Eye, Compass, Zap } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Polyline, Circle } from 'react-leaflet';

export default function SmartFarmMap() {
  const [mapMode, setMapMode] = useState('visualizer'); // visualizer, gis
  const [selectedZone, setSelectedZone] = useState(null);

  // Patel Organic Farm 2.5-Acre GIS Polygon
  const FARM_BOUNDARY = [
    [18.5215, 73.8550],
    [18.5225, 73.8580],
    [18.5195, 73.8590],
    [18.5185, 73.8560]
  ];

  // Real Farm Layout SVG Zone Data
  const SVG_ZONES = [
    { id: 'Zone A', crop: 'Hybrid Tomato (Arka Rakshak)', area: '0.8 Acres', health: '98% Excellent', moisture: '64%', color: '#10b981', x: 40, y: 40, w: 220, h: 140 },
    { id: 'Zone B', crop: 'Kalyan Sona Wheat', area: '0.7 Acres', health: '91% Good', moisture: '42%', color: '#f59e0b', x: 280, y: 40, w: 220, h: 140 },
    { id: 'Zone C', crop: 'Organic Chickpea', area: '0.6 Acres', health: '95% Healthy', moisture: '78%', color: '#06b6d4', x: 40, y: 220, w: 220, h: 140 },
    { id: 'Zone D', crop: 'Fallow / Soil Prep', area: '0.4 Acres', health: 'Dry Soil Prep', moisture: '30%', color: '#ef4444', x: 280, y: 220, w: 220, h: 140 }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-cyan-950 via-slate-950 to-slate-900 border-l-4 border-l-cyan-400 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white-pure flex items-center space-x-2">
            <span>Real Farm Layout & Spatial GIS Visualizer</span>
            <Compass className="w-6 h-6 text-cyan-400 animate-spin" />
          </h2>
          <p className="text-xs text-slate-light mt-1">
            Switch between 2D Real Farm Vector Layout and Satellite GIS Map showing Zones A/B/C/D, drip irrigation pipes, water tank, borewell, tractor road, and live IoT sensor pins.
          </p>
        </div>

        {/* View Switcher: Real Farm Layout vs Satellite GIS */}
        <div className="bg-slate-900/90 p-1.5 rounded-xl border border-slate-700 flex space-x-1">
          <button
            onClick={() => setMapMode('visualizer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center space-x-1 ${
              mapMode === 'visualizer' ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-black shadow' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>2D Real Farm Layout</span>
          </button>

          <button
            onClick={() => setMapMode('gis')}
            className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center space-x-1 ${
              mapMode === 'gis' ? 'bg-gradient-to-r from-cyan-500 to-blue-400 text-black shadow' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Satellite GIS Map</span>
          </button>
        </div>
      </div>

      {/* Main Map Container */}
      <div className="glass-panel p-5 space-y-4">
        
        {mapMode === 'visualizer' ? (
          
          /* REAL FARM VECTOR LAYOUT VISUALIZER (SVG Canvas) */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white-pure flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                <span>Patel Organic Farm Schematic Map (2.5 Acres)</span>
              </span>
              <span className="text-xs text-cyan-300 font-mono">Live Sensor Overlay Active</span>
            </div>

            <div className="relative bg-gradient-to-b from-slate-950 via-[#0a1610] to-slate-950 rounded-2xl border-2 border-emerald-500/40 p-4 shadow-2xl overflow-hidden min-h-[440px]">
              
              <svg viewBox="0 0 540 400" className="w-full h-auto">
                {/* Outer Farmland Boundary */}
                <rect x="20" y="20" width="500" height="360" rx="16" fill="rgba(6, 78, 59, 0.2)" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 4" />

                {/* Tractor Road */}
                <path d="M 20,190 L 520,190" stroke="#64748b" strokeWidth="12" strokeDasharray="4 2" />
                <text x="230" y="194" fill="#cbd5e1" fontSize="10" fontWeight="bold">🚜 Main Tractor Farm Road</text>

                {/* Drip Irrigation Pipe Polyline */}
                <path d="M 40,110 L 500,110 M 40,290 L 500,290" stroke="#38bdf8" strokeWidth="3" strokeDasharray="8 4" className="animate-pulse" />
                <text x="40" y="102" fill="#38bdf8" fontSize="9" fontWeight="bold">💧 Main Blue Drip Line #1</text>
                <text x="40" y="282" fill="#38bdf8" fontSize="9" fontWeight="bold">💧 Main Blue Drip Line #2</text>

                {/* Zone A: Tomato */}
                <rect x="40" y="40" width="220" height="140" rx="12" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth="2" className="cursor-pointer hover:fill-emerald-500/40 transition-all" onClick={() => setSelectedZone(SVG_ZONES[0])} />
                <text x="50" y="65" fill="#ffffff" fontSize="12" fontWeight="extrabold">🌱 Zone A: Tomato Plot</text>
                <text x="50" y="82" fill="#a7f3d0" fontSize="10">Arka Rakshak • 0.8 Acres</text>
                <circle cx="230" cy="65" r="10" fill="#10b981" />
                <text x="226" y="69" fill="#000" fontSize="9" fontWeight="bold">📡</text>

                {/* Zone B: Wheat */}
                <rect x="280" y="40" width="220" height="140" rx="12" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" strokeWidth="2" className="cursor-pointer hover:fill-amber-500/40 transition-all" onClick={() => setSelectedZone(SVG_ZONES[1])} />
                <text x="290" y="65" fill="#ffffff" fontSize="12" fontWeight="extrabold">🌾 Zone B: Wheat Plot</text>
                <text x="290" y="82" fill="#fde68a" fontSize="10">Lok-1 Variety • 0.7 Acres</text>
                <circle cx="470" cy="65" r="10" fill="#f59e0b" />
                <text x="466" y="69" fill="#000" fontSize="9" fontWeight="bold">📡</text>

                {/* Zone C: Chickpea */}
                <rect x="40" y="220" width="220" height="140" rx="12" fill="rgba(6, 182, 212, 0.25)" stroke="#06b6d4" strokeWidth="2" className="cursor-pointer hover:fill-cyan-500/40 transition-all" onClick={() => setSelectedZone(SVG_ZONES[2])} />
                <text x="50" y="245" fill="#ffffff" fontSize="12" fontWeight="extrabold">🌱 Zone C: Chickpea Plot</text>
                <text x="50" y="262" fill="#cff4fc" fontSize="10">Organic Crop • 0.6 Acres</text>

                {/* Zone D: Fallow */}
                <rect x="280" y="220" width="220" height="140" rx="12" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" strokeWidth="2" className="cursor-pointer hover:fill-red-500/40 transition-all" onClick={() => setSelectedZone(SVG_ZONES[3])} />
                <text x="290" y="245" fill="#ffffff" fontSize="12" fontWeight="extrabold">🍂 Zone D: Fallow Soil</text>
                <text x="290" y="262" fill="#fecdd3" fontSize="10">Soil Preparation • 0.4 Acres</text>

                {/* Infrastructure Icons */}
                <g transform="translate(250, 20)">
                  <circle cx="10" cy="10" r="14" fill="#0284c7" />
                  <text x="4" y="14" fill="#fff" fontSize="10">🛢️</text>
                  <text x="-25" y="-4" fill="#cbd5e1" fontSize="8" fontWeight="bold">Water Tank</text>
                </g>

                <g transform="translate(250, 360)">
                  <circle cx="10" cy="10" r="14" fill="#f59e0b" />
                  <text x="4" y="14" fill="#fff" fontSize="10">⚡</text>
                  <text x="-20" y="32" fill="#cbd5e1" fontSize="8" fontWeight="bold">Borewell</text>
                </g>
              </svg>

              {/* Selected Zone Detail Overlay Modal */}
              {selectedZone && (
                <div className="absolute top-4 right-4 bg-black/95 p-4 rounded-xl border border-emerald-400 max-w-xs space-y-2 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <h4 className="text-sm font-extrabold text-white-pure">{selectedZone.id}: {selectedZone.crop}</h4>
                    <button onClick={() => setSelectedZone(null)} className="text-xs text-slate-400 hover:text-white">✕</button>
                  </div>
                  <div className="space-y-1 text-xs text-slate-light">
                    <p>• Plot Area: <strong>{selectedZone.area}</strong></p>
                    <p>• Health Score: <strong className="text-emerald-400">{selectedZone.health}</strong></p>
                    <p>• Soil Moisture: <strong className="text-cyan-300">{selectedZone.moisture}</strong></p>
                    <p>• Recommendation: <strong>Optimal Drip Schedule</strong></p>
                  </div>
                </div>
              )}
            </div>
          </div>

        ) : (

          /* SATELLITE GIS MAP (Leaflet Spatial Map) */
          <div className="h-[460px] w-full rounded-2xl overflow-hidden border border-cyan-500/40 relative shadow-2xl">
            <MapContainer center={[18.5204, 73.8567]} zoom={16} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Polygon positions={FARM_BOUNDARY} pathOptions={{ color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.25, weight: 3 }} />

              <Marker position={[18.5208, 73.8558]}>
                <Popup><div className="text-black text-xs font-bold">📡 IoT Sensor Zone A (64% Moisture)</div></Popup>
              </Marker>
            </MapContainer>
          </div>

        )}

      </div>

    </div>
  );
}
