import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useNavigate, useSearchParams } from 'react-router-dom'

// Import marble images
import agariaWhite from '../../assets/marbles/Agaria-White-Marble[1].jpg'
import aravaliGreen from '../../assets/marbles/Aravali-Green[1].jpg'
import bidasarBrown from '../../assets/marbles/bidasar brown marble.jpg'
import bidasarGreen from '../../assets/marbles/bidasar-green-500x500[1].jpg'
import cloudGrey from '../../assets/marbles/Cloud-Grey-Marble[1].jpg'
import fantasyBrown from '../../assets/marbles/fantasy brown marble.jpg'
import iconicBlack from '../../assets/marbles/Iconic-black-marble-1200x1200-1[1].jpg'
import iconicGold from '../../assets/marbles/iconic-gold-marble-slabs-985059-1-B.jpeg.jpg'
import indianBlack from '../../assets/marbles/indian-black-marble[1].jpg'
import katniBeige from '../../assets/marbles/katni-beige-marble-500x500[1].jpg'
import merryGold from '../../assets/marbles/merry-gold-500x500[1].jpg'
import morchanaGold from '../../assets/marbles/morchana gold marble.jpg'
import mysticGreen from '../../assets/marbles/Mystic-Green-Marble[1].jpg'
import pinkAraveli from '../../assets/marbles/pink araveli.jpg'
import pinkMarble from '../../assets/marbles/pink-marble[1].jpg'
import rossoLavante from '../../assets/marbles/rosso-lavante-italian-marble[1].jpg'

const marbleProducts = [
  { id: 1, name: "Agaria White", image: agariaWhite },
  { id: 2, name: "Aravali Green", image: aravaliGreen },
  { id: 3, name: "Bidasar Brown", image: bidasarBrown },
  { id: 4, name: "Bidasar Green", image: bidasarGreen },
  { id: 5, name: "Cloud Grey", image: cloudGrey },
  { id: 6, name: "Fantasy Brown", image: fantasyBrown },
  { id: 7, name: "Iconic Black", image: iconicBlack },
  { id: 8, name: "Iconic Gold", image: iconicGold },
  { id: 9, name: "Indian Black", image: indianBlack },
  { id: 10, name: "Katni Beige", image: katniBeige },
  { id: 11, name: "Merry Gold", image: merryGold },
  { id: 12, name: "Morchana Gold", image: morchanaGold },
  { id: 13, name: "Mystic Green", image: mysticGreen },
  { id: 14, name: "Pink Araveli", image: pinkAraveli },
  { id: 15, name: "Pink Marble", image: pinkMarble },
  { id: 16, name: "Rosso Lavante", image: rossoLavante }
];

export default function Marble() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(() => {
    const nameParam = searchParams.get('name')
    if (nameParam) {
      setSearchTerm(nameParam)
    }
  }, [searchParams])
  
  const filteredProducts = marbleProducts.filter(product => 
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
            Exquisite <span className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent">Marble</span> Collection
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-32"></div>
            <div className="w-3 h-3 bg-[#0E5543] rounded-full mx-4"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-32"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our handpicked selection of premium marble stones, each piece carefully sourced for exceptional beauty and durability.
          </p>
          
          {/* Search Filter */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search marble by name..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden relative mb-6">
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
            className="absolute left-2 top-[120px] -translate-y-1/2 text-[#0E5543] p-2 rounded-full shadow-lg hover:text-[#1A7A62] bg-white"
            onClick={prevSlide}
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            className="absolute right-2 top-[120px] -translate-y-1/2 text-[#0E5543] p-2 rounded-full shadow-lg hover:text-[#1A7A62] bg-white"
            onClick={nextSlide}
          >
            <FiChevronRight size={16} />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {filteredProducts.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentSlide ? "bg-[#0E5543]" : "bg-gray-300"
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
              className="flex transition-transform duration-300"
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
            className="absolute left-2 top-[120px] -translate-y-1/2 text-[#0E5543] p-3 rounded-full shadow-lg hover:text-[#1A7A62] bg-white"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            className="absolute right-2 top-[120px] -translate-y-1/2 text-[#0E5543] p-3 rounded-full shadow-lg hover:text-[#1A7A62] bg-white"
            onClick={nextSlide}
            disabled={currentSlide === maxSlides - 1}
          >
            <FiChevronRight size={24} />
          </button>

          {/* Desktop Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxSlides }, (_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentSlide ? "bg-[#0E5543]" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
        
        {/* About Rishabh Green Marbles */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best <span className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent">Marble Exporters</span> in India
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-24"></div>
              <div className="w-2 h-2 bg-[#0E5543] rounded-full mx-3"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-24"></div>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              Rishabh Green Marbles features among the leading marble exporters in India, celebrated by clients across Saudi Arabia, Dubai, Qatar, and the best European countries. We are not just precision.
            </p>
          </div>

          {/* Marble Production Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Stages of <span className="text-[#0E5543]">Marble Production</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Extraction & Quarrying</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The process starts with extraction and quarrying. Quarrying experts assess deposits, cut marble blocks using diamond wire saws, and transport them using heavy machinery.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Processing & Treatment</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Blocks are sent to the factory where they're cut into slabs, treated with resin for cracks, and precisely sized using CNC technology.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Finishing & Quality</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Slabs are polished, honed, or textured for desired appearance. Each piece is examined for quality, sealed, and prepared for shipping.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Collection Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#0E5543]/5 to-[#1A7A62]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Premium <span className="text-[#0E5543]">Marble Collection</span>
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#0E5543] pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Green Marble</h4>
                  <p className="text-gray-600 text-sm">
                    Our flagship product with rich forest colors, fine veining, and lustrous finish. Perfect for flooring, wall cladding, countertops, and luxurious interiors.
                  </p>
                </div>
                <div className="border-l-4 border-[#0E5543] pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">White Marble</h4>
                  <p className="text-gray-600 text-sm">
                    Clean textures and radiant finishes including Morwad White and Indian Statuario, popular for modern and elegant aesthetics.
                  </p>
                </div>
                <div className="border-l-4 border-[#0E5543] pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Rainforest Marble</h4>
                  <p className="text-gray-600 text-sm">
                    Natural tones and tree-like patterns bring an airy, rustic, and organic feel to both interiors and exteriors.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A7A62]/5 to-[#0E5543]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Makes Us <span className="text-[#0E5543]">Different?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm">
                    Own quarries and production units ensuring complete quality control
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm">
                    Traditional craftsmanship combined with modern design technology
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm">
                    Finest texture, natural strength, and lasting luster in the industry
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm">
                    Trusted by architects and designers worldwide
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm">
                    Exotic marbles and granites with premium Indian craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Collection Types */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Complete <span className="text-[#0E5543]">Stone Collection</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#0E5543]/5 transition-colors">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Brown & Beige Marble</h4>
                <p className="text-gray-600 text-sm">
                  Warm brown and beige marbles enhance any modern or traditional environment with natural beauty and balance.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#0E5543]/5 transition-colors">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Imported & Exotic Stones</h4>
                <p className="text-gray-600 text-sm">
                  Selected range of exotic marbles and granites offering premium stone variety from overseas sources.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#0E5543]/5 transition-colors">
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Granite Collection</h4>
                <p className="text-gray-600 text-sm">
                  Not only marbles, but Rishabh Green is the place where you can buy premium granite as well.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg mb-6 opacity-90">Get expert consultation and custom quotes for your marble project</p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-[#0E5543] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}