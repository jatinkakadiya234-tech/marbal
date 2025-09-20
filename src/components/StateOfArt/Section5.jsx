import React from 'react'
import { motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'

const Section5 = () => {
    return (
        <>
            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif mb-6">Experience Our Quality Firsthand</h2>
                        <p className="text-xl text-[#0E5543]/90 mb-8">
                            Visit our facility to see our advanced technology in action and witness the transformation of raw marble into exquisite surfaces
                        </p>
                        <button className="px-8 py-4 bg-[#0E5543] text-[#F2E1C5] rounded-lg font-medium text-lg hover:bg-[#0E5543]/90 transition-colors flex items-center mx-auto">
                            Schedule a Factory Tour
                            <FiChevronRight className="ml-2" />
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Section5
