import React from 'react'
import { motion } from "framer-motion"

export default function GalleryBottomSections() {
    return (
        <>
            {/* CTA Section */}
            <section className="py-20 bg-[#e8d5b5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif mb-6">Start Your Premium Project</h2>
                        <p className="text-xl text-[#0E5543]/90 mb-8">
                            Let us transform your space with our exquisite marble collection and expert craftsmanship
                        </p>
                        <button className="px-8 py-4 bg-[#0E5543] text-[#F2E1C5] rounded-lg font-medium text-lg hover:bg-[#0E5543]/90 transition-colors">
                            Schedule a Consultation
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
