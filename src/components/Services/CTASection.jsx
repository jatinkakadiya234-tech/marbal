import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <motion.div
      className="mt-12 max-w-7xl mx-auto px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
                style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}

    >
      <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-xl p-6 text-[#F2E1C5] border border-[#F2E1C5]/15 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="font-['Cormorant_Garamond'] font-bold text-xl mb-1">
              Ready to Transform Your Space?
            </h3>
            <p className="text-[#F2E1C5]/80 font-['Source_Serif_Pro'] text-sm">
              Premium stone solutions for your project.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#F2E1C5] text-[#1e9c7d] rounded-full font-['Inter'] font-medium text-sm shadow-sm whitespace-nowrap min-w-fit"
          >
            Get Consultation
            <FaArrowRight className="text-xs" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}