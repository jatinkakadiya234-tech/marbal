// components/Hero.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import CustomCursor from "../CustomCursor";

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

  // Animation variants
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

  // Text sections
  const headlineWords = "Hand Crafted luxury Designs".split(" ");
  const companyWords = "From Rishab Green Marbles".split(" ");
  const subheadingWords =
    "We are Surrey's leading supplier of marble, granite, limestone and quartz worktops, flooring and bathroom interiors for your home. Our craftsman will transform your interior to a room that you'll love and feel proud of and which will impress your family and friends.".split(
      " "
    );

  return (
    <>
      <CustomCursor />

      <section className="relative h-screen flex  items-center justify-center overflow-hidden">
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
          {/* Fallback image if video cannot be played */}
          <img
            src="https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2023/01/hero-01.jpg"
            srcSet="
      https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2023/01/hero-01-300x167.jpg 300w,
      https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2023/01/hero-01-600x335.jpg 600w,
      https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2023/01/hero-01-768x429.jpg 768w,
      https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2023/01/hero-01-1024x571.jpg 1024w,
      https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2023/01/hero-01.jpg 1500w
    "
            sizes="100vw"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>


        {/* Gradient Overlay */}
   <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url(
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBzdHJva2UtZGFzaGFycmF5OjAuNSw0Ii8+PC9zdmc+'
        )]"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center  md:px-12 lg:px-24 max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* === Separator 1 (top line) === */}
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#F2E1C5]/60 to-transparent mb-6 mx-auto"
            variants={itemVariants}
          />

          {/* Headline + Company Name (single section) */}
          <motion.div variants={containerVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight tracking-wide"
              variants={containerVariants}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  custom={i}
                  className="inline-block mr-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: i === 1 || i === 2 ? 600 : 400,
                    fontStyle: i === 1 ? "italic" : "normal",
                    background:
                      i === 1
                        ? "linear-gradient(135deg, #F2E1C5 0%, #F2E1C5 100%)"
                        : "linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <div className="mb-6">
              {companyWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  custom={i + headlineWords.length}
                  className={`text-2xl md:text-4xl lg:text-5xl font-light mr-2 ${i === 1 || i === 2 ? "text-[#F2E1C5]" : "text-gray-300"
                    }`}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: i === 1 || i === 2 ? 500 : 300,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* === Separator 2 (middle line) === */}
          <motion.div
            className="w-32 h-0.5 bg-gradient-to-r from-[#F2E1C5]/80 to-transparent mx-auto my-6"
            variants={itemVariants}
          />

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed tracking-wide"
            variants={itemVariants}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {subheadingWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                custom={i + headlineWords.length + companyWords.length}
                className="inline-block mr-2 opacity-96"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* === Separator 3 (bottom line) === */}
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#F2E1C5]/60 to-transparent mx-auto mt-10"
            variants={itemVariants}
          />
        </motion.div>

        {/* Scroll indicator */}
        {scrollIndicatorVisible && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            variants={scrollIndicatorVariants}
            initial="hidden"
            animate={["visible", "bounce"]}
          >
            <FiArrowDown className="text-[#F2E1C5] w-6 h-6" />
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Hero;
