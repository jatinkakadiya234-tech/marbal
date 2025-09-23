import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaRupeeSign, FaCheckCircle, FaGlobe, FaLeaf } from "react-icons/fa"

export default function ProductCollection() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free",
      slides: { origin: "center", perView: 1.2, spacing: 15 },
      breakpoints: {
        "(min-width: 640px)": { slides: { perView: 2, spacing: 20 } },
        "(min-width: 1024px)": { slides: { perView: 2.5, spacing: 30 } }
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() { clearTimeout(timeout) }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => { slider.next() }, 3500) // autoplay 3.5s
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => { mouseOver = true; clearNextTimeout() })
          slider.container.addEventListener("mouseout", () => { mouseOver = false; nextTimeout() })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  const marbleProducts = [
    {
      image: "https://www.aclassmarble.co.in/images/media_images/240826063842_blog_image.jpg",
      title: "Carrara White Marble",
      description: "Premium Italian marble with elegant grey veins",
      price: "₹2,500/sq.ft",
      category: "Premium"
    },
    {
      image: "https://www.aclassmarble.co.in/images/media_images/240826063842_blog_image.jpg",
      title: "Calacatta Gold",
      description: "Luxurious marble with golden golden touch",
      price: "₹3,200/sq.ft",
      category: "Luxury"
    },
    {
      image: "https://www.aclassmarble.co.in/images/media_images/240826063842_blog_image.jpg",
      title: "Statuario Marble",
      description: "Pure white with dramatic grey veins",
      price: "₹4,500/sq.ft",
      category: "Elite"
    },
    {
      image: "https://www.aclassmarble.co.in/images/media_images/240826063842_blog_image.jpg",
      title: "Emperador Dark",
      description: "Rich brown marble with light veins",
      price: "₹2,800/sq.ft",
      category: "Premium"
    },
  ]

  return (
    <div className="bg-gradient-to-br from-[#0E5543] to-[#1a7a5e] py-12 md:py-20 px-4 sm:px-6 lg:px-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          ✨ Premium Marble Collection
        </h2>
        <p className="text-[#c6f6d5] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Transform your space with timeless elegance. Imported from <span className="font-semibold">Italy, Spain & India</span>, 
          our curated marble collection is designed for luxury interiors and modern architecture.
        </p>
      </div>

      {/* Slider Section */}
      <div ref={sliderRef} className="keen-slider pb-10">
        {marbleProducts.map((product, index) => (
          <div key={index} className="keen-slider__slide flex items-center justify-center p-3">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-transform duration-300 w-full">
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category Tag */}
                <span className="absolute top-3 left-3 bg-gradient-to-r from-[#0E5543] to-[#2d9c7c] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  {product.category}
                </span>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="bg-white text-[#0E5543] font-semibold px-4 py-2 rounded-full shadow hover:bg-[#0E5543] hover:text-white transition">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{product.description}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="text-center mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-2xl mb-2 text-green-300" />
            <p className="font-semibold">ISO Certified Quality</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGlobe className="text-2xl mb-2 text-blue-300" />
            <p className="font-semibold">Imported Worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLeaf className="text-2xl mb-2 text-emerald-300" />
            <p className="font-semibold">Eco-Friendly Processing</p>
          </div>
        </div>
      </div>
    </div>
  )
}
