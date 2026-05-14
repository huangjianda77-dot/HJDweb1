import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductDetail() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-16">
          <div className="flex-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                技术参数与规格
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '容量', value: '400L' },
                  { label: '直径', value: '80cm' },
                  { label: '高度', value: '75cm' },
                  { label: '收纳重量', value: '3.5kg' }
                ].map((item) => (
                  <div key={item.label} className="bg-white p-4 rounded-lg border border-gray-100">
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">{item.label}</p>
                    <p className="text-lg font-bold text-blue-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ul className="space-y-4">
                {[
                  '全地形充气式，室内外通用',
                  '强化双重密封排水阀',
                  '附带隔热密封顶盖',
                  '赠送快速手动充气泵',
                  '支持冰块与专业制冷泵接入'
                ].map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-4 mt-1">
                      <Check size={12} className="text-blue-600" />
                    </span>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="flex-1 mt-12 lg:mt-0 relative group">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <img
                src="https://picsum.photos/seed/tub-detail/800/800"
                alt="Product in use"
                className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
