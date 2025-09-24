import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function ServiceCard({ service, setSelectedService }) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative rounded-xl overflow-hidden group bg-white border border-[#0E5543]/10 shadow-lg cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelectedService(service)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E5543] text-[#F2E1C5] text-xs font-medium font-sans">
          {service.category}
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F2E1C5] flex items-center justify-center text-xl shadow-md">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif text-[#0E5543] mb-3">
          {service.title}
        </h3>
        <p className="text-[#0E5543]/80 text-sm mb-4 font-sans">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.features.slice(0, 2).map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-[#0E5543]/80 font-sans"
            >
              <svg
                className="w-4 h-4 text-[#0E5543] mr-2"
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
            <li className="text-sm text-[#0E5543]/60 font-sans">
              +{service.features.length - 2} more features
            </li>
          )}
        </ul>
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#0E5543",
            color: "#F2E1C5",
          }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-5 py-2.5 rounded-lg bg-[#0E5543]/10 text-[#1b9778] text-sm font-medium border border-[#0E5543]/20 transition-colors font-sans"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}
