import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: '张立衡',
    role: '职业铁人三项运动员',
    content: '以前每次高强度训练后都要跑很久去体育馆做冷浴。ArcticPlunge 改变了我的生活，它在阳台上就能完美工作，锁冷效果惊人。',
    avatar: 'https://i.pravatar.cc/150?u=12'
  },
  {
    name: '陈美琪',
    role: '知名普拉提教练',
    content: '材质非常扎实，完全不用担心漏气或漏水。不仅是对身体的康复，更是对意志的磨炼，极力推荐给我的学员们。',
    avatar: 'https://i.pravatar.cc/150?u=18'
  },
  {
    name: 'Robert White',
    role: 'CrossFit 资深爱好者',
    content: 'Fast shipping to Shanghai! Easy setup in 5 mins. The quality is top-notch, feels very premium.',
    avatar: 'https://i.pravatar.cc/150?u=24'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">
          真实运动员反馈
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center italic"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-6 border-4 border-white shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="flex mb-4 text-yellow-400">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                “{review.content}”
              </p>
              <div>
                <p className="font-bold text-gray-900 not-italic">{review.name}</p>
                <p className="text-sm text-gray-500 not-italic">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
