import React, { useState } from 'react';
import { TrendingUp, DollarSign, Droplets, Bug, Sprout, Activity, Download, Calendar, Maximize2 } from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, LineChart, Line, 
  PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid 
} from 'recharts';

const PROFIT_EXPENSE_DATA = [
  { month: 'May', profit: 42000, expense: 12000, yieldQ: 140, waterL: 12000 },
  { month: 'Jun', profit: 68000, expense: 18000, yieldQ: 180, waterL: 15000 },
  { month: 'Jul', profit: 95000, expense: 22000, yieldQ: 210, waterL: 14000 },
  { month: 'Aug', profit: 124000, expense: 28000, yieldQ: 260, waterL: 18000 },
  { month: 'Sep', profit: 168000, expense: 35000, yieldQ: 310, waterL: 16000 },
  { month: 'Oct', profit: 198450, expense: 45000, yieldQ: 380, waterL: 13000 }
];

const DISEASE_TREND_DATA = [
  { week: 'Wk 1', fungalRisk: 24, pestSwarm: 15 },
  { week: 'Wk 2', fungalRisk: 42, pestSwarm: 22 },
  { week: 'Wk 3', fungalRisk: 78, pestSwarm: 42 },
  { week: 'Wk 4', fungalRisk: 35, pestSwarm: 18 }
];

const EXPENSE_PIE = [
  { name: 'Seeds', value: 8500, color: '#10b981' },
  { name: 'Fertilizer', value: 18400, color: '#06b6d4' },
  { name: 'Labor', value: 12500, color: '#f59e0b' },
  { name: 'Fuel & Water', value: 5600, color: '#ec4899' }
];

export default function AdvancedAnalytics() {
  const [timeFilter, setTimeFilter] = useState('Month'); // Today, Week, Month, Year
  const [exportMessage, setExportMessage] = useState(null);

  const handleExport = (format) => {
    setExportMessage(`Exported Analytics Report as .${format.toLowerCase()}`);
    setTimeout(() => setExportMessage(null), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 bg-gradient-to-r from-teal-950 via-slate-950 to-slate-900 border-l-4 border-l-cyan-400 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white-pure flex items-center space-x-2">
            <span>Advanced Analytics Dashboard</span>
            <Activity className="w-6 h-6 text-cyan-400 animate-pulse" />
          </h2>
          <p className="text-xs text-slate-light mt-1">
            Recharts analytics tracking monthly profit, crop yield, water efficiency, disease trends, soil health, expenses, and ROI metrics.
          </p>
        </div>

        {/* Top Time Range Filters & Exporters */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Time Filter Pills */}
          <div className="bg-slate-900/90 p-1 rounded-xl border border-slate-700 flex space-x-1">
            {['Today', 'Week', 'Month', 'Year'].map(tf => (
              <button
                key={tf}
                onClick={() => setTimeFilter(tf)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  timeFilter === tf ? 'bg-cyan-500 text-black' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          {/* Export Buttons */}
          <div className="flex space-x-1">
            <button onClick={() => handleExport('CSV')} className="bg-slate-900 hover:bg-slate-800 text-white-pure px-2.5 py-1.5 rounded-lg border border-slate-700 text-xs font-bold cursor-pointer">
              CSV
            </button>
            <button onClick={() => handleExport('Excel')} className="bg-slate-900 hover:bg-slate-800 text-white-pure px-2.5 py-1.5 rounded-lg border border-slate-700 text-xs font-bold cursor-pointer">
              Excel
            </button>
            <button onClick={() => handleExport('PDF')} className="bg-gradient-to-r from-cyan-500 to-teal-400 text-black px-2.5 py-1.5 rounded-lg text-xs font-black cursor-pointer shadow">
              PDF
            </button>
          </div>

        </div>
      </div>

      {/* Export Toast Notification */}
      {exportMessage && (
        <div className="glass-panel p-3 bg-emerald-950 border border-emerald-400 text-emerald-300 text-xs font-extrabold flex items-center justify-between">
          <span>{exportMessage}</span>
        </div>
      )}

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-panel p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">{timeFilter} Net Profit</p>
            <p className="text-2xl font-black text-white-pure">₹1,98,450</p>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            <Sprout className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">{timeFilter} Crop Yield</p>
            <p className="text-2xl font-black text-white-pure">380 Quintals</p>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
            <Droplets className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">{timeFilter} Water Saved</p>
            <p className="text-2xl font-black text-cyan-300">18,400 L</p>
          </div>
        </div>

        <div className="glass-panel p-4 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
            <Bug className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Disease Control</p>
            <p className="text-2xl font-black text-emerald-400">94.2% Control</p>
          </div>
        </div>

      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Profit vs Expense Area Chart */}
        <div className="lg:col-span-8 glass-panel p-5 space-y-3">
          <h3 className="text-sm font-extrabold text-white-pure flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Monthly Net Profit vs Expenses Trend (₹):</span>
          </h3>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PROFIT_EXPENSE_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#cbd5e1" fontSize={11} />
                <YAxis stroke="#cbd5e1" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#09130e', borderColor: '#10b981', borderRadius: '0.75rem' }} />
                <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#profitGrad)" name="Profit (₹)" />
                <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} name="Expense (₹)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Pie Chart */}
        <div className="lg:col-span-4 glass-panel p-5 space-y-3 flex flex-col justify-between">
          <h3 className="text-sm font-extrabold text-white-pure">Expense Distribution (₹):</h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={EXPENSE_PIE} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} label>
                  {EXPENSE_PIE.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#09130e', borderRadius: '0.5rem' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
}
