import React from 'react'

// Import sandstone images
import beigeSandstone from '../../assets/Sandstone/Beige Sandstone.jpg'
import chocolateSandstone from '../../assets/Sandstone/Chocolate Sandstone.jpg'
import greySandstone from '../../assets/Sandstone/Grey Sandstone.jpg'
import gwaliorWhiteMint from '../../assets/Sandstone/Gwalior White Mint Sandstone _ White - Sandstone Slabs.jpeg'
import jaisalmerYellow from '../../assets/Sandstone/jaisalmer yellow sandstone.jpg'
import jodhpurPink from '../../assets/Sandstone/JODHPUR PINK Snadstone.jpg'
import kotaBlue from '../../assets/Sandstone/kota blue.jpg'
import merryGoldSandstone from '../../assets/Sandstone/merry-gold-500x500.webp'
import rainbowSandstone from '../../assets/Sandstone/Rainbow Sandstone.jpeg'
import redSandstone from '../../assets/Sandstone/Red Sandstone.jpg'
import teakwoodSandstone from '../../assets/Sandstone/Teakwood-Sandstone.jpg'

const sandstoneProducts = [
  { id: 1, name: "Beige Sandstone", image: beigeSandstone },
  { id: 2, name: "Chocolate Sandstone", image: chocolateSandstone },
  { id: 3, name: "Grey Sandstone", image: greySandstone },
  { id: 4, name: "Gwalior White Mint", image: gwaliorWhiteMint },
  { id: 5, name: "Jaisalmer Yellow", image: jaisalmerYellow },
  { id: 6, name: "Jodhpur Pink", image: jodhpurPink },
  { id: 7, name: "Kota Blue", image: kotaBlue },
  { id: 8, name: "Merry Gold", image: merryGoldSandstone },
  { id: 9, name: "Rainbow Sandstone", image: rainbowSandstone },
  { id: 10, name: "Red Sandstone", image: redSandstone },
  { id: 11, name: "Teakwood Sandstone", image: teakwoodSandstone }
];

export default function Sandstone() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Sandstone Collection
          </h1>
          <div className="w-24 h-1 bg-[#0E5543] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Natural sandstone for architectural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sandstoneProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}