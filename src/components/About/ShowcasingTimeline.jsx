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
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
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
      delay: 0.2,
    },
  },
};

export default function ShowcasingTimeline() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const dotRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Scroll animation setup (fixed for live refresh)
  useEffect(() => {
    if (!timelineRef.current || !dotRef.current) return;

    const timelineHeight = timelineRef.current.offsetHeight;
    const dot = dotRef.current;
    const maxTravelDistance = timelineHeight - 50;

    // kill old triggers before new init
    ScrollTrigger.killAll();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * milestones.length),
            milestones.length - 1
          );
          setActiveIndex(newIndex);
        },
      },
    });

    tl.to(dot, {
      y: maxTravelDistance,
      ease: "none",
      duration: 1,
    });

    return () => {
      // ✅ Full cleanup
      tl.scrollTrigger?.kill();
      tl.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  // ✅ Hover animation for dot
  useEffect(() => {
    if (!dotRef.current) return;
    const dot = dotRef.current;

    const handleMouseEnter = () => {
      gsap.to(dot, { scale: 1.2, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    dot.addEventListener("mouseenter", handleMouseEnter);
    dot.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dot.removeEventListener("mouseenter", handleMouseEnter);
      dot.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className="relative py-36 overflow-hidden bg-white">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Subtle dotted pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#0E554320 1px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <HeaderContent
          title="The Rishabh Green 	Marble  Chronicle"
          tagline="Built on a Timeless Foundationx  "
          subtitle="Born from a vision of perfection and guided by unwavering values, Rishabh Green’s legacy of excellence spans decades of passion, perseverance and craftsmanship, evolving from humble origins to enduring trust and timeless quality. 
 "
        /> */}
          <div className="relative text-center mb-20">
                          <h2
                            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] leading-tight w-full mb-4"
                            style={{ fontFamily: 'Arial, sans-serif', fontWeight: '200',  }}
                          >
                            <span className="relative">
                            The Rishabh Green 	Marble  Chronicle   
 
                            
                            </span>
                          </h2>
                          
                          {/* Decorative line */}
                         <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 60 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8"
                                style={{ width: 'clamp(60px, 15vw, 100px)' }}
                              />
                        
                          
                          <p
                            className="text-sm tracking-[0.3em] uppercase text-[#0E5543]/90 leading-relaxed font-medium"
                            style={{
                              fontFamily: "Montserrat",
                              fontWeight: "500",
                              letterSpacing: "0.02em",
                            }}
                          >
                           Built on a Timeless Foundation 
                          </p>
                        </div>


        <div ref={timelineRef} className="relative pt-5 min-h-[800px]">
          {/* Main line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#0E5543] via-[#0E5543]/70 to-[#0E5543]"
            initial={{ height: 50, opacity: 0 }}
            animate={isInView ? { height: "100%", opacity: 1 } : { height: "0%", opacity: 0 }}
            transition={{
              height: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.5 },
            }}
          />

          {/* Progress dot controlled by GSAP */}
          <div
            ref={dotRef}
            className="absolute left-1/2 top-0 w-4 h-4 bg-[#0E5543] rounded-full shadow-lg z-20 cursor-pointer"
            style={{ transform: "translateX(-50%)" }}
          />

          {/* Milestones list */}
          <motion.ol
            className="relative space-y-32"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {milestones.map((m, idx) => (
              <motion.li
                key={idx}
                className="relative milestone-item z-30"
                variants={item}
                onHoverStart={() => setActiveIndex(idx)}
              >
                <div
                  className={`flex flex-col h-full md:flex-row items-center ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  } gap-10`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 z-10">
                    <div
                      className={`p-4 sm:p-6 md:p-8 bg-[#F2E1C5] border border-[#0E5543]/20 shadow-xl transition-all duration-300 ${
                        idx === activeIndex ? "ring-2 ring-[#0E5543]/30" : ""
                      } relative z-40`}
                    >
                      <h3
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#0E5543] mb-2 sm:mb-3"
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "200",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {m.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base text-gray-700/90 leading-relaxed"
                        style={{
                          fontFamily: "Montserrat",
                          fontWeight: "200",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  {/* Year Circle */}
                  <div className="md:w-1/2 flex justify-center">
                    <motion.div
                      className="relative"
                      variants={yearAnimation}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 -z-10">
                        <motion.div
                          className="w-40 h-40 rounded-full bg-[#0E5543]/10 absolute inset-0 m-auto"
                          animate={
                            idx === activeIndex
                              ? {
                                  scale: [1, 1.3, 1],
                                  opacity: [0.3, 0.1, 0.3],
                                }
                              : { scale: 1, opacity: 0.3 }
                          }
                          transition={{
                            duration: 3,
                            repeat: idx === activeIndex ? Infinity : 0,
                            ease: "easeInOut",
                          }}
                        />
                      </div>

                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white border-2 sm:border-3 md:border-4 flex items-center justify-center shadow-lg transition-all duration-500 rounded-b-lg sm:rounded-full ${
                          idx === activeIndex
                            ? "border-[#0E5543] scale-110"
                            : "border-[#0E5543]/60 scale-100"
                        } relative z-40`}
                      >
                        <motion.span
                          className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold transition-all duration-500 ${
                            idx === activeIndex
                              ? "text-[#0E5543] scale-110"
                              : "text-[#0E5543]/80 scale-100"
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {m.year}
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Connector lines */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#0E5543] to-transparent md:block hidden"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{
                    scaleX: { duration: 0.8, delay: idx * 0.3 + 0.5, ease: "easeOut" },
                    opacity: { duration: 0.6, delay: idx * 0.3 + 0.5 },
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-transparent via-[#0E5543] to-transparent md:hidden"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{
                    scaleY: { duration: 0.8, delay: idx * 0.3 + 0.5, ease: "easeOut" },
                    opacity: { duration: 0.6, delay: idx * 0.3 + 0.5 },
                  }}
                />
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </div>
  );
}
