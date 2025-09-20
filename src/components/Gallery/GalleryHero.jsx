import React from 'react'
import { motion } from 'framer-motion'

const GalleryHero = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Premium Projects</h1>
                        <p className="text-xl max-w-3xl mx-auto text-[#0E5543]/90">
                            Discover how our exquisite marble transforms spaces into works of art
                        </p>
                    </motion.div>
                </div>
            </section>

        </>
    )
}

export default GalleryHero
