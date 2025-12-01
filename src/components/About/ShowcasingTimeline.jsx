// components/ShowcasingTimeline.jsx
import React, { useState } from "react";
import HeaderContent from "../Helper/HeaderContent";

const milestones = [
  { year: "1975-1980", title: "Foundation Era", desc: "Foundation years of the mining industry setup & future expansion" },
  { year: "1981-1985", title: "Mining Commencement", desc: "Commencement of mining in green marble" },
  { year: "1986-1990", title: "International Expansion", desc: "Business expansion to the international market" },
  { year: "1991-1995", title: "Processing Innovation", desc: "First Marble Processing Unit Set up at Banarasi Marbles" },
  { year: "1996-2000", title: "Global Presence", desc: "Opening export outlets in Germany, the UAE, and China & participating in international expos" },
  { year: "2000-2005", title: "Export Excellence", desc: "Established a 100% export-oriented unit under Rishabh Green Marbles" },
  { year: "2005-2010", title: "Technology Advancement", desc: "Invested in advanced machinery & processing technology" },
  { year: "2010-2015", title: "Quality Recognition", desc: "Received recognition for the delivery of quality products globally" },
  { year: "2015-2020", title: "Independent Growth", desc: "Developed into an independent company backed by decades of experience" },
  { year: "2020-2025", title: "Premium Expansion", desc: "Onboarded premium clients and expanded business overseas" },
];



export default function ShowcasingTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-36 overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />

      {/* Subtle dotted pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#0E554320 1px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
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
                         <div
                                className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 w-20"
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


        <div className="relative pt-5 min-h-[800px]">
          {/* Main line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#0E5543] via-[#0E5543]/70 to-[#0E5543]"
          />

          {/* Milestones list */}
          <ol className="relative space-y-32">
            {milestones.map((m, idx) => (
              <li
                key={idx}
                className="relative milestone-item z-30"
                onMouseEnter={() => setActiveIndex(idx)}
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
                    <div className="relative">
                      <div className="absolute inset-0 -z-10">
                        <div className="w-40 h-40 rounded-full bg-[#0E5543]/10 absolute inset-0 m-auto" />
                      </div>

                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white border-2 sm:border-3 md:border-4 flex items-center justify-center shadow-lg transition-all duration-500  sm:rounded-full hover:scale-125 cursor-pointer ${
                          idx === activeIndex
                            ? "border-[#0E5543] scale-110"
                            : "border-[#0E5543]/60 scale-100"
                        } relative z-40`}
                      >
                        <span
                          className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold transition-all duration-500 ${
                            idx === activeIndex
                              ? "text-[#0E5543] scale-110"
                              : "text-[#0E5543]/80 scale-100"
                          }`}
                        >
                          {m.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#0E5543] to-transparent md:block hidden" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-transparent via-[#0E5543] to-transparent md:hidden" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
