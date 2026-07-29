import React, { useState } from 'react';
import { Cpu, MessageSquare, ShieldCheck, Sparkles, Zap, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function AgentDebateXAI() {
  const [activeDebateRound, setActiveDebateRound] = useState(3);

  const DEBATE_TURNS = [
    {
      agent: "Weather Agent",
      role: "Monsoon Predictor",
      color: "text-cyan-400",
      bg: "bg-cyan-950/60 border-cyan-500/30",
      argument: "I strongly oppose irrigation today. Heavy monsoon showers (18mm, 78% probability) are arriving in 36 hours. Watering now will cause waterlogging and root asphyxiation."
    },
    {
      agent: "Soil Agent",
      role: "Nutrient & Moisture Monitor",
      color: "text-amber-400",
      bg: "bg-amber-950/60 border-amber-500/30",
      argument: "Soil moisture in Zone A is currently at 42%. While monsoon rain is expected, young tomato rootlets will suffer mild osmotic stress if left unwatered for 36 hours."
    },
    {
      agent: "Disease Agent",
      role: "Pathogen Risk Analyzer",
      color: "text-red-400",
      bg: "bg-red-950/60 border-red-500/30",
      argument: "Fungal spore germination (Early Blight) risk is already at 78% due to high humidity. Adding artificial irrigation water now will dramatically accelerate fungal spreading!"
    },
    {
      agent: "Master AI Decision Synthesizer",
      role: "Explainable AI (XAI) Arbiter",
      color: "text-purple-300",
      bg: "bg-purple-950/80 border-purple-500/50",
      argument: "CONSENSUS RESOLUTION: Concur with Weather & Disease Agents. Skip overhead/drip irrigation today to save 2,500L water and prevent fungal spore explosion. Apply Trichoderma bio-spray instead."
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-purple-950 via-slate-950 to-slate-900 border-l-4 border-l-purple-500 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-purple-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Explainable AI (XAI) & Agent Consensus
            </span>
            <h2 className="text-2xl font-extrabold text-white-pure">Multi-Agent AI Debate Engine</h2>
          </div>
          <p className="text-xs text-slate-light mt-1">
            Transparent XAI reasoning log showing real-time arguments and counter-arguments between autonomous specialized agents.
          </p>
        </div>

        <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-700 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase">XAI Transparency Index</p>
          <p className="text-xl font-black text-emerald-400">99.8% Explainable</p>
        </div>
      </div>

      {/* Live Agent Debate Transcript */}
      <div className="glass-panel p-6 space-y-4">
        <h3 className="text-sm font-extrabold text-white-pure flex items-center space-x-2 border-b border-slate-800 pb-3">
          <MessageSquare className="w-4 h-4 text-purple-400" />
          <span>Live Multi-Agent Debate Log (Topic: Today's Irrigation & Fungicide Strategy):</span>
        </h3>

        <div className="space-y-3">
          {DEBATE_TURNS.map((turn, i) => (
            <div key={i} className={`p-4 rounded-xl border ${turn.bg} space-y-1 text-xs shadow-md`}>
              <div className="flex items-center justify-between">
                <span className={`font-black ${turn.color} flex items-center space-x-1.5`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{turn.agent} ({turn.role})</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">Round #{i + 1}</span>
              </div>
              <p className="text-white-pure font-medium leading-relaxed pl-5 border-l-2 border-slate-700">
                "{turn.argument}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* XAI Confidence Breakdown Tree */}
      <div className="glass-panel p-5 space-y-3">
        <h3 className="text-sm font-extrabold text-white-pure flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Explainable AI (XAI) Weight Distribution:</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
            <p className="text-[10px] text-cyan-400 font-bold uppercase">Weather Rain Factor</p>
            <p className="text-xl font-black text-white-pure">45% Weight</p>
            <p className="text-[10px] text-emerald-400">Prevents Water Waste</p>
          </div>

          <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
            <p className="text-[10px] text-red-400 font-bold uppercase">Fungal Spore Risk Factor</p>
            <p className="text-xl font-black text-white-pure">35% Weight</p>
            <p className="text-[10px] text-red-300">Suppresses Disease Outbreak</p>
          </div>

          <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
            <p className="text-[10px] text-amber-400 font-bold uppercase">Soil Moisture Deficit Factor</p>
            <p className="text-xl font-black text-white-pure">20% Weight</p>
            <p className="text-[10px] text-amber-300">Managed via Bio-Mulch</p>
          </div>
        </div>
      </div>

    </div>
  );
}
