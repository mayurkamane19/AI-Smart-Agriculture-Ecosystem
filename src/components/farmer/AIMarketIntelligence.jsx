import React from 'react';
import { TrendingUp, DollarSign, Calendar, MapPin, Award, ArrowUpRight } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { MOCK_MANDI_PRICES } from '../../data/mockData';

const PRICE_TREND_DATA = [
  { day: 'Nov 01', actual: 3100, forecast: 3100 },
  { day: 'Nov 04', actual: 3220, forecast: 3250 },
  { day: 'Nov 08', actual: 3450, forecast: 3420 },
  { day: 'Nov 12', actual: null, forecast: 3600 },
  { day: 'Nov 16', actual: null, forecast: 3780 },
  { day: 'Nov 20', actual: null, forecast: 3850 },
  { day: 'Nov 24', actual: null, forecast: 3920 }
];

export default function AIMarketIntelligence() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-card p-6 bg-gradient-to-r from-emerald-950/80 via-teal-950/70 to-slate-900 border-l-4 border-l-emerald-400">
        <h2 className="text-2xl font-extrabold text-white flex items-center space-x-2">
          <span>AI Mandi Market Intelligence</span>
          <TrendingUp className="w-5 h-5 text-emerald-400" />
        </h2>
        <p className="text-xs text-emerald-200/80 mt-1">
          Real-time mandi price tracking, AI 15-day price trend forecasting, optimal selling window calculation, and demand prediction.
        </p>
      </div>

      {/* Recommended Selling Window Banner */}
      <div className="glass-card-glow p-5 bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 border border-emerald-400/40 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="bg-emerald-500 text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
            AI Harvest Selling Advice
          </span>
          <h3 className="text-xl font-extrabold text-white mt-1">
            Hold Tomato Harvest until <span className="text-amber-300">Nov 18 - Nov 22</span>
          </h3>
          <p className="text-xs text-emerald-200 mt-0.5">
            Holding for 10 more days will fetch <strong className="text-emerald-400">+13.2% higher price</strong> (₹3,850 vs ₹3,450 current).
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-emerald-300">Expected Profit Gain:</p>
          <p className="text-2xl font-black text-emerald-400">+₹44,000 / 2.5 Acres</p>
        </div>
      </div>

      {/* Price Trend Recharts */}
      <div className="glass-card p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-white">Tomato Price Forecast (15-Day AI Prediction):</h3>
          <span className="text-xs text-emerald-300 font-semibold flex items-center space-x-1">
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            <span>+13.2% Bullish Trend</span>
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={PRICE_TREND_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f382b" />
              <XAxis dataKey="day" stroke="#a7f3d0" fontSize={11} />
              <YAxis stroke="#a7f3d0" fontSize={11} domain={[3000, 4200]} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#09130e', borderColor: '#10b981', borderRadius: '0.75rem' }}
                itemStyle={{ color: '#f0fdf4' }}
              />
              <Area type="monotone" dataKey="forecast" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorForecast)" name="AI Forecast (₹/Q)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Live Mandi Rates Table */}
      <div className="glass-card p-5 space-y-3">
        <h3 className="text-sm font-extrabold text-white mb-2">Live Mandi Prices Across Regions:</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-emerald-500/20 text-emerald-300 font-bold uppercase">
                <th className="pb-2">Commodity</th>
                <th className="pb-2">Mandi Location</th>
                <th className="pb-2">Current Rate (₹/Q)</th>
                <th className="pb-2">24h Change</th>
                <th className="pb-2">15-Day AI Forecast</th>
                <th className="pb-2">Best Selling Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-500/10 text-white font-medium">
              {MOCK_MANDI_PRICES.map((m, i) => (
                <tr key={i} className="hover:bg-emerald-900/20 transition-all">
                  <td className="py-3 font-bold text-white">{m.commodity}</td>
                  <td className="py-3 text-emerald-200">{m.mandi}</td>
                  <td className="py-3 font-extrabold text-amber-300">₹{m.price.toLocaleString()}</td>
                  <td className={`py-3 font-bold ${m.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {m.change}
                  </td>
                  <td className="py-3 font-bold text-cyan-300">₹{m.forecast15d.toLocaleString()}</td>
                  <td className="py-3 font-bold text-amber-400">{m.bestSellDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
