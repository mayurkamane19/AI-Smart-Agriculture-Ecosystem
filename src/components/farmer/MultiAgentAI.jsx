import React, { useState } from 'react';
import { Cpu, ArrowRight, CheckCircle2, Play, Sparkles, RefreshCw } from 'lucide-react';

export default function MultiAgentAI() {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(7);

  const AGENTS = [
    { id: 1, name: "Weather Agent", role: "Forecast & Rain Analysis", output: "Rain 78% expected on Thursday" },
    { id: 2, name: "Soil Agent", role: "pH & NPK Balance", output: "Soil pH 6.8 (Optimal)" },
    { id: 3, name: "Crop Agent", role: "Sowing & Harvest Schedule", output: "Recommend Arka Rakshak Tomato" },
    { id: 4, name: "Disease Agent", role: "Micro-climate Risk Radar", output: "High Fungal Risk (78%)" },
    { id: 5, name: "Market Agent", role: "15-Day Price Prediction", output: "Hold sales for ₹3,850/Q peak" },
    { id: 6, name: "Finance Agent", role: "Expense & ROI Calculation", output: "Net Profit: ₹1,66,750 (ROI 368%)" },
    { id: 7, name: "Govt Scheme Agent", role: "Subsidies & Grants", output: "80% Drip Subsidy Eligible" }
  ];

  const handleRunPipeline = () => {
    setIsRunning(true);
    setActiveStep(0);
    
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setActiveStep(current);
      if (current >= AGENTS.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 400);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-emerald-950/80 via-teal-950/70 to-slate-900 border-l-4 border-l-cyan-400 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white flex items-center space-x-2">
            <span>Multi-Agent AI Orchestrator (LangGraph)</span>
            <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
          </h2>
          <p className="text-xs text-emerald-200/80 mt-1">
            Autonomous multi-agent execution pipeline synthesizing 7 specialized AI agents into one master agricultural recommendation.
          </p>
        </div>

        <button
          onClick={handleRunPipeline}
          disabled={isRunning}
          className="bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-lg shadow-cyan-500/30 transition-all"
        >
          {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
          <span>{isRunning ? 'Agents Executing...' : 'Re-Run Multi-Agent Pipeline'}</span>
        </button>
      </div>

      {/* Agents Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AGENTS.map((agent, i) => {
          const isActive = activeStep === i;
          const isDone = activeStep > i;

          return (
            <div
              key={agent.id}
              className={`glass-card p-4 space-y-2 border transition-all ${
                isActive
                  ? 'border-cyan-400 bg-cyan-950/60 shadow-lg shadow-cyan-500/30 scale-105'
                  : isDone
                  ? 'border-emerald-500/40 bg-emerald-950/40'
                  : 'border-emerald-500/10 opacity-50'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-400 font-extrabold">Agent #{agent.id}</span>
                {isDone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Cpu className="w-4 h-4 text-cyan-400" />}
              </div>
              
              <h4 className="text-sm font-extrabold text-white">{agent.name}</h4>
              <p className="text-[10px] text-emerald-300">{agent.role}</p>

              <div className="bg-black/40 p-2 rounded-lg border border-emerald-500/20 text-[11px] text-emerald-100 font-medium mt-2">
                "{agent.output}"
              </div>
            </div>
          );
        })}
      </div>

      {/* Master AI Decision Synthesis Banner */}
      <div className="glass-card-glow p-6 bg-gradient-to-tr from-emerald-950 via-teal-950 to-slate-950 border-2 border-emerald-400/50 space-y-3">
        <h3 className="text-sm font-extrabold text-amber-300 flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
          <span>Master AI Synthesized Decision (मास्टर AI निर्णय):</span>
        </h3>
        
        <p className="text-sm text-emerald-100 font-medium leading-relaxed bg-emerald-950/60 p-4 rounded-xl border border-emerald-500/30">
          "Plant Hybrid Tomato (Arka Rakshak) on 2.5 Acres between Aug 15-30. Soil pH is optimal at 6.8. Skip Thursday irrigation due to 78% heavy rain. Apply bio-fungicide to counter high 78% fungal risk. Hold harvest sales until mid-November to capture ₹3,850/Q market rate, achieving net profit of ₹1,66,750 with 80% Drip Subsidy under PMKSY."
        </p>

        <div className="flex items-center justify-between text-xs text-emerald-300 pt-2">
          <span>Latency: 284ms • LangGraph Flow</span>
          <span className="text-amber-400 font-bold">100% Agent Consensus</span>
        </div>
      </div>

    </div>
  );
}
