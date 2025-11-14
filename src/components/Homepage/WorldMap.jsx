import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaGlobeAmericas, FaHandshake, FaUsers, FaRocket, FaAward, FaGlobe, FaGem } from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import mapImage from "../../assets/map_img.png";
import HeaderContent from "../Helper/HeaderContent";

// Counter Component for Animated Numbers
const AnimatedCounter = ({ from, to, duration = 2 }) => {
  const nodeRef = React.useRef();
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, to, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [motionValue, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const locations = [
  {
    name: "India",
    top: "55%",
    left: "65%",
    description: "Our largest development center with 200+ marble experts",
    clients: "150+ premium projects",
    projects: ["Taj Hotel", "Infosys Campus", "Reliance Towers"]
  },
  {
    name: "Canada",
    top: "38%",
    left: "20%",
    description: "North American headquarters serving luxury real estate",
    clients: "50+ luxury villas",
    projects: ["Toronto Skyscraper", "Vancouver Estates", "Montreal Museum"]
  },
  {
    name: "Germany",
    top: "45%",
    left: "50%",
    description: "European innovation hub with architectural marvels",
    clients: "80+ commercial projects",
    projects: ["Berlin Airport", "Munich Mall", "Frankfurt Towers"]
  },
  {
    name: "Australia",
    top: "78%",
    left: "78%",
    description: "APAC regional center driving premium constructions",
    clients: "45+ landmark projects",
    projects: ["Sydney Opera House", "Melbourne Towers", "Perth Resort"]
  },
  {
    name: "London",
    top: "40%",
    left: "45%",
    description: "UK operations with heritage restoration expertise",
    clients: "60+ heritage projects",
    projects: ["Buckingham Palace", "London Bridge", "The Shard"]
  },
  {
    name: "Dubai",
    top: "54.5%",
    left: "57.5%",
    description: "Middle East hub for ultra-luxury developments",
    clients: "35+ iconic projects",
    projects: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"]
  },
  {
    name: "Russia",
    top: "39%",
    left: "66%",
    description: "Eastern European luxury marble specialist",
    clients: "40+ premium installations",
    projects: ["Moscow Metro", "St. Petersburg Palace", "Kremlin"]
  },
  {
    name: "UAE",
    top: "52%",
    left: "58%",
    description: "Marble Export - UAE with premium stone collections",
    clients: "75+ luxury exports",
    projects: ["Emirates Palace", "Atlantis Resort", "ADNOC Tower"]
  },
  {
    name: "Qatar",
    top: "50%",
    left: "56%",
    description: "Marble Export - Qatar serving World Cup venues",
    clients: "45+ stadium projects",
    projects: ["Lusail Stadium", "Museum of Islamic Art", "The Pearl"]
  },
  {
    name: "Saudi Arabia",
    top: "48%",
    left: "54%",
    description: "Marble Export - Saudi Arabia for NEOM developments",
    clients: "60+ mega projects",
    projects: ["NEOM City", "King Abdullah Center", "Riyadh Metro"]
  },
  {
    name: "Europe",
    top: "42%",
    left: "48%",
    description: "Marble Export - Europe covering multiple countries",
    clients: "120+ continental projects",
    projects: ["Louvre Museum", "Vatican Restoration", "Barcelona Sagrada"]
  },
];

export default function WorldMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div className="relative w-full max-w-full p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-[#0E5543] via-[#0E5543] to-[#0E5543] shadow-2xl border border-[#1A7A62]">
      {/* Enhanced Header Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <HeaderContent
          tagline=""
          title=" Global Marble Excellence"
          subtitle="Transforming spaces across countries like UAE, Qatar,Saudi Arabia, and Europe countries with 1,000+ iconic marble creations. "
          theme="dark"
        />

        {/* Premium Marble Stats Grid */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-7xl px-2 sm:px-4 lg:px-8 mx-auto"
>
  {[
  {
    icon: FaGlobeAmericas,
    number: 11,
    suffix: "+",
    label: "Countries",
    accent: "#6B7280",
    glow: "shadow-blue-500/50",
    color: "#0E5543"
  },
  {
    icon: FaAward,
    number: 500,
    suffix: "+",
    label: "Projects",
    accent: "#4B5563",
    glow: "shadow-purple-500/50",
    color: "#0E5543"
  },
  {
    icon: FaUsers,
    number: 200,
    suffix: "+",
    label: "Artisans",
    accent: "#374151",
    glow: "shadow-green-500/50",
    color: "#0E5543"
  },
  {
    icon: FaRocket,
    number: 25,
    suffix: "+",
    label: "Years",
    accent: "#1F2937",
    glow: "shadow-orange-500/50",
    color: "#0E5543"
  }
]
.map((stat, index) => (
    <motion.div
      key={index}
     
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer perspective-1000"
    >
      {/* Glass Card */}
      <div className="relative bg-gradient-to-br from-white/25 via-white/10 to-white/5 backdrop-blur-xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/40 shadow-2xl transition-all duration-500 overflow-hidden">
        


        {/* Icon Container */}
        <motion.div
          className="relative mb-3 sm:mb-4 md:mb-6 mx-auto w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/50 backdrop-blur-sm border border-white/60 shadow-lg"
        >
          <stat.icon className="text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-lg" style={{ color: stat.color }} />
        </motion.div>

        {/* Number with White Text */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 sm:mb-3 md:mb-4 text-center tracking-tight drop-shadow-2xl"
        >
          <AnimatedCounter from={0} to={stat.number} duration={2} />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{stat.suffix}</span>
        </motion.div>

        {/* Label with White Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.7 }}
          className="text-white text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] text-center drop-shadow-sm"
        >
          {stat.label}
        </motion.div>


      </div>
    </motion.div>
  ))}
</motion.div>




      </div>

      {/* Map Container */}
      <div className="relative bg-white shadow-xl p-2 sm:p-3 md:p-4 border border-[#D4C1A3] max-w-7xl mx-auto">
        {/* Map Image with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
           style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E5543]/20 to-[#1A7A62]/20 z-0"></div>
          <img
            src={mapImage}
            alt="World Map"
            className="w-full h-auto shadow-inner border border-[#D4C1A3]"
          />

          {/* Animated Location Markers - FIXED HOVER POSITION */}
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center cursor-pointer"
              style={{
                top: loc.top,
                left: loc.left,
                transform: "translate(-50%, -50%)",
              }}
              onHoverStart={() => setHoveredLocation(loc.name)}
              onHoverEnd={() => setHoveredLocation(null)}
              onClick={() => setSelectedLocation(selectedLocation?.name === loc.name ? null : loc)}
            >
              {/* Marker Container with Stable Positioning */}
              <div className="relative flex flex-col items-center">
                {/* Pulsing Animation Container */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="relative"
                >
                  {/* Main Marker Icon */}
                  <motion.div
                    whileHover={{ scale: 1.3, y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaMapMarkerAlt
                      size={window.innerWidth < 640 ? 20 : window.innerWidth < 768 ? 24 : 28}
                      className={`drop-shadow-lg transition-colors duration-200 ${selectedLocation?.name === loc.name
                        ? 'text-[#D35400]'
                        : hoveredLocation === loc.name
                          ? 'text-[#E67E22]'
                          : 'text-[#1A7A62]'
                        }`}
                    />
                  </motion.div>

                  {/* Pulsing Ring Effect */}
                  <motion.div
                    animate={{ scale: [0, 1.4, 0], opacity: [0.5, 0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="absolute inset-0 bg-[#1A7A62] rounded-full -z-10"
                  />
                </motion.div>

                {/* Location Name Label */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -2 }}
                  className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0E5543] to-[#1A7A62] px-1 sm:px-2 py-0.5 mt-1 shadow-lg border border-white/20 transition-all duration-200"
                >
                  {loc.name}
                </motion.span>

                {/* Hover Tooltip */}
                <AnimatePresence>
                  {hoveredLocation === loc.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      className="absolute top-full mt-2 bg-[#0E5543] text-white text-xs px-2 py-1 whitespace-nowrap z-10 border border-white/20"
                    >
                      Click for details
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-[#0E5543]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Location Details Card */}
        <AnimatePresence>
  {selectedLocation && (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className="
        absolute 
        top-2 left-1/2 -translate-x-1/2 w-[90%] 
        sm:top-4 sm:right-4 sm:left-auto sm:translate-x-0 
        sm:w-auto sm:max-w-sm
        bg-white/95 backdrop-blur-sm 
        shadow-2xl border border-[#D4C1A3] 
        p-4 sm:p-6 
        z-10
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <FaMapMarkerAlt className="text-[#1A7A62] text-lg sm:text-xl" />
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#0E5543]">
          {selectedLocation.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#1A7A62] mb-2 sm:mb-3 text-xs sm:text-sm md:text-base leading-relaxed">
        {selectedLocation.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs sm:text-sm">
        <span className="bg-[#F2E1C5] text-[#0E5543] px-2 py-1 font-medium border border-[#0E5543]/20">
          {selectedLocation.clients}
        </span>
        <button className="text-[#1A7A62] hover:text-[#0E5543] font-medium text-xs sm:text-sm">
          View Case Studies →
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>


      </div>

      {/* Premium CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-white p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-[#D4AF37]/30"
      >
        {/* Elegant Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-flex mb-3 sm:mb-4 md:mb-5 items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0E5543] to-[#1A7A62] shadow-lg border border-white/20"
        >
          <FaHandshake className="text-lg sm:text-xl md:text-2xl text-[#F2E1C5]" />
        </motion.div>

        {/* Premium Headline Section */}
        {/* Luxury Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-3 sm:mb-4 md:mb-6 space-y-3 sm:space-y-4 md:space-y-6"
        >
          {/* Premium Serif Font */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0E5543] leading-tight"
         style={{ fontFamily: 'Arial, sans-serif', fontWeight: '200', letterSpacing: '0.05em' }}
          >
          Elevate Every Space with<br />
            <span className="italic font-light text-[#1A7A62]">Luxury Stone</span>
          </h3>

          {/* Elegant Description */}
          <p className="text-[#1A7A62] text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}>
          Explore our premium marble and granite collections, meticulously crafted to bring unmatched elegance and sophistication to your projects. 
          </p>
        </motion.div>


        <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap" style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg border border-[#0E5543]"
          >
            Request Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}

            className="px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 bg-white text-black text-sm sm:text-base md:text-lg"
             style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}
          >
            View Catalog
          </motion.button>
        </div>

        <div className="mt-4 sm:mt-5 md:mt-6 text-[#1A7A62] text-xs sm:text-sm flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap"
         style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}>

          <span className="flex items-center gap-2"><FaAward className="text-[#D4AF37]" /> Premium Quality Guarantee</span>
          <span className="flex items-center gap-2"><FaGlobe className="text-[#1A7A62]" /> Global Shipping</span>
          <span className="flex items-center gap-2"><FaGem className="text-[#0E5543]" /> Custom Solutions</span>
        </div>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#F2E1C5] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D4AF37] rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
}