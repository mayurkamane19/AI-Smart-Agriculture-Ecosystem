import React from 'react';
import { 
  Camera, Sliders, Calendar, Droplets, Bug, TrendingUp, 
  DollarSign, Award, QrCode, Layers, Cpu, Radio, 
  Plane, Globe, ShoppingBag, CloudSun, Zap, ArrowRight, Activity, MapPin, MessageSquare, ShieldCheck, Leaf, Shield
} from 'lucide-react';

export default function FarmerDashboard({ activeTab, setActiveTab, onOpenVoice, onTriggerSOS }) {
  
  const MODULE_CARDS = [
    {
      id: 'aiDecisionCenter',
      name: 'AI Decision Center',
      desc: 'LangGraph Multi-Agent Flow & Master Decision',
      badge: '⭐ Core AI',
      icon: Cpu,
      themeClass: 'card-violet',
      topStripClass: 'top-strip-violet',
      iconBgClass: 'icon-bg-violet',
      badgeTextClass: 'text-violet-300 bg-violet-950/80 border-violet-500/30'
    },
    {
      id: 'agentDebate',
      name: 'Agent Debate & XAI',
      desc: 'Transparent AI Agent Reasoning & Consensus',
      badge: 'XAI Engine',
      icon: MessageSquare,
      themeClass: 'card-purple',
      topStripClass: 'top-strip-purple',
      iconBgClass: 'icon-bg-purple',
      badgeTextClass: 'text-purple-300 bg-purple-950/80 border-purple-500/30'
    },
    {
      id: 'smartFarmMap',
      name: 'Smart Farm Map',
      desc: '2D Real Farm Schematic & GIS Satellites',
      badge: 'GIS Spatial',
      icon: MapPin,
      themeClass: 'card-deepblue',
      topStripClass: 'top-strip-deepblue',
      iconBgClass: 'icon-bg-deepblue',
      badgeTextClass: 'text-blue-300 bg-blue-950/80 border-blue-500/30'
    },
    {
      id: 'droneMission',
      name: 'Drone Mission Planner',
      desc: 'Autonomous UAV Flight & Weed Spotter',
      badge: 'Aerial Drone',
      icon: Plane,
      themeClass: 'card-skyblue',
      topStripClass: 'top-strip-skyblue',
      iconBgClass: 'icon-bg-skyblue',
      badgeTextClass: 'text-sky-300 bg-sky-950/80 border-sky-500/30'
    },
    {
      id: 'autonomousIrrigation',
      name: 'Autonomous Irrigation',
      desc: 'Closed-Loop Solenoid Actuator Control',
      badge: 'IoT Actuator',
      icon: Droplets,
      themeClass: 'card-blue',
      topStripClass: 'top-strip-blue',
      iconBgClass: 'icon-bg-blue',
      badgeTextClass: 'text-blue-400 bg-blue-950/80 border-blue-500/30'
    },
    {
      id: 'blockchainTrace',
      name: 'Blockchain Traceability',
      desc: 'Immutable Produce Batch QR Provenance',
      badge: 'On-Chain QR',
      icon: ShieldCheck,
      themeClass: 'card-purple',
      topStripClass: 'top-strip-purple',
      iconBgClass: 'icon-bg-purple',
      badgeTextClass: 'text-purple-300 bg-purple-950/80 border-purple-500/30'
    },
    {
      id: 'carbonCredit',
      name: 'Carbon Credit & Eco',
      desc: 'CO2 Offset Sequestration & Credits',
      badge: 'ISO 14064',
      icon: Leaf,
      themeClass: 'card-emerald',
      topStripClass: 'top-strip-emerald',
      iconBgClass: 'icon-bg-emerald',
      badgeTextClass: 'text-emerald-300 bg-emerald-950/80 border-emerald-500/30'
    },
    {
      id: 'stateCommand',
      name: 'District AI Command',
      desc: 'Macro Operations Monitoring & Alerts',
      badge: 'Macro Ops',
      icon: Shield,
      themeClass: 'card-red',
      topStripClass: 'top-strip-red',
      iconBgClass: 'icon-bg-red',
      badgeTextClass: 'text-red-400 bg-red-950/80 border-red-500/30'
    },
    {
      id: 'advancedAnalytics',
      name: 'Advanced Analytics',
      desc: 'Recharts Monthly Profit, Yield, Water & ROI',
      badge: 'Analytics',
      icon: Activity,
      themeClass: 'card-cyan',
      topStripClass: 'top-strip-cyan',
      iconBgClass: 'icon-bg-cyan',
      badgeTextClass: 'text-cyan-300 bg-cyan-950/80 border-cyan-500/30'
    },
    {
      id: 'cropDoctor',
      name: 'AI Crop Doctor',
      desc: 'YOLOv11 Leaf Scan & Vision Diagnosis',
      badge: 'Vision AI',
      icon: Camera,
      themeClass: 'card-green',
      topStripClass: 'top-strip-green',
      iconBgClass: 'icon-bg-green',
      badgeTextClass: 'text-emerald-400 bg-emerald-950/80 border-emerald-500/30'
    },
    {
      id: 'soilAnalyzer',
      name: 'AI Soil Analyzer',
      desc: 'Soil pH & NPK Nutrient Sliders',
      badge: 'NPK Engine',
      icon: Sliders,
      themeClass: 'card-brown',
      topStripClass: 'top-strip-brown',
      iconBgClass: 'icon-bg-brown',
      badgeTextClass: 'text-amber-400 bg-amber-950/80 border-amber-500/30'
    },
    {
      id: 'farmPlanner',
      name: 'AI Farm Planner',
      desc: 'Crop Plan & Net Profit Estimator',
      badge: 'Yield Wizard',
      icon: Calendar,
      themeClass: 'card-amber',
      topStripClass: 'top-strip-amber',
      iconBgClass: 'icon-bg-amber',
      badgeTextClass: 'text-yellow-400 bg-yellow-950/80 border-yellow-500/30'
    },
    {
      id: 'diseasePredict',
      name: 'AI Disease Warning',
      desc: 'Early Microclimate Infection Radar',
      badge: 'Risk Warning',
      icon: Bug,
      themeClass: 'card-red',
      topStripClass: 'top-strip-red',
      iconBgClass: 'icon-bg-red',
      badgeTextClass: 'text-red-400 bg-red-950/80 border-red-500/30'
    },
    {
      id: 'marketIntel',
      name: 'AI Mandi Market',
      desc: 'Real-time & 15-Day Price Forecast',
      badge: 'Live Mandi',
      icon: TrendingUp,
      themeClass: 'card-orange',
      topStripClass: 'top-strip-orange',
      iconBgClass: 'icon-bg-orange',
      badgeTextClass: 'text-orange-400 bg-orange-950/80 border-orange-500/30'
    },
    {
      id: 'passport',
      name: 'Agri Digital Passport',
      desc: '1st Prize Unique Farm Identity Badge',
      badge: '⭐ 1st Prize',
      icon: QrCode,
      themeClass: 'card-purple',
      topStripClass: 'top-strip-purple',
      iconBgClass: 'icon-bg-purple',
      badgeTextClass: 'text-purple-300 bg-purple-950/80 border-purple-500/30'
    },
    {
      id: 'digitalTwin',
      name: 'AI Digital Twin',
      desc: 'Virtual Field Simulator & Heatmaps',
      badge: 'Virtual Twin',
      icon: Layers,
      themeClass: 'card-cyan',
      topStripClass: 'top-strip-cyan',
      iconBgClass: 'icon-bg-cyan',
      badgeTextClass: 'text-cyan-400 bg-cyan-950/80 border-cyan-500/30'
    },
    {
      id: 'expense',
      name: 'Expense & ROI',
      desc: 'Farm Expenses & Profitability Ledger',
      badge: 'Finance ROI',
      icon: DollarSign,
      themeClass: 'card-emerald',
      topStripClass: 'top-strip-emerald',
      iconBgClass: 'icon-bg-emerald',
      badgeTextClass: 'text-emerald-300 bg-emerald-950/80 border-emerald-500/30'
    },
    {
      id: 'schemes',
      name: 'Govt Schemes',
      desc: 'PM-Kisan & Subsidy Eligibility',
      badge: 'Subsidies',
      icon: Award,
      themeClass: 'card-yellow',
      topStripClass: 'top-strip-yellow',
      iconBgClass: 'icon-bg-yellow',
      badgeTextClass: 'text-yellow-300 bg-yellow-950/80 border-yellow-500/30'
    },
    {
      id: 'iot',
      name: 'IoT Telemetry',
      desc: 'Live Sensor Devices Broadcast',
      badge: 'Live Sensors',
      icon: Radio,
      themeClass: 'card-indigo',
      topStripClass: 'top-strip-indigo',
      iconBgClass: 'icon-bg-indigo',
      badgeTextClass: 'text-indigo-300 bg-indigo-950/80 border-indigo-500/30'
    },
    {
      id: 'marketplace',
      name: 'Agri Marketplace',
      desc: 'Seeds, Fertilizers & Equipment Rent',
      badge: 'B2B Market',
      icon: ShoppingBag,
      themeClass: 'card-pink',
      topStripClass: 'top-strip-pink',
      iconBgClass: 'icon-bg-pink',
      badgeTextClass: 'text-pink-300 bg-pink-950/80 border-pink-500/30'
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Hero Welcome Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-l-4 border-l-emerald-500 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Farmer Portal • Ramesh Patel</span>
            <h2 className="text-2xl font-extrabold text-white-pure mt-1">रामेश्वर जी, कृषिवर्स AI में आपका स्वागत है 🙏</h2>
            <p className="text-xs text-slate-light mt-1">
              Farm: Patel Organic Plot • Shirur, Pune, MH • 2.5 Acres Irrigated
            </p>
          </div>

          <button
            onClick={onOpenVoice}
            className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4 animate-bounce" />
            <span>Ask Voice AI Assistant</span>
          </button>
        </div>

        {/* Quick KPI Stat Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-slate-800">
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
            <p className="text-[10px] text-amber-400 font-bold uppercase flex items-center space-x-1">
              <CloudSun className="w-3.5 h-3.5" />
              <span>Weather Today</span>
            </p>
            <p className="text-base font-extrabold text-white-pure">31.5°C • Cloudy</p>
            <p className="text-[10px] text-sky-400">Humidity: 78%</p>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
            <p className="text-[10px] text-teal-400 font-bold uppercase">AI Health Score</p>
            <p className="text-base font-extrabold text-amber-300">92.5 / 100</p>
            <p className="text-[10px] text-emerald-400">Grade A+ Excellent</p>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
            <p className="text-[10px] text-sky-400 font-bold uppercase">Smart Irrigation</p>
            <p className="text-base font-extrabold text-sky-300">SKIP TODAY</p>
            <p className="text-[10px] text-sky-200">78% Rain Thursday</p>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
            <p className="text-[10px] text-emerald-400 font-bold uppercase">Est. Net Profit</p>
            <p className="text-base font-extrabold text-amber-300">₹1,98,450</p>
            <p className="text-[10px] text-emerald-400">ROI: 441%</p>
          </div>
        </div>
      </div>

      {/* Main AI Module Directory Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-extrabold text-white-pure flex items-center space-x-2">
            <span>AI Enterprise Modules & Tools</span>
          </h3>
          <span className="text-xs text-emerald-400 font-medium">Click any card to launch tool</span>
        </div>

        {/* Responsive Colorized Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULE_CARDS.map((card) => {
            const Icon = card.icon;
            const isSelected = activeTab === card.id;

            return (
              <button
                key={card.id}
                onClick={() => setActiveTab(card.id)}
                className={`module-card ${card.themeClass} p-5 text-left cursor-pointer transition-all ${
                  isSelected ? 'ring-2 ring-white scale-[1.03]' : ''
                }`}
              >
                <div className={`top-strip ${card.topStripClass}`} />

                <div className="flex items-start justify-between mb-3 pt-2">
                  <div className={`w-12 h-12 rounded-xl ${card.iconBgClass} flex items-center justify-center text-white shadow-lg shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border shadow-sm ${card.badgeTextClass}`}>
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-1 mt-1">
                  <h4 className="text-base font-extrabold text-white-pure tracking-tight flex items-center justify-between">
                    <span>{card.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
                  </h4>
                  <p className="text-xs text-slate-light leading-snug line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
