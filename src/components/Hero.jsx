// components/Hero.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiPlay, FiPause, FiVolume2, FiVolumeX } from "react-icons/fi";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);

  useEffect(() => {
    // Hide scroll indicator after scrolling
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicatorVisible(false);
      } else {
        setScrollIndicatorVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const wordVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(217, 119, 6, 0.3)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const secondaryButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.4,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 0.8
      }
    },
    bounce: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Split text into words for animation
  const headlineWords = "Crafting Exceptional Spaces".split(" ");
  const subheadingWords = "Discover timeless designs in ceramics, furniture, and kitchen interiors, curated for an aesthetic, premium lifestyle.".split(" ");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBzdHJva2UtZGFzaGFycmF5OjAuNSw0Ii8+PC9zdmc+')] opacity-20" />

      {/* Video Controls */}
      {/* <div className="absolute bottom-6 right-6 z-20 flex space-x-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="p-2 bg-gray-900/50 backdrop-blur-sm text-amber-400 rounded-full border border-amber-500/30"
        >
          {isPlaying ? <FiPause size={18} /> : <FiPlay size={18} />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="p-2 bg-gray-900/50 backdrop-blur-sm text-amber-400 rounded-full border border-amber-500/30"
        >
          {isMuted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
        </motion.button>
      </div> */}

      {/* Premium Content */}
      <motion.div 
        className="relative z-10 text-center px-6 md:px-12 lg:px-24 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight tracking-tight"
          variants={containerVariants}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              custom={i}
              className={`inline-block mr-4 ${i === 1 ? "italic font-light" : ""}`}
              style={{
                background: i === 1 
                  ? "linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)"
                  : "linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: i === 1 ? "0 4px 8px rgba(212, 175, 55, 0.3)" : "0 4px 8px rgba(255, 255, 255, 0.2)"
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wide"
          variants={itemVariants}
        >
          {subheadingWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              custom={i + headlineWords.length}
              className="inline-block mr-2 opacity-90"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          variants={containerVariants}
        >
          <motion.button 
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-semibold text-lg shadow-xl flex items-center justify-center mx-auto sm:mx-0"
            style={{
              boxShadow: "0 10px 30px rgba(217, 119, 6, 0.4)"
            }}
          >
            Explore Collection
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
          
          <motion.button 
            variants={secondaryButtonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="px-10 py-4 rounded-full border-2 border-amber-500/30 text-amber-400 text-lg font-medium backdrop-blur-sm bg-gray-900/20 hover:bg-amber-500/10 transition-all duration-300 flex items-center justify-center mx-auto sm:mx-0"
          >
            Learn More
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate={scrollIndicatorVisible ? ["visible", "bounce"] : "hidden"}
      >
        <div className="flex flex-col items-center">
          <span className="text-amber-400/70 text-sm mb-2 tracking-widest font-light">SCROLL</span>
          <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-amber-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Custom font import - Add this to your global CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        h1 {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default Hero;