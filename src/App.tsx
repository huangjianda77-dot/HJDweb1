/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThemeLayout from './layout/theme';
import Hero from './sections/hero';
import Features from './sections/features';
import ProductTemplate from './sections/product-template';
import Testimonials from './sections/testimonials';

export default function App() {
  return (
    <ThemeLayout>
      <Hero />
      <Features />
      <ProductTemplate />
      <Testimonials />
      
      {/* Call to Action Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-blue-900 px-4">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          alt="Athlete background"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center max-w-2xl bg-white/5 backdrop-blur-xl p-12 border border-white/10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
            Ready to <span className="text-blue-400 font-serif italic lowercase tracking-normal">evolve?</span>
          </h2>
          <p className="text-blue-100/70 mb-10 text-sm font-medium tracking-widest uppercase">
            Join 10,000+ athletes recovering smarter.
          </p>
          <button className="px-12 py-5 bg-white text-blue-900 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-2xl">
            Join the Pro Program
          </button>
        </div>
      </section>
    </ThemeLayout>
  );
}

