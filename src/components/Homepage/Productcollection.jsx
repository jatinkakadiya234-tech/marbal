import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiCheck, FiPause, FiPlay } from 'react-icons/fi';

const ProductCollection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState(0);
    const carouselRef = useRef(null);

    // Sample product data
    const products = [
        {
            id: 1,
            name: "Carrara Bianco",
            size: "60x60 cm",
            price: "£89.99",
            note: "Classic white with subtle gray veining",
            image: "https://images.unsplash.com/photo-1588206471333-b52336b439e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFyYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 2,
            name: "Calacatta Gold",
            size: "60x120 cm",
            price: "£129.99",
            note: "Luxurious marble with dramatic gold veining",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 3,
            name: "Statuario Venato",
            size: "75x150 cm",
            price: "£149.99",
            note: "Elegant white marble with gray veining",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 4,
            name: "Emperador Dark",
            size: "60x60 cm",
            price: "£79.99",
            note: "Rich brown marble with white veins",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 5,
            name: "Crema Marfil",
            size: "90x90 cm",
            price: "£99.99",
            note: "Warm beige tone for various design styles",
            image: "https://images.unsplash.com/photo-1618219908414-cf2c5b0442cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmJsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 6,
            name: "Calacatta Gold",
            size: "60x120 cm",
            price: "£129.99",
            note: "Luxurious marble with dramatic gold veining",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: 7,
            name: "Calacatta Gold",
            size: "60x120 cm",
            price: "£129.99",
            note: "Luxurious marble with dramatic gold veining",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
    ];

    // Autoplay functionality
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide();
            }, 4000); // Change slide every 4 seconds
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoPlaying, currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Calculate visible products
    const getVisibleProducts = () => {
        const totalProducts = products.length;
        const visibleIndices = [];

        // Show 5 products: two before, current, two after
        for (let i = -2; i <= 2; i++) {
            let index = currentIndex + i;
            if (index < 0) index = totalProducts + index;
            if (index >= totalProducts) index = index - totalProducts;
            visibleIndices.push(index);
        }

        return visibleIndices.map((index, i) => ({
            ...products[index],
            position: i - 2, // -2, -1, 0, 1, 2
            isCenter: i === 2
        }));
    };

    const visibleProducts = getVisibleProducts();

    return (
        <section className="py-20 bg-gradient-to-b from-[#0E5543] to-[#1a7a5f] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="w-2 h-2 bg-[#F2E1C5] rounded-full mr-2"></div>
                        <span className="text-sm font-semibold tracking-widest uppercase text-[#F2E1C5]">
                            Featured Collection
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Premium Marble Selection
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#F2E1C5] to-[#8DB596] mx-auto mb-8"></div>
                    <p className="text-lg text-[#F2E1C5] max-w-3xl mx-auto">
                        Discover our exquisite range of premium marbles, meticulously selected for their unique beauty and exceptional quality.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative" ref={carouselRef}>
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#0E5543] hover:bg-[#0a3d30] p-3 rounded-full shadow-lg border border-[#F2E1C5]/30 transition-all duration-300 group"
                        aria-label="Previous slide"
                    >
                        <FiChevronLeft className="text-2xl text-[#F2E1C5] group-hover:scale-110 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#0E5543] hover:bg-[#0a3d30] p-3 rounded-full shadow-lg border border-[#F2E1C5]/30 transition-all duration-300 group"
                        aria-label="Next slide"
                    >
                        <FiChevronRight className="text-2xl text-[#F2E1C5] group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Autoplay Toggle */}
                    <button
                        onClick={toggleAutoPlay}
                        className="absolute top-4 right-4 z-20 bg-[#0E5543] hover:bg-[#0a3d30] p-2 rounded-full shadow-lg border border-[#F2E1C5]/30 transition-all duration-300 group"
                        aria-label={isAutoPlaying ? "Pause autoplay" : "Play autoplay"}
                    >
                        {isAutoPlaying ? (
                            <FiPause className="text-lg text-[#F2E1C5] group-hover:scale-110 transition-transform" />
                        ) : (
                            <FiPlay className="text-lg text-[#F2E1C5] group-hover:scale-110 transition-transform" />
                        )}
                    </button>

                    {/* Carousel */}
                    <div className="flex items-center justify-center w-full h-[500px] relative">
                        <AnimatePresence initial={false} custom={direction}>
                            {visibleProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    className="absolute"
                                    custom={product.position}
                                    initial={{
                                        x: product.position * 180,
                                        scale: 1 - Math.abs(product.position) * 0.15,
                                        opacity: 1 - Math.abs(product.position) * 0.3,
                                        zIndex: 5 - Math.abs(product.position)
                                    }}
                                    animate={{
                                        x: product.position * 120,
                                        scale: 1 - Math.abs(product.position) * 0.15,
                                        opacity: 1 - Math.abs(product.position) * 0.3,
                                        zIndex: 5 - Math.abs(product.position)
                                    }}
                                    exit={{
                                        x: product.position * 180,
                                        scale: 1 - Math.abs(product.position) * 0.15,
                                        opacity: 1 - Math.abs(product.position) * 0.3,
                                    }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    whileHover={{
                                        scale: product.isCenter ? 1.03 : 0.98,
                                    }}
                                >
                                    <div className={`bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-lg rounded-xl overflow-hidden border transition-all duration-300 ${product.isCenter ? 'border-[#F2E1C5] shadow-lg' : 'border-white/10 shadow-md'} relative`}
                                        style={{
                                            width: product.isCenter ? '320px' : '260px',
                                            height: product.isCenter ? '420px' : '360px'
                                        }}>
                                        {/* Premium badge for center card */}
                                        {product.isCenter && (
                                            <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#F2E1C5] to-[#e6d0b3] text-[#0E5543] text-xs font-bold px-2 py-1 rounded-full shadow-md">
                                                PREMIUM
                                            </div>
                                        )}

                                        {/* Product Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/70 to-transparent"></div>
                                        </div>

                                        {/* Product Details */}
                                        <div className="p-5 text-center">
                                            {/* Product Name */}
                                            <h3 className={`font-serif font-bold mb-2 ${product.isCenter ? 'text-xl text-white' : 'text-lg text-[#F2E1C5]'}`}>
                                                {product.name}
                                            </h3>

                                            {/* Size */}
                                            <div className="flex items-center justify-center mb-3">
                                                <span className="text-xs font-medium text-[#F2E1C5] bg-[#0E5543]/70 px-2 py-1 rounded-full">
                                                    {product.size}
                                                </span>
                                            </div>

                                            {/* Price */}
                                            <div className="mb-3">
                                                <span className={`font-bold ${product.isCenter ? 'text-2xl text-white' : 'text-xl text-[#F2E1C5]'}`}>
                                                    {product.price}
                                                </span>
                                                <span className="text-[#F2E1C5]/80 text-sm ml-1">/sqm</span>
                                            </div>

                                            {/* Note */}
                                            <p className="text-xs text-[#F2E1C5] italic mb-4 leading-tight">
                                                {product.note}
                                            </p>

                                            {/* In Stock Indicator - Only show on center card */}
                                            {product.isCenter && (
                                                <div className="flex items-center justify-center mt-2 bg-[#0E5543]/50 py-2 rounded-lg">
                                                    <FiCheck className="text-[#F2E1C5] mr-1 text-sm" />
                                                    <span className="text-xs text-[#F2E1C5]">In stock • Ready to ship</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center mt-16 space-x-3">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-[#F2E1C5] scale-125'
                                        : 'bg-[#F2E1C5]/30 hover:bg-[#F2E1C5]/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-16">
                    <p className="text-[#F2E1C5] max-w-2xl mx-auto mb-8">
                        All our marbles are ethically sourced and come with a quality guarantee.
                        Expert consultation included with every order.
                    </p>
                    <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#F2E1C5] to-[#e6d0b3] text-[#0E5543] font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto group">
                        View Full Collection
                        <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductCollection;