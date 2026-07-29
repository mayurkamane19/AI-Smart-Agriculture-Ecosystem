import React, { useState } from 'react';
import { DollarSign, PlusCircle, PieChart, TrendingUp, Award, Trash2, Edit2, Check } from 'lucide-react';
import { ResponsiveContainer, PieChart as RePieChart, Pie, Cell, Tooltip } from 'recharts';

export default function AIExpenseManager() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: "Seeds", item: "Hybrid Tomato Arka Rakshak Seeds", cost: 8500 },
    { id: 2, category: "Fertilizer", item: "Bio-potash + Organic Vermicompost", cost: 12400 },
    { id: 3, category: "Labor", item: "Transplanting & Field Preparation", cost: 11000 },
    { id: 4, category: "Fuel & Water", item: "Drip Irrigation Pump Fuel", cost: 4500 }
  ]);

  const [newItem, setNewItem] = useState("");
  const [newCost, setNewCost] = useState("");
  const [newCategory, setNewCategory] = useState("Seeds");
  const [editingId, setEditingId] = useState(null);

  const totalExpense = expenses.reduce((sum, item) => sum + item.cost, 0);
  const projectedRevenue = 243450;
  const projectedProfit = Math.max(0, projectedRevenue - totalExpense);
  const roi = totalExpense > 0 ? Math.round((projectedProfit / totalExpense) * 100) : 0;

  const handleAdd = (e) => {
    e.preventDefault();
    if (newItem && newCost) {
      if (editingId) {
        setExpenses(expenses.map(exp => 
          exp.id === editingId 
            ? { ...exp, category: newCategory, item: newItem, cost: parseFloat(newCost) }
            : exp
        ));
        setEditingId(null);
      } else {
        setExpenses([...expenses, {
          id: Date.now(),
          category: newCategory,
          item: newItem,
          cost: parseFloat(newCost)
        }]);
      }
      setNewItem("");
      setNewCost("");
    }
  };

  const handleEdit = (exp) => {
    setEditingId(exp.id);
    setNewItem(exp.item);
    setNewCost(exp.cost);
    setNewCategory(exp.category);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const COLORS = ['#10b981', '#06b6d4', '#f59e0b', '#ec4899', '#8b5cf6'];
  const pieData = expenses.map(e => ({ name: e.category, value: e.cost }));

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-panel p-6 bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-l-4 border-l-emerald-500 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <h2 className="text-2xl font-extrabold text-white-pure flex items-center space-x-2">
            <span>AI Expense & ROI Manager (CRUD)</span>
            <DollarSign className="w-5 h-5 text-emerald-400" />
          </h2>
          <p className="text-xs text-slate-light mt-1">
            Track seeds, fertilizer, labor, and fuel expenses. Auto-calculates crop net profit and Return on Investment (ROI %).
          </p>
        </div>

        <div className="bg-slate-900/90 px-4 py-2 rounded-xl border border-slate-700 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase">Calculated ROI</p>
          <p className="text-xl font-black text-amber-300">{roi}% ROI</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="glass-panel p-4 text-center">
          <p className="text-[10px] text-red-400 font-bold uppercase">Total Input Expenses</p>
          <p className="text-2xl font-black text-red-400 mt-1">₹{totalExpense.toLocaleString()}</p>
        </div>

        <div className="glass-panel p-4 text-center">
          <p className="text-[10px] text-emerald-400 font-bold uppercase">Projected Net Profit</p>
          <p className="text-2xl font-black text-emerald-400 mt-1">₹{projectedProfit.toLocaleString()}</p>
        </div>

        <div className="glass-panel p-4 text-center">
          <p className="text-[10px] text-amber-400 font-bold uppercase">Estimated Harvest Value</p>
          <p className="text-2xl font-black text-amber-300 mt-1">₹{projectedRevenue.toLocaleString()}</p>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Expense CRUD Form & List */}
        <div className="lg:col-span-7 glass-panel p-5 space-y-4">
          
          <h3 className="text-sm font-extrabold text-white-pure border-b border-slate-800 pb-2">
            {editingId ? 'संपादित करें (Edit Expense Item):' : 'नया व्यय जोड़ें (Add New Expense Item):'}
          </h3>

          <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-12 gap-2">
            <select
              value={newCategory} onChange={(e) => setNewCategory(e.target.value)}
              className="sm:col-span-4 bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white-pure outline-none cursor-pointer"
            >
              <option value="Seeds">Seeds</option>
              <option value="Fertilizer">Fertilizer</option>
              <option value="Labor">Labor</option>
              <option value="Fuel & Water">Fuel & Water</option>
              <option value="Machinery">Machinery</option>
            </select>

            <input
              type="text" placeholder="Expense description..."
              value={newItem} onChange={(e) => setNewItem(e.target.value)}
              className="sm:col-span-5 bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white-pure outline-none"
            />

            <input
              type="number" placeholder="Cost (₹)..."
              value={newCost} onChange={(e) => setNewCost(e.target.value)}
              className="sm:col-span-3 bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white-pure outline-none"
            />

            <button
              type="submit"
              className="sm:col-span-12 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold px-3 py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1 transition-all cursor-pointer shadow"
            >
              {editingId ? <Check className="w-4 h-4" /> : <PlusCircle className="w-4 h-4" />}
              <span>{editingId ? 'Save Changes' : 'Add Expense Record'}</span>
            </button>
          </form>

          {/* Expense Table List */}
          <div className="space-y-2 pt-2">
            {expenses.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full mr-2">
                    {item.category}
                  </span>
                  <span className="font-bold text-white-pure">{item.item}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="font-extrabold text-red-400">₹{item.cost.toLocaleString()}</span>
                  <button onClick={() => handleEdit(item)} className="text-slate-400 hover:text-amber-400 cursor-pointer">
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="text-slate-400 hover:text-red-400 cursor-pointer">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Expense Pie Chart */}
        <div className="lg:col-span-5 glass-panel p-5 space-y-3 flex flex-col justify-between">
          <h3 className="text-sm font-extrabold text-white-pure">Expense Distribution:</h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#09130e', borderRadius: '0.5rem' }} />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
}
