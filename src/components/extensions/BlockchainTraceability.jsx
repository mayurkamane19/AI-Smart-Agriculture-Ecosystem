import React from 'react';
import { QrCode, ShieldCheck, CheckCircle2, History, Award, ExternalLink } from 'lucide-react';

export default function BlockchainTraceability() {
  const BLOCKCHAIN_BLOCKS = [
    { block: "#10482", stage: "Sowing", detail: "Arka Rakshak Tomato Seeds Sown", date: "15 Aug 2025", hash: "0x8f2a...4b12" },
    { block: "#10495", stage: "Soil Testing", detail: "pH 6.8 & NPK 142-48-185 Tested", date: "28 Aug 2025", hash: "0x3c1d...9f88" },
    { block: "#10520", stage: "YOLOv11 Scan", detail: "Organic Neem Treatment Applied", date: "14 Sep 2025", hash: "0x7a4b...2e11" },
    { block: "#10580", stage: "Harvest & Quality", detail: "Grade A+ Certified (540 Quintals)", date: "18 Nov 2025", hash: "0x9e88...7f4a" }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-panel p-6 bg-gradient-to-r from-purple-950 via-slate-950 to-slate-900 border-l-4 border-l-purple-500 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-purple-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Hyperledger Farm Traceability
            </span>
            <h2 className="text-2xl font-extrabold text-white-pure">Blockchain Produce Traceability</h2>
          </div>
          <p className="text-xs text-slate-light mt-1">
            Immutable QR code hash timeline tracking produce provenance from Sowing ➔ Soil Test ➔ Organics ➔ Harvest ➔ B2B Buyer.
          </p>
        </div>

        <div className="bg-slate-900 px-4 py-2 rounded-xl border border-purple-500/40 text-center">
          <p className="text-[10px] text-purple-300 font-bold uppercase">Blockchain Hash Status</p>
          <p className="text-xs font-mono font-extrabold text-emerald-400">VERIFIED ON-CHAIN</p>
        </div>
      </div>

      {/* Blockchain Timeline Cards */}
      <div className="glass-panel p-6 space-y-4">
        <h3 className="text-sm font-extrabold text-white-pure flex items-center space-x-2 border-b border-slate-800 pb-3">
          <History className="w-4 h-4 text-purple-400" />
          <span>Immutable Ledger Block Timeline (Tomato Batch #KV-2026-TM):</span>
        </h3>

        <div className="space-y-3">
          {BLOCKCHAIN_BLOCKS.map((blk, i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-mono font-bold">
                  {blk.block}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white-pure">{blk.stage}</h4>
                  <p className="text-slate-light text-[11px]">{blk.detail}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="font-mono text-purple-300 text-[10px] font-bold block">{blk.hash}</span>
                <span className="text-slate-400 text-[10px]">{blk.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
