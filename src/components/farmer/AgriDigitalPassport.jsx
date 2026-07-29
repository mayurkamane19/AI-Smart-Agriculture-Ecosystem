import React from 'react';
import { Award, QrCode, ShieldCheck, Leaf, Download, Sparkles, CheckCircle2, History, Droplets } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AgriDigitalPassport() {
  const triggerConfetti = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-emerald-950/90 via-teal-950/80 to-slate-900 border-l-4 border-l-amber-400 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-amber-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest">
              ⭐ 1st Prize Unique Innovation
            </span>
            <h2 className="text-2xl font-extrabold text-white">Agri Digital Passport</h2>
          </div>
          <p className="text-xs text-emerald-200/80 mt-1">
            Universal digital profile for every farm tracking soil health history, carbon footprint, crop rotations, water efficiency, and blockchain-verified AI score.
          </p>
        </div>

        <button
          onClick={triggerConfetti}
          className="bg-gradient-to-r from-amber-400 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 text-black font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-lg shadow-amber-500/30 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Download Verified Passport PDF</span>
        </button>
      </div>

      {/* Main Passport Card */}
      <div className="glass-card-glow p-6 bg-gradient-to-tr from-emerald-950 via-teal-950 to-slate-950 border-2 border-emerald-400/50 space-y-6 relative overflow-hidden">
        
        {/* Background Watermark Badge */}
        <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
          <Award className="w-48 h-48 text-emerald-400" />
        </div>

        {/* Passport Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-emerald-500/30 pb-4 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center text-black font-black text-2xl shadow-xl shadow-emerald-500/40">
              <Leaf className="w-10 h-10" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-black text-white">PATEL ORGANIC FARM #101</h3>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-xs text-emerald-300 font-mono">Passport ID: KV-PASSPORT-A491F92B</p>
              <p className="text-xs text-emerald-200">Owner: Ramesh Patel • Shirur, Pune, MH • 2.5 Acres</p>
            </div>
          </div>

          {/* AI Health Score Meter */}
          <div className="bg-emerald-900/60 p-3.5 rounded-2xl border border-emerald-400/50 text-center shadow-lg">
            <p className="text-[10px] text-emerald-300 font-extrabold uppercase tracking-wider">AI Farm Health Score</p>
            <p className="text-3xl font-black text-amber-300">92.5 <span className="text-xs font-normal text-emerald-300">/ 100</span></p>
            <span className="bg-emerald-500 text-black text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
              GRADE A+ EXCELLENT
            </span>
          </div>
        </div>

        {/* Passport Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Carbon Footprint & Sustainability */}
          <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-500/20 space-y-2">
            <h4 className="text-xs font-extrabold text-emerald-400 flex items-center space-x-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Carbon & Eco Rating</span>
            </h4>
            <div className="space-y-1 text-xs">
              <p className="flex justify-between text-emerald-100">
                <span>Rating:</span>
                <strong className="text-amber-300">A+ (Eco-Certified)</strong>
              </p>
              <p className="flex justify-between text-emerald-100">
                <span>CO₂ Sequestration:</span>
                <strong className="text-emerald-400">4.5 Tons / Year</strong>
              </p>
              <p className="flex justify-between text-emerald-100">
                <span>Nitrogen Leaching:</span>
                <strong className="text-teal-300">Low (0.12 kg/ha)</strong>
              </p>
            </div>
          </div>

          {/* Soil & Water Metrics */}
          <div className="bg-teal-950/60 p-4 rounded-2xl border border-teal-500/20 space-y-2">
            <h4 className="text-xs font-extrabold text-teal-300 flex items-center space-x-1">
              <Droplets className="w-4 h-4 text-teal-300" />
              <span>Soil & Water Matrix</span>
            </h4>
            <div className="space-y-1 text-xs">
              <p className="flex justify-between text-emerald-100">
                <span>Soil pH:</span>
                <strong className="text-white">6.8 (Neutral)</strong>
              </p>
              <p className="flex justify-between text-emerald-100">
                <span>NPK Balance:</span>
                <strong className="text-amber-300">142 - 48 - 185 PPM</strong>
              </p>
              <p className="flex justify-between text-emerald-100">
                <span>Drip Coverage:</span>
                <strong className="text-emerald-400">100% Efficiency</strong>
              </p>
            </div>
          </div>

          {/* Verification QR Code */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center space-y-2">
            <div className="w-20 h-20 bg-white p-1.5 rounded-xl shadow-lg flex items-center justify-center">
              <QrCode className="w-full h-full text-black" />
            </div>
            <p className="text-[10px] text-emerald-300 font-mono">Scan to Verify on Blockchain</p>
          </div>

        </div>

        {/* Crop History Timeline */}
        <div className="pt-2">
          <h4 className="text-xs font-extrabold text-white mb-3 flex items-center space-x-1">
            <History className="w-4 h-4 text-emerald-400" />
            <span>Crop Rotation & Yield History Log:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { year: "2025-2026", crop: "Hybrid Tomato", yieldQ: "540 Quintals", score: "94/100" },
              { year: "2024-2025", crop: "Kalyan Sona Wheat", yieldQ: "310 Quintals", score: "91/100" },
              { year: "2023-2024", crop: "Organic Chickpea", yieldQ: "180 Quintals", score: "89/100" }
            ].map((log, idx) => (
              <div key={idx} className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/20 text-xs">
                <p className="text-[10px] text-emerald-400 font-bold">{log.year}</p>
                <p className="font-extrabold text-white">{log.crop}</p>
                <p className="text-emerald-300 text-[11px]">Yield: {log.yieldQ}</p>
                <span className="inline-block mt-1 bg-emerald-500/20 text-emerald-300 text-[9px] font-bold px-2 py-0.5 rounded">
                  Score: {log.score}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
