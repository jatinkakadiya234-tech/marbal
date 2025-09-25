import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderContent from "../Helper/HeaderContent";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "1995", title: "Founded", desc: "RGM began its journey in premium stone craftsmanship." },
  { year: "2005", title: "Expanded Services", desc: "Introduced bespoke kitchen and bath solutions." },
  { year: "2015", title: "Sustainable Sourcing", desc: "Committed to responsible, world-class material sourcing." },
  { year: "2025", title: "Design Innovation", desc: "Launched new premium and uni collections with modern finishes." },
];

export default function ShowcasingTimeline() {
  const ref = useRef(null);
  const dotRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ref.current && dotRef.current) {
      gsap.to(dotRef.current, {
        y: "100%", // niche sudhi jase
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top+=100", 
          end: "bottom bottom-=100",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-36 overflow-hidden bg-[#F2E1C5]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F2E1C5] to-[#e8d5b5]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeaderContent
          tagline="Our Journey Through Time"
          title="Legacy of Excellence"
          subtitle="From our founding in 1995 to today, RGM has been dedicated to delivering premium stone craftsmanship and innovative design solutions."
        />

        <div className="relative pt-5">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#0E5543]/40" />

          {/* Moving Dot */}
          <div
            ref={dotRef}
            className="absolute left-1/2 top-0 w-5 h-5 -translate-x-1/2 rounded-full bg-[#0E5543] shadow-lg shadow-[#0E5543]/40"
          />

          <ol className="relative space-y-32">
            {milestones.map((m, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  } gap-10`}
                >
                  {/* Content box */}
                  <div className="md:w-1/2">
                    <motion.div
                      className={`p-8 rounded-2xl bg-white border border-[#0E5543]/20 shadow-xl ${
                        idx === activeIndex ? "ring-2 ring-[#0E5543]/30" : ""
                      }`}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-serif text-[#0E5543] mb-3">
                        {m.title}
                      </h3>
                      <p className="text-gray-700/90 leading-relaxed">{m.desc}</p>
                    </motion.div>
                  </div>

                  {/* Year Circle */}
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-white border-4 border-[#0E5543] flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-[#0E5543]">
                          {m.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
