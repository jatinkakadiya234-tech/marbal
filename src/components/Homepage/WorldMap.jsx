import React, { useState } from "react";
import { FaMapMarkerAlt, FaGlobeAmericas, FaHandshake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import mapImage from "../../assets/map_img.png";

const locations = [
  { 
    name: "India", 
    top: "55%", 
    left: "65%",
    description: "Our largest development center with 200+ experts",
    clients: "150+ clients"
  },
  { 
    name: "Canada", 
    top: "38%", 
    left: "20%",
    description: "North American headquarters serving 50+ enterprises",
    clients: "50+ clients"
  },
  { 
    name: "Germany", 
    top: "45%", 
    left: "50%",
    description: "European innovation hub with cutting-edge solutions",
    clients: "80+ clients"
  },
  { 
    name: "Australia", 
    top: "78%", 
    left: "78%",
    description: "APAC regional center driving digital transformation",
    clients: "45+ clients"
  },
  { 
    name: "London", 
    top: "40%", 
    left: "45%",
    description: "UK operations center with financial technology focus",
    clients: "60+ clients"
  },
  { 
    name: "Dubai", 
    top: "54.5%", 
    left: "57.5%",
    description: "Middle East hub connecting East and West markets",
    clients: "35+ clients"
  },
  { 
    name: "Russia", 
    top: "39%", 
    left: "66%",
    description: "Eastern European technology and research center",
    clients: "40+ clients"
  },
];

export default function WorldMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <div className="relative w-full max-w-6xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-[#F2E1C5] to-[#E8D4B5] shadow-2xl my-12 border border-[#D4C1A3]">
      {/* Enhanced Heading */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <FaGlobeAmericas className="text-4xl text-[#0E5543]" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent">
            Our Global Presence
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#0E5543] text-lg mt-3 max-w-3xl mx-auto leading-relaxed"
        >
          Serving clients across 7 countries with 500+ successful projects delivered. 
          From startups to Fortune 500 companies, we bring world-class solutions to your doorstep.
        </motion.p>
        
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-3 gap-6 mt-6 max-w-2xl mx-auto"
        >
          <div className="text-center p-4 bg-white/90 rounded-xl shadow-sm border border-[#D4C1A3]">
            <div className="text-2xl font-bold text-[#0E5543]">7+</div>
            <div className="text-sm text-[#1A7A62]">Countries</div>
          </div>
          <div className="text-center p-4 bg-white/90 rounded-xl shadow-sm border border-[#D4C1A3]">
            <div className="text-2xl font-bold text-[#1A7A62]">500+</div>
            <div className="text-sm text-[#1A7A62]">Projects</div>
          </div>
          <div className="text-center p-4 bg-white/90 rounded-xl shadow-sm border border-[#D4C1A3]">
            <div className="text-2xl font-bold text-[#0E5543]">50+</div>
            <div className="text-sm text-[#1A7A62]">Experts</div>
          </div>
        </motion.div>
      </div>

      {/* Map Container */}
      <div className="relative bg-white rounded-2xl shadow-xl p-4 border border-[#D4C1A3]">
        {/* Map Image with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
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
                      className={`drop-shadow-lg transition-colors duration-200 ${
                        selectedLocation?.name === loc.name 
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
              className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-[#D4C1A3] p-6 max-w-sm z-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-[#1A7A62] text-xl" />
                <h3 className="text-xl font-bold text-[#0E5543]">{selectedLocation.name}</h3>
              </div>
              <p className="text-[#1A7A62] mb-3">{selectedLocation.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="bg-[#F2E1C5] text-[#0E5543] px-2 py-1 rounded-full font-medium">
                  {selectedLocation.clients}
                </span>
                <button className="text-[#1A7A62] hover:text-[#0E5543] font-medium text-xs">
                  View Case Studies →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center mt-8 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white shadow-2xl"
      >
        <FaHandshake className="text-4xl mx-auto mb-4 opacity-90" />
        <h3 className="text-2xl font-bold mb-2">Ready to Go Global with Us?</h3>
        <p className="text-[#F2E1C5] mb-6 max-w-2xl mx-auto">
          Join 500+ successful businesses that trust us with their international expansion. 
          Let's build something amazing together!
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#F2E1C5] text-[#0E5543] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Call
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-[#F2E1C5] text-[#F2E1C5] font-semibold rounded-lg hover:bg-[#F2E1C5]/10 transition-all duration-300"
          >
            Download Brochure
          </motion.button>
        </div>
        
        <div className="mt-4 text-[#F2E1C5] text-sm">
          ✨ 24/7 Support Available • Free Consultation • No Commitment
        </div>
      </motion.div>
    </div>
  );
}