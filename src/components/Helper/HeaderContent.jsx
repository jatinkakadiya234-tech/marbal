import React from 'react';
import { motion } from 'framer-motion';

const HeaderContent = ({
  title = "Rishab Green Marbles",
  subtitle = "Turning the finest natural stones into masterpieces of elegance, precision, and lasting sophistication for any space.",
  tagline = "",
  theme = "light" // Added theme prop with default value
}) => {
  return (
    <motion.div
      className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative px-4 sm:px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Tagline */}
      <motion.div
        className="mb-3 sm:mb-4 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className={`text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase ${theme === "dark" ? "text-[#F2E1C5]" : "text-[#0E5543]"
          }`}>
          {tagline}
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.p
        className="font-sans-serif font-bold mb-4 sm:mb-6 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em', lineHeight: '1.2' }}
      >
        {title.split(' ').map((word, index) => {
          const colorConfig = {
            0: { dark: "#F2E1C5", light: "#0E5543", italic: false }, // First word
            1: { dark: "#F8EBD5", light: "#1A6B52", italic: true },  // Second word  
            2: { dark: "#F2E1C5", light: "#0E5543", italic: false }  // Third word
          };

          const config = colorConfig[index] || {
            dark: "#F2E1C5", light: "#0E5543", italic: false
          };

          return (
            <span
              key={index}
              className={theme === "dark" ? `text-[${config.dark}]` : `text-[${config.light}]`}
              style={{ fontStyle: config.italic ? 'italic' : 'normal' }}
            >
              {word}
              {index < title.split(' ').length - 1 && ' '}
            </span>
          );
        })}
      </motion.p>

      {/* Animated Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-4 sm:mb-6 md:mb-8"
      />

      {/* Subtitle */}
      <motion.p
        className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light ${theme === "dark" ? "text-[#F8EBD5]" : "text-[#1A6B52]"
          }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ fontFamily: 'Montserrat', fontWeight: '300', letterSpacing: '0.05em', lineHeight: '1.6' }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default HeaderContent;