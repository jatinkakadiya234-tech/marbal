import React from 'react'
import { motion } from 'framer-motion'
import HeaderContent from '../Helper/HeaderContent'

const GalleryHero = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-16 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <HeaderContent
                        tagline=''
                        title='Our Premium Projects'
                        subtitle=' Discover how our exquisite marble transforms spaces into works of art'
                    />
                </div>

            </section>

        </>
    )
}

export default GalleryHero
