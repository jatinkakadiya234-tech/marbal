// components/ShowcasingTimeline.jsx
import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: '1995', title: 'Founded', desc: 'RGM began its journey in premium stone craftsmanship.' },
  { year: '2005', title: 'Expanded Services', desc: 'Introduced bespoke kitchen and bath solutions.' },
  { year: '2015', title: 'Sustainable Sourcing', desc: 'Committed to responsible, world-class material sourcing.' },
  { year: '2025', title: 'Design Innovation', desc: 'Launched new premium and uni collections with modern finishes.' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function ShowcasingTimeline() {
  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-3">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/90">
              Our Journey
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-3 tracking-tight">
            Showcasing the timeline
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
        </motion.div>

        <motion.ol
          className="relative border-s border-amber-600/20 pl-6 space-y-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {milestones.map((m, idx) => (
            <motion.li key={idx} className="relative" variants={item}>
              <span className="absolute -left-3 top-1.5 w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_0_4px_rgba(245,158,11,0.15)]"></span>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-white">{m.title}</h3>
                  <p className="text-gray-300/90 mt-1 max-w-2xl leading-relaxed">{m.desc}</p>
                </div>
                <div className="text-amber-400 font-semibold tracking-wide">{m.year}</div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}


