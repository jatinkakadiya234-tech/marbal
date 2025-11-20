import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// Import granite images
import absoluteBlack from '../../assets/Granites/Absolute Black  Granite Countertops and Tile.jpeg'
import alaskaGold from '../../assets/Granites/Alaska Gold Granite Supplier in India.jpeg'
import alaskaWhite from '../../assets/Granites/Alaska White Granite.jpeg'
import alpineWhite from '../../assets/Granites/Alpine White.jpeg'
import blackGalaxy from '../../assets/Granites/Black Galaxy Granite From Ongole, India.jpeg'
import blackPearl from '../../assets/Granites/Black Pearl Granite.jpeg'
import blackBeauty from '../../assets/Granites/Black-beauty-granite.webp'
import brunoRed from '../../assets/Granites/bruno-red-granite-1537608397-4328307.jpg'
import champagneGold from '../../assets/Granites/champagne-gold-granite-tile--926486-0-B.jpg'
import chimaBlue from '../../assets/Granites/chima-blue-granite-2012014226-0ul1gqog.avif'
import chimaPink from '../../assets/Granites/chima-pink-granite-1566713706-5053745.jpeg'
import crystalYellow from '../../assets/Granites/Crystal yellow granite.jpeg'
import desertBrown from '../../assets/Granites/Desert Brown Granite - Kitchen Countertop Ideas.jpeg'
import dessertGreen from '../../assets/Granites/Dessert Green Granite.jpeg'
import ambaWhite from '../../assets/Granites/granite_Amba-White_Ym0ggR4uINTH96XsG9DW.jpg'
import ikonBrown from '../../assets/Granites/Ikon Brown Grantine.jpeg'
import impalaBlack from '../../assets/Granites/Impala Black.jpeg'
import imperialRed from '../../assets/Granites/IMPERIAL RED GRANITE.jpeg'
import ivoryFantasy from '../../assets/Granites/IVORY FANTASY GRANITE - Ivory _ 20MM _ Polished _ Per Sq Mt.jpeg'
import jeerawalWhite from '../../assets/Granites/jeerawal-white-granite-1000x1000.jpg'
import jhansiRed from '../../assets/Granites/JHANSI RED GRANITE.jpeg'
import kashmirWhite from '../../assets/Granites/Kashmir White Granite _ Marella Granite & Marble.jpeg'
import koliwadaBlue from '../../assets/Granites/Koliwada Blue Granite.jpeg'
import lakhaRed from '../../assets/Granites/LAKHA RED GRANITE -.jpeg'
import magicWhite from '../../assets/Granites/magic-white-granite-slabs-tiles-p2787-1B.jpg'
import marigold from '../../assets/Granites/marigold-granite-1512372173-3494734.jpg'
import merryWood from '../../assets/Granites/merry-wood-granite.jpg'
import newImperialGold from '../../assets/Granites/New Imperial Gold          Stones Picture -         Other Country         Granite         Image.jpeg'
import pWhite from '../../assets/Granites/P WHITE GRANITE.jpeg'
import rajasthanBlack from '../../assets/Granites/Rajasthan Black Granite.jpg'
import rosyPink from '../../assets/Granites/Rosy Pink Granite is a medium variation granite of soft peaches, reds and ivories with black spots.jpeg'
import royalCream from '../../assets/Granites/Royal Cream Granite.jpeg'
import royalGreen from '../../assets/Granites/royal-green-granite-1510815057-3455614.jpg'
import sapphireBlue from '../../assets/Granites/Sapphire Blue.jpeg'
import sunriseGold from '../../assets/Granites/Sunrise Gold granite.jpeg'
import tanBrown from '../../assets/Granites/Tanbrown granite.jpeg'

const graniteProducts = [
  { id: 17, name: "Absolute Black", image: absoluteBlack },
  { id: 18, name: "Alaska Gold", image: alaskaGold },
  { id: 19, name: "Alaska White", image: alaskaWhite },
  { id: 20, name: "Alpine White", image: alpineWhite },
  { id: 21, name: "Black Galaxy", image: blackGalaxy },
  { id: 22, name: "Black Pearl", image: blackPearl },
  { id: 23, name: "Black Beauty", image: blackBeauty },
  { id: 24, name: "Bruno Red", image: brunoRed },
  { id: 25, name: "Champagne Gold", image: champagneGold },
  { id: 26, name: "Chima Blue", image: chimaBlue },
  { id: 27, name: "Chima Pink", image: chimaPink },
  { id: 28, name: "Crystal Yellow", image: crystalYellow },
  { id: 29, name: "Desert Brown", image: desertBrown },
  { id: 30, name: "Dessert Green", image: dessertGreen },
  { id: 31, name: "Amba White", image: ambaWhite },
  { id: 32, name: "Ikon Brown", image: ikonBrown },
  { id: 33, name: "Impala Black", image: impalaBlack },
  { id: 34, name: "Imperial Red", image: imperialRed },
  { id: 35, name: "Ivory Fantasy", image: ivoryFantasy },
  { id: 36, name: "Jeerawal White", image: jeerawalWhite },
  { id: 37, name: "Jhansi Red", image: jhansiRed },
  { id: 38, name: "Kashmir White", image: kashmirWhite },
  { id: 39, name: "Koliwada Blue", image: koliwadaBlue },
  { id: 40, name: "Lakha Red", image: lakhaRed },
  { id: 41, name: "Magic White", image: magicWhite },
  { id: 42, name: "Marigold", image: marigold },
  { id: 43, name: "Merry Wood", image: merryWood },
  { id: 44, name: "New Imperial Gold", image: newImperialGold },
  { id: 45, name: "P White", image: pWhite },
  { id: 46, name: "Rajasthan Black", image: rajasthanBlack },
  { id: 47, name: "Rosy Pink", image: rosyPink },
  { id: 48, name: "Royal Cream", image: royalCream },
  { id: 49, name: "Royal Green", image: royalGreen },
  { id: 50, name: "Sapphire Blue", image: sapphireBlue },
  { id: 51, name: "Sunrise Gold", image: sunriseGold },
  { id: 52, name: "Tan Brown", image: tanBrown }
];

export default function Granite() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(() => {
    const nameParam = searchParams.get('name')
    if (nameParam) {
      setSearchTerm(nameParam)
    }
  }, [searchParams])
  
  const filteredProducts = graniteProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const maxSlides = Math.ceil(filteredProducts.length / 4)
  
  const handleSearch = (value) => {
    setSearchTerm(value)
    if (value) {
      setSearchParams({ name: value })
    } else {
      setSearchParams({})
    }
  }

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides - 1))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0))
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0E5543]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A7A62]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Premium Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Durable <span className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent">Granite</span> Collection
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-32"></div>
            <div className="w-3 h-3 bg-[#0E5543] rounded-full mx-4"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-32"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our extensive range of premium granite stones, engineered for strength and designed for modern applications.
          </p>
          
          {/* Search Filter */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search granite by name..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden relative mb-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {filteredProducts.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-2">
                  <div 
                    className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0E5543] shadow-lg">
                          Premium
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-[#0E5543] transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="mt-3 flex justify-center">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <button
            className="absolute left-2  top-[120px] -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0E5543] p-3 rounded-full shadow-xl hover:bg-white hover:text-[#1A7A62] transition-all duration-300"
            onClick={prevSlide}
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            className="absolute right-2 top-[120px] -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0E5543] p-3 rounded-full shadow-xl hover:bg-white hover:text-[#1A7A62] transition-all duration-300"
            onClick={nextSlide}
          >
            <FiChevronRight size={18} />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {filteredProducts.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? "bg-gradient-to-r from-[#0E5543] to-[#1A7A62] shadow-lg" 
                    : "bg-gray-300"
                }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Carousel - 4 products per row */}
        <div className="hidden sm:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 "
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {Array.from({ length: maxSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-4 gap-6">
                  {filteredProducts
                    .slice(slideIndex * 4, slideIndex * 4 + 4)
                    .map((product) => (
                      <div 
                        key={product.id} 
                        className="group bg-white  shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-100"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 right-4">
                            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0E5543] shadow-lg">
                              Premium
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="bg-white/90 backdrop-blur-sm text-[#0E5543] px-4 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 text-center group-hover:text-[#0E5543] transition-colors duration-300">
                            {product.name}
                          </h3>
                          <div className="mt-3 flex justify-center">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Controls */}
          <button
            className="absolute left-4 top-[130px] -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0E5543] p-4 rounded-full shadow-2xl hover:bg-white hover:text-[#1A7A62] transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-[130px] -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0E5543] p-4 rounded-full shadow-2xl hover:bg-white hover:text-[#1A7A62] transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={nextSlide}
            disabled={currentSlide === maxSlides - 1}
          >
            <FiChevronRight size={24} />
          </button>

          {/* Desktop Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: maxSlides }, (_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  idx === currentSlide 
                    ? "bg-gradient-to-r from-[#0E5543] to-[#1A7A62] shadow-lg" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Durable Stone Solutions?</h2>
            <p className="text-lg mb-6 opacity-90">Get expert advice on granite selection for your construction projects</p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-[#0E5543] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}