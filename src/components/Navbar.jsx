import React from 'react';
import { 
  Sprout, User, Shield, Cpu, Mic, Bell, AlertTriangle, ChevronDown 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ 
  currentRole, setRole, 
  currentLang, setLang, 
  onOpenVoice, 
  onTriggerSOS 
}) {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <nav className="glass-panel sticky top-0 z-50 px-5 py-3 mb-5 bg-[#0b131e]/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="w-full flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand & Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Sprout className="w-5 h-5 text-black font-extrabold" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-lg tracking-tight text-white-pure">
                KrishiVerse AI
              </span>
              <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-bold">
                v1.0.0
              </span>
            </div>
            <p className="text-[10px] text-slate-400">Smart Agriculture Ecosystem</p>
          </div>
        </div>

        {/* Center Role Selector */}
        <div className="bg-slate-950/90 p-1 rounded-xl border border-slate-800 flex space-x-1">
          <button
            onClick={() => setRole('farmer')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentRole === 'farmer' 
                ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/30' 
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Farmer</span>
          </button>

          <button
            onClick={() => setRole('officer')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentRole === 'officer' 
                ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30' 
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Officer</span>
          </button>

          <button
            onClick={() => setRole('admin')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentRole === 'admin' 
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30' 
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Admin</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          
          {/* AI Assistant Button */}
          <button
            onClick={onOpenVoice}
            className="flex items-center space-x-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold px-3 py-1.5 rounded-xl text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <Mic className="w-3.5 h-3.5" />
            <span>AI Assistant</span>
          </button>

          {/* SOS Button */}
          <button
            onClick={onTriggerSOS}
            className="flex items-center space-x-1 bg-red-600 hover:bg-red-500 text-white font-extrabold px-3 py-1.5 rounded-xl text-xs shadow-md shadow-red-600/30 animate-pulse transition-all cursor-pointer"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>SOS</span>
          </button>

          {/* Notification Bell */}
          <button className="relative bg-slate-900 hover:bg-slate-800 text-slate-300 p-2 rounded-xl border border-slate-800 text-xs cursor-pointer">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              5
            </span>
          </button>

          {/* User Profile Avatar */}
          <div className="flex items-center space-x-2 bg-slate-900/90 p-1.5 pr-3 rounded-xl border border-slate-800">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User Avatar" className="w-7 h-7 rounded-lg object-cover" />
            <div className="text-left text-xs hidden sm:block">
              <span className="font-extrabold text-white-pure block leading-none">Krishi User</span>
              <span className="text-[9px] text-emerald-400 font-bold">Premium</span>
            </div>
          </div>

        </div>

      </div>
    </nav>
  );
}
