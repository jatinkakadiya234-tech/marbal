import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function ServiceGrid({ filteredServices, setSelectedService }) {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            setSelectedService={setSelectedService}
          />
        ))}
      </motion.div>
    </div>
  );
}
