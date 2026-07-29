import React, { useState } from 'react';
import { Layers, Activity, Eye, Play, RotateCcw, Sparkles } from 'lucide-react';

export default function AIDigitalTwin() {
  const [activeOverlay, setActiveOverlay] = useState('moisture'); // moisture, npk, disease
  const [simulationDays, setSimulationDays] = useState(0);

  const zones = [
    { id: "Zone A", crop: "Tomato (Arka Rakshak)", moisture: 64, ph: 6.8, risk: "Low", color: "bg-emerald-500/30 border-emerald-500" },
    { id: "Zone B", crop: "Wheat (Lok-1)", moisture: 42, ph: 6.5, risk: "Medium", color: "bg-amber-500/30 border-amber-500" },
    { id: "Zone C", crop: "Organic Chickpea", moisture: 78, ph: 7.1, risk: "Low", color: "bg-teal-500/30 border-teal-500" },
    { id: "Zone D", crop: "Fallow / Soil Prep", moisture: 30, ph: 6.2, risk: "High Dryness", color: "bg-red-500/30 border-red-500" }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-purple-950/80 via-teal-950/70 to-slate-900 border-l-4 border-l-purple-500 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white flex items-center space-x-2">
            <span>AI Digital Twin Farm Simulator</span>
            <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
          </h2>
          <p className="text-xs text-purple-200/80 mt-1">
            Real-time 2D/3D virtual replica of your farm fields. Simulate future weather, soil moisture decay, and crop yield outcomes.
          </p>
        </div>

        {/* Heatmap Layer Selectors */}
        <div className="bg-purple-950/80 p-1 rounded-xl border border-purple-500/30 flex space-x-1">
          <button
            onClick={() => setActiveOverlay('moisture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeOverlay === 'moisture' ? 'bg-cyan-500 text-black' : 'text-purple-200 hover:bg-purple-900/50'
            }`}
          >
            Moisture Overlay
          </button>
          <button
            onClick={() => setActiveOverlay('npk')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeOverlay === 'npk' ? 'bg-emerald-500 text-black' : 'text-purple-200 hover:bg-purple-900/50'
            }`}
          >
            NPK Heatmap
          </button>
          <button
            onClick={() => setActiveOverlay('disease')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeOverlay === 'disease' ? 'bg-red-500 text-black' : 'text-purple-200 hover:bg-purple-900/50'
            }`}
          >
            Disease Risk Map
          </button>
        </div>
      </div>

      {/* Interactive Virtual Field Canvas Grid */}
      <div className="glass-card p-6 space-y-4">
        
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-white flex items-center space-x-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Virtual Plot Layout (2.5 Acres):</span>
          </h3>

          {/* Time Scrubber Simulator */}
          <div className="flex items-center space-x-3 bg-purple-950/50 px-3 py-1.5 rounded-xl border border-purple-500/20 text-xs">
            <span className="text-purple-300 font-bold">Simulate +{simulationDays} Days:</span>
            <input
              type="range" min="0" max="30" step="1"
              value={simulationDays} onChange={(e) => setSimulationDays(parseInt(e.target.value))}
              className="accent-purple-400 cursor-pointer w-28"
            />
          </div>
        </div>

        {/* Field Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {zones.map((zone) => (
            <div key={zone.id} className={`glass-card p-5 border-2 ${zone.color} space-y-3 relative overflow-hidden transition-all hover:scale-[1.01]`}>
              <div className="flex items-center justify-between">
                <span className="bg-black/60 text-white text-xs font-black px-2.5 py-0.5 rounded-lg font-mono">
                  {zone.id}
                </span>
                <span className="text-xs font-bold text-emerald-300">
                  {activeOverlay === 'moisture' && `Moisture: ${Math.max(10, zone.moisture - simulationDays * 1.5)}%`}
                  {activeOverlay === 'npk' && `pH: ${zone.ph}`}
                  {activeOverlay === 'disease' && `Risk: ${zone.risk}`}
                </span>
              </div>

              <div>
                <h4 className="text-base font-extrabold text-white">{zone.crop}</h4>
                <p className="text-xs text-emerald-200">Soil Status: Healthy Active Growth</p>
              </div>

              <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${activeOverlay === 'moisture' ? 'bg-cyan-400' : activeOverlay === 'npk' ? 'bg-emerald-400' : 'bg-red-400'}`}
                  style={{ width: `${Math.max(15, zone.moisture - simulationDays * 1.5)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
