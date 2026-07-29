import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { 
    cartItems, removeFromCart, updateQty, clearCart, 
    isCartOpen, setIsCartOpen, subtotal, gst, grandTotal, itemCount, showToast 
  } = useCart();

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      setIsCartOpen(false);
      showToast("Order Placed Successfully! 🎉 Track in B2B Orders.");
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
      <div className="w-full max-w-md bg-[#0b131e] border-l border-slate-700 h-full flex flex-col justify-between p-6 text-white-pure shadow-2xl overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-extrabold text-white-pure">Your Agri Cart ({itemCount})</h3>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-1 rounded-lg text-slate-400 hover:text-white bg-slate-900 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Checkout Success Screen */}
          {checkoutSuccess ? (
            <div className="py-16 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-xl font-extrabold text-white-pure">Order Confirmed!</h4>
              <p className="text-xs text-slate-light">Generating Invoice & Dispatching Agri Order to Shirur Farm...</p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-20 text-center space-y-3 text-slate-400">
              <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto" />
              <p className="text-sm font-bold">Your Cart is Empty</p>
              <p className="text-xs">Browse seeds, fertilizers, or tractor rentals to add items.</p>
            </div>
          ) : (
            <div className="space-y-3 mt-4">
              {cartItems.map((item) => (
                <div key={item.id} className="glass-panel p-3 border border-slate-700 flex items-center justify-between">
                  <img src={item.img} alt={item.title} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1 px-3">
                    <p className="text-xs font-bold text-white-pure line-clamp-1">{item.title}</p>
                    <p className="text-xs font-extrabold text-amber-300">₹{item.price.toLocaleString()} {item.unit || ''}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-1.5 bg-slate-900 px-2 py-1 rounded-lg border border-slate-700">
                    <button onClick={() => updateQty(item.id, -1)} className="text-slate-400 hover:text-white cursor-pointer">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-white px-1">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="text-slate-400 hover:text-white cursor-pointer">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="ml-2 text-slate-400 hover:text-red-400 cursor-pointer">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Price Summary & Checkout */}
        {cartItems.length > 0 && !checkoutSuccess && (
          <div className="border-t border-slate-800 pt-4 space-y-3">
            <div className="space-y-1.5 text-xs text-slate-light">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-white">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18% Agri Tax):</span>
                <span className="font-bold text-amber-300">₹{gst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-white-pure border-t border-slate-800 pt-2">
                <span>Grand Total:</span>
                <span className="text-emerald-400">₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold py-3 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Proceed to Checkout & Pay</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
