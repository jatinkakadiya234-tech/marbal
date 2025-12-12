import React, { useState, useEffect } from 'react';

const ModernCarousel = ({ items, category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getItemStyle = (index) => {
    const diff = index - currentIndex;
    const totalItems = items.length;
    
    let position = diff;
    if (diff > totalItems / 2) position = diff - totalItems;
    if (diff < -totalItems / 2) position = diff + totalItems;

    const isActive = index === currentIndex;
    const isPrev = position === -1;
    const isNext = position === 1;
    
    let transform = '';
    let zIndex = 1;
    let opacity = 0.4;
    let scale = 0.8;

    if (isActive) {
      transform = 'translateX(0) translateZ(0)';
      zIndex = 3;
      opacity = 1;
      scale = 1;
    } else if (isPrev) {
      transform = 'translateX(-120px) translateZ(-100px) rotateY(35deg)';
      zIndex = 2;
      opacity = 0.7;
      scale = 0.9;
    } else if (isNext) {
      transform = 'translateX(120px) translateZ(-100px) rotateY(-35deg)';
      zIndex = 2;
      opacity = 0.7;
      scale = 0.9;
    } else if (position === -2) {
      transform = 'translateX(-200px) translateZ(-200px) rotateY(45deg)';
      opacity = 0.3;
      scale = 0.7;
    } else if (position === 2) {
      transform = 'translateX(200px) translateZ(-200px) rotateY(-45deg)';
      opacity = 0.3;
      scale = 0.7;
    } else {
      transform = `translateX(${position * 300}px) translateZ(-300px)`;
      opacity = 0;
      scale = 0.6;
    }

    return {
      transform: `${transform} scale(${scale})`,
      zIndex,
      opacity,
      transition: isAnimating ? 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
    };
  };

  return (
    // <div className="relative w-full h-96 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
    //   <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
    //     {items.map((item, index) => (
    //       <div
    //         key={item.id}
    //         className="absolute w-64 h-80 cursor-pointer"
    //         style={getItemStyle(index)}
    //         onClick={() => {
    //           if (index !== currentIndex) {
    //             setCurrentIndex(index);
    //           }
    //         }}
    //       >
    //         <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden group">
    //           <div className="h-3/4 overflow-hidden">
    //             <img
    //               src={item.image}
    //               alt={item.name}
    //               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
    //             />
    //           </div>
    //           <div className="h-1/4 p-4 flex flex-col justify-center">
    //             <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
    //             <p className="text-sm text-gray-600">{category}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Navigation Buttons */}
    //   <button
    //     onClick={prevSlide}
    //     className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-200"
    //   >
    //     <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    //     </svg>
    //   </button>
      
    //   <button
    //     onClick={nextSlide}
    //     className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-200"
    //   >
    //     <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    //     </svg>
    //   </button>

    //   {/* Dots Indicator */}
    //   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
    //     {items.map((_, index) => (
    //       <button
    //         key={index}
    //         onClick={() => setCurrentIndex(index)}
    //         className={`w-2 h-2 rounded-full transition-all duration-200 ${
    //           index === currentIndex ? 'bg-[#0E5543] w-6' : 'bg-gray-400'
    //         }`}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="w-full h-screen bg-gray-100 flex">
      {/* Left Content Section */}
      <div className="w-1/2 flex flex-col justify-center px-16 py-12">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
           css
          </h1>
          
          <p className="text-xl text-gray-700 italic mb-8 font-light">
          vssss
          </p>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {items.map((paragraph, index) => (
              <p key={index} className="text-base">
                {paragraph.name}
              </p>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center mt-12 space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2 ml-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gray-800 w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
};

export default ModernCarousel;