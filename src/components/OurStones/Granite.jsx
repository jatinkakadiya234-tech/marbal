import React from 'react'

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
  { id: 1, name: "Absolute Black", image: absoluteBlack },
  { id: 2, name: "Alaska Gold", image: alaskaGold },
  { id: 3, name: "Alaska White", image: alaskaWhite },
  { id: 4, name: "Alpine White", image: alpineWhite },
  { id: 5, name: "Black Galaxy", image: blackGalaxy },
  { id: 6, name: "Black Pearl", image: blackPearl },
  { id: 7, name: "Black Beauty", image: blackBeauty },
  { id: 8, name: "Bruno Red", image: brunoRed },
  { id: 9, name: "Champagne Gold", image: champagneGold },
  { id: 10, name: "Chima Blue", image: chimaBlue },
  { id: 11, name: "Chima Pink", image: chimaPink },
  { id: 12, name: "Crystal Yellow", image: crystalYellow },
  { id: 13, name: "Desert Brown", image: desertBrown },
  { id: 14, name: "Dessert Green", image: dessertGreen },
  { id: 15, name: "Amba White", image: ambaWhite },
  { id: 16, name: "Ikon Brown", image: ikonBrown },
  { id: 17, name: "Impala Black", image: impalaBlack },
  { id: 18, name: "Imperial Red", image: imperialRed },
  { id: 19, name: "Ivory Fantasy", image: ivoryFantasy },
  { id: 20, name: "Jeerawal White", image: jeerawalWhite },
  { id: 21, name: "Jhansi Red", image: jhansiRed },
  { id: 22, name: "Kashmir White", image: kashmirWhite },
  { id: 23, name: "Koliwada Blue", image: koliwadaBlue },
  { id: 24, name: "Lakha Red", image: lakhaRed },
  { id: 25, name: "Magic White", image: magicWhite },
  { id: 26, name: "Marigold", image: marigold },
  { id: 27, name: "Merry Wood", image: merryWood },
  { id: 28, name: "New Imperial Gold", image: newImperialGold },
  { id: 29, name: "P White", image: pWhite },
  { id: 30, name: "Rajasthan Black", image: rajasthanBlack },
  { id: 31, name: "Rosy Pink", image: rosyPink },
  { id: 32, name: "Royal Cream", image: royalCream },
  { id: 33, name: "Royal Green", image: royalGreen },
  { id: 34, name: "Sapphire Blue", image: sapphireBlue },
  { id: 35, name: "Sunrise Gold", image: sunriseGold },
  { id: 36, name: "Tan Brown", image: tanBrown }
];

export default function Granite() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Granite Collection
          </h1>
          <div className="w-24 h-1 bg-[#0E5543] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Durable granite stones for modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {graniteProducts.map((product) => (
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