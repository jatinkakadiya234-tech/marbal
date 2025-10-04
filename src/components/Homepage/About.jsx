// components/About.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiHeart, FiCheckCircle } from "react-icons/fi";

// ✅ Import images from assets
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import about4 from "../../assets/about4.jpg";
import HeaderContent from "../Helper/HeaderContent";


const About = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.4 } },
  };

  const statVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <section id="about" className={`py-12 md:py-16 lg:py-24 bg-white transition-colors duration-500 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
       <HeaderContent />

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Images Grid */}
          <motion.div
            className="lg:w-1/2 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <motion.div
                className="relative  overflow-hidden group"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={about1}
                  alt="Marble Installation"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              <motion.div
                className="relative  overflow-hidden group mt-8 md:mt-12"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={about2}
                  alt="Granite Worktop"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
              <motion.div
                className="relative overflow-hidden group"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={about3}
                  alt="Bathroom Interior"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              <motion.div
                className="relative  overflow-hidden group mt-8 md:mt-12"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={about4}
                  alt="Flooring Design"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-8 md:mb-10">
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-serif font-semibold mb-6 md:mb-8 ${theme === "dark" ? "text-white" : "text-black"
                  }`}
              >
                Excellence Crafted with Passion Since{" "}
                <span className="text-[#0E5543]">1995</span>
              </h3>

              <p
                className={`text-base md:text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                  } mb-4 md:mb-6`}
              >
                At Surrey Marble & Granite, we believe that your living spaces should
                reflect your personality and provide both beauty and functionality.
                Our journey began with a simple vision: to transform homes with
                natural stone that stands the test of time.
              </p>

              <p
                className={`text-base md:text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                Our team of skilled craftsmen combines traditional techniques
                with modern precision to create installations that are not only
                beautiful but also built to last. Each project tells a story of
                dedication, attention to detail, and passion for excellence.
              </p>
            </div>

            {/* Features List */}
            <motion.div
              className="mb-8 md:mb-10 lg:mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid gap-3 md:gap-4">
                {[
                  "Premium quality marble, granite & quartz",
                  "Expert measurement & installation",
                  "Lifetime warranty on all workmanship",
                  "Free consultation & design services",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center"
                    variants={featureVariants}
                    custom={i}
                  >
                    <FiCheckCircle
                      className={`mr-3 flex-shrink-0 ${theme === "dark" ? "text-[#8DB596]" : "text-[#0E5543]"
                        }`}
                      size={18}
                    />
                    <span
                      className={`text-sm md:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: FiAward, value: "25+", label: "Years Experience" },
                { icon: FiUsers, value: "1000+", label: "Projects Completed" },
                { icon: FiHeart, value: "99%", label: "Happy Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className={`p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl ${theme === "dark" ? "bg-gray-800" : "bg-white"
                    } shadow-lg border border-[#0E5543]/10`}
                  variants={statVariants}
                  custom={i}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <stat.icon
                    className={`mx-auto mb-2 md:mb-3 lg:mb-4 ${theme === "dark" ? "text-[#8DB596]" : "text-[#0E5543]"
                      }`}
                    size={24}
                  />
                  <div
                    className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 ${theme === "dark" ? "text-white" : "text-[#0E5543]"
                      }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs md:text-sm font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;