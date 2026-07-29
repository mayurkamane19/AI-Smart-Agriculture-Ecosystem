import React, { useState } from 'react';
import { 
  Cpu, CloudRain, Sliders, Sprout, Bug, TrendingUp, 
  DollarSign, Award, ArrowRight, CheckCircle2, RefreshCw, Sparkles, Zap, Radio 
} from 'lucide-react';

export default function AIDecisionCenter() {
  const [isExecuting, setIsExecuting] = useState(false);
  const [activeAgentIndex, setActiveAgentIndex] = useState(7);

  const AGENTS = [
    {
      id: 1,
      name: 'Weather Agent',
      role: 'Monsoon & Micro-Climate Forecast',
      status: 'Execution Complete',
      confidence: 96.5,
      reasoning: '78% Heavy precipitation predicted on Thursday with 18mm expected rainfall.',
      recommendation: "SKIP IRRIGATION TODAY - Save 2,500L water",
      color: 'card-cyan',
      topStrip: 'top-strip-cyan',
      icon: CloudRain
    },
    {
      id: 2,
      name: 'Soil Agent',
      role: 'NPK & pH Nutrient Analysis',
      status: 'Execution Complete',
      confidence: 94.2,
      reasoning: 'Soil pH is neutral (6.8). Nitrogen levels require post-rain bio-booster boost.',
      recommendation: 'APPLY FERTILIZER AFTER 3 DAYS',
      color: 'card-brown',
      topStrip: 'top-strip-brown',
      icon: Sliders
    },
    {
      id: 3,
      name: 'Crop Agent',
      role: 'Phenology & Growth Stage Engine',
      status: 'Execution Complete',
      confidence: 98.1,
      reasoning: 'Hybrid Tomato (Arka Rakshak) reached 110 days maturity stage.',
      recommendation: 'HARVEST AFTER 7 DAYS (Nov 18 Window)',
      color: 'card-green',
      topStrip: 'top-strip-green',
      icon: Sprout
    },
    {
      id: 4,
      name: 'Disease Agent',
      role: 'Spore Germination Risk Radar',
      status: 'Execution Complete',
      confidence: 91.8,
      reasoning: '78% relative humidity triggers early blight fungal spore risk.',
      recommendation: 'Apply Trichoderma viride bio-spray before rain',
      color: 'card-red',
      topStrip: 'top-strip-red',
      icon: Bug
    },
    {
      id: 5,
      name: 'Market Agent',
      role: '15-Day Mandi Price Prediction',
      status: 'Execution Complete',
      confidence: 95.0,
      reasoning: 'Azadpur & Pune Mandi prices surging +13.2% toward ₹3,850/Quintal.',
      recommendation: 'Hold sales until Nov 18-22 market surge',
      color: 'card-orange',
      topStrip: 'top-strip-orange',
      icon: TrendingUp
    },
    {
      id: 6,
      name: 'Finance Agent',
      role: 'Expense Ledger & Net ROI Engine',
      status: 'Execution Complete',
      confidence: 97.4,
      reasoning: 'Total input expenses ₹45,000 against projected revenue ₹2,43,450.',
      recommendation: 'Projected Net Profit: ₹1,98,450 (ROI 441%)',
      color: 'card-emerald',
      topStrip: 'top-strip-emerald',
      icon: DollarSign
    },
    {
      id: 7,
      name: 'Government Scheme Agent',
      role: 'Subsidies & Direct Benefit Transfer',
      status: 'Execution Complete',
      confidence: 99.0,
      reasoning: 'PMKSY Drip Irrigation & PM-Kisan Samman Nidhi verified.',
      recommendation: 'Claim 80% Drip Installation Subsidy',
      color: 'card-yellow',
      topStrip: 'top-strip-yellow',
      icon: Award
    }
  ];

  const handleReRunPipeline = () => {
    setIsExecuting(true);
    setActiveAgentIndex(0);

    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      setActiveAgentIndex(idx);
      if (idx >= AGENTS.length) {
        clearInterval(interval);
        setIsExecuting(false);
      }
    }, 350);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-violet-950 via-slate-950 to-slate-900 border-l-4 border-l-purple-500 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-purple-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Autonomous LangGraph Architecture
            </span>
            <h2 className="text-2xl font-extrabold text-white-pure">AI Decision Center</h2>
          </div>
          <p className="text-xs text-slate-light mt-1">
            Real-time reasoning visualization of 7 autonomous AI agents synthesizing multi-modal sensor, weather, market, and crop data.
          </p>
        </div>

        <button
          onClick={handleReRunPipeline}
          disabled={isExecuting}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white-pure font-black px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-lg shadow-purple-500/30 transition-all cursor-pointer"
        >
          {isExecuting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
          <span>{isExecuting ? 'Synthesizing Agents...' : 'Re-Run Multi-Agent Pipeline'}</span>
        </button>
      </div>

      {/* 7 Agent Cards Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {AGENTS.map((agent, i) => {
          const Icon = agent.icon;
          const isDone = activeAgentIndex >= i;
          const isCurrent = activeAgentIndex === i;

          return (
            <div
              key={agent.id}
              className={`module-card ${agent.color} p-4 space-y-2 border transition-all ${
                isCurrent ? 'ring-2 ring-purple-400 scale-[1.03] shadow-2xl' : ''
              }`}
            >
              <div className={`top-strip ${agent.topStrip}`} />

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-mono text-purple-300 font-bold flex items-center space-x-1">
                  <Radio className="w-3 h-3 text-purple-400 animate-pulse" />
                  <span>Agent #{agent.id}</span>
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-900/80 border border-slate-700 text-amber-300">
                  {agent.confidence}% Confidence
                </span>
              </div>

              <div className="flex items-center space-x-2.5 mt-1">
                <div className={`w-9 h-9 rounded-lg ${agent.color.replace('card-', 'icon-bg-')} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white-pure">{agent.name}</h4>
                  <p className="text-[10px] text-slate-light">{agent.role}</p>
                </div>
              </div>

              <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-[11px] text-slate-200 mt-2">
                <p className="font-semibold text-slate-light">{agent.reasoning}</p>
                <p className="font-extrabold text-amber-300 mt-1">👉 {agent.recommendation}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animated Communication Signals Flow Banner */}
      <div className="flex justify-center my-3">
        <div className="bg-purple-950/90 px-6 py-2 rounded-full border border-purple-500/50 text-purple-300 text-xs font-black flex items-center space-x-3 shadow-xl animate-pulse">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
          <span>SYNTHESIZING 7 AGENT COMM-CHANNELS INTO MASTER AI DECISION</span>
          <ArrowRight className="w-4 h-4 text-purple-400 animate-ping" />
        </div>
      </div>

      {/* MASTER AI DECISION CARD */}
      <div className="glass-panel p-6 bg-gradient-to-tr from-purple-950 via-slate-950 to-slate-900 border-2 border-purple-400/80 space-y-4 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-400 flex items-center justify-center text-black font-black shadow-lg">
              <Cpu className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white-pure">MASTER AI DECISION</h3>
              <p className="text-xs text-purple-300">Synthesized by LangGraph Multi-Agent Engine • Latency: 284ms</p>
            </div>
          </div>

          <div className="text-right">
            <span className="bg-emerald-500 text-black text-xs font-black px-3 py-1 rounded-full shadow-lg">
              100% AGENT CONSENSUS
            </span>
          </div>
        </div>

        {/* Master AI Action Requirements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          
          <div className="bg-slate-900/90 p-4 rounded-xl border border-sky-500/40 space-y-1">
            <p className="text-[10px] text-sky-400 font-bold uppercase">Irrigation Decision</p>
            <p className="text-base font-extrabold text-white-pure">🚫 Don't irrigate today</p>
            <p className="text-[11px] text-sky-300">78% Rain expected Thursday</p>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-amber-500/40 space-y-1">
            <p className="text-[10px] text-amber-400 font-bold uppercase">Fertilizer Schedule</p>
            <p className="text-base font-extrabold text-white-pure">🌿 Apply fertilizer after 3 days</p>
            <p className="text-[11px] text-amber-300">Post-rain soil uptake optimal</p>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40 space-y-1">
            <p className="text-[10px] text-emerald-400 font-bold uppercase">Harvest Window</p>
            <p className="text-base font-extrabold text-white-pure">🌾 Harvest after 7 days</p>
            <p className="text-[11px] text-emerald-300">Target Nov 18 Mandi peak</p>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-purple-500/40 space-y-1 bg-gradient-to-tr from-purple-950/60 to-slate-900">
            <p className="text-[10px] text-purple-300 font-bold uppercase">Expected Net Profit</p>
            <p className="text-xl font-black text-amber-300">₹1,98,450</p>
            <p className="text-[11px] text-emerald-400">Net ROI: 441%</p>
          </div>

        </div>
      </div>

    </div>
  );
}
