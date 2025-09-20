"use client"

import { useState, useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const ProductCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState("next")
  const [itemsPerView, setItemsPerView] = useState(1)

  const products = [
    {
      id: 1,
      name: "Carrara Bianco",
      size: "60x60 cm",
      price: "£89.99",
      image: "https://images.unsplash.com/photo-1588206471333-b52336b439e6?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Calacatta Gold",
      size: "60x120 cm",
      price: "£129.99",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Statuario Venato",
      size: "75x150 cm",
      price: "£149.99",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Emperador Dark",
      size: "60x60 cm",
      price: "£79.99",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60",
    },
  ]

  // Responsive itemsPerView
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1) // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2) // tablet
      } else {
        setItemsPerView(4) // desktop
      }
    }
    updateItems()
    window.addEventListener("resize", updateItems)
    return () => window.removeEventListener("resize", updateItems)
  }, [])

  // Autoplay
  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNextSlide()
      }, 4000)
    }
    return () => interval && clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const handleNextSlide = () => {
    setDirection("next")
    setCurrentIndex((prev) => (prev + itemsPerView) % products.length)
  }

  const handlePrevSlide = () => {
    setDirection("prev")
    setCurrentIndex((prev) => (prev - itemsPerView + products.length) % products.length)
  }

  const total = products.length
  const windowItems = Array.from({ length: itemsPerView }, (_, i) => products[(currentIndex + i) % total])

  return (
    <section className="py-16 bg-[#F2E1C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Marble Collection</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite range of premium marble tiles, carefully selected for their exceptional quality and
            timeless elegance. Perfect for creating sophisticated spaces.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span>Free UK Delivery on Orders Over £200</span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span>Professional Installation Available</span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          {/* left arrow */}
          <button
            onClick={handlePrevSlide}
            style={{ backgroundColor: "transparent", borderColor: "transparent" }}
            className="p-2 text-gray-600 hover:text-black z-10 mb-20 transition-transform duration-300 hover:scale-110"
          >
            <FiChevronLeft className="w-7 h-7 md:w-9 md:h-9" />
          </button>

          {/* products grid */}
          <div
            className={`grid gap-6 sm:gap-8 flex-1 px-4`}
            style={{ gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))` }}
          >
            {windowItems.map((p, index) => (
              <div
                key={`${p.id}-${currentIndex}`}
                className="text-center transition-all duration-500 ease-in-out"
                style={{
                  animation: `${direction === "next" ? "fade-in-up" : "fade-in-down"} 0.5s ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <div className="text-sm md:text-base font-medium text-gray-800">{p.name}</div>
                  <div className="text-xs text-gray-600">{p.size}</div>
                </div>
                <div className="mt-2">
                  <div className="text-sm md:text-base font-semibold text-gray-800">{p.price}</div>
                  <div className="text-[11px] text-gray-500">(including VAT)</div>
                </div>
               
              </div>
            ))}
          </div>

          {/* right arrow */}
          <button
            onClick={handleNextSlide}
            style={{ backgroundColor: "transparent", borderColor: "transparent" }}
            className="p-2 text-gray-600 hover:text-black z-10 mb-20 transition-transform duration-300 hover:scale-110"
          >
            <FiChevronRight className="w-7 h-7 md:w-9 md:h-9" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Need help choosing the perfect marble? Our design consultants are here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200">
              View Full Collection
            </button>
            <button className="px-6 py-3 border-2 border-gray-900 text-white font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-200">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default ProductCollection
