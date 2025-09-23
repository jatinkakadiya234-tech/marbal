import React from 'react'
import { motion } from 'framer-motion'

const ServiceNav = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <>
            {/* Category Selector */}
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
                            color: "#F2E1C5",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all font-sans ${activeCategory === category
                            ? "bg-[#0E5543] text-[#F2E1C5] border-[#0E5543] shadow-md"
                            : "bg-transparent text-[#0E5543] border-[#0E5543]/40 hover:bg-[#0E5543]/10"
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </motion.button>
                ))}
            </motion.div>
        </>
    )
}

export default ServiceNav
