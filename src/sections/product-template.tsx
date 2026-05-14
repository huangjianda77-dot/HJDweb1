import { Check, Shield, Truck, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

/**
 * Shopify Section Schema: product-template.liquid
 */
export const section_schema = {
  name: "Product Information",
  settings: [
    { type: "checkbox", id: "show_vendor", label: "Show Vendor", default: true },
    { type: "checkbox", id: "show_sku", label: "Show SKU", default: false }
  ]
};

export default function ProductTemplate() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 items-start">
          
          {/* Media Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Product View"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded cursor-pointer overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
                   <img 
                    src={`https://picsum.photos/seed/tub-${i}/300/300`} 
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Form */}
          <div className="mt-10 lg:mt-0">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">
                Official Recovery Partner
              </span>
              <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
                ArcticPlunge Pro V2
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-blue-900">$299.00</span>
                <span className="text-xl text-gray-400 line-through tracking-tight">$349.00</span>
                <span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded">
                  Save 15%
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                The world's most durable portable ice bath. Designed by professional athletes for professional recovery.
              </p>
            </div>

            {/* Variant Selector (Mock) */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Select Color</h3>
              <div className="flex space-x-3">
                {['bg-zinc-900', 'bg-blue-950', 'bg-slate-700'].map((color) => (
                  <button 
                    key={color}
                    className={`w-10 h-10 rounded-full ${color} border-2 border-white ring-2 ring-transparent hover:ring-blue-600 transition-all cursor-pointer`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity & ATC */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <div className="flex items-center justify-between border border-gray-200 h-14 w-full sm:w-auto">
                <button className="px-5 text-gray-400 hover:text-gray-900 transition-colors">-</button>
                <span className="px-4 font-bold text-gray-900">1</span>
                <button className="px-5 text-gray-400 hover:text-gray-900 transition-colors">+</button>
              </div>
              <button className="flex-1 h-14 bg-blue-900 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-800 transition-all active:scale-95 shadow-xl shadow-blue-900/10">
                Add to Cart
              </button>
            </div>

            {/* Merchant Assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-gray-100">
              {[
                { icon: Truck, label: "Free 2-Day Shipping" },
                { icon: Shield, label: "2 Year Warranty" },
                { icon: RefreshCw, label: "30 Day Money Back" },
                { icon: Check, label: "Verified Performance" }
              ].map((item) => (
                <div key={item.label} className="flex items-center text-sm text-gray-600">
                  <item.icon size={18} className="mr-3 text-blue-600" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
