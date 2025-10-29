// components/Hero.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicatorVisible(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Animation Variants ===
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const wordVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 2, duration: 0.8 },
    },
    bounce: {
      y: [0, 10, 0],
      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
    },
  };

  // === Text Sections ===
  const headlineWords = "Rishabh Green Marbles ".split(" ");
  const companyWords = "Premium, from core to craft ".split(" ");
  const subheadingWords =
    "Redefining luxury since 1990 with the finest marbles, sandstones, and granites. Gleaned from prime quarries, sculpted with precision, and polished to perfection. Each stone is carved to endure, elevate your spaces, and inspire timeless elegance to worldwide standards. ".split(
      " "
    );

  return (
    <>
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2023/01/hero-01.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.webm" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20 bg-[url(
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBzdHJva2UtZGFzaGFycmF5OjAuNSw0Ii8+PC9zdmc+'
          )]"
        ></div>

        {/* === Content === */}
        <motion.div
          className="relative z-10 text-center px-3 sm:px-4 md:px-8 lg:px-16 xl:px-24 max-w-6xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 md:mb-6 leading-tight font-light text-white uppercase"
            variants={containerVariants}
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "200",
              letterSpacing: "0.1em",
            }}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                custom={i}
                className="inline-block mr-1.5 sm:mr-2 md:mr-3"
                style={{
                  letterSpacing: "0.1em",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Company Line */}
          <motion.div className="mb-3 sm:mb-4 md:mb-6">
            {companyWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                custom={i + headlineWords.length}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mr-1.5 sm:mr-2 text-gray-300 uppercase"
                style={{
                  letterSpacing: "0.2em",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Separator */}
          <motion.div
            className="w-12 sm:w-16 md:w-24 h-0.5 bg-gradient-to-r from-white/80 to-transparent mx-auto my-3 sm:my-4 md:my-6"
            variants={itemVariants}
          />

          {/* Subheading */}
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-gray-200 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-3 sm:px-2 md:px-0"
            variants={itemVariants}
            style={{
              fontFamily: "Montserrat",
              fontWeight: "200",
              letterSpacing: "1px",
            }}
          >
            {subheadingWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                custom={i + headlineWords.length + companyWords.length}
                className={`inline-block mr-0.5 sm:mr-1 opacity-95 ${word === '1990' ? 'text-yellow-400 font-semibold' : ''}`}
                style={{ 
                  fontFamily: 'Montserrat', 
                  fontWeight: word === '1990' ? '600' : '200', 
                  letterSpacing: '1px'
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        {scrollIndicatorVisible && (
          <motion.div
            className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2"
            variants={scrollIndicatorVariants}
            initial="hidden"
            animate={["visible", "bounce"]}
          >
            <FiArrowDown className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Hero;
