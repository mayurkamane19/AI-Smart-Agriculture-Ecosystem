import React from 'react';
import { Leaf, Award, DollarSign, Sparkles, TrendingUp } from 'lucide-react';

export default function CarbonCreditDashboard() {
  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-l-4 border-l-emerald-500 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              ISO 14064 Verified Carbon Offset
            </span>
            <h2 className="text-2xl font-extrabold text-white-pure">Carbon Credit & Sustainability Dashboard</h2>
          </div>
          <p className="text-xs text-slate-light mt-1">
            Calculate farm $\text{CO}_2$ sequestration, nitrogen leaching index, $A^+$ Eco-Certification rating, and earn carbon credits.
          </p>
        </div>

        <div className="bg-slate-900 px-4 py-2 rounded-xl border border-emerald-500/40 text-center">
          <p className="text-[10px] text-emerald-400 font-bold uppercase">Estimated Carbon Payout</p>
          <p className="text-xl font-black text-amber-300">₹14,500 / Year</p>
        </div>
      </div>

      {/* Sustainability Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="glass-panel p-5 border border-emerald-500/40 text-center space-y-2">
          <Leaf className="w-8 h-8 text-emerald-400 mx-auto" />
          <p className="text-xs text-emerald-300 font-bold uppercase">CO₂ Sequestration</p>
          <p className="text-3xl font-black text-white-pure">4.5 Tons / Yr</p>
          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            Grade A+ Carbon Sink
          </span>
        </div>

        <div className="glass-panel p-5 border border-cyan-500/40 text-center space-y-2">
          <Sparkles className="w-8 h-8 text-cyan-400 mx-auto" />
          <p className="text-xs text-cyan-300 font-bold uppercase">Eco-Rating Certification</p>
          <p className="text-3xl font-black text-amber-300">A+ Certified</p>
          <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            Verra & Gold Standard
          </span>
        </div>

        <div className="glass-panel p-5 border border-amber-500/40 text-center space-y-2">
          <TrendingUp className="w-8 h-8 text-amber-400 mx-auto" />
          <p className="text-xs text-amber-300 font-bold uppercase">Nitrogen Leaching Index</p>
          <p className="text-3xl font-black text-white-pure">0.12 kg/ha</p>
          <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            Low Soil Contamination
          </span>
        </div>

      </div>

    </div>
  );
}
