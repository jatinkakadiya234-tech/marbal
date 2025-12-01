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
import rainbowSandstone from "../../assets/Sandstone/rainbow-1.jpg";
import jaisalmerYellow from "../../assets/Sandstone/jaisalmer yellow sandstone.jpg";
import chocolateSandstone from "../../assets/Sandstone/Chocolate Sandstone.jpg";
import jodhpurPink from "../../assets/Sandstone/JODHPUR PINK Snadstone.jpg";

const categories = [
  {
    name: "Marble",
    products: [
      { id: 1, name: "Agaria White", image: agariaWhite },
      { id: 7, name: "Iconic Black", image: iconicBlack },
      { id: 6, name: "Fantasy Brown", image: fantasyBrown },
      { id: 13, name: "Mystic Green", image: mysticGreen },
      { id: 15, name: "Pink Marble", image: pinkMarble },
    ],
  },
  {
    name: "Granite",
    products: [
      { id: 21, name: "Black Galaxy", image: blackGalaxy },
      { id: 38, name: "Kashmir White", image: kashmirWhite },
      { id: 52, name: "Tan Brown", image: tanBrown },
      { id: 34, name: "Imperial Red", image: imperialRed },
    ],
  },
  {
    name: "Sandstone",
    products: [
      { id: 63, name: "Teakwood Sandstone", image: teakwoodSandstone },
      { id: 61, name: "Rainbow Sandstone", image: rainbowSandstone },
      { id: 57, name: "Jaisalmer Yellow", image: jaisalmerYellow },
      { id: 54, name: "Chocolate Sandstone", image: chocolateSandstone },
      { id: 58, name: "Jodhpur Pink", image: jodhpurPink },
    ],
  },
];

const applications = [
  {
    id: 1,
    title: "Kitchen Countertops",
    image: "/kitchen.jpg",
    alt: "Kitchen Countertops",
    description: "Transform your kitchen with our premium granite and marble countertops. Heat-resistant, durable, and elegant.",
    features: ["Heat & scratch resistant", "Easy to clean & maintain", "Available in multiple finishes"]
  },
  {
    id: 2,
    title: "Luxury Flooring",
    image: "/livingrooom.jpg",
    alt: "Flooring",
    description: "Create stunning floors with our marble and granite tiles. Perfect for both residential and commercial spaces.",
    features: ["Non-slip surface options", "Water resistant", "Long-lasting durability"]
  },
  {
    id: 3,
    title: "Wall Cladding",
    image: "/bedroom.jpg",
    alt: "Wall Cladding",
    description: "Enhance your interiors with natural stone wall cladding. Add texture and elegance to any space.",
    features: ["Natural texture & patterns", "Moisture resistant", "Easy installation"]
  },
  {
    id: 4,
    title: "Bathroom Vanities",
    image: "/kitchen2.jpg",
    alt: "Bathroom",
    description: "Create luxurious bathrooms with our water-resistant marble and granite vanity tops.",
    features: ["Water & stain resistant", "Hygienic surface", "Custom edge profiles"]
  },
  {
    id: 5,
    title: "Outdoor Spaces",
    image: "/furniture.jpg",
    alt: "Outdoor",
    description: "Weather-resistant sandstone and granite for patios, walkways, and outdoor kitchens.",
    features: ["Weather resistant", "Anti-slip surface", "UV resistant colors"]
  },
  {
    id: 6,
    title: "Commercial Projects",
    image: "/cozyroom.jpg",
    alt: "Commercial",
    description: "Premium stones for hotels, offices, and commercial buildings. Durable and impressive.",
    features: ["High traffic durability", "Low maintenance", "Professional appearance"]
  }
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
              className="bg-white  shadow-sm border border-gray-200 p-8"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
                    {category.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500"
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '200',  }}>
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
                        <div 
                          className="group cursor-pointer"
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          <div className="relative overflow-hidden  bg-gray-100 aspect-square">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="mt-2">
                            <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center"
                              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '200',  }}>
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
                  className="absolute left-2 top-[140px] -translate-y-1/2 text-[#0E5543] p-2 rounded-full shadow-lg hover:text-[#1A7A62]"
                  onClick={() => prevSlide(category.name)}
                >
                  <FiChevronLeft size={16} />
                </button>
                <button
                  className="absolute right-2 top-[140px] -translate-y-1/2 text-[#0E5543] p-2 rounded-full shadow-lg hover:text-[#1A7A62]"
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

              {/* Desktop Carousel */}
              <div className="hidden sm:block relative mb-6">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 space-x-4"
                    style={{
                      transform: `translateX(-${(currentSlides[category.name] || 0) * 25}%)`,
                    }}
                  >
                    {category.products.map((product) => (
                      <div 
                        key={product.id} 
                        className="flex-shrink-0 w-1/4 group cursor-pointer"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        <div className="relative overflow-hidden bg-gray-100 aspect-square">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                        <div className="mt-2">
                          <h3 className="text-xs sm:text-sm font-medium text-gray-800 text-center group-hover:text-[#0E5543] transition-colors"
                            style={{ fontFamily: 'Arial, sans-serif', fontWeight: '200' }}>
                            {product.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Desktop Carousel Controls */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-[#0E5543] p-2 rounded-full shadow-lg hover:text-[#1A7A62] bg-white"
                  onClick={() => prevSlide(category.name)}
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0E5543] p-2 rounded-full shadow-lg hover:text-[#1A7A62] bg-white"
                  onClick={() => nextSlide(category.name, Math.ceil(category.products.length / 4))}
                >
                  <FiChevronRight size={20} />
                </button>
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

        {/* How Our Stones Are Used Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-[#0E5543] mb-4"
             style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}>
              How Our Stones Transform Spaces
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6 w-20" />
            <p className="text-gray-600 max-w-2xl mx-auto"
             style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}>
              Discover the endless possibilities of our premium stones in real-world applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <div key={app.id} className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.alt} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0E5543] mb-3"
                  style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}
                  >{app.title}</h3>
                  <p className="text-gray-600 mb-4"
                  style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}
                  >{app.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1"
                  style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}>
                    {app.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#0E5543] text-white px-8 py-3 rounded-lg hover:bg-[#1A7A62] transition-colors font-medium"
            >
              Get Custom Quote for Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
