import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FiArrowRight, FiStar, FiAward, FiHeart } from "react-icons/fi";

const collections = [
  {
    title: "Luxury Living Room",
    description:
      "Elegant furniture curated for modern living spaces with premium materials and exquisite craftsmanship.",
    image: "/livingrooom.jpg",
    items: "24 Products",
    rating: "4.9",
    featured: true,
  },
  {
    title: "Designer Kitchen",
    description:
      "State-of-the-art kitchens with aesthetic perfection and functional excellence for culinary enthusiasts.",
    image:
"/kitchen2.jpg",    items: "18 Products",
    rating: "4.8",
    featured: false,
  },
  {
    title: "Cozy Bedroom",
    description:
      "Timeless designs for ultimate comfort and style, creating serene personal sanctuaries.",
    image:
"/bedroom.jpg",    items: "22 Products",
    rating: "4.7",
    featured: true,
  },
];

const FeaturedCollections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#D97706",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10% w-80 h-80 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10% w-80 h-80 bg-rose-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
            <span className="text-sm font-semibold tracking-widest uppercase text-amber-400">
              Curated Selections
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Featured <span className="italic font-light">Collections</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our meticulously curated collections that redefine luxury
            living
          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {collections.map((col, idx) => (
            <motion.div
              key={idx}
              className="relative group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 shadow-2xl">
                {/* Image Container */}
                <motion.div
                  className="relative h-80 overflow-hidden"
                  variants={imageVariants}
                >
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                  {/* Featured Badge */}
                  {col.featured && (
                    <div className="absolute top-4 left-4 bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <FiAward className="mr-1" size={14} />
                      Featured
                    </div>
                  )}

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-amber-400 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <FiStar className="mr-1 fill-amber-400" size={12} />
                    {col.rating}
                  </div>

                  {/* Favorite Button */}
                  <button className="absolute top-16 right-4 p-2 bg-gray-900/80 backdrop-blur-sm text-gray-300 rounded-full hover:text-rose-400 transition-colors duration-300">
                    <FiHeart size={16} />
                  </button>
                </motion.div>

                {/* Content */}
                <motion.div className="p-6" variants={contentVariants}>
                  <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {col.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {col.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-amber-400 text-sm font-medium">
                      {col.items}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FiStar
                        className="fill-amber-400 text-amber-400 mr-1"
                        size={12}
                      />
                      <span>{col.rating}</span>
                    </div>
                  </div>

                  {/* Explore Button */}
                  <motion.button
                    className="w-full py-3 bg-gray-700 text-white rounded-lg font-medium flex items-center justify-center group-hover:bg-amber-500 group-hover:text-gray-900 transition-colors duration-300"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Explore Collection
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button className="px-8 py-3 border border-amber-500/30 text-amber-400 rounded-lg font-medium hover:bg-amber-500/10 transition-all duration-300 flex items-center mx-auto">
            View All Collections
            <FiArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>

      {/* Custom font import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap");

        .font-serif {
          font-family: "Playfair Display", serif;
        }

        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCollections;
