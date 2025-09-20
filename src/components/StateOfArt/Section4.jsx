import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Section4 = () => {

    const [activeVideo, setActiveVideo] = useState(null);


    return (
        <>
            {/* Stats Section */}
            <section className="py-20 bg-[#F2E1C5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '25+', label: 'Years Experience' },
                            { value: '15', label: 'Advanced Machines' },
                            { value: '0.1mm', label: 'Cutting Precision' },
                            { value: '98%', label: 'Quality Satisfaction' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-serif font-bold text-[#0E5543] mb-2">{stat.value}</div>
                                <div className="text-[#0E5543]/80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setActiveVideo(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-[#F2E1C5] rounded-xl max-w-4xl w-full aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute -top-12 right-0 text-[#0E5543] text-lg flex items-center"
                            >
                                <FiPause className="mr-2" /> Close
                            </button>
                            <iframe
                                src={activeVideo}
                                className="w-full h-full rounded-xl"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default Section4
