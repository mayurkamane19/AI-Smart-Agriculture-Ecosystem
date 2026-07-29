import React, { useState } from 'react';
import { Calendar, DollarSign, MapPin, Droplets, PieChart, TrendingUp, AlertTriangle } from 'lucide-react';

export default function AIFarmPlanner() {
  const [landSize, setLandSize] = useState(2.5);
  const [budget, setBudget] = useState(60000);
  const [location, setLocation] = useState('Pune, Maharashtra');
  const [waterAccess, setWaterAccess] = useState('Drip Irrigation + Well');

  const estCost = landSize * 15000;
  const estRevenue = landSize * 220 * 38.5 * 10;
  const estProfit = Math.max(0, estRevenue - estCost);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-emerald-950/80 via-teal-950/70 to-slate-900 border-l-4 border-l-amber-500">
        <h2 className="text-2xl font-extrabold text-white flex items-center space-x-2">
          <span>AI Farm Planner</span>
          <TrendingUp className="w-5 h-5 text-amber-400" />
        </h2>
        <p className="text-xs text-emerald-200/80 mt-1">
          Input your farm size, budget, and location to calculate optimal crop plan, sowing/harvest dates, and projected profit/risk analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Form Inputs */}
        <div className="lg:col-span-5 glass-card p-5 space-y-4">
          <h3 className="text-sm font-extrabold text-white border-b border-emerald-500/20 pb-2">
            फार्म विवरण (Farm Setup Details):
          </h3>

          <div>
            <label className="text-xs text-emerald-200 font-bold block mb-1">Land Size (Acres):</label>
            <div className="flex items-center space-x-2 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/20">
              <input
                type="number" step="0.5" value={landSize}
                onChange={(e) => setLandSize(parseFloat(e.target.value) || 1)}
                className="bg-transparent text-white font-extrabold text-sm w-full outline-none"
              />
              <span className="text-xs text-emerald-400 font-bold">Acres</span>
            </div>
          </div>

          <div>
            <label className="text-xs text-emerald-200 font-bold block mb-1">Total Investment Budget (₹):</label>
            <div className="flex items-center space-x-2 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/20">
              <DollarSign className="w-4 h-4 text-amber-400" />
              <input
                type="number" step="5000" value={budget}
                onChange={(e) => setBudget(parseFloat(e.target.value) || 10000)}
                className="bg-transparent text-white font-extrabold text-sm w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-emerald-200 font-bold block mb-1">Location / District:</label>
            <div className="flex items-center space-x-2 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/20">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <input
                type="text" value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent text-white font-medium text-sm w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-emerald-200 font-bold block mb-1">Water Availability:</label>
            <select
              value={waterAccess}
              onChange={(e) => setWaterAccess(e.target.value)}
              className="w-full bg-emerald-950/60 text-white font-medium text-xs p-2.5 rounded-xl border border-emerald-500/20 outline-none"
            >
              <option value="Drip Irrigation + Well">Drip Irrigation + Well</option>
              <option value="Canal Irrigation">Canal Irrigation</option>
              <option value="Rainfed (Monsoon Only)">Rainfed (Monsoon Only)</option>
            </select>
          </div>
        </div>

        {/* Output Plan */}
        <div className="lg:col-span-7 space-y-4">
          
          <div className="glass-card-glow p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
              <div>
                <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider">AI Crop Strategy</span>
                <h3 className="text-lg font-extrabold text-white">Hybrid Tomato (Arka Rakshak)</h3>
              </div>
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-full">
                Profit Margin: 82.5%
              </span>
            </div>

            {/* Sowing & Harvest Schedule */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-500/20">
                <p className="text-[10px] text-emerald-300 font-bold uppercase flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>Sowing Window</span>
                </p>
                <p className="text-sm font-extrabold text-white mt-1">Aug 15 – Aug 30</p>
              </div>

              <div className="bg-teal-950/60 p-3 rounded-xl border border-teal-500/20">
                <p className="text-[10px] text-teal-300 font-bold uppercase flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-teal-400" />
                  <span>Harvest Window</span>
                </p>
                <p className="text-sm font-extrabold text-white mt-1">Nov 10 – Dec 15</p>
              </div>
            </div>

            {/* Financial Estimates */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Estimated Cost</p>
                <p className="text-sm font-extrabold text-red-400">₹{estCost.toLocaleString()}</p>
              </div>

              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Expected Revenue</p>
                <p className="text-sm font-extrabold text-emerald-400">₹{estRevenue.toLocaleString()}</p>
              </div>

              <div className="bg-emerald-950/80 p-3 rounded-xl border border-emerald-500/40 text-center shadow-lg shadow-emerald-500/10">
                <p className="text-[10px] text-emerald-300 font-bold uppercase">Net AI Profit</p>
                <p className="text-sm font-extrabold text-amber-300">₹{estProfit.toLocaleString()}</p>
              </div>
            </div>

            {/* Risk Radar */}
            <div className="bg-amber-950/30 p-3 rounded-xl border border-amber-500/20 flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-amber-300">Risk Radar: Moderate Fungal Risk</p>
                <p className="text-[11px] text-amber-100">Ensure high-bed mulching; market price volatility risk is low (+12% projected rise).</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
