import React, { useState } from 'react';
import { Plane, Play, CheckCircle2, AlertCircle, Download, Zap, RefreshCw, Layers } from 'lucide-react';

export default function DroneMissionPlanner() {
  const [missionStatus, setMissionStatus] = useState('ready'); // ready, flying, complete
  const [flightProgress, setFlightProgress] = useState(100);

  const WAYPOINTS = [
    { wp: 1, name: "Launch Gate", lat: "18.5218° N", lng: "73.8552° E", status: "Passed" },
    { wp: 2, name: "Zone A Tomato Scan", lat: "18.5208° N", lng: "73.8558° E", status: "Passed" },
    { wp: 3, name: "Zone B Wheat Belt", lat: "18.5215° N", lng: "73.8572° E", status: "Passed" },
    { wp: 4, name: "Zone D Fallow Inspection", lat: "18.5195° N", lng: "73.8590° E", status: "Passed" }
  ];

  const handleLaunchDrone = () => {
    setMissionStatus('flying');
    setFlightProgress(15);

    const interval = setInterval(() => {
      setFlightProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setMissionStatus('complete');
          return 100;
        }
        return prev + 25;
      });
    }, 800);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-sky-950 via-slate-950 to-slate-900 border-l-4 border-l-sky-400 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-sky-500 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Autonomous UAV Flight System
            </span>
            <h2 className="text-2xl font-extrabold text-white-pure">Drone Mission Planner & NDVI</h2>
          </div>
          <p className="text-xs text-slate-light mt-1">
            Program autonomous flight paths, dispatch Agras T40 UAVs, and process high-res 4K multispectral weed & nitrogen scans.
          </p>
        </div>

        <button
          onClick={handleLaunchDrone}
          disabled={missionStatus === 'flying'}
          className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-black font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-lg shadow-sky-500/30 transition-all cursor-pointer"
        >
          {missionStatus === 'flying' ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
          <span>{missionStatus === 'flying' ? `Flight in Progress (${flightProgress}%)...` : 'Dispatch Autonomous Drone Flight'}</span>
        </button>
      </div>

      {/* Flight Canvas Visualizer & Waypoint Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Aerial Canvas */}
        <div className="lg:col-span-7 glass-panel p-4 space-y-3">
          <div className="relative rounded-2xl overflow-hidden bg-black min-h-[320px] border border-sky-500/40 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
              alt="Drone Camera Feed"
              className="w-full h-80 object-cover opacity-85"
            />
            
            {/* Flying Drone HUD Overlay */}
            <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-xl border border-sky-400 text-sky-300 font-mono text-xs shadow">
              🛸 Altitude: 45m • Speed: 8.5 m/s • Battery: 88%
            </div>

            {/* Bounding Box Weed Scanner */}
            <div className="absolute top-1/3 left-1/2 border-2 border-red-500 bg-red-500/20 p-2 rounded text-[10px] text-white font-extrabold animate-pulse">
              ⚠️ Wild Mustard Weed Cluster (14 sq m)
            </div>
          </div>
        </div>

        {/* Waypoints & Scan Findings */}
        <div className="lg:col-span-5 glass-panel p-5 space-y-4">
          <h3 className="text-sm font-extrabold text-white-pure border-b border-slate-800 pb-2">
            Flight Waypoint Plan (Patel Farm):
          </h3>

          <div className="space-y-2">
            {WAYPOINTS.map(wp => (
              <div key={wp.wp} className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-extrabold text-white-pure">{wp.wp}. {wp.name}</span>
                  <span className="text-[10px] text-slate-400 block">{wp.lat}, {wp.lng}</span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {wp.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
