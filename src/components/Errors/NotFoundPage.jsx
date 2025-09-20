import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowRight, FiCompass } from 'react-icons/fi';
import { motion } from 'framer-motion'; // ✅ Correct import

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0E5543] to-[#0a3a2d] text-[#F2E1C5] flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold opacity-10 absolute inset-0 flex items-center justify-center">
            404
          </h1>

          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="w-2 h-2 bg-[#F2E1C5] rounded-full mr-3"></div>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#F2E1C5] font-sans">
                Rishab Green Marbles
              </span>
              <div className="w-2 h-2 bg-[#F2E1C5] rounded-full ml-3"></div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
            >
           <span className='text-red-500'> 404</span>   Page Not Found
            </motion.h2>

            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-48 h-1 bg-gradient-to-r from-transparent via-[#F2E1C5] to-transparent mx-auto mb-8"
            />
          </div>
        </div>

        {/* Message */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light"
        >
          The page you're looking for seems to have been lost in the depths of our marble quarry.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F2E1C5] text-[#0E5543] rounded-full font-medium hover:bg-[#F2E1C5]/90 transition-colors"
          >
            <FiHome className="w-5 h-5" />
            Return Home
          </Link>

          <Link
            to="/gallery"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-[#F2E1C5] text-[#F2E1C5] rounded-full font-medium hover:bg-[#F2E1C5] hover:text-[#0E5543] transition-colors"
          >
            <FiCompass className="w-5 h-5" />
            Explore Gallery
          </Link>
        </motion.div>

        {/* Feature Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { title: "Marble Collection", desc: "Discover our premium stones", path: "/collection" },
            { title: "Projects", desc: "View our completed works", path: "/projects" },
            { title: "Contact Us", desc: "Get in touch with our team", path: "/contact" }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="bg-[#0a3a2d]/50 p-6 rounded-xl border border-[#F2E1C5]/10 hover:border-[#F2E1C5]/30 transition-all group"
            >
              <h3 className="text-lg font-serif font-semibold mb-2">{item.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-[#F2E1C5]/70 text-sm">{item.desc}</p>
                <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Decorative floating dots */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#F2E1C5] opacity-20"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              x: [null, Math.random() * 100 + 'vw'],
              y: [null, Math.random() * 100 + 'vh'],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFoundPage;
