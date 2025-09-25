// components/ShowcasingTimeline.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import HeaderContent from '../Helper/HeaderContent';

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
<<<<<<< HEAD
  const containerRef = useRef(null);
=======
  const timelineRef = useRef(null);
>>>>>>> bcced15b5521fb08af92d27043de6abe9c5a1e66
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

<<<<<<< HEAD
  // Get window height
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom scroll tracking without useScroll
  const scrollY = useMotionValue(0);
  const smoothScrollY = useSpring(scrollY, {
    damping: 30,
    stiffness: 100,
    mass: 1
  });

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  // Calculate scroll progress manually
  const calculateScrollProgress = () => {
    if (!containerRef.current) return 0;
    
    const container = containerRef.current;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const scrollPosition = smoothScrollY.get();
    
    const start = containerTop - windowHeight * 0.7;
    const end = containerTop + containerHeight - windowHeight * 0.3;
    
    const progress = (scrollPosition - start) / (end - start);
    return Math.max(0, Math.min(1, progress));
  };

  // Custom transform values
  const scrollProgress = useTransform(smoothScrollY, () => calculateScrollProgress());
  const dotPosition = useTransform(scrollProgress, [0, 1], [0, 100]);
  
  // Background parallax effect
  const backgroundY = useTransform(scrollProgress, [0, 1], [0, -100]);

  // Update active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      const index = Math.floor(latest * milestones.length);
      setActiveIndex(Math.min(Math.max(index, 0), milestones.length - 1));
    });
    return () => unsubscribe();
  }, [scrollProgress]);

  // Set timeline height
  useEffect(() => {
    if (containerRef.current) {
      setTimelineHeight(containerRef.current.scrollHeight);
    }
  }, []);

  // Manual animation for dot movement
  const dotY = useTransform(dotPosition, (pos) => {
    if (!timelineHeight) return 0;
    return (pos / 100) * (timelineHeight - 0);
  });

  // Manual animation for each milestone
  const milestoneAnimations = milestones.map((_, index) => {
    const start = index / milestones.length;
    const end = (index + 1) / milestones.length;
    
    return {
      opacity: useTransform(scrollProgress, 
        [start - 0.2, start, end - 0.1, end], 
        [0.3, 1, 1, 0.3]
      ),
      scale: useTransform(scrollProgress,
        [start - 0.2, start, end - 0.1, end],
        [0.9, 1.05, 1.05, 0.9]
      ),
      y: useTransform(scrollProgress,
        [start - 0.2, start, end - 0.1, end],
        [20, 0, 0, -20]
      )
    };
  });
=======
  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Scroll progress specifically for the timeline content
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to dot position (0% to 100% of timeline height)
  const dotPosition = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);

  // Background parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Update active index based on scroll position
  useEffect(() => {
    const unsubscribe = timelineProgress.on("change", (latest) => {
      const newIndex = Math.min(
        Math.floor(latest * milestones.length),
        milestones.length - 1
      );
      setActiveIndex(newIndex);
    });

    return () => unsubscribe();
  }, [timelineProgress]);
>>>>>>> bcced15b5521fb08af92d27043de6abe9c5a1e66

  return (
    <section ref={ref} className="relative min-h-screen py-36 overflow-hidden bg-[#F2E1C5]">
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

        <HeaderContent
          tagline='Our Journey Through Time'
          title='Legacy of Excellence'
          subtitle='From our founding in 1995 to today, RGM has been dedicated to delivering premium stone craftsmanship and innovative design solutions.'
        />

<<<<<<< HEAD
        <div ref={containerRef} className="relative pt-5">
=======
        <div ref={timelineRef} className="relative pt-5">
>>>>>>> bcced15b5521fb08af92d27043de6abe9c5a1e66
          {/* Curved timeline */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#0E5543] via-[#0E5543]/70 to-[#0E5543]"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

<<<<<<< HEAD
          {/* Scroll-based progress indicator */}
          <motion.div
            className="absolute left-1/2 top-0 w-4 h-4 -translate-x-1/2 bg-[#0E5543] rounded-full shadow-lg shadow-[#0E5543]/40 z-20 border-2 border-white"
            style={{ y: dotY }}
=======
          {/* Scroll-controlled progress indicator */}
          <motion.div
            className="absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 bg-[#0E5543] rounded-full shadow-lg shadow-[#0E5543]/40 z-20"
            style={{
              y: dotPosition
            }}
>>>>>>> bcced15b5521fb08af92d27043de6abe9c5a1e66
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
                style={{
                  opacity: milestoneAnimations[idx].opacity,
                  scale: milestoneAnimations[idx].scale,
                  y: milestoneAnimations[idx].y
                }}
              >
                {/* Active indicator dot */}
                <motion.div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 z-10 transition-all duration-300 ${
                    idx === activeIndex 
                      ? 'bg-white border-[#0E5543] scale-125 shadow-lg' 
                      : 'bg-[#0E5543] border-white'
                  }`}
                  animate={{
                    scale: idx === activeIndex ? 1.2 : 1,
                    borderColor: idx === activeIndex ? '#0E5543' : '#ffffff'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />

                <div className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-12`}>
                  <div className="md:w-1/2">
                    <motion.div
<<<<<<< HEAD
                      className={`p-6 md:p-8 rounded-2xl bg-white border-2 transition-all duration-500 shadow-xl ${
                        idx === activeIndex 
                          ? 'border-[#0E5543] shadow-2xl' 
                          : 'border-[#0E5543]/20'
=======
                      className={`p-8 rounded-2xl bg-white border border-[#0E5543]/20 shadow-xl transition-all duration-300 ${
                        idx === activeIndex ? 'ring-2 ring-[#0E5543]/30 scale-105' : 'scale-100'
>>>>>>> bcced15b5521fb08af92d27043de6abe9c5a1e66
                      }`}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      animate={{
                        borderWidth: idx === activeIndex ? 3 : 2,
                        boxShadow: idx === activeIndex 
                          ? '0 25px 50px -12px rgba(14, 85, 67, 0.25)' 
                          : '0 10px 25px -5px rgba(14, 85, 67, 0.1)'
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-serif text-[#0E5543] mb-3">{m.title}</h3>
                      <p className="text-gray-700/90 leading-relaxed text-sm md:text-base">{m.desc}</p>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2 flex justify-center">
                    <motion.div
                      className="relative"
                      variants={yearAnimation}
                      animate={idx === activeIndex ? {
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 200 }
                      } : {}}
                    >
                      <div className="absolute inset-0 -z-10">
                        <motion.div
                          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#0E5543]/10 absolute inset-0 m-auto"
                          animate={idx === activeIndex ? {
                            scale: [1, 1.4, 1],
                            opacity: [0.3, 0.1, 0.3],
                          } : {
                            scale: 1,
                            opacity: 0.1
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>

<<<<<<< HEAD
                      <motion.div 
                        className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border-4 flex items-center justify-center shadow-lg transition-all duration-300 ${
                          idx === activeIndex ? 'border-[#0E5543] shadow-xl' : 'border-[#0E5543]/60'
                        }`}
                        animate={{
                          borderColor: idx === activeIndex ? '#0E5543' : '#0E554360',
                          boxShadow: idx === activeIndex 
                            ? '0 20px 40px rgba(14, 85, 67, 0.3)' 
                            : '0 10px 25px rgba(14, 85, 67, 0.1)'
                        }}
                      >
                        <span className="text-xl md:text-2xl font-bold text-[#0E5543]">{m.year}</span>
                      </motion.div>
=======
                      <div className={`w-32 h-32 rounded-full bg-white border-4 flex items-center justify-center shadow-lg transition-all duration-300 ${
                        idx === activeIndex ? 'border-[#0E5543] scale-110' : 'border-[#0E5543]/60 scale-100'
                      }`}>
                        <span className={`text-2xl font-bold transition-all duration-300 ${
                          idx === activeIndex ? 'text-[#0E5543] scale-110' : 'text-[#0E5543]/80 scale-100'
                        }`}>{m.year}</span>
                      </div>
>>>>>>> bcced15b5521fb08af92d27043de6abe9c5a1e66
                    </motion.div>
                  </div>
                </div>

                {/* Connection lines */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 md:w-20 h-1 bg-gradient-to-r from-transparent to-[#0E5543] md:block hidden ${
                  idx % 2 === 0 ? 'rotate-180' : ''
                }`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 md:w-20 h-1 bg-gradient-to-l from-transparent to-[#0E5543] md:block hidden ${
                  idx % 2 === 0 ? 'rotate-180' : ''
                }`} />

                {/* Mobile connection lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent to-[#0E5543] md:hidden" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-t from-transparent to-[#0E5543] md:hidden" />
              </motion.li>
            ))}
          </motion.ol>

          {/* Scroll progress indicator */}
          <motion.div 
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-[#0E5543]/20 z-30"
            style={{
              opacity: useTransform(scrollProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
            }}
          >
            <div className="flex items-center gap-3 text-sm text-[#0E5543]">
              <div className="w-24 bg-[#0E5543]/20 rounded-full h-2">
                <motion.div 
                  className="bg-[#0E5543] h-2 rounded-full"
                  style={{ width: useTransform(scrollProgress, [0, 1], ['0%', '100%']) }}
                />
              </div>
              <motion.span className="font-bold min-w-[3ch]">
                {useTransform(scrollProgress, (latest) => 
                  `${Math.round(latest * 100)}%`
                )}
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}