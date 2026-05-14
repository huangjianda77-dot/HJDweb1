import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/**
 * Shopify Section Schema: hero.liquid
 */
export const section_schema = {
  name: "Hero Image with Text",
  settings: [
    { type: "text", id: "heading", label: "Heading", default: "Elite Cold Recovery" },
    { type: "richtext", id: "subheading", label: "Subheading" },
    { type: "url", id: "button_link", label: "Button Link" }
  ]
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-zinc-900 overflow-hidden pt-16">
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=2000" 
          alt="Athlete Recovery"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-white uppercase border border-white/20 backdrop-blur-md rounded-full bg-white/5">
              THE ARCTIC PLUNGE PRO
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              BORN FOR <br />
              <span className="text-blue-400">CHAMPIONS</span>
            </h1>
            <p className="text-xl text-blue-50/80 mb-12 max-w-lg leading-relaxed font-medium">
              Experience elite-level recovery in your own space. Our triple-layer insulation technology keeps water ice-cold for 24+ hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-white text-blue-900 font-bold rounded-none hover:bg-blue-50 transition-all flex items-center justify-center group uppercase tracking-widest text-sm">
                Shop Now <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-none hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges - Desktop Only */}
      <div className="absolute bottom-12 right-12 hidden lg:flex space-x-12">
        {[
          { label: "Insulation", val: "24H+" },
          { label: "Assembly", val: "3Mins" },
          { label: "Capacity", val: "400L" }
        ].map((item) => (
          <div key={item.label} className="text-right border-r border-white/20 pr-12 last:border-0 last:pr-0">
            <p className="text-[10px] text-blue-200 uppercase tracking-widest mb-1 font-bold">{item.label}</p>
            <p className="text-3xl font-black text-white italic">{item.val}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
