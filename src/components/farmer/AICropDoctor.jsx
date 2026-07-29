import React, { useState } from 'react';
import { 
  Camera, Upload, ShieldAlert, Sparkles, CheckCircle2, 
  MapPin, Phone, RefreshCw, Zap, Download, Activity, DollarSign, Clock, Layers 
} from 'lucide-react';
import { MOCK_DISEASE_SAMPLES } from '../../data/mockData';

export default function AICropDoctor() {
  const [selectedSample, setSelectedSample] = useState(MOCK_DISEASE_SAMPLES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [showHealthyComparison, setShowHealthyComparison] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  const handleScan = (sample) => {
    setIsScanning(true);
    setSelectedSample(sample);
    setTimeout(() => {
      setIsScanning(false);
    }, 1200);
  };

  const handleDownloadPDF = () => {
    setPdfDownloaded(true);
    setTimeout(() => setPdfDownloaded(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-l-4 border-l-emerald-500 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-extrabold text-white-pure">AI Crop Doctor</h2>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs px-2.5 py-0.5 rounded-full font-bold">
              YOLOv11 Neural Vision
            </span>
          </div>
          <p className="text-xs text-slate-light mt-1">
            Upload leaf photo or select sample to detect diseases, nutrient deficiencies, medicine cost estimates, and download PDF reports.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleDownloadPDF}
            className="bg-slate-900 hover:bg-slate-800 text-white-pure font-extrabold px-3 py-2.5 rounded-xl text-xs flex items-center space-x-1.5 border border-slate-700 cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>{pdfDownloaded ? 'Report Saved! 📄' : 'Download PDF Report'}</span>
          </button>
        </div>
      </div>

      {/* Demo Samples Picker */}
      <div className="glass-panel p-4">
        <p className="text-xs text-emerald-400 font-bold mb-3 flex items-center space-x-1">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Click sample leaf to scan with YOLOv11 Engine:</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {MOCK_DISEASE_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleScan(sample)}
              className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex items-center space-x-3 ${
                selectedSample.id === sample.id
                  ? 'bg-emerald-950/80 border-emerald-400 shadow-md'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800'
              }`}
            >
              <img src={sample.image} alt={sample.name} className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <p className="text-xs font-bold text-white-pure">{sample.name}</p>
                <p className="text-[10px] text-slate-light">{sample.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Vision Canvas & Diagnostics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Detection Canvas */}
        <div className="lg:col-span-6 glass-panel p-4 space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white-pure">YOLOv11 Bounding Canvas</span>
            <button
              onClick={() => setShowHealthyComparison(!showHealthyComparison)}
              className="text-[11px] font-bold text-cyan-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700 cursor-pointer"
            >
              {showHealthyComparison ? 'Show Diseased Scan' : 'Compare Healthy vs Diseased'}
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-black flex items-center justify-center min-h-[300px] border border-slate-800">
            <img 
              src={showHealthyComparison 
                ? "https://images.unsplash.com/photo-1592417817098-8f3d6ef23edf?auto=format&fit=crop&w=600&q=80" 
                : selectedSample.image
              } 
              alt="Leaf Scan" 
              className="w-full h-80 object-cover opacity-90" 
            />

            {/* Scanner Line */}
            {isScanning && <div className="animate-scan-line" />}

            {/* Bounding Box */}
            {!isScanning && !showHealthyComparison && selectedSample.boxes.map((box, i) => (
              <div
                key={i}
                style={{ left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%` }}
                className="absolute border-2 border-emerald-400 bg-emerald-500/20 rounded-lg p-1 animate-pulse"
              >
                <span className="bg-emerald-500 text-black font-black text-[10px] px-1.5 py-0.5 rounded shadow">
                  {box.label} ({(selectedSample.confidence * 100).toFixed(1)}%)
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-light">
            <span className="text-emerald-400 font-bold">Model: YOLOv11-Agri-v3.2</span>
            <span className="text-amber-400 font-bold">Latency: 112ms</span>
          </div>
        </div>

        {/* Diagnostic Metrics & Treatment Timeline */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="glass-panel p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-lg font-extrabold text-white-pure">{selectedSample.name}</h3>
                <p className="text-xs text-slate-light">Pathogen: {selectedSample.pathogen}</p>
              </div>

              <div className="text-right">
                <span className="bg-emerald-500 text-black text-xs font-black px-3 py-1 rounded-full shadow">
                  {(selectedSample.confidence * 100).toFixed(1)}% Confidence
                </span>
              </div>
            </div>

            {/* Severity Meter & Medicine Cost Estimate */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <p className="text-[10px] text-red-400 font-bold uppercase">Disease Severity</p>
                <p className="text-xl font-black text-red-400">78% High</p>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
                  <div className="bg-red-500 h-full w-[78%]" />
                </div>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <p className="text-[10px] text-amber-400 font-bold uppercase">Medicine Cost Estimate</p>
                <p className="text-xl font-black text-amber-300">₹450 / Acre</p>
                <p className="text-[10px] text-emerald-400">Recovery: 7 Days</p>
              </div>
            </div>

            {/* Treatment Timeline */}
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs">
              <p className="font-extrabold text-emerald-400 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Recovery Treatment Timeline:</span>
              </p>
              <div className="space-y-1 text-slate-light text-[11px]">
                <p>• <strong>Day 1:</strong> Spray Neem Oil (5ml/L water) & remove infected lower leaves.</p>
                <p>• <strong>Day 3:</strong> Apply Trichoderma viride bio-fungicide.</p>
                <p>• <strong>Day 7:</strong> 94% Expected plant recovery & leaf regeneration.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
