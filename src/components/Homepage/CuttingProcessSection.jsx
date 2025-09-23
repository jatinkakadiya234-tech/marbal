import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const MarbleQuarryHome = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const imageGallery = [
    {
      src: "/marbelProcess.jpeg",
      title: "Precision Cutting",
      description: "Diamond wire technology"
    },
    {
      src: "/qualityControl.jpeg",
      title: "Quality Control",
      description: "Laser measurement"
    },
    {
      src: "/polishing.jpeg",
      title: "Polishing",
      description: "Mirror finish"
    },
    {
      src: "/readyToDeliver.jpeg",
      title: "Finished Products",
      description: "Ready for delivery"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  return (
    <div className="bg-[#F2E1C5] font-['Inter'] overflow-hidden">
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');
    `}</style>

      {/* Hero Section */}
      <section ref={sectionRef} className="relative flex items-center py-12 lg:py-0">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543]/5 via-[#F2E1C5] to-[#0E5543]/10"></div>

        {/* Decorative Elements */}
        <div className="absolute top-10% left-5% w-72 h-72 bg-[#0E5543]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20% right-10% w-96 h-96 bg-[#0E5543]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative py-20 z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Left Content */}
            <motion.div className="space-y-10 lg:space-y-12" variants={itemVariants}>
              {/* Main Heading */}
              <motion.div className="space-y-6 lg:space-y-8" variants={itemVariants}>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0E5543] leading-tight">
                  Where <span className="font-['Cormorant+Garamond'] italic font-light">Artistry</span> Meets<br />
                  <span className="font-['Cormorant+Garamond'] italic font-light">Precision</span> Engineering
                </h1>
                <p className="text-xl lg:text-2xl text-[#0E5543]/80 leading-relaxed font-light max-w-2xl">
                  Experience the perfect blend of <span className="font-['Cormorant+Garamond'] italic">traditional craftsmanship</span>
                  and <span className="font-['Cormorant+Garamond'] italic">cutting-edge technology</span> in marble processing.
                  Our state-of-the-art machinery ensures <span className="font-semibold">unparalleled quality</span>.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-5 lg:gap-6" variants={itemVariants}>
                <motion.button
                  className="group bg-[#0E5543] text-white hover:bg-[#0E5543]/90 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Discover Our Process
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  className="group border-2 border-[#0E5543] text-[#1a7f66] hover:bg-[#0E5543] hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Gallery
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </motion.div>

              {/* Unique Image Gallery Layout */}
              <motion.div
                className="relative pt-8 lg:pt-12"
                variants={containerVariants}
              >
                {/* Background Pattern */}
                <div className="absolute -inset-4 bg-[#0E5543]/5 rounded-3xl -z-10"></div>

                <div className="grid grid-cols-8 grid-rows-5c gap-3 lg:gap-4 h-64 lg:h-80">
                  {/* Large Main Image */}
                  <motion.div
                    className="col-span-4 row-span-4 relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <img
                      src={imageGallery[0].src}
                      alt={imageGallery[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-black/70 backdrop-blur-md rounded-xl p-3 border border-white/20">
                        <h4 className="text-white font-bold text-sm">{imageGallery[0].title}</h4>
                        <p className="text-white/80 text-xs">{imageGallery[0].description}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Top Right Small Image */}
                  <motion.div
                    className="col-span-4 row-span-2 relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <img
                      src={imageGallery[1].src}
                      alt={imageGallery[1].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        {imageGallery[1].title}
                      </span>
                    </div>
                  </motion.div>

                  {/* Bottom Right Medium Image */}
                  <motion.div
                    className="col-span-2 row-span-2 relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <img
                      src={imageGallery[2].src}
                      alt={imageGallery[2].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* Bottom Right Small Image */}
                  <motion.div
                    className="col-span-2 row-span-2 relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <img
                      src={imageGallery[3].src}
                      alt={imageGallery[3].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* Floating Decorative Element */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-6 h-6 bg-[#0E5543] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Video Section */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-3xl border-4 border-white/90 bg-white/30 backdrop-blur-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Video Container */}
                <div className="relative aspect-[5/6] lg:aspect-video">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1581094794329-cd525614faec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  >
                    <source src="/marbel_cutting_process.mp4" type="video/mp4" />
                  </video>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                  {/* Play/Pause Button */}
                  {/* <motion.button
                  onClick={toggleVideo}
                  className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md hover:bg-white rounded-full p-4 transition-all duration-300 border-2 border-white/40 shadow-2xl"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-[#0E5543]" />
                  ) : (
                    <Play className="w-6 h-6 text-[#0E5543]" />
                  )}
                </motion.button> */}

                  {/* Video Badge */}
                  <div className="absolute top-8 left-8">
                    <span className="bg-[#0E5543] text-white px-5 py-3 rounded-full text-sm font-semibold shadow-2xl border-2 border-white/20">
                      🎬 Live Process Showcase
                    </span>
                  </div>

                  {/* Video Title */}
                  <div className="absolute bottom-8 left-8 max-w-md">
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3 drop-shadow-2xl">Advanced CNC Cutting</h3>
                    <p className="text-white/90 text-lg drop-shadow-lg">Witness our precision machinery in action</p>
                  </div>

                  {/* Animated Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-white/30 pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarbleQuarryHome;