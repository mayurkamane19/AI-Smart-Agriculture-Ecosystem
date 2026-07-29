import React from 'react';
import { Shield, Activity, MapPin, AlertTriangle, Users, TrendingUp } from 'lucide-react';

export default function StateCommandCenter() {
  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-red-950 via-slate-950 to-slate-900 border-l-4 border-l-red-500 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-red-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              District & State Macro AI Operations
            </span>
            <h2 className="text-2xl font-extrabold text-white-pure">District AI Command Center</h2>
          </div>
          <p className="text-xs text-slate-light mt-1">
            Macro-level agricultural monitoring across 14 Tehsil districts, regional disease outbreaks, monsoon disaster alerts, and emergency SOS dispatches.
          </p>
        </div>

        <div className="bg-slate-900 px-4 py-2 rounded-xl border border-red-500/40 text-center">
          <p className="text-[10px] text-red-400 font-bold uppercase">Active District Monitoring</p>
          <p className="text-xl font-black text-amber-300">Pune District (14 Sub-Districts)</p>
        </div>
      </div>

      {/* Macro State Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        
        <div className="glass-panel p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Registered Farmers</p>
            <p className="text-2xl font-black text-white-pure">1,42,800</p>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Total Monitored Land</p>
            <p className="text-2xl font-black text-white-pure">3,85,000 Acres</p>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Est. Regional Harvest</p>
            <p className="text-2xl font-black text-amber-300">4.2 Lakh Tons</p>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Active Emergency SOS</p>
            <p className="text-2xl font-black text-red-400">2 Dispatched</p>
          </div>
        </div>

      </div>

    </div>
  );
}
