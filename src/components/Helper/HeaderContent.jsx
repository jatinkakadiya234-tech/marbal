// components/ShowcasingTimeline.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderContent from "../Helper/HeaderContent";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "1975", title: "Founded", desc: "Foundation years of the mining industry setup & future expansion" },
  { year: "1981", title: "Expanded Services", desc: "Commencement of mining in green marble" },
  { year: "1986", title: "Sustainable Sourcing", desc: "Business expansion to the international market" },
  { year: "1991", title: "Design Innovation", desc: "First Marble Processing Unit Set up at Banarasi Marbles" },
  { year: "1996", title: "Global Presence", desc: "Opened export outlets in Germany, UAE, and China & participated in international expos." },
  { year: "2000", title: "Export Expansion", desc: "Established a 100% export-oriented unit under Rishabh Green Marbles" },
  { year: "2005", title: "Technology Growth", desc: "Invested in advanced machinery & processing technology." },
  { year: "2010", title: "Global Recognition", desc: "Received recognition for the delivery of quality products globally." },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ShowcasingTimeline() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  // GSAP scroll animation for cards
  useEffect(() => {
    if (!timelineRef.current) return;

    const cards = timelineRef.current.querySelectorAll('.timeline-card');
    
    ScrollTrigger.killAll();

    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          }
        }
      );
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Modern background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `
            linear-gradient(30deg, #0E5543 12%, transparent 12.5%, transparent 87%, #0E5543 87.5%, #0E5543),
            linear-gradient(150deg, #0E5543 12%, transparent 12.5%, transparent 87%, #0E5543 87.5%, #0E5543),
            linear-gradient(30deg, #0E5543 12%, transparent 12.5%, transparent 87%, #0E5543 87.5%, #0E5543),
            linear-gradient(150deg, #0E5543 12%, transparent 12.5%, transparent 87%, #0E5543 87.5%, #0E5543),
            linear-gradient(60deg, #0E554377 25%, transparent 25.5%, transparent 75%, #0E554377 75%, #0E554377),
            linear-gradient(60deg, #0E554377 25%, transparent 25.5%, transparent 75%, #0E554377 75%, #0E554377)
          `,
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeaderContent
          tagline="Our Evolution"
          title="Milestones of Excellence"
          subtitle="Discover our journey through decades of innovation, growth, and commitment to quality in the stone industry."
        />

        <div ref={timelineRef} className="relative mt-16 lg:mt-24">
          {/* Central Timeline Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0E5543] via-[#0E5543]/50 to-[#0E5543] hidden lg:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Timeline Cards */}
          <motion.div
            className="space-y-8 lg:space-y-16"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`timeline-card relative group ${
                  index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2'
                }`}
                variants={item}
                onHoverStart={() => setActiveIndex(index)}
              >
                <div className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-6 lg:gap-12`}>
                  
                  {/* Year Indicator */}
                  <div className="flex-shrink-0 relative z-20">
                    <motion.div
                      className={`relative flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border-2 transition-all duration-500 ${
                        index === activeIndex
                          ? 'bg-[#0E5543] border-[#0E5543] scale-110 shadow-2xl'
                          : 'bg-white border-[#0E5543]/30 scale-100 shadow-lg'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className={`text-lg lg:text-xl font-bold transition-colors duration-500 ${
                        index === activeIndex ? 'text-white' : 'text-[#0E5543]'
                      }`}>
                        {milestone.year}
                      </span>
                      
                      {/* Active state glow */}
                      {index === activeIndex && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-[#0E5543]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>

                    {/* Connector line for mobile */}
                    <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-[#0E5543]/30 lg:hidden -translate-y-1/2 -z-10" 
                      style={{ [index % 2 === 0 ? 'right' : 'left']: 'auto', [index % 2 === 0 ? 'left' : 'right']: '100%' }} />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 w-full max-w-2xl ${
                      index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-500 ${
                      index === activeIndex
                        ? 'bg-white shadow-2xl ring-2 ring-[#0E5543]/20'
                        : 'bg-white/80 shadow-xl backdrop-blur-sm'
                    }`}>
                      
                      {/* Decorative accent */}
                      <div className={`absolute top-0 w-1 h-16 bg-gradient-to-b from-[#0E5543] to-[#0E5543]/50 rounded-full ${
                        index % 2 === 0 ? 'left-6' : 'right-6'
                      }`} />
                      
                      <div className="ml-2">
                        <motion.h3
                          className={`text-xl lg:text-2xl font-semibold mb-3 transition-colors duration-500 ${
                            index === activeIndex ? 'text-[#0E5543]' : 'text-gray-800'
                          }`}
                          style={{ fontFamily: 'Montserrat' }}
                        >
                          {milestone.title}
                        </motion.h3>
                        <motion.p
                          className="text-gray-600 leading-relaxed text-sm lg:text-base"
                          style={{ fontFamily: 'Montserrat', fontWeight: '300' }}
                          initial={{ opacity: 0.8 }}
                          animate={{ opacity: index === activeIndex ? 1 : 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          {milestone.desc}
                        </motion.p>
                      </div>

                      {/* Hover effect border */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl border-2 pointer-events-none ${
                          index === activeIndex ? 'border-[#0E5543]/20' : 'border-transparent'
                        }`}
                        initial={false}
                        animate={{
                          scale: index === activeIndex ? 1 : 1.02
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Desktop connector lines */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-0.5 bg-[#0E5543]/30" />
              </motion.div>
            ))}
          </motion.div>

          {/* Floating progress indicator */}
          <motion.div
            className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-2 z-50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            {milestones.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.querySelectorAll('.timeline-card')[index];
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#0E5543] scale-125'
                    : 'bg-[#0E5543]/30 hover:bg-[#0E5543]/50'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}