import React, { useState } from 'react';
import { Plane, AlertCircle, CheckCircle, Zap, Eye } from 'lucide-react';

export default function DroneModule() {
  const [selectedScan, setSelectedScan] = useState("weed");

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-blue-950/80 via-slate-950/80 to-slate-900 border-l-4 border-l-blue-400">
        <h2 className="text-2xl font-extrabold text-white flex items-center space-x-2">
          <span>Drone Aerial Inspection Module</span>
          <Plane className="w-5 h-5 text-blue-400" />
        </h2>
        <p className="text-xs text-blue-200/80 mt-1">
          Multispectral aerial drone scans pinpointing weed clusters, dry soil zones, and nutrient deficiencies with centimeter-level precision.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Drone Image Canvas */}
        <div className="lg:col-span-7 glass-card p-4 space-y-3">
          <div className="relative rounded-xl overflow-hidden bg-black min-h-[320px] border border-blue-500/30">
            <img
              src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
              alt="Drone Aerial Scan"
              className="w-full h-80 object-cover opacity-80"
            />
            <div className="absolute top-4 left-4 bg-blue-500 text-black text-xs font-black px-3 py-1 rounded-full shadow">
              Multispectral Drone Sensor • 4K Resolution
            </div>

            {/* Bounding Overlay */}
            <div className="absolute top-1/4 left-1/3 border-2 border-red-500 bg-red-500/20 p-2 rounded text-[10px] text-white font-bold">
              ⚠️ Weed Cluster Detected (Area: 14 sq m)
            </div>
          </div>
        </div>

        {/* Scan Details */}
        <div className="lg:col-span-5 glass-card p-5 space-y-4">
          <h3 className="text-sm font-extrabold text-white border-b border-blue-500/20 pb-2">
            Aerial Scan Findings:
          </h3>

          <div className="bg-red-950/40 p-3 rounded-xl border border-red-500/30 space-y-1 text-xs">
            <p className="font-extrabold text-red-300">1. Wild Mustard Weed Cluster</p>
            <p className="text-emerald-200">Recommendation: Targeted spot spraying using glyphosate 41% SL.</p>
          </div>

          <div className="bg-amber-950/40 p-3 rounded-xl border border-amber-500/30 space-y-1 text-xs">
            <p className="font-extrabold text-amber-300">2. Low Moisture Patch (Zone D)</p>
            <p className="text-emerald-200">Recommendation: Inspect drip line #4 for clogged emitters.</p>
          </div>
        </div>

      </div>

    </div>
  );
}
