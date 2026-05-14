import { Zap, ShieldCheck, Thermometer, Box } from 'lucide-react';
import { motion } from 'motion/react';

/**
 * Shopify Section Schema: features.liquid
 */
export const section_schema = {
  name: "Feature Columns",
  max_blocks: 4,
  blocks: [
    {
      type: "feature",
      name: "Feature",
      settings: [
        { type: "text", id: "title", label: "Title" },
        { type: "textarea", id: "text", label: "Text" }
      ]
    }
  ]
};

const features = [
  {
    icon: Thermometer,
    title: "Thermal Lock Technology",
    text: "Five layers of reinforced insulation material ensure zero temperature escape during your 20-minute plunge."
  },
  {
    icon: ShieldCheck,
    title: "Military Grade Durability",
    text: "Constructed with rip-stop nylon and high-density PVC. Designed to withstand outdoor elements and frequent use."
  },
  {
    icon: Zap,
    title: "Instant Recovery",
    text: "Scientifically proven to reduce muscle inflammation, improve sleep quality, and boost immune system response."
  },
  {
    icon: Box,
    title: "Ultra Portable Design",
    text: "Deflates and folds into a compact carry bag in under 2 minutes. Perfect for training camps and away games."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-zinc-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase mb-4">The Standard</h2>
          <p className="text-4xl font-black text-gray-900 tracking-tight leading-tight">
            PRO PERFORMANCE. <br className="hidden sm:block" />
            ANYTIME. ANYWHERE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="mb-6 inline-flex p-4 bg-white border border-gray-100 rounded-2xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                <feature.icon size={28} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
