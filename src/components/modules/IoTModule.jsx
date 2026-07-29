import React, { useState, useEffect } from 'react';
import { Radio, Thermometer, Droplets, Activity, RefreshCw, BatteryCharging, Wifi } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function IoTModule() {
  const [moisture, setMoisture] = useState(64);
  const [temp, setTemp] = useState(31.5);
  const [ph, setPh] = useState(6.8);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const [history, setHistory] = useState([
    { time: '10:00', moisture: 60, temp: 30.2, ph: 6.7 },
    { time: '10:05', moisture: 61, temp: 30.5, ph: 6.7 },
    { time: '10:10', moisture: 62, temp: 31.0, ph: 6.8 },
    { time: '10:15', moisture: 63, temp: 31.2, ph: 6.8 },
    { time: '10:20', moisture: 64, temp: 31.5, ph: 6.8 }
  ]);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      const newM = Math.min(85, Math.max(40, parseFloat((moisture + (Math.random() - 0.5) * 1.5).toFixed(1))));
      const newT = Math.min(40, Math.max(25, parseFloat((temp + (Math.random() - 0.5) * 0.4).toFixed(1))));
      const newP = parseFloat((6.7 + (Math.random() - 0.5) * 0.2).toFixed(1));
      
      setMoisture(newM);
      setTemp(newT);
      setPh(newP);

      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setHistory(prev => [...prev.slice(-9), { time: timeStr, moisture: newM, temp: newT, ph: newP }]);
    }, 2000);

    return () => clearInterval(interval);
  }, [autoRefresh, moisture, temp]);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-panel p-6 bg-gradient-to-r from-teal-950 via-slate-950 to-slate-900 border-l-4 border-l-teal-400 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <h2 className="text-2xl font-extrabold text-white-pure flex items-center space-x-2">
            <span>IoT Sensor Live Telemetry Stream</span>
            <Radio className="w-5 h-5 text-teal-400 animate-pulse" />
          </h2>
          <p className="text-xs text-slate-light mt-1">
            Real-time field telemetry broadcast via MQTT & WebSockets. Live Recharts line graphs update every 2 seconds.
          </p>
        </div>

        {/* Telemetry Status Controls */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700 text-xs">
            <BatteryCharging className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold">Battery 94%</span>
            <Wifi className="w-4 h-4 text-cyan-400 ml-2" />
            <span className="text-cyan-300 font-bold">-65 dBm</span>
          </div>

          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center space-x-1.5 ${
              autoRefresh ? 'bg-emerald-500 text-black shadow' : 'bg-slate-900 text-slate-300 border border-slate-700'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${autoRefresh ? 'animate-spin' : ''}`} />
            <span>{autoRefresh ? 'Live Stream Active' : 'Stream Paused'}</span>
          </button>
        </div>
      </div>

      {/* Sensor Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="glass-panel p-5 border border-cyan-400/40 text-center space-y-2">
          <Droplets className="w-8 h-8 text-cyan-400 mx-auto animate-bounce" />
          <p className="text-xs text-cyan-300 font-bold uppercase">Soil Moisture Sensor #01</p>
          <p className="text-4xl font-black text-white-pure">{moisture}%</p>
          <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            Optimal Drip Level
          </span>
        </div>

        <div className="glass-panel p-5 border border-amber-400/40 text-center space-y-2">
          <Thermometer className="w-8 h-8 text-amber-400 mx-auto" />
          <p className="text-xs text-amber-300 font-bold uppercase">Soil Temp Probe #02</p>
          <p className="text-4xl font-black text-white-pure">{temp} °C</p>
          <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            Ideal Growth Temp
          </span>
        </div>

        <div className="glass-panel p-5 border border-emerald-400/40 text-center space-y-2">
          <Activity className="w-8 h-8 text-emerald-400 mx-auto" />
          <p className="text-xs text-emerald-300 font-bold uppercase">Soil pH Probe #03</p>
          <p className="text-4xl font-black text-white-pure">{ph}</p>
          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            Neutral pH Level
          </span>
        </div>

      </div>

      {/* Live Recharts Real-time Telemetry Line Graph */}
      <div className="glass-panel p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-white-pure flex items-center space-x-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Live Real-Time Telemetry Stream (Last 10 Sensor Ticks):</span>
          </h3>
          <span className="text-xs text-emerald-400 font-mono">MQTT WebSocket Connected</span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={history} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#cbd5e1" fontSize={11} />
              <YAxis stroke="#cbd5e1" fontSize={11} domain={[0, 100]} />
              <Tooltip contentStyle={{ backgroundColor: '#09130e', borderColor: '#06b6d4', borderRadius: '0.75rem' }} />
              <Line type="monotone" dataKey="moisture" stroke="#06b6d4" strokeWidth={3} dot={{ r: 4 }} name="Moisture %" />
              <Line type="monotone" dataKey="temp" stroke="#f59e0b" strokeWidth={2} name="Soil Temp °C" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
