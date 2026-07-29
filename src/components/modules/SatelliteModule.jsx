import React, { useState } from 'react';
import { Globe, Layers, Eye, Calendar, Sparkles } from 'lucide-react';

export default function SatelliteModule() {
  const [ndviValue, setNdviValue] = useState(0.82);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-emerald-950/90 via-teal-950/80 to-slate-900 border-l-4 border-l-emerald-500">
        <h2 className="text-2xl font-extrabold text-white flex items-center space-x-2">
          <span>Satellite NDVI Vegetation Monitor</span>
          <Globe className="w-5 h-5 text-emerald-400" />
        </h2>
        <p className="text-xs text-emerald-200/80 mt-1">
          Sentinel-2 & NASA EarthData multispectral imagery calculating Normalized Difference Vegetation Index (NDVI) and crop vigor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* False Color Heatmap Viewer */}
        <div className="lg:col-span-8 glass-card p-4 space-y-3">
          <div className="relative rounded-xl overflow-hidden bg-black min-h-[340px] border border-emerald-500/30">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
              alt="Sentinel-2 NDVI Satellite Heatmap"
              className="w-full h-84 object-cover opacity-85"
            />
            <div className="absolute top-4 left-4 bg-emerald-500 text-black text-xs font-black px-3 py-1 rounded-full shadow">
              Sentinel-2 Band 8 (NIR) & Band 4 (Red) • NDVI: {ndviValue}
            </div>
          </div>
        </div>

        {/* Vigor Index Panel */}
        <div className="lg:col-span-4 glass-card p-5 space-y-4">
          <h3 className="text-sm font-extrabold text-white border-b border-emerald-500/20 pb-2">
            NDVI Vigor Analysis:
          </h3>

          <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-500/30 text-center space-y-1">
            <p className="text-[10px] text-emerald-300 font-bold uppercase">Current Field NDVI</p>
            <p className="text-4xl font-black text-emerald-400">{ndviValue}</p>
            <span className="bg-emerald-500 text-black text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
              HEALTHY DENSE FOLIAGE
            </span>
          </div>

          <div className="space-y-2 text-xs text-emerald-200">
            <p>• <strong>NDVI 0.70 - 0.90:</strong> Healthy Green Biomass</p>
            <p>• <strong>NDVI 0.40 - 0.65:</strong> Moderate Moisture Stress</p>
            <p>• <strong>NDVI &lt; 0.30:</strong> Bare Soil / Water Body</p>
          </div>
        </div>

      </div>

    </div>
  );
}
