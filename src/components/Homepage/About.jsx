// components/About.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiHeart, FiCheckCircle } from "react-icons/fi";

// ✅ Import images from assets
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import about4 from "../../assets/about4.jpg";

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
    <section
      id="about"
      className={`py-24 ${
        theme === "dark" ? "bg-gray-900" : "bg-[#F2E1C5]"
      } transition-colors duration-500 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-[#0E5543] rounded-full mr-2"></div>
            <span
              className={`text-sm font-semibold tracking-widest uppercase ${
                theme === "dark" ? "text-[#8DB596]" : "text-[#0E5543]"
              }`}
            >
              Why Choose Us
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
           Rishab Green Marbles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0E5543] to-[#8DB596] mx-auto mb-8"></div>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Choose us for trusted quality, on-time delivery, and service that
            stands behind every installation.
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Images Grid */}
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="relative rounded-2xl overflow-hidden group"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={about1}
                  alt="Marble Installation"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden group mt-12"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={about2}
                  alt="Granite Worktop"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="relative rounded-2xl overflow-hidden group"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={about3}
                  alt="Bathroom Interior"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              <motion.div
                className="relative rounded-2xl overflow-hidden group mt-12"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src={about4}
                  alt="Flooring Design"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-10">
              <h3
                className={`text-2xl md:text-3xl font-serif font-semibold mb-8 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Excellence Crafted with Passion Since{" "}
                <span className="text-[#0E5543]">1995</span>
              </h3>

              <p
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } mb-6`}
              >
                At Surrey Marble & Granite, we believe that your living spaces should
                reflect your personality and provide both beauty and functionality.
                Our journey began with a simple vision: to transform homes with
                natural stone that stands the test of time.
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
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
              className="mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid gap-4">
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
                      className={`mr-3 ${
                        theme === "dark" ? "text-[#8DB596]" : "text-[#0E5543]"
                      }`}
                      size={20}
                    />
                    <span
                      className={
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 text-center"
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
                  className={`p-6 rounded-2xl ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  } shadow-lg border border-[#0E5543]/10`}
                  variants={statVariants}
                  custom={i}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <stat.icon
                    className={`mx-auto mb-4 ${
                      theme === "dark" ? "text-[#8DB596]" : "text-[#0E5543]"
                    }`}
                    size={32}
                  />
                  <div
                    className={`text-2xl md:text-3xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-[#0E5543]"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
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