import React from 'react'
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';


const Section1 = () => {
    return (
        <>
            {/* Technology Intro */}
            <section className="py-16 bg-[#F2E1C5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-serif mb-6">Where Craftsmanship Meets Innovation</h2>
                            <p className="text-lg text-[#0E5543]/90 mb-6">
                                At Rishab Green Marbles, we combine generations of stoneworking expertise with cutting-edge technology
                                to deliver perfection in every slab. Our advanced machinery ensures precision cuts, flawless finishes,
                                and consistent quality that sets industry standards.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-[#0E5543] rounded-full mr-2"></div>
                                    <span>ISO 9001 Certified Processes</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-[#0E5543] rounded-full mr-2"></div>
                                    <span>0.1mm Precision Tolerance</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video bg-[#F2E1C5] border border-[#0E5543]/20 rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Advanced marble cutting technology"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#F2E1C5] to-transparent opacity-70"></div>
                            </div>
                            <button
                                onClick={() => setActiveVideo('intro')}
                                className="absolute inset-0 flex items-center justify-center group"
                            >
                                <div className="w-16 h-16 bg-[#0E5543] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FiPlay size={24} className="text-[#F2E1C5] ml-1" />
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1
