import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staticVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export default function ServiceGrid({ filteredServices, setSelectedService }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        variants={isMobile ? staticVariants : containerVariants}
        initial={isMobile ? false : "hidden"}
        whileInView={isMobile ? false : "visible"}
        viewport={isMobile ? undefined : { once: true, margin: "-50px" }}
        style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}
      >
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            setSelectedService={setSelectedService}
            isMobile={isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
}
