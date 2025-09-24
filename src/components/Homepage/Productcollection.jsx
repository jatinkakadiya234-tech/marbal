import React, { useState, useEffect } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import HeaderContent from '../Helper/HeaderContent'

export default function ProductCollection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalSlide, setModalSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2.1,
            spacing: 20
          }
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3.1,
            spacing: 24
          }
        },
        "(min-width: 1280px)": {
          slides: {
            perView: 3.3,
            spacing: 28
          }
        }
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created(slider) {
        setLoaded(true)
      },
    }
  )

  // Auto-scroll functionality
  useEffect(() => {
    if (!loaded || !instanceRef.current) return

    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)

    return () => clearInterval(interval)
  }, [loaded, instanceRef])

  const marbleProducts = [
    {
      image: "https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Carrara White",
      origin: "Italy",
      texture: "Fine Veins",
      finish: "Polished",
      description: "Classic Italian marble with subtle grey veins, perfect for elegant interiors and timeless designs.",
      applications: ["Flooring", "Countertops", "Wall Cladding"],
      size: "3000 x 2000 mm"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1158&q=80",
      title: "Calacatta Gold",
      origin: "Italy",
      texture: "Golden Veins",
      finish: "Premium Polish",
      description: "Luxurious marble featuring dramatic gold veins, ideal for statement pieces and luxury spaces.",
      applications: ["Feature Walls", "Bathrooms", "Hotel Lobbies"],
      size: "3200 x 1800 mm"
    },
    {
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Statuario",
      origin: "Italy",
      texture: "Dramatic Veins",
      finish: "Elite Finish",
      description: "Pure white background with bold grey veins, offering unparalleled elegance and sophistication.",
      applications: ["Luxury Residences", "Commercial Spaces", "Art Pieces"],
      size: "3500 x 2000 mm"
    },
    {
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Emperador Dark",
      origin: "Spain",
      texture: "Rich Brown",
      finish: "Honed",
      description: "Deep brown marble with light veins, creating a warm and inviting atmosphere in any space.",
      applications: ["Flooring", "Fireplaces", "Accent Walls"],
      size: "3000 x 1500 mm"
    },
    {
      image: "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Makrana Pure",
      origin: "India",
      texture: "Pure White",
      finish: "Polished",
      description: "Renowned Indian marble known for its pristine white quality and excellent durability.",
      applications: ["Monuments", "Residential", "Commercial"],
      size: "2800 x 1600 mm"
    },
  ]

  const openModal = (product, index) => {
    setSelectedProduct(product)
    setModalSlide(index)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const nextModalSlide = () => {
    setModalSlide((prev) => (prev + 1) % marbleProducts.length)
  }

  const prevModalSlide = () => {
    setModalSlide((prev) => (prev - 1 + marbleProducts.length) % marbleProducts.length)
  }

  return (
    <div className=" bg-gradient-to-br from-[#0E5543] via-[#1a7a5e] to-[#2d9c7c] py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-['Playfair_Display'] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F2E1C5]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#F2E1C5]/5 rounded-full blur-3xl animate-pulse delay-800"></div>
      </div>

      {/* Header Section */}
      <HeaderContent
        tagline="Exclusive Collection"
        title="Timeless Elegance"
        subtitle=" Discover the world's most exquisite marble collection, curated for those who appreciate
          unparalleled beauty and craftsmanship in every slab."
        theme="dark"
      />

      {/* Carousel Section - FIXED CONTAINER */}
      <div className="relative w-full mx-auto mb-20">
        <div
          ref={sliderRef}
          className="keen-slider pb-12 cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            overflow: 'hidden'
          }}
        >
          {marbleProducts.map((product, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <div className="group relative bg-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-[#F2E1C5]/30 hover:border-[#F2E1C5]/60 transition-all duration-700 w-full max-w-sm mx-2 transform hover:scale-105 hover:rotate-1 shadow-2xl">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/90 via-[#0E5543]/40 to-transparent opacity-80"></div>

                  {/* Origin Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-[#F2E1C5] to-[#F2E1C5]/90 text-[#0E5543] px-4 py-2 rounded-full text-sm font-semibold shadow-2xl transform group-hover:scale-110 transition-transform">
                      {product.origin}
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => openModal(product, index)}
                    className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30"
                  >
                    <FaExpand className="text-lg" />
                  </button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {product.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-[#c6f6d5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span className="font-light">{product.texture}</span>
                      <span className="font-light">•</span>
                      <span className="font-light">{product.finish}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 text-[#F2E1C5]/70 text-sm font-light tracking-wide">
            <div className="w-20 h-px bg-[#F2E1C5]/30"></div>
            <span>Scroll to explore the collection</span>
            <div className="w-20 h-px bg-[#F2E1C5]/30"></div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-[#0E5543] to-[#1a7a5e] rounded-3xl overflow-hidden border border-[#F2E1C5]/30">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevModalSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextModalSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30"
            >
              <FaChevronRight className="text-xl" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 h-full">
              {/* Image Section */}
              <div className="relative h-96 md:h-full">
                <img
                  src={marbleProducts[modalSlide].image}
                  alt={marbleProducts[modalSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E5543]/40 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="bg-[#F2E1C5] text-[#0E5543] px-4 py-2 rounded-full text-sm font-semibold">
                    {marbleProducts[modalSlide].origin}
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-white mb-4">
                  {marbleProducts[modalSlide].title}
                </h2>

                <div className="flex gap-6 text-[#c6f6d5] mb-6">
                  <div>
                    <span className="font-semibold text-[#F2E1C5]">Texture:</span> {marbleProducts[modalSlide].texture}
                  </div>
                  <div>
                    <span className="font-semibold text-[#F2E1C5]">Finish:</span> {marbleProducts[modalSlide].finish}
                  </div>
                </div>

                <p className="text-[#c6f6d5] text-lg leading-relaxed mb-6">
                  {marbleProducts[modalSlide].description}
                </p>

                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-[#F2E1C5]">Applications:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {marbleProducts[modalSlide].applications.map((app, idx) => (
                        <span key={idx} className="bg-[#F2E1C5]/10 text-[#F2E1C5] px-3 py-1 rounded-full text-sm border border-[#F2E1C5]/20">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-[#F2E1C5]">Available Size:</span>
                    <span className="text-[#c6f6d5] ml-2">{marbleProducts[modalSlide].size}</span>
                  </div>
                </div>

                <button className="mt-8 bg-gradient-to-r from-[#F2E1C5] to-[#F2E1C5]/90 text-[#0E5543] px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#F2E1C5]/90 hover:to-[#F2E1C5] transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs">
                  Request Sample
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .keen-slider {
          -webkit-overflow-scrolling: touch;
        }
        .keen-slider::-webkit-scrollbar {
          display: none;
        }
        .keen-slider__slide {
          min-width: 0;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  )
}