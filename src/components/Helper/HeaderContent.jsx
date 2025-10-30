import React from 'react';
import {  motion } from 'framer-motion';

const HeaderContent = ({
  title = "Marble Exporters in India",
  subtitle = "Turning the finest natural stones into masterpieces of elegance, precision, and lasting sophistication for any space.",
  tagline = "",
  theme = "light",
   // Added theme prop with default value
}) => {
  return (
    <motion.div
      className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative px-3 sm:px-4"
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
        <span className={`text-sm sm:text-base font-medium tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase ${theme === "dark" ? "text-[#F2E1C5]" : "text-[#0E5543]"
          }`}>
          {tagline}
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.p
        className="font-sans-serif font-bold mb-4 sm:mb-5 md:mb-6 leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ fontFamily: 'Arial, sans-serif', fontWeight: '200', letterSpacing: '0.1em' }}
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
        whileInView={{ width: 60 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8"
        style={{ width: 'clamp(60px, 15vw, 100px)' }}
      />

      {/* Subtitle */}
      <motion.p
        className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light ${theme === "dark" ? "text-[#F8EBD5]" : "text-[#1A6B52]"
          }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default HeaderContent;