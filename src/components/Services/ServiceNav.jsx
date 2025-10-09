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
    whileTap={{ scale: 0.95 }}
    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all font-sans ${activeCategory === category ? 'border-2 border-white' : 'border-2 border-transparent'}`}
    style={{ 
        backgroundColor: "#0E5543", 
        color: "white"
    }}
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
