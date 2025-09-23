import React from 'react'
import { motion } from "framer-motion"

export default function GalleryBottomSections() {
    return (
        <>
            {/* CTA Section */}
            <section className="relative py-28 bg-gradient-to-br from-[#0E5543] via-[#0E5543]/95 to-[#0a3d2f] overflow-hidden">
                {/* Premium Background Elements */}
                <div className="absolute inset-0">
                    {/* Subtle marble texture overlay */}
                    <div
                        className="absolute inset-0 opacity-[1.15]"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    
                    {/* Sophisticated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543]/80 via-[#0E5543]/60 to-[#0a3d2f]/90"></div>
                    
                    {/* Geometric pattern for premium feel */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 25% 25%, #F2E1C5 2px, transparent 2px)`,
                            backgroundSize: '50px 50px'
                        }}></div>
                    </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#F2E1C5]/20"></div>
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#F2E1C5]/20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#F2E1C5]/20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#F2E1C5]/20"></div>

                <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-8"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F2E1C5]/10 border border-[#F2E1C5]/20 backdrop-blur-sm"
                        >
                            <div className="w-2 h-2 bg-[#F2E1C5] rounded-full animate-pulse"></div>
                            <span className="text-[#F2E1C5] font-light tracking-widest text-sm uppercase">Premium Collection</span>
                        </motion.div>

                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h2 className="text-5xl lg:text-6xl font-serif font-light text-[#F2E1C5] leading-tight">
                                Elevate Your Space with{" "}
                                <span className="italic font-normal bg-gradient-to-r from-[#F2E1C5] to-[#F2E1C5]/80 bg-clip-text text-transparent">
                                    Timeless Elegance
                                </span>
                            </h2>
                            
                            <div className="w-24 h-0.5 bg-gradient-to-r from-[#F2E1C5] to-transparent mx-auto"></div>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl lg:text-2xl text-[#F2E1C5]/80 font-light leading-relaxed max-w-3xl mx-auto"
                        >
                            Experience the perfect fusion of luxury and craftsmanship. Let our experts guide you in creating spaces that reflect your unique style with our exclusive marble collection.
                        </motion.p>

                        {/* CTA Button Group */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
                        >
                            <button className="group relative px-12 py-5 bg-[#F2E1C5] text-[#F2E1C5] hover:text-[#0E5543] rounded-lg font-medium text-lg hover:bg-[#F2E1C5]/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F2E1C5]/20">
                                <span className="relative z-10">Schedule a Consultation</span>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#F2E1C5] to-[#e8d4b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            
                            <button className="group px-10 py-5 border-2 border-[#F2E1C5]/40 text-[#F2E1C5] rounded-lg font-medium text-lg hover:border-[#F2E1C5] hover:bg-[#F2E1C5]/5 transition-all duration-300">
                                View Portfolio
                            </button>
                        </motion.div>

                        {/* Trust Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="pt-8"
                        >
                            <p className="text-[#F2E1C5]/60 text-sm font-light tracking-wide">
                                Trusted by 500+ luxury homeowners and designers worldwide
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-1/4 left-10 w-1 h-1 bg-[#F2E1C5] rounded-full opacity-40 animate-float"></div>
                <div className="absolute bottom-1/3 right-20 w-1 h-1 bg-[#F2E1C5] rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-[#F2E1C5] rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
            </section>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.05); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </>
    )
}