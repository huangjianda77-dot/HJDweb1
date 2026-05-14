import { Shield, Zap, Wind, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Shield,
    title: '三层极致隔热',
    description: '采用高强度尼龙与气膜隔热层，确保冰水混合物长时间保持目标温度。',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Zap,
    title: '加速肌肉修复',
    description: '专业的冷水浸泡（CWI）法，有效减少运动后的延迟性肌肉酸痛（DOMS）。',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: Wind,
    title: '便携快充设计',
    description: '3分钟快速充气完成组装，轻松放进手提袋，随时随地开启康复计划。',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Clock,
    title: '超长使用寿命',
    description: '耐磨防刺穿材质，经过 5000+ 次充放气测试，伴随您的整个竞技生涯。',
    color: 'bg-orange-50 text-orange-600'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">核心优势</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            为什么选择 ArcticPlunge？
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            我们不仅制造冷疗桶，我们提供的是一整套科学的康复方案。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-md group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
