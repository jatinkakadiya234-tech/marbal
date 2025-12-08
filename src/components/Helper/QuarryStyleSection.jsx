import React from 'react';
import QuarryStyleCard from './QuarryStyleCard';

const QuarryStyleSection = () => {
  const productPairs = [
    {
      product1: {
        name: "Grey Grigio",
        description: "When colours are too colourful, Grey Grigio is the classic choice. Its light veins are just about perfect for any space.",
        origin: "Italy",
        type: "MARBLE",
        category: "INTERIORS",
        mainImage: "/bedroom.jpg"
      },
      product2: {
        name: "Calacatta Gold",
        description: "Luxurious marble with dramatic golden veining that creates stunning visual impact. Perfect for high-end applications.",
        origin: "Italy",
        type: "MARBLE", 
        category: "INTERIORS",
        mainImage: "/kitchen.jpg"
      }
    },
    {
      product1: {
        name: "Forest Green",
        description: "Deep forest green marble with natural patterns that bring nature's tranquility into your space.",
        origin: "India",
        type: "MARBLE",
        category: "INTERIORS",
        mainImage: "/livingrooom.jpg"
      },
      product2: {
        name: "Royal Cream",
        description: "Elegant cream marble with subtle veining, perfect for creating sophisticated and timeless interiors.",
        origin: "India",
        type: "MARBLE",
        category: "INTERIORS",
        mainImage: "/kitchen2.jpg"
      }
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            How Our Stones Transform Spaces
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6 w-20" />
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Discover the endless possibilities of our premium stones in real-world applications
          </p>
        </div>

        <div className="space-y-8">
          {productPairs.map((pair, index) => (
            <QuarryStyleCard key={index} product1={pair.product1} product2={pair.product2} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#0E5543] text-white px-8 py-3 rounded-lg hover:bg-[#1A7A62] transition-colors font-medium">
            Get Custom Quote for Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuarryStyleSection;