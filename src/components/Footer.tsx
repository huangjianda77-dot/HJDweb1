import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black mb-6 tracking-tighter">
              ARCTIC<span className="text-blue-300">PLUNGE</span>
            </h2>
            <p className="text-blue-100/70 max-w-sm mb-8 leading-relaxed">
              我们相信巅峰源于康复。通过科技与美学的结合，让最先进的冷水浸泡疗法成为每个人的日常。
            </p>
            <div className="flex space-x-6">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-blue-300 transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">产品中心</h3>
            <ul className="space-y-4 text-blue-100/60">
              <li><a href="#" className="hover:text-white transition-colors">ArcticPlunge Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">加厚便携装</a></li>
              <li><a href="#" className="hover:text-white transition-colors">周边配件</a></li>
              <li><a href="#" className="hover:text-white transition-colors">企业定制</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">支持服务</h3>
            <ul className="space-y-4 text-blue-100/60">
              <li><a href="#" className="hover:text-white transition-colors">配送政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">退换货说明</a></li>
              <li><a href="#" className="hover:text-white transition-colors">保修服务</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100/40">
          <p>© 2026 ArcticPlunge Recovery Technology. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">隐私权政策</a>
            <a href="#" className="hover:text-white">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
