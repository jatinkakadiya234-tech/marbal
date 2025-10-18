import React from "react";
import { motion } from "framer-motion";

export default function ServiceModal({ selectedService, setSelectedService }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}
    >
      <motion.div
        className="absolute inset-0 bg-[#0E5543]/10 backdrop-blur-sm"
        onClick={() => setSelectedService(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>

      <motion.div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-white border border-[#0E5543]/20 shadow-2xl z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="aspect-video w-full relative">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#0E5543]/10 text-[#0E5543] text-sm font-medium mb-2 font-sans">
                {selectedService.category}
              </span>
              <h3 className="text-2xl font-serif text-[#0E5543]">
                {selectedService.title}
              </h3>
            </div>
            <div className="text-3xl">{selectedService.icon}</div>
          </div>

          <p className="text-[#0E5543]/80 mb-6 font-sans">
            {selectedService.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {selectedService.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-[#0E5543] font-sans"
              >
                <svg
                  className="w-5 h-5 text-[#0E5543] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {feature}
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#0E5543",
                color: "#F2E1C5",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-3 rounded-lg bg-[#0E5543] text-[#F2E1C5] font-medium font-sans"
            >
              Request Quote
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "transparent",
                borderColor: "#0E5543",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 py-3 rounded-lg bg-transparent text-[#0E5543] font-medium border border-[#0E5543] font-sans"
              onClick={() => setSelectedService(null)}
            >
              Close
            </motion.button>
          </div>
        </div>

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#0E5543",
            color: "#F2E1C5",
          }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#0E5543] border border-[#0E5543]/20 hover:bg-[#0E5543] hover:text-white transition-colors shadow-md"
          onClick={() => setSelectedService(null)}
        >
          ✕
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
