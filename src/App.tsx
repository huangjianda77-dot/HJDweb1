/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductDetail from './components/ProductDetail';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <ProductDetail />
        <Testimonials />
        <section className="bg-blue-600 py-20 text-center text-white px-4">
          <h2 className="text-4xl font-extrabold mb-6">
            准备好体验巅峰状态了吗？
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-xl mx-auto">
            加入 10,000+ 运动员的康复计划。现在订购，立享包邮。
          </p>
          <button className="px-12 py-5 bg-white text-blue-900 font-black rounded-2xl shadow-xl hover:scale-105 transition-transform">
            立即解锁优惠
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

