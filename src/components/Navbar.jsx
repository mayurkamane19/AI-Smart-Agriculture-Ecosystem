import React from 'react';
import { 
  Sprout, User, Shield, Activity, Mic, Globe, 
  Smartphone, Monitor, AlertTriangle, Cpu, ShoppingBag 
} from 'lucide-react';
import { LANGUAGES, TRANSLATIONS } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function Navbar({ 
  currentRole, setRole, 
  currentLang, setLang, 
  isMobileFrame, setIsMobileFrame, 
  onOpenVoice, 
  onTriggerSOS 
}) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <nav className="glass-panel sticky top-0 z-50 px-4 py-3 mb-6 border-b border-slate-700/80 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Sprout className="w-6 h-6 text-black font-extrabold" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-xl tracking-tight text-white-pure">
                KrishiVerse AI
              </span>
              <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs px-2 py-0.5 rounded-full font-bold">
                v1.0 OS
              </span>
            </div>
            <p className="text-xs text-slate-light hidden sm:block">{t.tagline}</p>
          </div>
        </div>

        {/* Role Selector & Action Controls */}
        <div className="flex items-center flex-wrap gap-2">
          
          {/* Role Switcher Tabs */}
          <div className="bg-slate-900/90 p-1 rounded-xl border border-slate-700 flex space-x-1">
            <button
              onClick={() => setRole('farmer')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                currentRole === 'farmer' 
                  ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/40' 
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
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/40' 
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
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/40' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
          </div>

          {/* Cart Icon Button with Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center p-2 bg-slate-900 hover:bg-slate-800 text-pink-400 border border-slate-700 rounded-xl text-xs cursor-pointer"
            title="View Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-pink-500 text-white font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                {itemCount}
              </span>
            )}
          </button>

          {/* AI Voice Assistant Trigger */}
          <button
            onClick={onOpenVoice}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black font-extrabold px-3 py-1.5 rounded-xl text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <Mic className="w-4 h-4 animate-bounce" />
            <span className="hidden md:inline">{t.voiceAssistant}</span>
          </button>

          {/* Emergency SOS Trigger */}
          <button
            onClick={onTriggerSOS}
            className="flex items-center space-x-1 bg-red-600 hover:bg-red-500 text-white-pure font-black px-3 py-1.5 rounded-xl text-xs shadow-lg shadow-red-600/40 animate-pulse transition-all cursor-pointer"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>SOS</span>
          </button>

          {/* Mobile Simulator Toggle */}
          <button
            onClick={() => setIsMobileFrame(!isMobileFrame)}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs transition-all cursor-pointer"
            title="Toggle Mobile Frame View"
          >
            {isMobileFrame ? <Monitor className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
          </button>

          {/* Language Selector */}
          <div className="flex items-center space-x-1 bg-slate-900/90 px-2 py-1 rounded-xl border border-slate-700 text-xs">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <select
              value={currentLang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-white-pure font-bold border-none outline-none cursor-pointer text-xs"
            >
              {Object.entries(LANGUAGES).map(([key, lang]) => (
                <option key={key} value={key} className="bg-slate-950 text-white">
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

        </div>

      </div>
    </nav>
  );
}
