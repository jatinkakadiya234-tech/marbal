import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const categories = [
  {
    name: "Uni",
    image: "https://www.aclassmarble.co.in/images/media_images/240826063842_blog_image.jpg",
    description: "Trusted, everyday quality with clean design and great value",
    color: "from-amber-900/30 to-amber-700/20",
    accent: "amber"
  },
  {
    name: "Premium",
    image: "https://www.aclassmarble.co.in/images/media_images/240730075202_blog_image.jpg",
    description: "Luxury-grade craftsmanship with refined finishes and lasting durability",
    color: "from-amber-800/30 to-amber-600/20",
    accent: "amber"
  },
  {
    name: "Bedroom",
    image: "https://lifencolors.in/cdn/shop/products/81d868_98eaac6a5ff84298b9e0728109e46c67_mv2_4af1098c-41e8-4961-9e60-a2e76d62a28a.jpg?v=1753695316",
    description: "Comfort-first designs to elevate your personal sanctuary",
    color: "from-amber-900/30 to-amber-700/20",
    accent: "amber"
  },
  {
    name: "Kitchen+",
    image: "https://www.ilpiccolodesign.it/wp-content/uploads/2022/08/kitchen-island-black-marble.jpg",
    description: "Enhanced utility and style for modern cooking spaces",
    color: "from-amber-800/30 to-amber-600/20",
    accent: "amber"
  },
];

const CategorySelector = ({ activeCategory, setActiveCategory }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardsRef = useRef([]);
  const containerRef = useRef();

  // 3D tilt effect with enhanced smoothness
  const use3dEffect = (ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    function handleMouseMove(event) {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const relX = (event.clientX - centerX) / 10;
      const relY = (event.clientY - centerY) / 10;

      x.set(relX);
      y.set(relY);
    }

    function handleMouseLeave() {
      animate(x, 0, { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] });
      animate(y, 0, { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] });
    }

    return { x, y, rotateX, rotateY, handleMouseMove, handleMouseLeave };
  };

  // Enhanced floating animation
  const floatingVariants = {
    rest: { y: 0 },
    float: (i) => ({
      y: [0, -12, 0],
      transition: {
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  // Golden particles effect
  const GoldenParticles = ({ count, accent }) => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-${accent}-400 rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden" ref={containerRef}>

      {/* Enhanced background with subtle luxury pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',        // fills container
            backgroundPosition: 'center',   // centers image
            backgroundRepeat: 'no-repeat'   // no tiling
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      {/* Subtle geometric shapes for premium feel */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border border-amber-600/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 border border-amber-600/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="w-1 h-1 bg-amber-500 rounded-full mr-2"></div>
            <span className="text-xs font-medium tracking-widest uppercase text-amber-400/90 letter-spacing-4">
              Top Product Categories
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Top Product Categories
          </motion.h2>

          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.6, duration: 1 }}
          ></motion.div>

          <motion.p
            className="text-lg text-gray-300/90 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Explore Uni for smart essentials and Premium for exclusive, refined finishes
          </motion.p>
        </motion.div>

        {/* Enhanced 3D Cards Container */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 lg:gap-6 relative justify-center items-center">
          {categories.map((cat, index) => {
            const { x, y, rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3dEffect(cardsRef[index]);

            return (
              <motion.div
                key={cat.name}
                ref={el => cardsRef.current[index] = el}
                className={`relative flex-1 h-[580px] max-w-2xl cursor-pointer perspective-1000 ${activeCategory === cat.name.toLowerCase() ? "z-30" : "z-20"
                  }`}
                style={{
                  x,
                  y,
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
                animate={{ opacity: 1, y: 0 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setActiveCategory(cat.name.toLowerCase())}
                custom={index}
                variants={floatingVariants}
                // animate="float"
                whileHover="rest"
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.7 }}
              >
                {/* Card Container with refined edges */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Card Background with subtle gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`}></div>

                  {/* Metallic border effect */}
                  <div className={`absolute inset-0 border border-${cat.accent}-700/30`}></div>

                  {/* Main Image with refined styling */}
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${cat.image})`,
                    }}
                    animate={{
                      scale: hoveredCard === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />

                  {/* Sophisticated overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Golden particles */}
                  <GoldenParticles count={20} accent={cat.accent} />

                  {/* Reflective shine effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-amber-200/5 to-transparent"
                    animate={{ y: hoveredCard === index ? 580 : 0 }}
                    transition={{ duration: 1.5 }}
                  />

                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 z-30 p-8 pt-16 bg-gradient-to-t from-black via-black/90 to-transparent">
                    {/* Category Name */}
                    <motion.h3
                      className="text-3xl font-serif font-normal text-amber-50 mb-3 tracking-wide"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {cat.name}
                    </motion.h3>

                    {/* Elegant divider */}
                    <motion.div
                      className="w-12 h-px bg-amber-500/70 mb-4"
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      transition={{ delay: index * 0.2 + 0.7, duration: 0.5 }}
                    />

                    {/* Description */}
                    <motion.p
                      className="text-gray-300/90 mb-6 text-sm font-light tracking-wide leading-relaxed"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                    >
                      {cat.description}
                    </motion.p>

                    {/* Enhanced Explore Button */}
                    <motion.button
                      className={`px-8 py-3 bg-transparent border border-amber-600/50 text-amber-100 font-medium text-sm tracking-widest uppercase relative overflow-hidden group transition-all duration-500 hover:border-amber-500`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategory(cat.name.toLowerCase());
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.9, type: "spring", stiffness: 200 }}
                    >
                      <span className="relative z-10">Discover</span>
                      <div className={`absolute inset-0 bg-amber-900/30 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500`}></div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    </motion.button>
                  </div>

                  {/* Active Indicator */}
                  {activeCategory === cat.name.toLowerCase() && (
                    <motion.div
                      className="absolute top-6 right-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="w-5 h-5 bg-amber-500 rounded-sm flex items-center justify-center">
                        <div className="w-1 h-1 bg-amber-100 rounded-sm"></div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Navigation Dots */}
        {/* <motion.div
          className="flex justify-center mt-16 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {categories.map((cat, index) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name.toLowerCase())}
              className={`relative h-1 transition-all duration-500 ${activeCategory === cat.name.toLowerCase()
                  ? `w-8 bg-amber-500`
                  : "w-3 bg-amber-900/70 hover:bg-amber-800"
                }`}
            >
              <motion.div
                className="absolute inset-0 bg-amber-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeCategory === cat.name.toLowerCase() ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            </button>
          ))}
        </motion.div> */}
      </div>

      {/* Subtle ambient light effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
      </div>
    </section>
  );
};

export default CategorySelector;