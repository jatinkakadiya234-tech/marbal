import React from "react";
import { motion } from "framer-motion";

const ServiceHeader = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20  pt-30    mb-10 overflow-hidden" >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    < motion.div
                        className="text-center "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            className="inline-flex items-center justify-center mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <div className="w-2 h-2 bg-[#0E5543] rounded-full mr-2"></div>
                            <span className="text-sm font-semibold tracking-widest uppercase text-[#0E5543] font-sans">
                                Our Services
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl font-serif text-[#0E5543] mb-5 tracking-tight"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Application <span className="text-[#0E5543]/90">Showcase</span>
                        </motion.h1>

                        <motion.div
                            className="w-24 h-0.5 bg-gradient-to-r from-[#0E5543]/40 via-[#0E5543] to-[#0E5543]/40 mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        ></motion.div>

                        <motion.p
                            className="mt-6 max-w-2xl mx-auto text-[#0E5543]/80 text-lg font-sans"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            Discover the versatile applications of our premium stone products that
                            transform spaces with elegance and durability.
                        </motion.p>
                    </motion.div >

                </div>
            </section >




        </>




    );
};

export default ServiceHeader;
