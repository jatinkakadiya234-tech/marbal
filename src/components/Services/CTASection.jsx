import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.div
      className="mt-20 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="bg-[#0E5543] rounded-2xl p-8 md:p-12 text-[#F2E1C5] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#F2E1C5]/10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F2E1C5]/10 rounded-full"></div>

        <h2 className="text-2xl md:text-3xl font-serif mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90 font-sans">
          Contact us for a personalized consultation and discover how our
          premium stone solutions can elevate your project.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#F2E1C5",
            color: "#0E5543",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-[#F2E1C5] text-[#0E5543] font-medium shadow-md font-sans"
        >
          Schedule Consultation
        </motion.button>
      </div>
    </motion.div>
  );
}
