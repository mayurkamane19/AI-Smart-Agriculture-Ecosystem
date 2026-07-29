import React from 'react';
import { AlertOctagon, Bug, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AIDiseasePrediction() {
  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-red-950 via-slate-950 to-slate-900 border-l-4 border-l-red-500 shadow-xl">
        <h2 className="text-2xl font-extrabold text-white-pure flex items-center space-x-2">
          <span>AI Disease Early Warning Radar</span>
          <AlertOctagon className="w-6 h-6 text-red-400 animate-pulse" />
        </h2>
        <p className="text-xs text-slate-light mt-1">
          Analyzes micro-climate weather, humidity spikes, and historical infection cycles to predict fungal, bacterial, and pest risks 7 days in advance.
        </p>
      </div>

      {/* Risk Gauge Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* High Risk (Red Card) */}
        <div className="glass-panel p-5 border-2 border-red-500/50 bg-gradient-to-b from-red-950/60 via-slate-900 to-slate-950 space-y-3 shadow-lg shadow-red-500/10">
          <div className="flex items-center justify-between">
            <span className="bg-red-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              HIGH RISK (78%)
            </span>
            <Bug className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-white-pure">Early Blight & Fungal Rust</h3>
            <p className="text-3xl font-black text-red-400 mt-1">78% Risk</p>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full w-[78%]" />
          </div>
          <p className="text-xs text-slate-light leading-relaxed">
            High humidity (78%) + 31.5°C temp triggers spore germination in tomatoes & potatoes within 48 hours.
          </p>
        </div>

        {/* Moderate Risk (Amber Card) */}
        <div className="glass-panel p-5 border-2 border-amber-500/50 bg-gradient-to-b from-amber-950/60 via-slate-900 to-slate-950 space-y-3 shadow-lg shadow-amber-500/10">
          <div className="flex items-center justify-between">
            <span className="bg-amber-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              MODERATE RISK (42%)
            </span>
            <Bug className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-white-pure">Whitefly & Aphids Swarm</h3>
            <p className="text-3xl font-black text-amber-400 mt-1">42% Risk</p>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full w-[42%]" />
          </div>
          <p className="text-xs text-slate-light leading-relaxed">
            Moderate vector activity in neighboring villages (Chakan). Yellow sticky traps recommended.
          </p>
        </div>

        {/* Low Risk (Emerald Card) */}
        <div className="glass-panel p-5 border-2 border-emerald-500/50 bg-gradient-to-b from-emerald-950/60 via-slate-900 to-slate-950 space-y-3 shadow-lg shadow-emerald-500/10">
          <div className="flex items-center justify-between">
            <span className="bg-emerald-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              LOW RISK (12%)
            </span>
            <ShieldAlert className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-white-pure">Bacterial Wilt & Root Rot</h3>
            <p className="text-3xl font-black text-emerald-400 mt-1">12% Risk</p>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[12%]" />
          </div>
          <p className="text-xs text-slate-light leading-relaxed">
            Soil drainage is optimal; soil pH 6.8 suppresses bacterial multiplication.
          </p>
        </div>

      </div>

      {/* Recommended Action Plan */}
      <div className="glass-panel p-5 space-y-3">
        <h3 className="text-sm font-extrabold text-white-pure flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>AI निरोधात्मक कार्य योजना (Preventive Action Plan):</span>
        </h3>
        <div className="space-y-2 text-xs">
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <p className="text-slate-light">
              <strong className="text-white-pure">Pre-Rain Spray:</strong> Apply Trichoderma viride bio-fungicide @ 5g/L water before Thursday monsoon shower.
            </p>
          </div>
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700 flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <p className="text-slate-light">
              <strong className="text-white-pure">Yellow Traps:</strong> Install 10 Yellow Sticky Traps per acre to monitor whiteflies.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
