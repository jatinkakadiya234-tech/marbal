import React from 'react'
import { motion } from 'framer-motion';
import HeaderContent from '../Helper/HeaderContent';

const Arthero = () => {
    return (
        <>
            {/* Hero Section */}

            <section className="relative pt-14 overflow-hidden"
            style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <HeaderContent
                        tagline='Innovation in Every Detail'
                        title='Cutting-Edge Craftsmanship'
                        subtitle='Harnessing advanced technology to shape natural stone with unmatched precision and timeless elegance.' />
                </div>
            </section>
        </>
    )
}

export default Arthero
