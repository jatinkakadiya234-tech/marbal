import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiPause, FiChevronRight, FiZoomIn, FiAward, FiSettings, FiTool, FiBox } from 'react-icons/fi';
import Arthero from './ArtHero';
import Section1 from './Section1';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';


const TechnologyShowcase = () => {



    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };


    return (
        <div className="min-h-screen py-6 sm:py-8 md:py-10 pt-16 sm:pt-18 md:pt-20 bg-white text-[#0E5543]" 
        >

            <Arthero />

            <Section1 />

            <Section3 />

            <Section4 />

            <Section5 />
        </div>
    );
};

export default TechnologyShowcase;