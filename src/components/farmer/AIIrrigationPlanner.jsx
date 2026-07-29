import React from 'react';
import { Droplets, CloudRain, Sun, ShieldCheck, Thermometer, Wind, Check } from 'lucide-react';

export default function AIIrrigationPlanner() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-cyan-950/80 via-teal-950/70 to-slate-900 border-l-4 border-l-cyan-400">
        <h2 className="text-2xl font-extrabold text-white flex items-center space-x-2">
          <span>AI Smart Irrigation Planner</span>
          <Droplets className="w-5 h-5 text-cyan-400 animate-bounce" />
        </h2>
        <p className="text-xs text-cyan-200/80 mt-1">
          Fuses real-time weather forecasts, soil moisture IoT sensors, and crop evapotranspiration to deliver precise daily irrigation decisions.
        </p>
      </div>

      {/* Today's Recommendation Banner */}
      <div className="glass-card-glow p-6 bg-gradient-to-tr from-emerald-950 via-teal-950 to-cyan-950 border-2 border-emerald-400/50 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="bg-amber-500 text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            AI Recommendation Today
          </span>
          <h3 className="text-2xl font-black text-white flex items-center space-x-2">
            <span>SKIP IRRIGATION TODAY (सिंचाई रोक दें)</span>
          </h3>
          <p className="text-xs text-emerald-200">
            78% Rain expected on Thursday. Skipping irrigation will save <strong>2,500 Liters</strong> of water & ₹180 diesel fuel.
          </p>
        </div>

        <div className="flex items-center space-x-3 bg-emerald-900/60 p-4 rounded-2xl border border-emerald-500/30">
          <CloudRain className="w-10 h-10 text-cyan-400 animate-pulse" />
          <div>
            <p className="text-[10px] text-emerald-300 font-bold uppercase">Precipitation Chance</p>
            <p className="text-xl font-extrabold text-white">78% (Heavy Rain)</p>
          </div>
        </div>
      </div>

      {/* Sensor & Weather Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300">
            <Droplets className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-teal-300 font-bold uppercase">Soil Moisture</p>
            <p className="text-base font-extrabold text-white">64% (Adequate)</p>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            <Thermometer className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-amber-300 font-bold uppercase">Ambient Temp</p>
            <p className="text-base font-extrabold text-white">31.5 °C</p>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
            <Wind className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-cyan-300 font-bold uppercase">Wind Speed</p>
            <p className="text-base font-extrabold text-white">12 km/h SE</p>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-emerald-300 font-bold uppercase">Water Saved This Month</p>
            <p className="text-base font-extrabold text-amber-300">18,400 Liters</p>
          </div>
        </div>

      </div>

      {/* 5-Day Water Schedule */}
      <div className="glass-card p-5 space-y-3">
        <h3 className="text-sm font-extrabold text-white mb-2">5-Day Intelligent Watering Schedule:</h3>
        <div className="space-y-2">
          {[
            { day: "Today (Wednesday)", action: "SKIP IRRIGATION", reason: "Soil Moisture at 64%", color: "text-amber-400", bg: "bg-amber-950/40" },
            { day: "Thursday", action: "SKIP IRRIGATION", reason: "Monsoon Shower Expected (18mm)", color: "text-cyan-400", bg: "bg-cyan-950/40" },
            { day: "Friday", action: "SKIP IRRIGATION", reason: "Post-rain Residual Moisture High", color: "text-amber-400", bg: "bg-amber-950/40" },
            { day: "Saturday", action: "WATER 1,500 L / Acre", reason: "Moisture drops below 40%", color: "text-emerald-400", bg: "bg-emerald-950/40" },
            { day: "Sunday", action: "WATER 1,200 L / Acre", reason: "Standard Drip Maintenance", color: "text-emerald-400", bg: "bg-emerald-950/40" }
          ].map((item, idx) => (
            <div key={idx} className={`p-3 rounded-xl border border-emerald-500/20 flex items-center justify-between text-xs ${item.bg}`}>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-white">{item.day}</span>
              </div>
              <span className={`font-extrabold ${item.color}`}>{item.action}</span>
              <span className="text-emerald-300 text-[11px] hidden sm:inline">{item.reason}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
