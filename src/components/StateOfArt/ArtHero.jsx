import React from 'react'
import { motion } from 'framer-motion';

const Arthero = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">State-of-the-Art Technology</h1>
                        <p className="text-xl max-w-3xl mx-auto text-[#0E5543]/90 mb-8">
                            Precision engineering meets natural beauty through our advanced manufacturing processes
                        </p>
                        <div className="w-24 h-1 bg-[#0E5543] mx-auto"></div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Arthero
