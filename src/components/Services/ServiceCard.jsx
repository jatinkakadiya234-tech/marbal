import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const staticVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export default function ServiceCard({ service, setSelectedService, isMobile }) {
  return (
    <motion.div
      variants={isMobile ? staticVariants : itemVariants}
      className="relative overflow-hidden group bg-white border border-[#0E5543]/10 shadow-lg cursor-pointer"
      whileHover={isMobile ? undefined : { scale: 1.02 }}
      whileTap={isMobile ? undefined : { scale: 0.98 }}
      onClick={() => setSelectedService(service)}
        style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={isMobile ? undefined : { scale: 1.05 }}
          transition={isMobile ? undefined : { duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-[#0E5543] text-[#F2E1C5] text-xs font-medium font-sans">
          {service.category}
        </div>
        <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#F2E1C5] flex items-center justify-center text-lg sm:text-xl shadow-md">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <h3 className="text-lg sm:text-xl font-serif text-[#0E5543] mb-2 sm:mb-3">
          {service.title}
        </h3>
        <p className="text-[#0E5543]/80 text-xs sm:text-sm mb-3 sm:mb-4 font-sans leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.features.slice(0, 2).map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-xs sm:text-sm text-[#0E5543]/80 font-sans"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-[#0E5543] mr-1 sm:mr-2"
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
            </li>
          ))}
          {service.features.length > 2 && (
            <li className="text-xs sm:text-sm text-[#0E5543]/60 font-sans">
              +{service.features.length - 2} more features
            </li>
          )}
        </ul>
        <motion.button
          whileHover={isMobile ? undefined : {
            scale: 1.05,
            backgroundColor: "#0E5543",
            color: "#F2E1C5",
          }}
          whileTap={isMobile ? undefined : { scale: 0.95 }}
          className="w-full mt-3 sm:mt-4 md:mt-5 py-2 sm:py-2.5 bg-[#0E5543]/10 text-[#1b9778] text-xs sm:text-sm font-medium border border-[#0E5543]/20 transition-colors font-sans"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}
