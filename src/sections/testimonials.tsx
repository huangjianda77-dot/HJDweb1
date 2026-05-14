import { Star } from 'lucide-react';
import { motion } from 'motion/react';

/**
 * Shopify Section Schema: testimonials.liquid
 */
export const section_schema = {
  name: "Testimonials",
  settings: [
    { type: "text", id: "title", label: "Heading", default: "Tested by Pros" }
  ]
};

const reviews = [
  {
    name: 'Alex Rivera',
    role: 'Pro Triathlete',
    content: 'The ArcticPlunge Pro is a game changer for my recovery routine. The insulation is top-tier compared to other portable tubs.',
    avatar: 'https://i.pravatar.cc/150?u=a1'
  },
  {
    name: 'Sarah Chen',
    role: 'Yoga Instructor',
    content: 'Setup took less than 5 minutes. It feels very sturdy and the thermal cover really keeps the temp low overnight.',
    avatar: 'https://i.pravatar.cc/150?u=a2'
  },
  {
    name: 'Marcus Thorne',
    role: 'NFL Performance Coach',
    content: 'We use these for our travel camps. Compact, durable, and delivers consistent cold therapy results for our players.',
    avatar: 'https://i.pravatar.cc/150?u=a3'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-black tracking-[0.4em] text-blue-600 uppercase mb-12">Athlete Feedback</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-none bg-zinc-50 border border-zinc-100 flex flex-col group hover:bg-zinc-100 transition-colors"
            >
              <div className="flex mb-6 text-yellow-500">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-zinc-600 mb-8 italic leading-relaxed text-sm">
                “{review.content}”
              </p>
              <div className="flex items-center mt-auto">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div className="ml-4">
                  <p className="font-bold text-zinc-900 text-xs uppercase tracking-widest">{review.name}</p>
                  <p className="text-[10px] text-zinc-400 font-medium uppercase">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
