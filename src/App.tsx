/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThemeLayout from './layout/theme';
import Hero from './sections/hero';
import Features from './sections/features';
import ProductTemplate from './sections/product-template';

export default function App() {
  return (
    <ThemeLayout>
      {/* Index Template sections */}
      <Hero />
      <Features />
      <ProductTemplate />
      
      {/* Visual Break / Marketing Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-zinc-900 px-4">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          alt="Athlete environment"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-[1.1]">
            Unlock your full potential with <br />
            <span className="text-blue-500">Professional cold therapy</span>
          </h2>
          <button className="px-12 py-5 bg-blue-600 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-500 transition-all hover:scale-105">
            Join the community
          </button>
        </div>
      </section>
    </ThemeLayout>
  );
}

