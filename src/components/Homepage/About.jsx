// components/About.js
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiUsers, FiHeart, FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Check system preference or saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4
      }
    }
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
        stiffness: 100
      }
    })
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  return (
    <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-amber-50'} transition-colors duration-500 overflow-hidden`}>
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
            <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
            <span className={`text-sm font-semibold tracking-widest uppercase ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`}>
              Why Choose RGM?
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Why Choose RGM?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Choose RGM for trusted quality, on-time delivery, and service that stands behind every product.
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
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ceramic Art" 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              
              <motion.div 
                className="relative rounded-2xl overflow-hidden group mt-12"
                variants={imageVariants}
                whileHover="hover"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Furniture Design" 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="relative rounded-2xl overflow-hidden group"
                variants={imageVariants}
                whileHover="hover"
              >
                <img 
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ceramic Art" 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              
              <motion.div 
                className="relative rounded-2xl overflow-hidden group mt-12"
                variants={imageVariants}
                whileHover="hover"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Furniture Design" 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              <h3 className={`text-2xl md:text-3xl font-serif font-semibold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Excellence Crafted with Passion Since <span className="text-amber-500">1995</span>
              </h3>
              
              <div className="space-y-6">
                <motion.p 
                  className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  At Artisan Craft, we believe that your living spaces should reflect your personality and 
                  provide comfort and functionality. Our journey began with a simple vision: to create pieces 
                  that stand the test of time.
                </motion.p>
                
                <motion.p 
                  className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Our team of skilled artisans combines traditional craftsmanship with contemporary design 
                  sensibilities to create pieces that are not only beautiful but also built to last. Each 
                  item in our collection tells a story of dedication, attention to detail, and passion for 
                  excellence.
                </motion.p>
              </div>
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
                  "Handcrafted with premium materials",
                  "Sustainable production methods",
                  "Lifetime warranty on all products",
                  "Custom design services available"
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center"
                    variants={featureVariants}
                    custom={i}
                  >
                    <FiCheckCircle className={`mr-3 ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`} size={20} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
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
                { icon: FiUsers, value: "500+", label: "Projects Completed" },
                { icon: FiHeart, value: "98%", label: "Happy Clients" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                  variants={statVariants}
                  custom={i}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <stat.icon className={`mx-auto mb-4 ${theme === 'dark' ? 'text-amber-400' : 'text-amber-600'}`} size={32} />
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default About;