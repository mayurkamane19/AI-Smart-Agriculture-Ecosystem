import React from 'react';
import { Cpu, Users, Activity, ShieldCheck, Database, HardDrive, Terminal } from 'lucide-react';

export default function AdminDashboard() {
  const USERS_LIST = [
    { id: "USR-101", name: "Ramesh Patel", role: "Farmer", village: "Shirur, Pune", status: "Active (Aadhaar Verified)" },
    { id: "USR-102", name: "Dr. Vijay Kulkarni", role: "Agriculture Officer", village: "District Division", status: "Active (Officer Verified)" },
    { id: "USR-103", name: "Anita Sharma", role: "Farmer", village: "Chakan, MH", status: "Active (Aadhaar Verified)" },
    { id: "USR-104", name: "Admin Operator #1", role: "System Admin", village: "Headquarters", status: "SuperAdmin" }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-amber-950/90 via-slate-950/80 to-slate-900 border-l-4 border-l-amber-500">
        <h2 className="text-2xl font-extrabold text-white flex items-center space-x-2">
          <span>Admin Control & AI Model Monitoring Center</span>
          <Cpu className="w-5 h-5 text-amber-400" />
        </h2>
        <p className="text-xs text-amber-200/80 mt-1">
          Global platform telemetry, user administration, YOLOv11 & Gemini LLM quota tracking, and database logs.
        </p>
      </div>

      {/* System Status KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-amber-300 font-bold uppercase">YOLOv11 Latency</p>
            <p className="text-2xl font-black text-white">112 ms</p>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-cyan-300 font-bold uppercase">Gemini LLM Tokens</p>
            <p className="text-2xl font-black text-white">1.42 M / day</p>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-emerald-300 font-bold uppercase">PostgreSQL + ChromaDB</p>
            <p className="text-2xl font-black text-emerald-400">100% Operational</p>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
            <HardDrive className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-purple-300 font-bold uppercase">Active WebSockets</p>
            <p className="text-2xl font-black text-white">482 Live</p>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* User Management */}
        <div className="lg:col-span-7 glass-card p-5 space-y-3">
          <h3 className="text-sm font-extrabold text-white border-b border-amber-500/20 pb-2 flex items-center space-x-2">
            <Users className="w-4 h-4 text-amber-400" />
            <span>User Management & Verification Logs:</span>
          </h3>

          <div className="space-y-2">
            {USERS_LIST.map((u) => (
              <div key={u.id} className="flex items-center justify-between bg-slate-900/60 p-3 rounded-xl border border-amber-500/20 text-xs">
                <div>
                  <span className="font-mono text-amber-400 text-[10px] font-bold mr-2">{u.id}</span>
                  <span className="font-bold text-white">{u.name}</span>
                  <span className="text-slate-400 text-[11px] block">{u.village}</span>
                </div>
                <div className="text-right">
                  <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full block mb-1">
                    {u.role}
                  </span>
                  <span className="text-emerald-400 text-[10px]">{u.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI System Terminal Logs */}
        <div className="lg:col-span-5 glass-card p-5 space-y-3 flex flex-col justify-between">
          <h3 className="text-sm font-extrabold text-white flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Live System Terminal Logs:</span>
          </h3>

          <div className="bg-black/90 p-3 rounded-xl border border-emerald-500/30 font-mono text-[11px] text-emerald-400 space-y-1 h-56 overflow-y-auto">
            <p>[SYSTEM] FastAPI backend service online on port 8000</p>
            <p>[YOLOv11] Loaded weights: yolov11_crop_disease.pt (v3.2)</p>
            <p>[GEMINI] LangChain RAG Vector Store connected to ChromaDB</p>
            <p>[REDIS] Telemetry pub/sub channel ready</p>
            <p>[AUTH] Issued JWT token for Ramesh Patel (Role: Farmer)</p>
            <p>[PASSPORT] Generated Agri Digital Passport KV-PASSPORT-A491F92B</p>
            <p className="text-cyan-300">[INFO] Multi-Agent LangGraph pipeline executed in 284ms</p>
          </div>
        </div>

      </div>

    </div>
  );
}
