import React, { useState } from 'react';
import Navbar from './components/Navbar';
import VoiceAssistantModal from './components/VoiceAssistantModal';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/marketplace/CartDrawer';

// Farmer Base Views
import FarmerDashboard from './components/farmer/FarmerDashboard';
import AICropDoctor from './components/farmer/AICropDoctor';
import AISoilAnalyzer from './components/farmer/AISoilAnalyzer';
import AIFarmPlanner from './components/farmer/AIFarmPlanner';
import AIIrrigationPlanner from './components/farmer/AIIrrigationPlanner';
import AIDiseasePrediction from './components/farmer/AIDiseasePrediction';
import AIMarketIntelligence from './components/farmer/AIMarketIntelligence';
import AIExpenseManager from './components/farmer/AIExpenseManager';
import GovtSchemes from './components/farmer/GovtSchemes';
import AgriDigitalPassport from './components/farmer/AgriDigitalPassport';
import AIDigitalTwin from './components/farmer/AIDigitalTwin';

// Extensions
import AIDecisionCenter from './components/extensions/AIDecisionCenter';
import AdvancedAnalytics from './components/extensions/AdvancedAnalytics';
import SmartFarmMap from './components/extensions/SmartFarmMap';
import AgentDebateXAI from './components/extensions/AgentDebateXAI';
import DroneMissionPlanner from './components/extensions/DroneMissionPlanner';
import AutonomousIrrigation from './components/extensions/AutonomousIrrigation';
import BlockchainTraceability from './components/extensions/BlockchainTraceability';
import CarbonCreditDashboard from './components/extensions/CarbonCreditDashboard';
import StateCommandCenter from './components/extensions/StateCommandCenter';

// Officer & Admin Views
import OfficerDashboard from './components/officer/OfficerDashboard';
import AdminDashboard from './components/admin/AdminDashboard';

// Modules
import IoTModule from './components/modules/IoTModule';
import DroneModule from './components/modules/DroneModule';
import SatelliteModule from './components/modules/SatelliteModule';
import Marketplace from './components/marketplace/Marketplace';

import { 
  LayoutGrid, Activity, MapPin, Radio, Plane, ShoppingBag, 
  ShieldCheck, Leaf, Shield, Settings, AlertTriangle, ArrowLeft 
} from 'lucide-react';

export default function App() {
  const [currentRole, setRole] = useState('farmer'); // farmer, officer, admin
  const [currentLang, setLang] = useState('hi');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [sosActive, setSosActive] = useState(false);

  const handleTriggerSOS = () => {
    setSosActive(true);
    setTimeout(() => setSosActive(false), 5000);
  };

  const renderContent = () => {
    if (currentRole === 'officer') {
      return <OfficerDashboard />;
    }

    if (currentRole === 'admin') {
      return <AdminDashboard />;
    }

    // Farmer Role Routing
    switch (activeTab) {
      case 'aiDecisionCenter': return <AIDecisionCenter />;
      case 'agentDebate': return <AgentDebateXAI />;
      case 'advancedAnalytics': return <AdvancedAnalytics />;
      case 'smartFarmMap': return <SmartFarmMap />;
      case 'droneMission': return <DroneMissionPlanner />;
      case 'autonomousIrrigation': return <AutonomousIrrigation />;
      case 'blockchainTrace': return <BlockchainTraceability />;
      case 'carbonCredit': return <CarbonCreditDashboard />;
      case 'stateCommand': return <StateCommandCenter />;
      case 'cropDoctor': return <AICropDoctor />;
      case 'soilAnalyzer': return <AISoilAnalyzer />;
      case 'farmPlanner': return <AIFarmPlanner />;
      case 'irrigationPlanner': return <AIIrrigationPlanner />;
      case 'diseasePredict': return <AIDiseasePrediction />;
      case 'marketIntel': return <AIMarketIntelligence />;
      case 'expense': return <AIExpenseManager />;
      case 'schemes': return <GovtSchemes />;
      case 'passport': return <AgriDigitalPassport />;
      case 'digitalTwin': return <AIDigitalTwin />;
      case 'iot': return <IoTModule />;
      case 'drone': return <DroneModule />;
      case 'satellite': return <SatelliteModule />;
      case 'marketplace': return <Marketplace />;
      default:
        return (
          <FarmerDashboard 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            onOpenVoice={() => setIsVoiceOpen(true)}
            onTriggerSOS={handleTriggerSOS}
          />
        );
    }
  };

  const SIDEBAR_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'advancedAnalytics', label: 'Analytics', icon: Activity },
    { id: 'smartFarmMap', label: 'Smart Farm Map', icon: MapPin },
    { id: 'iot', label: 'IoT Sensors', icon: Radio },
    { id: 'droneMission', label: 'Drone Mission', icon: Plane },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
    { id: 'blockchainTrace', label: 'Traceability', icon: ShieldCheck },
    { id: 'carbonCredit', label: 'Carbon Credit', icon: Leaf },
    { id: 'stateCommand', label: 'Command Center', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#070d17] text-slate-100 flex flex-col justify-between font-sans">
        
        {/* Top Navbar */}
        <Navbar
          currentRole={currentRole} setRole={setRole}
          currentLang={currentLang} setLang={setLang}
          onOpenVoice={() => setIsVoiceOpen(true)}
          onTriggerSOS={handleTriggerSOS}
        />

        {/* Emergency SOS Banner Toast */}
        {sosActive && (
          <div className="w-full px-5 mb-3">
            <div className="glass-panel p-4 bg-red-950 border-2 border-red-500 text-white flex items-center justify-between shadow-2xl animate-bounce">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-7 h-7 text-yellow-300 animate-ping" />
                <div>
                  <h4 className="text-base font-black">EMERGENCY SOS ALERT DISPATCHED 🚨</h4>
                  <p className="text-xs text-red-200">
                    GPS Coordinates [18.5204° N, 73.8567° E] sent to District Agriculture Officer Dr. Vijay Kulkarni.
                  </p>
                </div>
              </div>
              <button onClick={() => setSosActive(false)} className="bg-white text-black text-xs font-black px-3 py-1.5 rounded-lg">
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Main App Layout: Left Sidebar + Right Dashboard */}
        <div className="flex-1 flex px-4 gap-4 max-w-[1700px] w-full mx-auto">
          
          {/* Left Vertical Icon Bar Sidebar */}
          <aside className="w-14 bg-[#09111e]/90 border border-slate-800 rounded-2xl p-2 flex flex-col items-center space-y-4 shrink-0 shadow-2xl">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  title={item.label}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden">
            
            {/* Back Button when deep inside a sub-tool */}
            {currentRole === 'farmer' && activeTab !== 'dashboard' && (
              <button
                onClick={() => setActiveTab('dashboard')}
                className="mb-4 flex items-center space-x-1.5 text-xs text-emerald-400 font-extrabold hover:text-white bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-700 w-max transition-all cursor-pointer shadow"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Main Dashboard</span>
              </button>
            )}

            {renderContent()}
          </main>

        </div>

        {/* Voice Assistant Modal */}
        <VoiceAssistantModal
          isOpen={isVoiceOpen}
          onClose={() => setIsVoiceOpen(false)}
          currentLang={currentLang}
        />

        {/* Cart Drawer */}
        <CartDrawer />

      </div>
    </CartProvider>
  );
}
