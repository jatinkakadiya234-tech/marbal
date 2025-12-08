import React, { useState } from 'react';

const QuarryFlautCard = ({ mainProduct, secondaryProduct }) => {
  const [activeProduct, setActiveProduct] = useState('main');

  return (
    <div className="flex bg-white h-96 mb-8">
      {/* Left Content Panel */}
      <div className="w-1/3 p-12 flex flex-col justify-center bg-gray-50">
        <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight">
          {activeProduct === 'main' ? mainProduct.name : secondaryProduct.name}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-12 font-light italic">
          {activeProduct === 'main' ? mainProduct.description : secondaryProduct.description}
        </p>
        <div className="space-y-3">
          <p className="text-gray-900 font-semibold text-sm tracking-widest">
            {activeProduct === 'main' ? mainProduct.origin : secondaryProduct.origin}
          </p>
          <p className="text-gray-900 font-semibold text-sm tracking-widest">
            {activeProduct === 'main' ? mainProduct.type : secondaryProduct.type}
          </p>
          <p className="text-gray-900 font-semibold text-sm tracking-widest">
            {activeProduct === 'main' ? mainProduct.category : secondaryProduct.category}
          </p>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="w-2/3 flex relative">
        {/* Main Image */}
        <div 
          className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
            activeProduct === 'main' ? 'w-full' : 'w-1/4'
          }`}
          onMouseEnter={() => setActiveProduct('main')}
        >
          <img
            src={mainProduct.image}
            alt={mainProduct.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Secondary Image */}
        <div 
          className={`relative overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${
            activeProduct === 'secondary' ? 'w-full' : 'w-1/4'
          }`}
          onMouseEnter={() => setActiveProduct('secondary')}
        >
          <img
            src={secondaryProduct.image}
            alt={secondaryProduct.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default QuarryFlautCard;