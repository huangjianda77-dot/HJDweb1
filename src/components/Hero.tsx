import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              专业级运动康复
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              把极致冷疗<br />
              <span className="text-blue-600 italic">带回家</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              ArcticPlunge 采用三层隔热技术与人体工学设计，为您提供最科学的冰浴体验。加速肌肉修复，减少炎症，重燃巅峰竞技状态。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all flex items-center justify-center">
                立即订购 <ChevronRight className="ml-2" size={18} />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-lg hover:border-blue-900 transition-all">
                了解更多
              </button>
            </div>
            <div className="mt-12 flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="User avatar"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span>1200+ 运动员的选择</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="flex items-center">
                <span className="font-bold text-gray-900 mr-2">4.9/5.0</span>
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform group transition-transform hover:skew-y-0 duration-500">
              <img
                src="https://picsum.photos/seed/arctic/1200/1000"
                alt="ArcticPlunge Product"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">隔热效能</p>
              <p className="text-2xl font-black text-blue-900">24小时+ 锁冷</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-blue-900 text-white p-4 rounded-xl shadow-lg hidden md:block">
              <p className="text-xs text-blue-100 uppercase font-bold tracking-widest mb-1">材质</p>
              <p className="text-2xl font-black italic">航天级尼龙</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
