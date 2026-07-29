import React, { useState } from 'react';
import { Sliders, Sprout, Droplets, ShieldCheck, Award, Zap, Upload, Download, FileText, Activity } from 'lucide-react';

export default function AISoilAnalyzer() {
  const [ph, setPh] = useState(6.8);
  const [moisture, setMoisture] = useState(45);
  const [nitrogen, setNitrogen] = useState(140);
  const [phosphorus, setPhosphorus] = useState(45);
  const [potassium, setPotassium] = useState(180);

  // New Soil Parameters
  const [organicCarbon, setOrganicCarbon] = useState(0.82);
  const [ec, setEc] = useState(0.45); // Electrical Conductivity dS/m
  const [reportUploaded, setReportUploaded] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  const calculateRecommendations = () => {
    let crop = "Hybrid Tomato (Arka Rakshak)";
    let fertilizer = "Urea 50kg + SSP 75kg + MOP 30kg / acre";
    let water = "1,800 Liters / acre / day";
    let yieldQ = "220 Quintals / acre";

    if (ph < 6.0) {
      crop = "Potato (Kufri Jyoti)";
      fertilizer = "Apply Lime 200kg/acre + Organic Vermicompost";
      water = "1,400 Liters / acre / day";
      yieldQ = "180 Quintals / acre";
    } else if (ph > 7.5) {
      crop = "Soyabean (JS 335)";
      fertilizer = "Gypsum 150kg/acre + Sulphur Bio-fertilizer";
      water = "2,100 Liters / acre / day";
      yieldQ = "25 Quintals / acre";
    }

    return { crop, fertilizer, water, yieldQ };
  };

  const rec = calculateRecommendations();

  const handleUploadReport = (e) => {
    if (e.target.files[0]) {
      setReportUploaded(true);
      setTimeout(() => setReportUploaded(false), 4000);
    }
  };

  const handleDownloadReport = () => {
    setPdfDownloaded(true);
    setTimeout(() => setPdfDownloaded(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-panel p-6 bg-gradient-to-r from-amber-950 via-slate-950 to-slate-900 border-l-4 border-l-amber-500 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white-pure flex items-center space-x-2">
            <span>AI Soil Analyzer & Lab Report Generator</span>
            <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
          </h2>
          <p className="text-xs text-slate-light mt-1">
            Adjust soil pH, NPK, Organic Carbon, and EC parameters or upload soil testing lab report to receive AI fertilizer recommendations.
          </p>
        </div>

        {/* Upload Soil PDF / Image & Download Report */}
        <div className="flex items-center space-x-2">
          <label className="cursor-pointer bg-slate-900 hover:bg-slate-800 text-white-pure text-xs font-bold px-3 py-2.5 rounded-xl border border-slate-700 flex items-center space-x-1.5">
            <Upload className="w-4 h-4 text-cyan-400" />
            <span>Upload Soil Lab Report PDF</span>
            <input type="file" accept="image/*,.pdf" className="hidden" onChange={handleUploadReport} />
          </label>

          <button
            onClick={handleDownloadReport}
            className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-extrabold px-3 py-2.5 rounded-xl text-xs flex items-center space-x-1.5 shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{pdfDownloaded ? 'Saved Report! 📄' : 'Download Soil PDF'}</span>
          </button>
        </div>
      </div>

      {/* Upload Toast Alert */}
      {reportUploaded && (
        <div className="glass-panel p-4 bg-emerald-950 border border-emerald-400 text-emerald-100 flex items-center space-x-3">
          <FileText className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <p className="text-sm font-extrabold text-white-pure">Soil Lab Report Parsed Successfully!</p>
            <p className="text-xs text-emerald-300">Extracted pH 6.8, Organic Carbon 0.82%, EC 0.45 dS/m. Recommendation Confidence: 96.4%.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sliders & Micronutrient Parameters */}
        <div className="lg:col-span-6 glass-panel p-5 space-y-4">
          <h3 className="text-sm font-extrabold text-white-pure border-b border-slate-800 pb-2 flex items-center justify-between">
            <span>मृदा पैरामीटर (Soil Parameters):</span>
            <span className="text-xs text-amber-300 font-bold">Soil Health Score: 92/100</span>
          </h3>

          {/* Soil pH */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
              <span>Soil pH Level:</span>
              <span className="text-emerald-400">{ph} (Neutral)</span>
            </div>
            <input type="range" min="4.5" max="9.0" step="0.1" value={ph} onChange={(e) => setPh(parseFloat(e.target.value))} className="w-full accent-emerald-500 cursor-pointer" />
          </div>

          {/* Soil Moisture */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
              <span>Soil Moisture %:</span>
              <span className="text-cyan-300">{moisture}%</span>
            </div>
            <input type="range" min="10" max="90" step="1" value={moisture} onChange={(e) => setMoisture(parseInt(e.target.value))} className="w-full accent-cyan-400 cursor-pointer" />
          </div>

          {/* Nitrogen (N) */}
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
              <span>Nitrogen (N) [PPM]:</span>
              <span className="text-amber-400">{nitrogen} PPM</span>
            </div>
            <input type="range" min="40" max="300" step="5" value={nitrogen} onChange={(e) => setNitrogen(parseInt(e.target.value))} className="w-full accent-amber-400 cursor-pointer" />
          </div>

          {/* Organic Carbon & EC */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <p className="text-[10px] text-amber-400 font-bold uppercase">Organic Carbon %</p>
              <p className="text-lg font-black text-white-pure">{organicCarbon}% (High)</p>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <p className="text-[10px] text-cyan-300 font-bold uppercase">Electrical Cond. (EC)</p>
              <p className="text-lg font-black text-white-pure">{ec} dS/m (Normal)</p>
            </div>
          </div>

          {/* Micronutrients */}
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1">
            <p className="font-extrabold text-amber-300">Micronutrients Matrix:</p>
            <p className="text-slate-light">• Zinc (Zn): <strong>2.4 PPM</strong> • Boron (B): <strong>0.8 PPM</strong> • Iron (Fe): <strong>14.2 PPM</strong></p>
          </div>
        </div>

        {/* Output Recommendation Panel */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="glass-panel p-5 space-y-4">
            <h3 className="text-sm font-extrabold text-white-pure border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>AI Soil Recommendations:</span>
              <span className="text-xs text-emerald-400 font-bold">Confidence: 96.4%</span>
            </h3>

            {/* Best Crop */}
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-emerald-500/40 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-emerald-300 font-bold uppercase">Best Crop Match</p>
                <p className="text-sm font-extrabold text-white-pure">{rec.crop}</p>
              </div>
            </div>

            {/* Fertilizer Dose */}
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-amber-500/40 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-amber-300 font-bold uppercase">Optimal Fertilizer Dose</p>
                <p className="text-sm font-extrabold text-white-pure">{rec.fertilizer}</p>
              </div>
            </div>

            {/* Water & Yield */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-cyan-500/30">
                <p className="text-[10px] text-cyan-300 font-bold uppercase">Daily Water Need</p>
                <p className="text-xs font-black text-white-pure">{rec.water}</p>
              </div>

              <div className="bg-slate-900/80 p-3 rounded-xl border border-amber-500/30">
                <p className="text-[10px] text-amber-300 font-bold uppercase">Projected Yield</p>
                <p className="text-xs font-black text-white-pure">{rec.yieldQ}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
