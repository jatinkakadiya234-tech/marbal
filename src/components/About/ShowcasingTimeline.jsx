// components/ShowcasingTimeline.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

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
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const yearAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.2
    }
  }
};

export default function ShowcasingTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % milestones.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="relative min-h-screen py-24 overflow-hidden bg-[#F2E1C5]">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#F2E1C5] to-[#e8d5b5]"
        style={{ y: backgroundY }}
      />

      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#0E554320 1px, transparent 2px)",
          backgroundSize: '40px 40px',
          y: backgroundY
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-2 h-2 bg-[#0E5543] rounded-full mr-3"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-[#0E5543]">
              Our Journey Through Time
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-serif text-[#0E5543] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Legacy of Excellence
          </motion.h1>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#0E5543] to-[#0E5543]/70 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        <div className="relative">
          {/* Curved timeline */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#0E5543] via-[#0E5543]/70 to-[#0E5543]"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Animated progress indicator */}
          <motion.div
            className="absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 bg-[#0E5543] rounded-full shadow-lg shadow-[#0E5543]/40"
            animate={{
              y: [0, 380, 760, 1140],
              transition: {
                duration: 12,
                times: [0, 0.33, 0.66, 1],
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />

          <motion.ol
            className="relative space-y-32"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {milestones.map((m, idx) => (
              <motion.li
                key={idx}
                className="relative"
                variants={item}
                onHoverStart={() => setActiveIndex(idx)}
              >
                <div className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-10`}>
                  <div className="md:w-1/2">
                    <motion.div
                      className={`p-8 rounded-2xl bg-white border border-[#0E5543]/20 shadow-xl ${idx === activeIndex ? 'ring-2 ring-[#0E5543]/30' : ''}`}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-serif text-[#0E5543] mb-3">{m.title}</h3>
                      <p className="text-gray-700/90 leading-relaxed">{m.desc}</p>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2 flex justify-center">
                    <motion.div
                      className="relative"
                      variants={yearAnimation}
                    >
                      <div className="absolute inset-0 -z-10">
                        <motion.div
                          className="w-40 h-40 rounded-full bg-[#0E5543]/10 absolute inset-0 m-auto"
                          animate={idx === activeIndex ? {
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3],
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>

                      <div className="w-32 h-32 rounded-full bg-white border-4 border-[#0E5543] flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-[#0E5543]">{m.year}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Connection line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent to-[#0E5543] md:block hidden"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-l from-transparent to-[#0E5543] md:block hidden"></div>

                {/* Mobile connection line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-transparent to-[#0E5543] md:hidden"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-t from-transparent to-[#0E5543] md:hidden"></div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}