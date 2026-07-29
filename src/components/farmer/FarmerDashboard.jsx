import React, { useState } from 'react';
import { 
  Sprout, Cpu, CloudRain, Sliders, Bug, TrendingUp, DollarSign, Award, 
  MapPin, Radio, Plane, ShoppingBag, ShieldCheck, Leaf, Shield, Layers, 
  Activity, Zap, ArrowRight, CheckCircle2, ChevronRight, Mic, Search, Bell, Plus, Wind, Droplets, Thermometer, Compass
} from 'lucide-react';

export default function FarmerDashboard({ activeTab, setActiveTab, onOpenVoice, onTriggerSOS }) {
  const [selectedCity, setSelectedCity] = useState("Madhya Pradesh");

  return (
    <div className="space-y-5 text-slate-100 font-sans pb-10">
      
      {/* Top Header Row with Welcome Banner & Top Stat Widgets */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4">
        
        {/* Welcome Banner */}
        <div className="glass-panel p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex-1 flex flex-col justify-between rounded-2xl shadow-xl">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white-pure flex items-center space-x-2">
              <span>नमस्ते, किसान! 👋 AI आपका स्वागत करता है ।</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              यहाँ आपके खेत और निर्णय का संपूर्ण अवलोकन है । (Patel Organic Plot • 2.5 Acres)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <button
              onClick={onOpenVoice}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-3.5 py-2 rounded-xl text-xs flex items-center space-x-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>Ask Voice AI Assistant</span>
            </button>

            <button
              onClick={onTriggerSOS}
              className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-3.5 py-2 rounded-xl text-xs flex items-center space-x-1.5 shadow-lg shadow-red-600/30 animate-pulse transition-all cursor-pointer"
            >
              <span>🚨 SOS Emergency</span>
            </button>
          </div>
        </div>

        {/* Top Stat Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:w-[58%]">
          
          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Total Farms</span>
            <div>
              <p className="text-2xl font-black text-white-pure">12</p>
              <span className="text-[10px] text-emerald-400 font-bold">+2 This Month</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Total Area</span>
            <div>
              <p className="text-2xl font-black text-white-pure">45.6 Acres</p>
              <span className="text-[10px] text-emerald-400 font-bold">+5.3 Acres</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 font-bold uppercase">Active Agents</span>
            <div>
              <p className="text-2xl font-black text-white-pure">7/7</p>
              <span className="text-[10px] text-emerald-400 font-bold">All Systems Active</span>
            </div>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 flex flex-col justify-between relative overflow-hidden">
            <span className="text-[10px] text-slate-400 font-bold uppercase">AI Confidence</span>
            <div>
              <p className="text-2xl font-black text-emerald-400">96.8%</p>
              <span className="text-[10px] text-emerald-300 font-bold">Very High</span>
            </div>
            <button className="mt-2 bg-emerald-500 hover:bg-emerald-400 text-black text-[11px] font-black py-1 px-2 rounded-lg flex items-center justify-center space-x-1 shadow">
              <Plus className="w-3 h-3" />
              <span>Add Farm</span>
            </button>
          </div>

        </div>

      </div>

      {/* ROW 1: AI Multi-Agent Decision Center & MASTER AI DECISION */}
      <div className="glass-panel p-5 bg-gradient-to-r from-[#0d1627] via-[#09111e] to-[#0d1627] border border-purple-500/30 rounded-2xl shadow-2xl space-y-4">
        
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-base font-black text-white-pure">AI Multi-Agent Decision Center</h3>
          </div>
          <button onClick={() => setActiveTab('aiDecisionCenter')} className="text-xs text-purple-300 font-extrabold hover:text-white flex items-center space-x-1 cursor-pointer">
            <span>Open Decision Flow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* 7 Agent Cards (Left 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            <div className="bg-slate-950/90 p-3 rounded-xl border border-sky-500/40 space-y-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-extrabold text-sky-400 flex items-center space-x-1">
                  <CloudRain className="w-3.5 h-3.5" />
                  <span>Weather Agent</span>
                </span>
                <span className="bg-sky-950 text-sky-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-sky-800">96.3%</span>
              </div>
              <p className="text-xs font-bold text-white-pure">78% Rain tomorrow</p>
              <p className="text-[10px] text-slate-400">Monsoon & Micro-Climate</p>
            </div>

            <div className="bg-slate-950/90 p-3 rounded-xl border border-amber-500/40 space-y-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-extrabold text-amber-400 flex items-center space-x-1">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Soil Agent</span>
                </span>
                <span className="bg-amber-950 text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-amber-800">94.2%</span>
              </div>
              <p className="text-xs font-bold text-white-pure">pH 6.8 - NPK Balanced</p>
              <p className="text-[10px] text-slate-400">NPK & pH Analysis</p>
            </div>

            <div className="bg-slate-950/90 p-3 rounded-xl border border-emerald-500/40 space-y-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-extrabold text-emerald-400 flex items-center space-x-1">
                  <Sprout className="w-3.5 h-3.5" />
                  <span>Crop Agent</span>
                </span>
                <span className="bg-emerald-950 text-emerald-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-800">98.1%</span>
              </div>
              <p className="text-xs font-bold text-white-pure">Tomato: Flowering Stage</p>
              <p className="text-[10px] text-slate-400">Phenology & Growth</p>
            </div>

            <div className="bg-slate-950/90 p-3 rounded-xl border border-red-500/40 space-y-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-extrabold text-red-400 flex items-center space-x-1">
                  <Bug className="w-3.5 h-3.5" />
                  <span>Disease Agent</span>
                </span>
                <span className="bg-red-950 text-red-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-red-800">91.8%</span>
              </div>
              <p className="text-xs font-bold text-white-pure">Low Risk</p>
              <p className="text-[10px] text-slate-400">Spore Germination Risk</p>
            </div>

            <div className="bg-slate-950/90 p-3 rounded-xl border border-emerald-500/40 space-y-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-extrabold text-emerald-400 flex items-center space-x-1">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Finance Agent</span>
                </span>
                <span className="bg-emerald-950 text-emerald-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-800">97.4%</span>
              </div>
              <p className="text-xs font-bold text-white-pure">ROI: 41% (Projected)</p>
              <p className="text-[10px] text-slate-400">Expense & ROI Engine</p>
            </div>

            <div className="bg-slate-950/90 p-3 rounded-xl border border-orange-500/40 space-y-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-extrabold text-orange-400 flex items-center space-x-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Market Agent</span>
                </span>
                <span className="bg-orange-950 text-orange-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-orange-800">95.2%</span>
              </div>
              <p className="text-xs font-bold text-white-pure">Tomato: ₹2,500/quintal</p>
              <p className="text-[10px] text-slate-400">Price Trends & Prediction</p>
            </div>

            <div className="bg-slate-950/90 p-3 rounded-xl border border-yellow-500/40 sm:col-span-2 space-y-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-extrabold text-yellow-400 flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Govt. Scheme Agent</span>
                </span>
                <span className="bg-yellow-950 text-yellow-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-yellow-800">99.1%</span>
              </div>
              <p className="text-xs font-bold text-white-pure">PM-KISAN, NHM Eligible</p>
              <p className="text-[10px] text-slate-400">Subsidies & Benefits</p>
            </div>

          </div>

          {/* Master AI Decision Box (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-950/90 via-slate-950 to-indigo-950/90 p-4 rounded-xl border-2 border-purple-400/80 flex flex-col justify-between space-y-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-purple-300 animate-pulse" />
                <h4 className="text-sm font-extrabold text-white-pure">MASTER AI DECISION</h4>
              </div>
              <span className="text-[10px] font-extrabold text-emerald-400">AI Confidence: 96.8%</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-sky-500/40">
                <span className="text-[9px] text-sky-300 font-bold uppercase block">💧 Irrigation</span>
                <span className="font-extrabold text-white-pure block mt-0.5">Don't Irrigate Today</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Next: Tomorrow</span>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-amber-500/40">
                <span className="text-[9px] text-amber-300 font-bold uppercase block">🌿 Fertilizer</span>
                <span className="font-extrabold text-white-pure block mt-0.5">Apply after 3 Days</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">19:19:19 NPK</span>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-emerald-500/40">
                <span className="text-[9px] text-emerald-300 font-bold uppercase block">🌾 Harvest Window</span>
                <span className="font-extrabold text-white-pure block mt-0.5">Best after 7 Days</span>
                <span className="text-[9px] text-slate-400 block mt-0.5">Nov 18 - Nov 22</span>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-purple-500/40">
                <span className="text-[9px] text-purple-300 font-bold uppercase block">✨ Expected Profit</span>
                <span className="font-black text-amber-300 text-sm block mt-0.5">₹1,98,450</span>
                <span className="text-[9px] text-emerald-400 block mt-0.5">Net ROI: 41%</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ROW 2: 5 Main Core Live Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* 1. IoT Live Monitoring */}
        <button
          onClick={() => setActiveTab('iot')}
          className="glass-panel p-4 text-left border border-cyan-500/30 rounded-2xl hover:border-cyan-400 transition-all flex flex-col justify-between space-y-3 cursor-pointer bg-slate-950/80"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-white-pure flex items-center space-x-1.5">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>IoT Live Monitoring</span>
            </span>
            <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded">● Live</span>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between"><span className="text-slate-400">💧 Soil Moisture</span><span className="font-extrabold text-cyan-300">63.1% (Optimal)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">🌡️ Soil Temp.</span><span className="font-extrabold text-amber-300">31.2°C (Ideal)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">🧪 pH Level</span><span className="font-extrabold text-emerald-400">6.8 (Neutral)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">💨 Air Humidity</span><span className="font-extrabold text-sky-300">58% (Normal)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">🔋 Battery Level</span><span className="font-extrabold text-emerald-400">94% (Good)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">📶 Signal Strength</span><span className="font-extrabold text-cyan-400">-65 dBm (Strong)</span></div>
          </div>

          <div className="border-t border-slate-800 pt-2 text-[10px] text-emerald-400 font-bold">
            Sensor Status: 12/12 Online
          </div>
        </button>

        {/* 2. GIS Farm Layout */}
        <button
          onClick={() => setActiveTab('smartFarmMap')}
          className="glass-panel p-4 text-left border border-emerald-500/30 rounded-2xl hover:border-emerald-400 transition-all flex flex-col justify-between space-y-3 cursor-pointer bg-slate-950/80"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-white-pure flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>GIS Farm Layout</span>
            </span>
          </div>

          <div className="h-28 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden flex items-center justify-center p-2 text-[10px] text-emerald-300 font-bold">
            <div className="grid grid-cols-2 gap-1 w-full text-center">
              <div className="bg-emerald-950/60 p-1.5 rounded border border-emerald-500/40">Zone A: Tomato</div>
              <div className="bg-amber-950/60 p-1.5 rounded border border-amber-500/40">Zone B: Wheat</div>
              <div className="bg-cyan-950/60 p-1.5 rounded border border-cyan-500/40">Zone C: Chickpea</div>
              <div className="bg-red-950/60 p-1.5 rounded border border-red-500/40">Zone D: Fallow</div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 font-medium">
            2.5-Acre Polygon • Drip Pipe Lines
          </div>
        </button>

        {/* 3. 3D Farm Digital Twin */}
        <button
          onClick={() => setActiveTab('digitalTwin')}
          className="glass-panel p-4 text-left border border-cyan-500/30 rounded-2xl hover:border-cyan-400 transition-all flex flex-col justify-between space-y-3 cursor-pointer bg-slate-950/80"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-white-pure flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>3D Farm Digital Twin</span>
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 text-[9px] font-bold px-1.5 py-0.5 rounded">● Live</span>
          </div>

          <div className="h-28 rounded-xl overflow-hidden relative border border-slate-800">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80" alt="3D Twin" className="w-full h-full object-cover" />
            <div className="absolute bottom-1 left-1 right-1 flex justify-between gap-1 text-[8px] font-black">
              <span className="bg-black/80 px-1 py-0.5 rounded text-white">3D View</span>
              <span className="bg-black/80 px-1 py-0.5 rounded text-cyan-300">Sensors</span>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 font-medium">
            Virtual Twin • Heatmap Simulation
          </div>
        </button>

        {/* 4. Drone Mission Planner */}
        <button
          onClick={() => setActiveTab('droneMission')}
          className="glass-panel p-4 text-left border border-sky-500/30 rounded-2xl hover:border-sky-400 transition-all flex flex-col justify-between space-y-3 cursor-pointer bg-slate-950/80"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-white-pure flex items-center space-x-1.5">
              <Plane className="w-4 h-4 text-sky-400" />
              <span>Drone Mission Planner</span>
            </span>
            <span className="bg-sky-500/20 text-sky-300 text-[9px] font-bold px-1.5 py-0.5 rounded">Active</span>
          </div>

          <div className="h-28 rounded-xl overflow-hidden relative border border-slate-800">
            <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400&q=80" alt="Drone" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-xs font-extrabold text-white">
              72% Progress
            </div>
          </div>

          <div className="text-[10px] text-slate-400 font-medium">
            Agras T40 UAV • 4K Weed Scanner
          </div>
        </button>

        {/* 5. Weather Intelligence */}
        <button
          onClick={() => setActiveTab('cropDoctor')}
          className="glass-panel p-4 text-left border border-amber-500/30 rounded-2xl hover:border-amber-400 transition-all flex flex-col justify-between space-y-3 cursor-pointer bg-slate-950/80"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-white-pure flex items-center space-x-1.5">
              <CloudRain className="w-4 h-4 text-amber-400" />
              <span>Weather Intelligence</span>
            </span>
            <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded">● Live</span>
          </div>

          <div className="space-y-1">
            <p className="text-2xl font-black text-white-pure">27.4°C</p>
            <p className="text-[10px] text-slate-400">Partly Cloudy • Rain 78% Thu</p>
          </div>

          <div className="text-[10px] text-slate-400 font-medium">
            Wind: 12 km/h • Humidity: 63%
          </div>
        </button>

      </div>

      {/* ROW 3: 4 Enterprise Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Marketplace Overview */}
        <button
          onClick={() => setActiveTab('marketplace')}
          className="glass-panel p-4 text-left border border-pink-500/30 rounded-2xl hover:border-pink-400 transition-all space-y-3 cursor-pointer bg-slate-950/80"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-extrabold text-white-pure flex items-center space-x-1.5">
              <ShoppingBag className="w-4 h-4 text-pink-400" />
              <span>Marketplace Overview</span>
            </span>
            <span className="text-[10px] text-pink-300 font-bold">View All</span>
          </div>

          <div className="grid grid-cols-4 gap-1 text-[9px] text-center">
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800"><p className="font-bold text-white">Seeds</p><p className="text-slate-400">24+ Products</p></div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800"><p className="font-bold text-white">Fertilizers</p><p className="text-slate-400">18+ Products</p></div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800"><p className="font-bold text-white">Equipment</p><p className="text-slate-400">32+ Products</p></div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800"><p className="font-bold text-white">Rent Drone</p><p className="text-slate-400">Available</p></div>
          </div>
        </button>

        {/* Carbon Credit Dashboard */}
        <button
          onClick={() => setActiveTab('carbonCredit')}
          className="glass-panel p-4 text-left border border-emerald-500/30 rounded-2xl hover:border-emerald-400 transition-all space-y-3 cursor-pointer bg-slate-950/80"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-extrabold text-white-pure flex items-center space-x-1.5">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>Carbon Credit Dashboard</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">This Month</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800"><p className="text-[9px] text-slate-400">Saved</p><p className="font-black text-emerald-400">1.24 Ton</p></div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800"><p className="text-[9px] text-slate-400">Score</p><p className="font-black text-amber-300">92/100</p></div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800"><p className="text-[9px] text-slate-400">Green</p><p className="font-black text-cyan-300">85%</p></div>
          </div>
        </button>

        {/* Blockchain Traceability */}
        <button
          onClick={() => setActiveTab('blockchainTrace')}
          className="glass-panel p-4 text-left border border-purple-500/30 rounded-2xl hover:border-purple-400 transition-all space-y-3 cursor-pointer bg-slate-950/80"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-extrabold text-white-pure flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Blockchain Traceability</span>
            </span>
            <span className="text-[10px] text-purple-300 font-bold">Verified</span>
          </div>

          <div className="flex items-center justify-between text-[9px] text-slate-300 pt-1">
            <span>Farm ➔</span>
            <span>Harvest ➔</span>
            <span>Warehouse ➔</span>
            <span>Retail</span>
          </div>
        </button>

        {/* Live Analytics */}
        <button
          onClick={() => setActiveTab('advancedAnalytics')}
          className="glass-panel p-4 text-left border border-cyan-500/30 rounded-2xl hover:border-cyan-400 transition-all space-y-3 cursor-pointer bg-slate-950/80"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-extrabold text-white-pure flex items-center space-x-1.5">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Live Analytics</span>
            </span>
            <span className="text-[10px] text-cyan-300 font-bold">This Week</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800"><p className="text-[9px] text-slate-400">Yield</p><p className="font-bold text-emerald-400">+18.6%</p></div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800"><p className="text-[9px] text-slate-400">Revenue</p><p className="font-bold text-amber-300">+22.5%</p></div>
          </div>
        </button>

      </div>

      {/* ROW 4: Command Center & Voice Copilot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Government Command Center */}
        <div className="lg:col-span-7 glass-panel p-5 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-red-400" />
              <h3 className="text-sm font-extrabold text-white-pure">Government Command Center</h3>
            </div>
            
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-xs text-white px-2 py-1 rounded-lg outline-none cursor-pointer"
            >
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Punjab">Punjab</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-xs pt-1">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Crop Production</p>
              <p className="text-base font-black text-emerald-400 mt-1">↑ 12.6%</p>
              <p className="text-[9px] text-slate-400">vs Last Month</p>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Water Availability</p>
              <p className="text-base font-black text-sky-400 mt-1">68%</p>
              <p className="text-[9px] text-slate-400">Moderate Level</p>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Active Alerts</p>
              <p className="text-base font-black text-red-400 mt-1">3</p>
              <p className="text-[9px] text-red-300">Requires Attention</p>
            </div>
          </div>
        </div>

        {/* AI Voice Copilot Input Card */}
        <div className="lg:col-span-5 glass-panel p-5 bg-gradient-to-br from-indigo-950/80 via-slate-950 to-slate-950 border border-indigo-500/40 rounded-2xl space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mic className="w-5 h-5 text-indigo-400 animate-pulse" />
              <h3 className="text-sm font-extrabold text-white-pure">AI Voice Copilot</h3>
            </div>
            <span className="text-[10px] font-bold text-slate-400">Your Farming Assistant</span>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
            <input
              type="text"
              placeholder="आप क्या जानना चाहते हैं? Ask anything about your farm..."
              className="bg-transparent text-xs text-white border-none outline-none w-full pr-2"
            />
            <button onClick={onOpenVoice} className="w-8 h-8 rounded-lg bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-black shrink-0 cursor-pointer shadow">
              <Mic className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* FOOTER SYSTEM DIAGNOSTICS BAR */}
      <div className="glass-panel p-3 bg-slate-950 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <span>Backend: <strong className="text-emerald-400">FastAPI</strong></span>
          <span>AI: <strong className="text-cyan-400">Gemini</strong></span>
          <span>Agents: <strong className="text-purple-400">LangGraph</strong></span>
          <span>Database: <strong className="text-amber-400">PostgreSQL + PostGIS</strong></span>
          <span>Vision: <strong className="text-red-400">YOLOv11</strong></span>
          <span>IoT: <strong className="text-sky-400">MQTT</strong></span>
        </div>

        <span className="text-slate-500 font-bold">KrishiVerse AI © 2026</span>
      </div>

    </div>
  );
}
