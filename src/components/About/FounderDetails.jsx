// components/About/FounderDetails.jsx
import React from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Rahul Mehta',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop',
    bio:
      'Leads brand vision and product strategy with two decades of experience in luxury stone craftsmanship.',
  },
  {
    name: 'Gauri Patel',
    role: 'Co‑Founder & Design Head',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    bio:
      'Oversees design direction and client experience, blending timeless aesthetics with modern usability.',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function FounderDetails() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-850 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/90">
              Founders
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">
            Meet our founders
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {founders.map((f) => (
            <motion.div
              key={f.name}
              className="group relative rounded-2xl overflow-hidden border border-amber-600/20 bg-black/20"
              variants={item}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-serif text-white">{f.name}</h3>
                <p className="text-amber-300/90 text-sm font-medium mt-1">{f.role}</p>
                <p className="text-gray-300/90 mt-3 leading-relaxed">{f.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


