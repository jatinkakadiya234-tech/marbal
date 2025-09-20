import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProductCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('next'); // Track slide direction for animation

  const products = [
    {
      id: 1,
      name: "Carrara Bianco",
      size: "60x60 cm",
      price: "£89.99",
      image: "https://images.unsplash.com/photo-1588206471333-b52336b439e6?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Calacatta Gold",
      size: "60x120 cm",
      price: "£129.99",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Statuario Venato",
      size: "75x150 cm",
      price: "£149.99",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Emperador Dark",
      size: "60x60 cm",
      price: "£79.99",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60"
    },
  ];

  // Autoplay
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNextSlide();
      }, 4000);
    }
    return () => interval && clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleNextSlide = () => {
    setDirection('next');
    setCurrentIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const itemsPerView = 4;
  const total = products.length;
  const windowItems = Array.from({ length: itemsPerView }, (_, i) =>
    products[(currentIndex + i) % total]
  );

  return (
    <section className="py-10 bg-[#F2E1C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* --- MOBILE (1 product only, no bg on arrows) --- */}
          <div className="block md:hidden relative flex items-center justify-between px-2 sm:px-4">
            <button
              onClick={handlePrevSlide}
              style={{backgroundColor:"transparent",borderColor:"transparent"}}
              className="p-1 sm:p-2 text-gray-600 hover:text-black z-10 mb-20 transition-transform duration-300 hover:scale-110"
            >
              <FiChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>

            <div className="text-center mx-2 sm:mx-4 flex-1 overflow-hidden">
              <div 
                className="w-full aspect-square overflow-hidden rounded-lg shadow-sm relative"
                key={currentIndex}
              >
                <img
                  src={products[currentIndex].image}
                  alt={products[currentIndex].name}
                  className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    direction === 'next' 
                      ? 'animate-fade-in-right' 
                      : 'animate-fade-in-left'
                  }`}
                />
              </div>
              <div className="mt-3 sm:mt-4 space-y-1">
                <div className="text-sm sm:text-base font-medium text-gray-800 transition-all duration-300">
                  {products[currentIndex].name}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 transition-all duration-300">
                  {products[currentIndex].size}
                </div>
              </div>
              <div className="mt-2 sm:mt-3">
                <div className="text-sm sm:text-base text-gray-800 font-semibold transition-all duration-300">
                  {products[currentIndex].price} / Job Lot
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 sm:mt-1 transition-all duration-300">
                  (including VAT)
                </div>
              </div>
            </div>

            <button
              onClick={handleNextSlide}
              style={{borderColor:"transparent",backgroundColor:"transparent"}}
              className="p-1 sm:p-2 text-gray-600 hover:text-black z-10 mb-20 transition-transform duration-300 hover:scale-110"
            >
              <FiChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
          </div>

          {/* --- DESKTOP GRID (4 products) --- */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {windowItems.map((p, index) => (
              <div 
                key={`${p.id}-${currentIndex}`} 
                className="text-center transition-all duration-500 ease-in-out transform"
                style={{
                  animation: `${direction === 'next' ? 'fade-in-up' : 'fade-in-down'} 0.5s ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <div className="text-sm md:text-base text-gray-800 font-medium transition-colors duration-300">
                    {p.name}
                  </div>
                  <div className="text-xs text-gray-600 transition-colors duration-300">{p.size}</div>
                </div>
                <div className="mt-3">
                  <div className="text-gray-800 font-semibold transition-colors duration-300">
                    {p.price} / Job Lot
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1 transition-colors duration-300">
                    (including VAT)
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* desktop arrows */}
          <button
            onClick={handlePrevSlide}
            style={{backgroundColor:"transparent", color:"GrayText"}}
            className="hidden md:flex absolute -left-16 top-40 -translate-y-1/2 p-1 transition-all duration-300 hover:scale-110 hover:text-gray-800"
          >
            <FiChevronLeft className="w-9 h-9" />
          </button>

          <button
            onClick={handleNextSlide}
            style={{backgroundColor:"transparent", color:"GrayText"}}
            className="hidden md:flex absolute -right-16 top-40 -translate-y-1/2 p-1 transition-all duration-300 hover:scale-110 hover:text-gray-800"
          >
            <FiChevronRight className="w-9 h-9" />
          </button>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.5s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProductCollection;