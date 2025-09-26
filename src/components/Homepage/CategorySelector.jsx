import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeaderContent from "../Helper/HeaderContent";

const categories = [
  {
    name: "Indian Satwario",
    image: "https://www.aclassmarble.co.in/images/media_images/240826063842_blog_image.jpg",
    description: "Trusted, everyday quality with clean design and great value",
    color: "from-amber-900/30 to-amber-700/20",
    accent: "amber"
  },
  {
    name: "Indian Dobar White",
    image: "https://www.aclassmarble.co.in/images/media_images/240730075202_blog_image.jpg",
    description: "Luxury-grade craftsmanship with refined finishes and lasting durability",
    color: "from-amber-800/30 to-amber-600/20",
    accent: "amber"
  },
  {
    name: "Tropical White",
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
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  // 3D tilt effect
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

  // Floating animation
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

  // Golden particles
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

  // Button animations - more subtle to match theme
  const buttonVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -1,
      transition: {
        duration: 0.4,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    },
    tap: {
      scale: 0.99,
      transition: {
        duration: 0.2
      }
    }
  };

  const sparkleVariants = {
    initial: { scale: 0, opacity: 0 },
    hover: (i) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeaderContent
          tagline=""
          title="Top Product Categories"
          subtitle=" Explore Uni for smart essentials and Premium for exclusive, refined finishes"
          theme="dark"
        />

        {/* Responsive Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
          {categories.map((cat, index) => {
            const { x, y, rotateX, rotateY, handleMouseMove, handleMouseLeave } =
              use3dEffect(cardsRef[index]);

            return (
              <motion.div
                key={cat.name}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative h-[480px] cursor-pointer perspective-1000 
                  ${activeCategory === cat.name.toLowerCase() ? "z-30" : "z-20"}`}
                style={{
                  x,
                  y,
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                animate={{ opacity: 1, y: 0 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setActiveCategory(cat.name.toLowerCase())}
                custom={index}
                variants={floatingVariants}
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.7 }}
              >
                {/* Card content */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />
                  <div className={`absolute inset-0 border border-${cat.accent}-700/30`} />

                  <motion.div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${cat.image})` }}
                    animate={{ scale: hoveredCard === index ? 1.05 : 1 }}
                    transition={{ duration: 0.7 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.4 }}
                  />

                  <GoldenParticles count={20} accent={cat.accent} />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
                    <h3 className="text-2xl font-serif text-amber-50 mb-2">{cat.name}</h3>
                    <p className="text-gray-300/90 mb-4 text-sm">{cat.description}</p>
                    <button
                      className="px-6 py-2 border  bg-gradient-to-t from-black/80 via-black/50 to-transparent border-amber-600 text-amber-100 text-sm uppercase hover:bg-amber-800/40 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategory(cat.name.toLowerCase());
                      }}
                    >
                      Discover
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Explore Button */}
        {/* Premium Explore Button */}
        <div className="flex justify-center mt-12">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
            onClick={() => navigate("/OurStones")}
            className="relative px-10 py-4 bg-transparent border border-amber-600/40 rounded-lg 
               text-amber-100 font-sans text-lg uppercase tracking-wider overflow-hidden 
               group backdrop-blur-sm"
          >
            {/* Subtle background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-amber-950/5"
              animate={{
                opacity: isButtonHovered ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-amber-600/10"
              animate={{
                x: isButtonHovered ? ["-100%", "100%"] : "-100%",
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
            />

            {/* Golden border glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg border border-amber-500/30"
              animate={{
                boxShadow: isButtonHovered
                  ? "0 0 20px rgba(180, 83, 9, 0.3)"
                  : "0 0 0px rgba(180, 83, 9, 0.1)",
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Subtle particles matching card theme */}
            {isButtonHovered && (
              <>
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-400/60 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [0, -15, -30],
                      x: Math.random() * 20 - 10,
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                    }}
                    style={{
                      left: `${20 + i * 20}%`,
                      bottom: "10%",
                    }}
                  />
                ))}
              </>
            )}

            {/* Button content */}
            <div className="relative z-10 flex items-center justify-center space-x-3">
              <span className="text-amber-100/90 group-hover:text-amber-50 transition-colors duration-300 font-medium">
                View All Stone Collections
              </span>

              <motion.div
                animate={{ x: isButtonHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>

    </section>
  );
};

export default CategorySelector;