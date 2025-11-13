import React from 'react'

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
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Marble Collection
          </h1>
          <div className="w-24 h-1 bg-[#0E5543] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Premium marble stones for luxury projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {marbleProducts.map((product) => (
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