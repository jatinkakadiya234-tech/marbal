import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import HeaderContent from "../Helper/HeaderContent";

const categories = [
  {
    name: "Surata Green",
    image:
      "https://www.aclassmarble.co.in/images/media_images/240826063842_blog_image.jpg",
    description:
      "Choose the shade of distinction, crafted for those who value rarity.",
    color: "from-amber-900/30 to-amber-700/20",
    accent: "amber",
  },
  {
    name: "ForestGreen ",
    image:
      "https://www.aclassmarble.co.in/images/media_images/240730075202_blog_image.jpg",
    description:
      "Enrich your interiors with the timeless charm of nature’s finest creation.",
    color: "from-amber-800/30 to-amber-600/20",
    accent: "amber",
  },
  {
    name: "Spider Green",
    image:
      "https://lifencolors.in/cdn/shop/products/81d868_98eaac6a5ff84298b9e0728109e46c67_mv2_4af1098c-41e8-4961-9e60-a2e76d62a28a.jpg?v=1753695316",
    description:
      "Let the calm of green breathe life into every corner of your space. ",
    color: "from-amber-900/30 to-amber-700/20",
    accent: "amber",
  },
  {
    name: "R Green ",
    image:
      "https://www.ilpiccolodesign.it/wp-content/uploads/2022/08/kitchen-island-black-marble.jpg",
    description:
      "Choose the shade of distinction ,crafted for those who value rare. ",
    color: "from-amber-800/30 to-amber-600/20",
    accent: "amber",
  },
];

const CategorySelector = ({ activeCategory, setActiveCategory }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

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
        ease: "easeInOut",
      },
    }),
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
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
    tap: {
      scale: 0.99,
      transition: {
        duration: 0.2,
      },
    },
  };

  const sparkleVariants = {
    initial: { scale: 0, opacity: 0 },
    hover: (i) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeaderContent
          title=" Our curated Selections"
          subtitle=" Discover our signature stone collections that redefine elegance and style"
          theme="dark"
        />

        {/* Desktop Grid Cards */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
          {categories.map((cat, index) => {
            const {
              x,
              y,
              rotateX,
              rotateY,
              handleMouseMove,
              handleMouseLeave,
            } = use3dEffect(cardsRef[index]);

            return (
              <motion.div
                key={cat.name}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative h-[480px] cursor-pointer perspective-1000 
                  ${
                    activeCategory === cat.name.toLowerCase() ? "z-30" : "z-20"
                  }`}
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
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.color}`}
                  />
                  <div
                    className={`absolute inset-0 border border-${cat.accent}-700/30`}
                  />

                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${cat.image})` }}
                    animate={{ scale: hoveredCard === index ? 1.05 : 1 }}
                    transition={{ duration: 0.7 }}
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.4 }}
                  />

                  <GoldenParticles count={20} accent={cat.accent} />

                  {/* Content */}
                  <div
                    className="absolute bottom-0 left-0 right-0 z-30 p-6"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "200",
                      letterSpacing: "0.1em",
                    }}
                  >
                    <h3 className="text-base font-['Poppins'] font-normal text-amber-50 mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-gray-300/90 mb-4 text-sm font-['Text-book']">
                      {cat.description}
                    </p>
                    <button
                      className="px-6 py-2 border
                                
 "
                      style={{ backgroundColor: "white", color: "black" }}
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

        {/* Mobile Carousel */}
        <div className="sm:hidden relative mb-16">
          <div className="overflow-hidden">
            <div
              className="flex"
              animate={{ x: -currentSlide * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {categories.map((cat, index) => (
                <div key={cat.name} className="w-full flex-shrink-0 px-4">
                  <div
                    className="relative h-[400px] cursor-pointer"
                    onClick={() => setActiveCategory(cat.name.toLowerCase())}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${cat.color}`}
                      />
                      <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${cat.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-lg" />

                      <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
                        <h3 className="text-lg font-medium text-amber-50 mb-2">
                          {cat.name}
                        </h3>
                        <p className="text-gray-300/90 mb-4 text-sm">
                          {cat.description}
                        </p>
                        <button
                          style={{ backgroundColor: "white", color: "black" }}
                          className="px-4 py-2 border  text-sm uppercase  transition-all duration-300  rounded"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveCategory(cat.name.toLowerCase());
                          }}
                        >
                          Discover
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <p
            onClick={prevSlide}
            style={{ backgroundColor: "transparent" }}
            className="absolute left-2 top-[45%] -translate-y-1/2 z-40 p-2 text-white rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
          >
            <FiChevronLeft size={20} />
          </p>
          <p
            style={{ backgroundColor: "transparent" }}
            onClick={nextSlide}
            className="absolute right-2 top-[45%] -translate-y-1/2 z-40 p-2  text-white rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
          >
            <FiChevronRight size={20} />
          </p>

          {/* Dots Indicator */}
        </div>

        {/* Premium Explore Button */}
        <div className="flex justify-center mt-12 ">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
            onClick={() => navigate("/OurStones")}
          >
            {/* Hover overlay */}

            {/* Golden border glow effect */}

            {/* Subtle particles matching card theme */}
            {isButtonHovered && (
              <>
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h- rounded-full"
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
            <button
              className="relative z-10 flex items-center justify-center space-x-3"
              style={{ backgroundColor: "white", color: "black" }}
            >
              <span className="text-black transition-colors duration-300 font-medium">
                View All Stone Collections
              </span>
            </button>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CategorySelector;
