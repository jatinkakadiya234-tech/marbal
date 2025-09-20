
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Kitchen Countertops",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Premium stone surfaces that transform your kitchen into a culinary masterpiece with durability and elegance.",
    features: ["Heat Resistance", "Stain Proof", "Easy Maintenance", "10+ Year Warranty"],
    icon: "🔪"
  },
  {
    id: 2,
    title: "Bathroom Vanities",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Luxurious stone vanities that create spa-like retreats with water-resistant and easy-to-clean surfaces.",
    features: ["Water Resistant", "Mold Resistance", "Elegant Finishes", "Custom Sizing"],
    icon: "🚿"
  },
  {
    id: 3,
    title: "Flooring Solutions",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Durable and stunning stone flooring that withstands heavy traffic while maintaining its luxurious appearance.",
    features: ["High Durability", "Slip Resistance", "Easy Cleaning", "Temperature Regulation"],
    icon: "🏢"
  },
  {
    id: 4,
    title: "Feature Walls",
    category: "Architectural",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Breathtaking stone accent walls that become the focal point of any space with unique patterns and textures.",
    features: ["Unique Patterns", "Custom Designs", "Visual Impact", "Texture Variety"],
    icon: "🎨"
  },
  {
    id: 5,
    title: "Outdoor Pavings",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1615529162921-f5d0c07042a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Weather-resistant stone paving that enhances outdoor spaces with natural beauty and longevity.",
    features: ["Weather Proof", "UV Resistance", "Non-Slip Surface", "Natural Cooling"],
    icon: "🌳"
  },
  {
    id: 6,
    title: "Staircases",
    category: "Architectural",
    image: "https://images.unsplash.com/photo-1613977250613-5b7f8f6d6c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Grand stone staircases that make a dramatic statement while providing exceptional durability and safety.",
    features: ["Structural Integrity", "Safety Features", "Custom Designs", "Wear Resistance"],
    icon: "📶"
  }
];

const categories = ["All", "Residential", "Commercial", "Architectural", "Landscape"];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const hoverEffect = {
  scale: 1.03,
  transition: { duration: 0.3, ease: "easeOut" }
};

const tapEffect = {
  scale: 0.98
};

export default function ServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="relative min-h-screen py-36a bg-[#F2E1C5] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0E5543]/5 rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0E5543]/5 rounded-full"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0E5543 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
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
            <span className="text-sm font-semibold tracking-widest uppercase text-[#0E5543] font-sans">
              Our Services
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-serif text-[#0E5543] mb-5 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Application <span className="text-[#0E5543]/90">Showcase</span>
          </motion.h1>
          
          <motion.div 
            className="w-24 h-0.5 bg-gradient-to-r from-[#0E5543]/40 via-[#0E5543] to-[#0E5543]/40 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-[#0E5543]/80 text-lg font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Discover the versatile applications of our premium stone products that transform spaces with elegance and durability.
          </motion.p>
        </motion.div>

        {/* Category selector */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#0E5543",
                color: "#F2E1C5"
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all font-sans ${activeCategory === category ? 'bg-[#0E5543] text-[#F2E1C5] border-[#0E5543] shadow-md' : 'bg-transparent text-[#0E5543] border-[#0E5543]/40 hover:bg-[#0E5543]/10'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Services grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden group bg-white border border-[#0E5543]/10 shadow-lg cursor-pointer"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedService(service)}
              layout
            >
              {/* Image container */}
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0E5543] text-[#F2E1C5] text-xs font-medium backdrop-blur-sm font-sans">
                  {service.category}
                </div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F2E1C5] flex items-center justify-center text-xl shadow-md">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#0E5543] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="text-[#0E5543]/80 text-sm mb-4 font-sans">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-[#0E5543]/80 font-sans">
                      <svg className="w-4 h-4 text-[#0E5543] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 2 && (
                    <li className="text-sm text-[#0E5543]/60 font-sans">
                      +{service.features.length - 2} more features
                    </li>
                  )}
                </ul>
                
                {/* CTA button */}
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#0E5543", color: "#F2E1C5" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-5 py-2.5 rounded-lg bg-[#0E5543]/10 text-[#0E5543] text-sm font-medium border border-[#0E5543]/20 transition-colors font-sans"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="bg-[#0E5543] rounded-2xl p-8 md:p-12 text-[#F2E1C5] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#F2E1C5]/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F2E1C5]/10 rounded-full"></div>
            
            <h2 className="text-2xl md:text-3xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Transform Your Space?
            </h2>
            <p className="max-w-2xl mx-auto mb-6 opacity-90 font-sans">
              Contact us for a personalized consultation and discover how our premium stone solutions can elevate your project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#F2E1C5", color: "#0E5543" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-[#F2E1C5] text-[#0E5543] font-medium shadow-md font-sans"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[#0E5543]/90 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            
            <motion.div 
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-white border border-[#0E5543]/20 shadow-2xl z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="aspect-video w-full relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0E5543]/10 text-[#0E5543] text-sm font-medium mb-2 font-sans">
                      {selectedService.category}
                    </span>
                    <h3 className="text-2xl font-serif text-[#0E5543]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {selectedService.title}
                    </h3>
                  </div>
                  <div className="text-3xl">
                    {selectedService.icon}
                  </div>
                </div>
                
                <p className="text-[#0E5543]/80 mb-6 font-sans">
                  {selectedService.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-[#0E5543] font-sans">
                      <svg className="w-5 h-5 text-[#0E5543] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#0E5543", color: "#F2E1C5" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 rounded-lg bg-[#0E5543] text-[#F2E1C5] font-medium font-sans"
                  >
                    Request Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "transparent", borderColor: "#0E5543" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 rounded-lg bg-transparent text-[#0E5543] font-medium border border-[#0E5543] font-sans"
                    onClick={() => setSelectedService(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#0E5543", color: "#F2E1C5" }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#0E5543] border border-[#0E5543]/20 hover:bg-[#0E5543] hover:text-white transition-colors shadow-md"
                onClick={() => setSelectedService(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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