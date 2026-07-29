import React, { useState } from 'react';
import { 
  Shield, Users, AlertTriangle, FileText, Download, 
  MapPin, CheckCircle, Search, Activity, Radio
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { MOCK_HOTSPOTS } from '../../data/mockData';

export default function OfficerDashboard() {
  const [selectedVillage, setSelectedVillage] = useState("Shirur");
  const [reportExported, setReportExported] = useState(false);

  const handleExportReport = () => {
    setReportExported(true);
    setTimeout(() => setReportExported(false), 4000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card p-6 bg-gradient-to-r from-cyan-950/90 via-teal-950/80 to-slate-900 border-l-4 border-l-cyan-400 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-extrabold text-white">Agriculture Officer Control Center</h2>
          </div>
          <p className="text-xs text-cyan-200/80 mt-1">
            District Agri Division • Monitoring 4 Villages, 1,420 Farmers, and 3,850 Acres of Active Farmland.
          </p>
        </div>

        {/* PDF / Excel Export Button */}
        <button
          onClick={handleExportReport}
          className="bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-lg shadow-cyan-500/30 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Export Village PDF / Excel Report</span>
        </button>
      </div>

      {/* Export Toast Notification */}
      {reportExported && (
        <div className="glass-card-glow p-4 bg-emerald-950 border-2 border-emerald-400 text-emerald-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            <div>
              <p className="text-sm font-extrabold text-white">Report Generated Successfully!</p>
              <p className="text-xs text-emerald-300">
                Village_Shirur_Agri_Health_Report_2026.pdf & .xlsx have been compiled.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-cyan-300 font-bold uppercase">Total Farmers</p>
            <p className="text-2xl font-black text-white">1,420</p>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-amber-300 font-bold uppercase">Active Farmland</p>
            <p className="text-2xl font-black text-white">3,850 Acres</p>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] text-red-300 font-bold uppercase">Disease Outbreaks</p>
            <p className="text-2xl font-black text-red-400">2 Hotspots</p>
          </div>
        </div>

        <div className="glass-card p-4 flex items-center space-x-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Radio className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] text-emerald-300 font-bold uppercase">Emergency SOS</p>
            <p className="text-2xl font-black text-amber-300">1 Pending</p>
          </div>
        </div>

      </div>

      {/* GIS Interactive Leaflet Map & Village Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Leaflet Map */}
        <div className="lg:col-span-8 glass-card p-4 space-y-3 flex flex-col justify-between min-h-[420px]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-white flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Live Regional GIS Hotspot Map (Shirur Division):</span>
            </h3>
            <span className="text-xs text-cyan-300 font-mono">PostGIS Spatial Engine</span>
          </div>

          <div className="h-[360px] w-full rounded-xl overflow-hidden border border-cyan-500/30">
            <MapContainer center={[18.5204, 73.8567]} zoom={10} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {MOCK_HOTSPOTS.map((spot) => (
                <React.Fragment key={spot.id}>
                  <Marker position={[spot.lat, spot.lng]}>
                    <Popup>
                      <div className="p-1 text-black font-sans text-xs">
                        <strong className="text-sm">{spot.village}</strong>
                        <br />
                        Disease: {spot.disease}
                        <br />
                        Affected Farmers: {spot.count}
                      </div>
                    </Popup>
                  </Marker>
                  <Circle 
                    center={[spot.lat, spot.lng]} 
                    radius={3000} 
                    pathOptions={{ color: spot.status.includes('Critical') ? '#ef4444' : '#f59e0b', fillColor: spot.status.includes('Critical') ? '#ef4444' : '#f59e0b', fillOpacity: 0.3 }} 
                  />
                </React.Fragment>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Hotspots Feed Panel */}
        <div className="lg:col-span-4 glass-card p-4 space-y-3">
          <h3 className="text-sm font-extrabold text-white border-b border-cyan-500/20 pb-2">
            Disease Outbreaks & Alerts:
          </h3>
          <div className="space-y-3">
            {MOCK_HOTSPOTS.map((spot) => (
              <div key={spot.id} className="bg-slate-900/60 p-3 rounded-xl border border-cyan-500/20 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-white">{spot.village}</span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                    spot.status.includes('Critical') ? 'bg-red-500 text-black' : 'bg-amber-500 text-black'
                  }`}>
                    {spot.status}
                  </span>
                </div>
                <p className="text-emerald-200">Alert: {spot.disease}</p>
                <p className="text-slate-400 text-[10px]">{spot.count} Farmers Affected • Response Dispatched</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
