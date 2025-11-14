import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Import sample images
import agariaWhite from "../../assets/marbles/Agaria-White-Marble[1].jpg";
import iconicBlack from "../../assets/marbles/Iconic-black-marble-1200x1200-1[1].jpg";
import fantasyBrown from "../../assets/marbles/fantasy brown marble.jpg";
import mysticGreen from "../../assets/marbles/Mystic-Green-Marble[1].jpg";
import pinkMarble from "../../assets/marbles/pink-marble[1].jpg";

import blackGalaxy from "../../assets/Granites/Black Galaxy Granite From Ongole, India.jpeg";
import kashmirWhite from "../../assets/Granites/Kashmir White Granite _ Marella Granite & Marble.jpeg";
import tanBrown from "../../assets/Granites/Tanbrown granite.jpeg";
import imperialRed from "../../assets/Granites/IMPERIAL RED GRANITE.jpeg";



import teakwoodSandstone from "../../assets/Sandstone/Teakwood-Sandstone.jpg";
import rainbowSandstone from "../../assets/Sandstone/Rainbow Sandstone.jpeg";
import jaisalmerYellow from "../../assets/Sandstone/jaisalmer yellow sandstone.jpg";
import chocolateSandstone from "../../assets/Sandstone/Chocolate Sandstone.jpg";
import jodhpurPink from "../../assets/Sandstone/JODHPUR PINK Snadstone.jpg";

const categories = [
  {
    name: "Marble",
    products: [
      { id: 1, name: "Agaria White", image: agariaWhite },
      { id: 2, name: "Iconic Black", image: iconicBlack },
      { id: 3, name: "Fantasy Brown", image: fantasyBrown },
      { id: 4, name: "Mystic Green", image: mysticGreen },
      { id: 5, name: "Pink Marble", image: jodhpurPink },
    ],
  },
  {
    name: "Granite",
    products: [
      { id: 6, name: "Black Galaxy", image: blackGalaxy },
      { id: 7, name: "Kashmir White", image: kashmirWhite },
      { id: 8, name: "Tan Brown", image: tanBrown },
      { id: 9, name: "Imperial Red", image: imperialRed },
      { id: 9, name: "pinkMarble", image: pinkMarble },
    ],
  },
  {
    name: "Sandstone",
    products: [
      { id: 10, name: "Teakwood", image: teakwoodSandstone },
      { id: 11, name: "Rainbow", image: rainbowSandstone },
      { id: 12, name: "Jaisalmer Yellow", image: jaisalmerYellow },
      { id: 13, name: "Chocolate", image: chocolateSandstone },
      { id: 14, name: "Jodhpur Pink", image: jodhpurPink },
    ],
  },
];

export default function OurStones() {
  const [currentSlides, setCurrentSlides] = useState({});
  const navigate = useNavigate();

  const nextSlide = (categoryName, maxSlides) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [categoryName]: Math.min((prev[categoryName] || 0) + 1, maxSlides - 1),
    }));
  };

  const prevSlide = (categoryName) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [categoryName]: Math.max((prev[categoryName] || 0) - 1, 0),
    }));
  };

  const goToSlide = (categoryName, slideIndex) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [categoryName]: slideIndex,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-20">
          <h2
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] leading-tight w-full mb-4 mt-10 "
            style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}
          >
            <span className="relative">Our Premium Stones Collection</span>
          </h2>

          {/* Decorative line */}
          <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 w-20" />

          <p
            className="text-sm tracking-[0.3em] uppercase text-[#0E5543]/90 leading-relaxed font-medium"
            style={{
              fontFamily: "Montserrat",
              fontWeight: "500",
              letterSpacing: "0.02em",
            }}
          >
       Explore our exclusive range of premium stones, from exquisite marbles and timeless limestones to elegant granites
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
                    {category.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {category.products.length} Products Available
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-[#0E5543]/10 text-[#0E5543] text-xs font-medium rounded-full">
                    Premium Quality
                  </span>
                </div>
              </div>

              {/* Mobile Carousel */}
              <div className="sm:hidden relative mb-6">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300"
                    style={{
                      transform: `translateX(-${
                        (currentSlides[category.name] || 0) * 100
                      }%)`,
                    }}
                  >
                    {category.products.map((product) => (
                      <div
                        key={product.id}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div className="group cursor-pointer">
                          <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="mt-2">
                            <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center">
                              {product.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel Controls */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-[#0E5543] p-2 rounded-full shadow-lg hover:text-[#1A7A62]"
                  onClick={() => prevSlide(category.name)}
                >
                  <FiChevronLeft size={16} />
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0E5543] p-2 rounded-full shadow-lg hover:text-[#1A7A62]"
                  onClick={() =>
                    nextSlide(category.name, category.products.length)
                  }
                >
                  <FiChevronRight size={16} />
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {category.products.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === (currentSlides[category.name] || 0)
                          ? "bg-[#0E5543]"
                          : "bg-gray-300"
                      }`}
                      onClick={() => goToSlide(category.name, idx)}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
                {category.products.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center group-hover:text-[#0E5543] transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="border-t border-gray-100 pt-4">
                <button
                  className="w-full sm:w-auto text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium"
                  style={{ backgroundColor: "#0E5543" }}
                  onClick={() => navigate(`/${category.name.toLowerCase()}`)}
                >
                  View All {category.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
