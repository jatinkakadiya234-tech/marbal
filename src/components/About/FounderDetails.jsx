// components/About/FounderDetails.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const founders = [
  {
    name: 'Rahul Mehta',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=500&auto=format&fit=crop',
    bio: 'Leads brand vision and product strategy with two decades of experience in luxury stone craftsmanship.',
    extendedBio: 'With over 20 years in the luxury stone industry, Rahul brings unparalleled expertise in sourcing the finest materials from around the world. His vision has transformed the landscape of premium stone solutions.'
  },
  {
    name: 'Gauri Patel',
    role: 'Co‑Founder & Design Head',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop',
    bio: 'Oversees design direction and client experience, blending timeless aesthetics with modern usability.',
    extendedBio: 'Gauri combines her architectural background with a passion for sustainable design. Her innovative approach to stone applications has earned international recognition and numerous design awards.'
  },
  {
    name: 'Arjun Kumar',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop',
    bio: 'Expert in stone fabrication technology and innovative installation techniques.',
    extendedBio: 'Arjun brings technical excellence with 15 years of experience in advanced stone fabrication. His expertise ensures precision and quality in every project we deliver.'
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop',
    bio: 'Leads our creative team in developing innovative stone applications and designs.',
    extendedBio: 'Priya\'s artistic vision and understanding of material properties have resulted in groundbreaking designs that push the boundaries of what\'s possible with natural stone.'
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  },
};

export default function FounderDetails() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section className="relative py-20 z-0 bg-[#F2E1C5] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#0E5543]/5 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#0E5543]/5 rounded-full"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0E5543 1px, transparent 1px)`,
            backgroundSize: '15px 15px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-[#0E5543] rounded-full mr-2"></div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0E5543] font-sans">
              Our Leadership
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-[#0E5543] mb-5 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Visionaries Behind the Brand
          </motion.h2>
          
          <motion.div 
            className="w-24 h-0.5 bg-gradient-to-r from-[#0E5543]/40 via-[#0E5543] to-[#0E5543]/40 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-[#0E5543]/80 text-base font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Meet the passionate individuals who have revolutionized the stone industry with innovation and artistry.
          </motion.p>
        </motion.div>

        {/* Founder Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="relative rounded-xl overflow-hidden bg-white shadow-md border border-[#0E5543]/10 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              variants={item}
              whileHover={{ y: -5 }}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              layout
            >
              {/* Card content */}
              <div className="flex flex-col h-full">
                {/* Image container with overlay */}
                <div className="relative overflow-hidden aspect-square">
                  <motion.img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Role badge */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#0E5543] text-white text-xs font-medium backdrop-blur-sm font-sans">
                    {founder.role}
                  </div>
                </div>
                
                {/* Text content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-serif text-[#0E5543] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {founder.name}
                  </h3>
                  <p className="text-[#0E5543]/80 text-sm mb-3 flex-1 font-sans">{founder.bio}</p>
                  
                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.p 
                        className="text-[#0E5543]/70 text-xs mt-2 pt-2 border-t border-[#0E5543]/10 font-sans"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {founder.extendedBio}
                      </motion.p>
                    )}
                  </AnimatePresence>
            
                  {/* Expand indicator */}
                  <motion.div 
                    className="flex items-center text-[#0E5543] text-xs font-medium mt-3 font-sans"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="mr-1">{expandedCard === index ? 'Show less' : 'Read more'}</span>
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-3 w-3" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      animate={{ rotate: expandedCard === index ? 180 : 0 }}
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.div>
                </div>
              </div>

              {/* Active indicator ring */}
              {expandedCard === index && (
                <motion.div 
                  className="absolute inset-0 rounded-xl ring-2 ring-[#0E5543]/30 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom decorative element */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0E5543]/10 text-[#0E5543] text-xs font-sans">
            <span className="w-1.5 h-1.5 bg-[#0E5543] rounded-full mr-1.5 animate-pulse"></span>
            Leading the industry since 2005
          </div>
        </motion.div>
      </div>

      {/* Add font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
}