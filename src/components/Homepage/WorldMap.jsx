import React, { useState } from "react";
import { FaMapMarkerAlt, FaGlobeAmericas, FaHandshake, FaUsers, FaRocket, FaAward } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import mapImage from "../../assets/map_img.png";
import HeaderContent from "../Helper/HeaderContent";

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
];

export default function WorldMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div className="relative w-full max-w-full  p-8  bg-gradient-to-br from-[#0E5543] via-[#0E5543] to-[#0E5543] shadow-2xl border border-[#0E5543]">
      {/* Enhanced Header Section */}
      <div className="text-center mb-12">
        <HeaderContent
          tagline=""
          title=" Global Marble Excellence"
          subtitle="Serving premium clients across 7 countries with 500+ luxury marble installations.
          From royal palaces to corporate headquarters, we bring world-class marble excellence to your doorstep."
          theme="dark"
        />

        {/* Enhanced Stats Grid */}
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mt-16 sm:mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto"
>
  {[
    { 
      icon: FaGlobeAmericas, 
      number: "7+", 
      label: "Countries", 
      gradient: "from-emerald-50 to-green-50",
      accent: "#059669",
      shape: "circle",
      darkGradient: "from-emerald-900 to-green-800"
    },
    { 
      icon: FaAward, 
      number: "500+", 
      label: "Projects", 
      gradient: "from-white to-emerald-100",
      accent: "#047857",
      shape: "hexagon",
      darkGradient: "from-green-900 to-emerald-800"
    },
    { 
      icon: FaUsers, 
      number: "200+", 
      label: "Experts", 
      gradient: "from-green-50 to-white",
      accent: "#065f46",
      shape: "triangle",
      darkGradient: "from-emerald-800 to-green-900"
    },
    { 
      icon: FaRocket, 
      number: "15+", 
      label: "Years", 
      gradient: "from-white to-green-50",
      accent: "#034732",
      shape: "diamond",
      darkGradient: "from-green-800 to-emerald-900"
    }
  ].map((stat, index) => (
    <motion.div
      key={index}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        rotate: index % 2 === 0 ? 1 : -1
      }}
      whileTap={{ scale: 0.98 }}
      className="relative group cursor-pointer"
    >
      {/* Green Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-300/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      
      {/* Main Card - White & Green Theme */}
      <div className={`relative bg-gradient-to-br ${stat.gradient} rounded-3xl p-8 shadow-lg border border-green-100/50 backdrop-blur-xl overflow-hidden hover:shadow-2xl hover:border-[#0E5543] transition-all duration-300`}>
        
        {/* Animated Green Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-green-400/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

        {/* Green Accent Top Bar */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#0E5543] to-[#0E5543] rounded-full"></div>

        {/* Shape Container with Green Border */}
        <motion.div 
          className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center border-2 border-green-200/50 bg-white/80 backdrop-blur-sm"
          whileHover={{ 
            rotate: 360,
            scale: 1.1,
            borderColor: "#059669"
          }}
          transition={{ duration: 0.6 }}
        >
          {/* Shape Background */}
          <div className={`absolute inset-0 bg-green-50/50 ${
            stat.shape === 'circle' ? 'rounded-full' :
            stat.shape === 'hexagon' ? 'clip-hexagon' :
            stat.shape === 'triangle' ? 'clip-triangle' :
            'clip-diamond'
          }`}></div>
          
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="relative z-10"
          >
            <stat.icon className="text-2xl" style={{ color: stat.accent }} />
          </motion.div>
        </motion.div>

        {/* Number - Green Text */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="text-5xl font-black text-green-900 mb-2 text-center font-['Inter'] tracking-tight"
        >
          {stat.number}
        </motion.div>

        {/* Label - Dark Green Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.7 }}
          className="text-green-700 text-sm font-semibold uppercase tracking-[0.15em] text-center font-['Inter']"
        >
          {stat.label}
        </motion.div>

        {/* Hover Effect - Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-300/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl"></div>

        {/* Green Corner Decorations */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#0E5543] rounded-tl-lg"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#0E5543] rounded-tr-lg"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#0E5543] rounded-bl-lg"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#0E5543] rounded-br-lg"></div>

        {/* Floating Green Elements */}
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5
          }}
          className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-300 rounded-full"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5 + 1
          }}
          className="absolute -top-1 -left-1 w-3 h-3 bg-emerald-400 rounded-full"
        ></motion.div>
      </div>

      {/* Subtle Green Shadow */}
      <div className="absolute inset-0 bg-green-200/20 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </motion.div>
  ))}
</motion.div>

      </div>

      {/* Map Container */}
      <div className="relative bg-white rounded-2xl shadow-xl p-4 border border-[#D4C1A3] max-w-7xl mx-auto">
        {/* Map Image with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E5543]/20 to-[#1A7A62]/20 rounded-2xl z-0"></div>
          <img
            src={mapImage}
            alt="World Map"
            className="w-full h-auto rounded-lg shadow-inner border border-[#D4C1A3]"
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
                      size={28}
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
                  className="text-sm font-bold text-white bg-gradient-to-r from-[#0E5543] to-[#1A7A62] px-2 py-1 rounded-full mt-1 shadow-lg border border-white/20 transition-all duration-200"
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
                      className="absolute top-full mt-2 bg-[#0E5543] text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10"
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
        rounded-xl shadow-2xl border border-[#D4C1A3] 
        p-4 sm:p-6 
        z-10
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <FaMapMarkerAlt className="text-[#1A7A62] text-lg sm:text-xl" />
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0E5543]">
          {selectedLocation.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#1A7A62] mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">
        {selectedLocation.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs sm:text-sm">
        <span className="bg-[#F2E1C5] text-[#0E5543] px-2 py-1 rounded-full font-medium">
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
        className="text-center max-w-7xl  mx-auto mt-12 bg-white rounded-xl p-10 shadow-2xl border border-[#D4AF37]/30"
      >
        {/* Elegant Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-flex mb-5 items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0E5543] to-[#1A7A62] rounded-full shadow-lg"
        >
          <FaHandshake className="text-2xl text-[#F2E1C5]" />
        </motion.div>

        {/* Premium Headline Section */}
        {/* Luxury Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-3 space-y-6"
        >
          {/* Premium Serif Font */}
          <h3 className="text-5xl font-normal text-[#0E5543] font-['Cormorant_Garamond'] leading-tight">
            Elevate Your Space with<br />
            <span className="italic font-light text-[#1A7A62]">Exquisite Marble</span>
          </h3>

          {/* Elegant Description */}
          <p className="text-[#1A7A62] text-lg max-w-2xl mx-auto leading-relaxed font-['Source_Serif_Pro'] font-light italic">
            Chosen by 500+ luxury projects globally. Where artistry meets architecture
            in perfect harmony.
          </p>
        </motion.div>


        <div className="flex gap-6 justify-center  flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Request Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent border-2 border-[#0E5543] text-[#189173] font-semibold rounded-xl hover:bg-[#0E5543]/10 transition-all duration-300 text-lg"
          >
            View Catalog
          </motion.button>
        </div>

        <div className="mt-6 text-[#1A7A62] text-sm flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-2">⭐ Premium Quality Guarantee</span>
          <span className="flex items-center gap-2">🌍 Global Shipping</span>
          <span className="flex items-center gap-2">💎 Custom Solutions</span>
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