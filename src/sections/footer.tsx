import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';

/**
 * Shopify Section Schema: footer.liquid
 */
export const section_schema = {
  name: "Footer",
  settings: [
    { type: "text", id: "footer_text", label: "Footer Bio" }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          <div className="md:col-span-4">
            <a href="/" className="text-3xl font-black tracking-tighter text-white mb-8 block uppercase">
              Arctic<span className="text-blue-500">Plunge</span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
              We empower athletes through superior recovery technology. Our mission is to make elite cold therapy accessible to everyone, anywhere.
            </p>
            <div className="flex space-x-5">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Navigation</h3>
            <ul className="space-y-4 text-sm font-medium">
              {['Shop All', 'Recovery Guide', 'Professional Partners', 'Ambassadors'].map(link => (
                <li key={link}>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Newsletter</h3>
            <p className="text-sm text-zinc-400 mb-6">Join 50k+ athletes receiving weekly recovery tips.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-zinc-900/50 border border-white/10 h-14 pl-6 pr-16 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-2 top-2 h-10 w-10 bg-white text-zinc-950 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-zinc-600 uppercase tracking-widest font-bold">
            © 2026 ARCTIC PLUNGE. HANDCRAFTED FOR PERFORMANCE.
          </p>
          <div className="flex space-x-10 text-[11px] text-zinc-600 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
