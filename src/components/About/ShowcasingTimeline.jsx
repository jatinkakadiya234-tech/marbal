// components/ShowcasingTimeline.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeaderContent from '../Helper/HeaderContent';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
  const timelineRef = useRef(null);
  const dotRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);

  // Enhanced GSAP Scroll Animation with Smooth Easing
  useEffect(() => {
    if (!timelineRef.current || !dotRef.current) return;

    const timelineHeight = timelineRef.current.offsetHeight;
    const dot = dotRef.current;

    // Calculate the maximum travel distance for the dot
    const maxTravelDistance = timelineHeight - 12;

    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Enhanced GSAP timeline with smooth easing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 2, // Increased scrub for smoother movement
        onUpdate: (self) => {
          const progress = self.progress;
          // Smooth active index transition with easing
          const easedProgress = self.progress; // Use raw progress for smoother index changes
          const newIndex = Math.min(
            Math.floor(easedProgress * milestones.length),
            milestones.length - 1
          );
          setActiveIndex(newIndex);
        }
      }
    });

    // Ultra-smooth dot movement with custom easing
    tl.to(dot, {
      y: maxTravelDistance,
      ease: "sine.inOut", // Smoother easing function
      duration: 1
    }, 0);

    // Additional smooth animations
    tl.to(dot, {
      rotation: 360, // Subtle rotation for smoothness
      ease: "none",
      duration: 1
    }, 0);

    // Smooth scale animation based on scroll
    tl.to(dot, {
      scale: 1.1,
      ease: "sine.inOut",
      duration: 1
    }, 0);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Enhanced hover interactions with smoother animations
  useEffect(() => {
    if (!dotRef.current) return;

    const dot = dotRef.current;
    
    const handleMouseEnter = () => {
      gsap.to(dot, {
        scale: 1.4,
        duration: 0.5,
        ease: "elastic.out(1, 0.8)", // Smoother elastic effect
        background: "#0E5543",
        boxShadow: "0 0 30px rgba(14, 85, 67, 0.6)",
        rotation: 180 // Smooth rotation on hover
      });
    };

    const handleMouseLeave = () => {
      gsap.to(dot, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
        background: "#0E5543",
        boxShadow: "0 0 20px rgba(14, 85, 67, 0.4)",
        rotation: 0
      });
    };

    dot.addEventListener('mouseenter', handleMouseEnter);
    dot.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      dot.removeEventListener('mouseenter', handleMouseEnter);
      dot.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth active index transitions
  useEffect(() => {
    if (!timelineRef.current) return;

    // Add smooth transitions for active elements
    const activeElements = timelineRef.current.querySelectorAll('.milestone-item');
    
    activeElements.forEach((element, index) => {
      if (index === activeIndex) {
        gsap.to(element, {
          scale: 1.05,
          duration: 0.6,
          ease: "back.out(1.7)",
          y: -5
        });
      } else {
        gsap.to(element, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          y: 0
        });
      }
    });
  }, [activeIndex]);

  return (
    <section ref={ref} className="relative min-h-screen py-36 overflow-hidden bg-white">
      {/* Enhanced Background with Smooth Animations */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        
      />

      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#0E554320 1px, transparent 2px)",
          backgroundSize: '40px 40px',
        }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeaderContent
          tagline='Our Journey Through Time'
          title='Legacy of Excellence'
          subtitle='From our founding in 1995 to today, RGM has been dedicated to delivering premium stone craftsmanship and innovative design solutions.'
        />

        <div ref={timelineRef} className="relative pt-5 min-h-[800px]">
          {/* Curved timeline with smooth animation */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#0E5543] via-[#0E5543]/70 to-[#0E5543]"
            initial={{ height: 50, opacity: 0 }}
            animate={isInView ? { height: "100%", opacity: 1 } : { height: "100%", opacity: 1}}
            transition={{ 
              height: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.5 }
            }}
          />

          {/* Enhanced GSAP-controlled progress indicator */}
          <motion.div
            ref={dotRef}
            className="absolute left-1/2 top-0 w-4 h-4 -translate-x-1/2 bg-gradient-to-br from-[#0E5543] to-[#1a7a5e] rounded-full shadow-2xl shadow-[#0E5543]/50 z-20 cursor-pointer border-2 border-white/50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              scale: { type: "spring", stiffness: 200, damping: 15, delay: 0.8 },
              opacity: { duration: 0.5, delay: 0.8 }
            }}
            style={{
              transform: 'translateX(-50%) translateY(0px)'
            }}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#0E5543] opacity-50 animate-pulse"></div>
          </motion.div>

          <motion.ol
            className="relative space-y-32"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {milestones.map((m, idx) => (
              <motion.li
                key={idx}
                className="relative milestone-item"
                variants={item}
                onHoverStart={() => setActiveIndex(idx)}
                
              >
                <div className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-10`}>
                  <div className="md:w-1/2">
                    <motion.div
                      className={`p-8 rounded-2xl bg-[#F2E1C5] border border-[#0E5543]/20 shadow-xl transition-all duration-500 ${
                        idx === activeIndex ? 'ring-2 ring-[#0E5543]/30 scale-105' : 'scale-100'
                      }`}
                      whileHover={{
                        y: -8,
                        transition: { 
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-serif text-[#0E5543] mb-3" 
                       style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>{m.title}</h3>
                      <p className="text-gray-700/90 leading-relaxed" 
                       style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>{m.desc}</p>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2 flex justify-center">
                    <motion.div
                      className="relative"
                      variants={yearAnimation}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 -z-10">
                        <motion.div
                          className="w-40 h-40 rounded-full bg-[#0E5543]/10 absolute inset-0 m-auto"
                          animate={idx === activeIndex ? {
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.1, 0.3],
                          } : {}}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>

                      <div className={`w-32 h-32 rounded-full bg-white border-4 flex items-center justify-center shadow-lg transition-all duration-500 ${
                        idx === activeIndex ? 'border-[#0E5543] scale-110' : 'border-[#0E5543]/60 scale-100'
                      }`}>
                        <motion.span 
                          className={`text-2xl font-bold transition-all duration-500 ${
                            idx === activeIndex ? 'text-[#0E5543] scale-110' : 'text-[#0E5543]/80 scale-100'
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {m.year}
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced connection lines with smooth animation */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#0E5543] to-transparent md:block hidden"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ 
                    scaleX: { duration: 0.8, delay: idx * 0.3 + 0.5, ease: "easeOut" },
                    opacity: { duration: 0.6, delay: idx * 0.3 + 0.5 }
                  }}
                />

                {/* Mobile connection lines */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-transparent via-[#0E5543] to-transparent md:hidden"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ 
                    scaleY: { duration: 0.8, delay: idx * 0.3 + 0.5, ease: "easeOut" },
                    opacity: { duration: 0.6, delay: idx * 0.3 + 0.5 }
                  }}
                />
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}