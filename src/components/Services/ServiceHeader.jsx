import React from "react";
import { motion } from "framer-motion";
import HeaderContent from "../Helper/HeaderContent";

const ServiceHeader = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-30 mb-6 sm:mb-8 md:mb-10 overflow-hidden"
            style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }} >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <HeaderContent
                        tagline="Crafted for Every Space"
                        title="Our Signature Services"
                        subtitle="From design consultation to flawless installation, we bring your vision to life with precision and elegance"
                    />
                </div>
            </section >
        </>
    );
};

export default ServiceHeader;
