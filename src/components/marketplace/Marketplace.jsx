import React, { useState } from 'react';
import { ShoppingBag, ShoppingCart, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addToCart, setIsCartOpen, itemCount } = useCart();

  const PRODUCTS = [
    { id: 1, category: "seeds", title: "Hybrid Tomato Arka Rakshak Seeds", price: 850, rating: 4.9, img: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23edf?auto=format&fit=crop&w=400&q=80" },
    { id: 2, category: "fertilizer", title: "Bio-potash Vermicompost (50kg)", price: 1200, rating: 4.8, img: "https://images.unsplash.com/photo-1585336261026-8f5786372969?auto=format&fit=crop&w=400&q=80" },
    { id: 3, category: "rent", title: "Mahindra 575 DI Tractor Rent", price: 650, unit: "/ hour", rating: 4.9, img: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=400&q=80" },
    { id: 4, category: "rent", title: "Agras T40 Drone Spraying Service", price: 450, unit: "/ acre", rating: 5.0, img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400&q=80" }
  ];

  const filtered = activeCategory === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);

  const handleBookNow = (product) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="glass-panel p-6 bg-gradient-to-r from-pink-950 via-slate-950 to-slate-900 border-l-4 border-l-pink-500 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <h2 className="text-2xl font-extrabold text-white-pure flex items-center space-x-2">
            <span>Agri B2B Marketplace & Equipment Rental</span>
            <ShoppingBag className="w-5 h-5 text-pink-400" />
          </h2>
          <p className="text-xs text-slate-light mt-1">
            Buy certified seeds, eco fertilizers, book tractor & drone rentals, or sell produce directly to buyers.
          </p>
        </div>

        {/* View Cart Button with Counter Badge */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-400 hover:to-rose-300 text-white-pure font-black px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-lg shadow-pink-500/30 transition-all cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>View Cart ({itemCount})</span>
        </button>
      </div>

      {/* Category Filters */}
      <div className="flex space-x-2 overflow-x-auto pb-1">
        {['all', 'seeds', 'fertilizer', 'rent'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-black capitalize transition-all cursor-pointer border ${
              activeCategory === cat
                ? 'bg-pink-500 text-white-pure border-pink-400 shadow-lg'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <div key={item.id} className="module-card card-pink p-4 flex flex-col justify-between hover:scale-[1.02]">
            <div className="top-strip top-strip-pink" />

            <div className="space-y-3 pt-1">
              <img src={item.img} alt={item.title} className="w-full h-36 object-cover rounded-xl border border-slate-700" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-pink-300 uppercase tracking-wider">{item.category}</span>
                  <span className="text-[10px] font-extrabold text-amber-300 flex items-center space-x-0.5">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{item.rating}</span>
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-white-pure mt-1">{item.title}</h3>
                <p className="text-base font-black text-amber-300 mt-1">₹{item.price.toLocaleString()} {item.unit || ''}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <button
                onClick={() => addToCart(item)}
                className="bg-slate-900 hover:bg-slate-800 text-white-pure font-extrabold py-2 rounded-xl text-xs border border-slate-700 transition-all cursor-pointer"
              >
                + Add Cart
              </button>

              <button
                onClick={() => handleBookNow(item)}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white-pure font-extrabold py-2 rounded-xl text-xs shadow-md transition-all cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
