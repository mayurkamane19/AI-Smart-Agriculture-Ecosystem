import React, { useState } from 'react';
import { Droplets, Power, ShieldCheck, Zap, Radio, CloudRain } from 'lucide-react';

export default function AutonomousIrrigation() {
  const [valveState, setValveState] = useState(false); // false = CLOSED (Auto Rain Override), true = OPEN
  const [autoRuleMode, setAutoRuleMode] = useState(true);

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-blue-950 via-slate-950 to-slate-900 border-l-4 border-l-blue-400 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-blue-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Autonomous IoT Actuator Control
            </span>
            <h2 className="text-2xl font-extrabold text-white-pure">Autonomous IoT Irrigation Engine</h2>
          </div>
          <p className="text-xs text-slate-light mt-1">
            Closed-loop automation fusing IoT soil moisture telemetry, weather monsoon forecasts, and solenoid valve actuators.
          </p>
        </div>

        {/* Manual Override Switch */}
        <button
          onClick={() => setValveState(!valveState)}
          className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center space-x-2 shadow-lg ${
            valveState ? 'bg-emerald-500 text-black shadow-emerald-500/40' : 'bg-red-600 text-white shadow-red-600/40'
          }`}
        >
          <Power className="w-4 h-4" />
          <span>Solenoid Valve: {valveState ? 'OPEN (Watering)' : 'CLOSED (Overridden)'}</span>
        </button>
      </div>

      {/* Autonomous Logic Rule Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="glass-panel p-5 space-y-2 border border-sky-400/40">
          <p className="text-xs text-sky-400 font-bold uppercase">IoT Soil Moisture Rule</p>
          <p className="text-2xl font-black text-white-pure">64% Moisture</p>
          <p className="text-xs text-slate-light">Rule: IF Moisture &lt; 40% AND Rain &lt; 30% THEN Open Valve.</p>
          <span className="bg-sky-500/20 text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
            Status: Moisture OK
          </span>
        </div>

        <div className="glass-panel p-5 space-y-2 border border-amber-400/40">
          <p className="text-xs text-amber-400 font-bold uppercase">Monsoon Override Rule</p>
          <p className="text-2xl font-black text-amber-300">78% Rain Thursday</p>
          <p className="text-xs text-slate-light">Rain Override: Auto-Close Valve to prevent over-watering.</p>
          <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
            Status: Rain Override Active
          </span>
        </div>

        <div className="glass-panel p-5 space-y-2 border border-emerald-400/40">
          <p className="text-xs text-emerald-400 font-bold uppercase">Water Conserved</p>
          <p className="text-2xl font-black text-emerald-400">18,400 Liters</p>
          <p className="text-xs text-slate-light">Savings: ₹1,420 fuel saved this month via smart overrides.</p>
          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
            Status: High Efficiency
          </span>
        </div>

      </div>

    </div>
  );
}
