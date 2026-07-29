import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle, Search, ShieldCheck } from 'lucide-react';
import { MOCK_GOVT_SCHEMES } from '../../data/mockData';

export default function GovtSchemes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedScheme, setAppliedScheme] = useState(null);

  const filtered = MOCK_GOVT_SCHEMES.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.benefit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (scheme) => {
    setAppliedScheme(scheme);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-emerald-950/80 via-teal-950/70 to-slate-900 border-l-4 border-l-emerald-500">
        <h2 className="text-2xl font-extrabold text-white flex items-center space-x-2">
          <span>Government Schemes & Direct Subsidies</span>
          <Award className="w-5 h-5 text-amber-400" />
        </h2>
        <p className="text-xs text-emerald-200/80 mt-1">
          Explore central and state agriculture welfare schemes, verify your eligibility instantly, and submit 1-click applications.
        </p>
      </div>

      {/* Search Bar */}
      <div className="glass-card p-3 flex items-center space-x-2">
        <Search className="w-4 h-4 text-emerald-400 ml-2" />
        <input
          type="text"
          placeholder="Search PM-Kisan, Fasal Bima, Solar Subsidies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-white text-xs w-full outline-none"
        />
      </div>

      {/* Applied Confirmation Modal Alert */}
      {appliedScheme && (
        <div className="glass-card-glow p-4 bg-emerald-950 border-2 border-emerald-400 text-emerald-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <p className="text-sm font-extrabold text-white">Application Submitted Successfully!</p>
              <p className="text-xs text-emerald-300">
                Your Aadhaar verification for <strong>{appliedScheme.title}</strong> has been sent to District Agriculture Officer.
              </p>
            </div>
          </div>
          <button onClick={() => setAppliedScheme(null)} className="text-xs font-bold bg-emerald-500 text-black px-3 py-1.5 rounded-lg">
            Dismiss
          </button>
        </div>
      )}

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((scheme) => (
          <div key={scheme.id} className="glass-card p-5 space-y-3 flex flex-col justify-between hover:border-emerald-400/40 transition-all">
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-base font-extrabold text-white">{scheme.title}</h3>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {scheme.status}
                </span>
              </div>
              
              <div className="bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/20 mt-2">
                <p className="text-[10px] text-amber-300 font-bold uppercase">लाभ (Benefit):</p>
                <p className="text-xs text-white font-bold">{scheme.benefit}</p>
              </div>

              <div className="mt-2">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">पात्रता (Eligibility):</p>
                <p className="text-xs text-emerald-200">{scheme.eligibility}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-emerald-500/20">
              <a
                href={scheme.applyUrl} target="_blank" rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 font-bold"
              >
                <span>Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleApply(scheme)}
                className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold px-3 py-1.5 rounded-xl text-xs shadow-md shadow-emerald-500/30 transition-all"
              >
                1-Click Apply
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
