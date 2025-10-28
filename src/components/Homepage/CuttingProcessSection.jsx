import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

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
      description: "Diamond wire technology",
    },
    {
      src: "/qualityControl.jpeg",
      title: "Quality Control",
      description: "Laser measurement",
    },
    {
      src: "/polishing.jpeg",
      title: "Polishing",
      description: "Mirror finish",
    },
    {
      src: "/readyToDeliver.jpeg",
      title: "Finished Products",
      description: "Ready for delivery",
    },
  ];

  const sections = [
    {
      title: "Our Curated Selections",
      content:
        "Discover our signature stone collections that redefine elegance and style.",
    },
    {
      title: "Surata Green",
      content:
        "Choose the shade of distinction, crafted for those who value rarity.",
    },
    {
      title: "Forest Green",
      content:
        "Enrich your interiors with the timeless charm of nature’s finest creation.",
    },
    {
      title: "Spider Green",
      content:
        "Let the calm of green breathe life into every corner of your space.",
    },
    {
      title: "Advanced Production Facility",
      content: "Engineering Excellence in Every Stone.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-white font-['Inter'] overflow-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap");
      `}</style>

      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative flex items-center py-12  lg:py-0 min-h-screen "
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543]/5 via-white to-[#0E5543]/10"></div>

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
            {/* Left Content - Enhanced */}
            <motion.div
              className="space-y-12 lg:space-y-10"
              variants={itemVariants}
            >
              {/* Main Heading */}
              <motion.div
                className="space-y-8 lg:space-y-8"
                variants={itemVariants}
              >
                <h1
                  className="text-2xl lg:text-3xl xl:text-4xl font-norma text-[#0E5543] leading-tight "
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "200",
                    letterSpacing: "0.1em",
                  }}
                >
                  Stone{" "}
                  <span className="font-['Cormorant_Garamond'] italic font-light text-[#1a7f66] drop-shadow-sm">
                    Solutions
                  </span>{" "}
                  Meets by
                  <br />
                  <span className="font-['Cormorant_Garamond'] italic font-light text-[#1a7f66] drop-shadow-sm">
                    Rishabh Green
                  </span>{" "}
                  Marbles
                </h1>
                <p
                  className="text-xl lg:text-2xl text-[#0E5543]/90 leading-relaxed font-light max-w-2xl font-['Text-book']"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "200",
                    letterSpacing: "0.1em",
                  }}
                >
                  Bringing spaces to life,{" "}
                  <span className="font-['Cormorant_Garamond'] italic font-medium text-[#0E5543]">
                    we deliver versatile stone solutions for
                    interiors,exteriors,
                  </span>
                  and{" "}
                  <span className="font-['Cormorant_Garamond'] italic font-medium text-[#0E5543]">
                    outdoor spaces,
                  </span>{" "}
                  combining precision,{" "}
                  <span className="font-semibold text-[#1a7f66]">vation,</span>{" "}
                  and timeless craftsmanship in every project.
                </p>
              </motion.div>

              {/* Enhanced Stats Section */}
              <motion.div
                className="space-y-6 mb-10"
                variants={itemVariants}
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "200",
                  letterSpacing: "0.1em",
                }}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl">
                  <div className="columns-1 md:columns-4 lg:columns-5 gap-6 max-w-6xl mx-auto space-y-6">
                    {sections.map((item, index) => (
                      <div
                        key={index}
                        className="break-inside-avoid space-y-2 p-3 bg-[#F2E1C5]/40 rounded-xl backdrop-blur-sm border border-[#F2E1C5]/60 h-50 overflow-hidden w-30  "
                      >
                        <h4 className="text-xs font-semibold text-[#0E5543] uppercase tracking-wide font-['Inter']">
                          {item.title}
                        </h4>
                        <p style={{}} className="text-xs text-[#0E5543]/70 leading-snug font-['Text-book']">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Description */}
                <div className="space-y-4 max-w-2xl">
                  <p
                    className="text-lg text-[#0E5543]/90 leading-relaxed font-['Text-book']"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "200",
                      letterSpacing: "0.1em",
                    }}
                  >
                    At Rishabh Green Marbles, our modern processing unit
                    features the latest technology blended with Italian
                    machinery, which produces extremely high-quality stones.
                    From block cutting and polishing to automated resining and
                    finishing, we have optimized our entire manufacturing
                    process for the best efficiency, accuracy, and quality. This
                    combination of technology with expert craftsmanship makes
                    certain that every stone produced is suitable for the
                    international market, offering perfect surfaces and strength
                    for any interior or exterior or outdoor use.
                  </p>
                </div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-5 lg:gap-6 mb-7"
                variants={itemVariants}
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "200",
                  letterSpacing: "0.1em",
                }}
              >
                <motion.button
                  className="group relative bg-gradient-to-r from-[#0E5543] to-[#1a7f66] text-white hover:from-[#1a7f66] hover:to-[#0E5543] px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl overflow-hidden font-['Inter']"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Discover Our Process</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.button>

                <motion.button
                  className="group relative border-2 border-[#0E5543] text-[#0E5543] hover:bg-[#0E5543] hover:text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 backdrop-blur-sm overflow-hidden font-['Inter']"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">View Gallery</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-[#0E5543] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              </motion.div>

              {/* Trust Badges */}
            </motion.div>

            {/* Right Section - Combined Video and Original Image Grid */}
            <motion.div className="space-y-8 " variants={itemVariants}>
              {/* Video Section */}
              <motion.div
                className="relative md:mb-18 overflow-hidden shadow-3xl border-4 border-white/90 bg-white/30 backdrop-blur-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-video">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1581094794329-cd525614faec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  >
                    <source
                      src="/marbel_cutting_process.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                  <div className="absolute top-6 left-6">
                    <span className="bg-[#0E5543] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-2xl border-2 border-white/20">
                      🎬 Live Process Showcase
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 max-w-md">
                    <h3 className="text-white text-xl lg:text-2xl font-bold mb-2 drop-shadow-2xl">
                      Advanced CNC Cutting
                    </h3>
                    <p className="text-white/90 text-base drop-shadow-lg">
                      Witness our precision machinery in action
                    </p>
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              {/* Original Unique Image Gallery Layout */}
              <motion.div className="relative" variants={containerVariants}>
                {/* Background Pattern */}
                <div className="absolute -inset-4 bg-[#0E5543]/5 -z-10"></div>

                <div className="grid grid-cols-8 grid-rows-5 gap-3 lg:gap-4 h-64 lg:h-72">
                  {/* Large Main Image */}
                  <motion.div
                    className="col-span-4 row-span-4 relative group cursor-pointer  overflow-hidden shadow-2xl"
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
                      <div className="bg-black/70 backdrop-blur-md p-3 border border-white/20">
                        <h4 className="text-white font-bold text-sm">
                          {imageGallery[0].title}
                        </h4>
                        <p className="text-white/80 text-xs">
                          {imageGallery[0].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Top Right Small Image */}
                  <motion.div
                    className="col-span-4 row-span-2 relative group cursor-pointer overflow-hidden shadow-lg"
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
                      <span className="bg-black/60 text-white text-xs px-2 py-1 backdrop-blur-sm">
                        {imageGallery[1].title}
                      </span>
                    </div>
                  </motion.div>

                  {/* Bottom Right Medium Image */}
                  <motion.div
                    className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden shadow-lg"
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
                    className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden shadow-lg"
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
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              {/* Additional Info Card */}
              {/* <motion.div 
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-[#0E5543]" />
                  <h4 className="font-semibold text-[#0E5543]">Why Choose Us?</h4>
                </div>
                <p className="text-[#0E5543]/80 text-sm leading-relaxed">
                  We combine traditional marble craftsmanship with cutting-edge technology to deliver 
                  products that exceed expectations in quality, precision, and beauty.
                </p>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarbleQuarryHome;
