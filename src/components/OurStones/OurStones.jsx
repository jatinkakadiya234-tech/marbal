import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSearch,
  FiGrid,
  FiList,
  FiAward,
  FiMapPin,
  FiChevronRight,
  FiX
} from 'react-icons/fi';
import { TbDiamond } from 'react-icons/tb';
import HeaderContent from '../Helper/HeaderContent';
import AdvicePage from '../Advice/Addvicepage';

const OurStones = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [marbles, setMarbles] = useState([]);
  const [selectedMarble, setSelectedMarble] = useState(null);
  const [isgrid, setIsgrid] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({
    material: [],
    color: []
  });

  const categories = [
    { id: 'all', name: 'All Stones', count: 12 },
    { id: 'marble', name: 'Marble', count: 83 },
    { id: 'granite', name: 'Granite', count: 137 },
    { id: 'quartz', name: 'Quartz', count: 978 },
    { id: 'porcelain', name: 'Porcelain', count: 173 },
    { id: 'travertine', name: 'Travertine', count: 15 },
  ];

  const materials = [
    { id: 'ceramic', name: 'Ceramic', count: 88 },
    { id: 'granite', name: 'Granite', count: 137 },
    { id: 'limestone', name: 'Limestone', count: 15 },
    { id: 'marble', name: 'Marble', count: 83 },
    { id: 'porcelain', name: 'Porcelain', count: 173 },
    { id: 'quartz', name: 'Quartz', count: 978 },
    { id: 'sintered', name: 'Sintered Stone', count: 177 },
    { id: 'terrazzo', name: 'Terrazzo', count: 15 },
  ];

  const colors = [
    { id: 'beige', name: 'Beige', count: 147 },
    { id: 'black', name: 'Black', count: 221 },
    { id: 'blue', name: 'Blue', count: 43 },
    { id: 'brown', name: 'Brown', count: 185 },
    { id: 'cream', name: 'Cream', count: 34 },
    { id: 'gold', name: 'Gold', count: 29 },
    { id: 'green', name: 'Green', count: 29 },
    { id: 'grey', name: 'Grey', count: 775 },
    { id: 'pink', name: 'Pink', count: 8 },
    { id: 'red', name: 'Red', count: 17 },
    { id: 'taupe', name: 'Taupe', count: 3 },
  ];

  const marbleData = [
    {
      id: 1,
      name: 'Travertine Noce',
      category: 'travertine',
      material: 'marble',
      color: 'brown',
      price: '$245/m²',
      description: 'Classic brown travertine with subtle variations, perfect for elegant interiors.',
      image: 'https://images.unsplash.com/photo-1554743365-a80c1243316e?w=600&h=400&fit=crop',
      premium: true,
      origin: 'Italy',
      hardness: '3.5 Mohs',
      texture: 'Fine-grained',
      features: ['Water Resistant', 'Heat Resistant', 'Easy Maintenance'],
      specifications: {
        thickness: '20mm, 30mm',
        finish: 'Polished, Honed',
        applications: 'Flooring, Countertops, Wall Cladding'
      }
    },
    {
      id: 2,
      name: 'Rosso Alicante',
      category: 'marble',
      material: 'marble',
      color: 'red',
      price: '$385/m²',
      description: 'Luxurious red marble with bold patterns for statement pieces.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop',
      premium: true,
      origin: 'Spain',
      hardness: '4.0 Mohs',
      texture: 'Bold veining',
      features: ['Unique Patterns', 'High Gloss Finish', 'Premium Grade'],
      specifications: {
        thickness: '20mm',
        finish: 'Polished',
        applications: 'Feature Walls, Luxury Bathrooms'
      }
    },
    {
      id: 3,
      name: 'Travertine Roman Classic',
      category: 'travertine',
      material: 'marble',
      color: 'beige',
      price: '$420/m²',
      description: 'Premium beige travertine with classic appeal for timeless spaces.',
      image: 'https://images.unsplash.com/photo-1514053026555-49ce8886ae41?w=600&h=400&fit=crop',
      premium: true,
      origin: 'Italy',
      hardness: '4.2 Mohs',
      texture: 'Classic pattern',
      features: ['Timeless Appeal', 'Durable', 'Versatile'],
      specifications: {
        thickness: '20mm, 30mm',
        finish: 'Polished, Honed',
        applications: 'Flooring, Wall Cladding'
      }
    },
    {
      id: 4,
      name: 'Carrara White',
      category: 'marble',
      material: 'marble',
      color: 'white',
      price: '$295/m²',
      description: 'Elegant white marble with subtle grey veins for sophisticated spaces.',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop',
      premium: false,
      origin: 'Carrara, Italy',
      hardness: '3.8 Mohs',
      texture: 'Fine-grained',
      features: ['Durable', 'Stain Resistant', 'Commercial Grade'],
      specifications: {
        thickness: '20mm, 30mm',
        finish: 'Polished, Honed',
        applications: 'Commercial Spaces, Flooring'
      }
    },
    {
      id: 5,
      name: 'Nero Marquina',
      category: 'marble',
      material: 'marble',
      color: 'black',
      price: '$350/m²',
      description: 'Deep black marble with white veins for dramatic contrast.',
      image: 'https://images.unsplash.com/photo-1514053026555-49ce8886ae41?w=600&h=400&fit=crop',
      premium: true,
      origin: 'Spain',
      hardness: '4.1 Mohs',
      texture: 'Dramatic veining',
      features: ['High Contrast', 'Luxury Finish', 'Statement Piece'],
      specifications: {
        thickness: '20mm, 30mm',
        finish: 'Polished',
        applications: 'Feature Walls, Countertops'
      }
    },
    {
      id: 6,
      name: 'Calacatta Gold',
      category: 'marble',
      material: 'marble',
      color: 'gold',
      price: '$520/m²',
      description: 'Luxurious white marble with bold gold veins for premium projects.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop',
      premium: true,
      origin: 'Italy',
      hardness: '4.3 Mohs',
      texture: 'Bold veining',
      features: ['Premium Grade', 'Unique Patterns', 'Luxury Application'],
      specifications: {
        thickness: '30mm',
        finish: 'Polished',
        applications: 'Luxury Bathrooms, Hotel Lobbies'
      }
    }
  ];

  const filteredMarbles = marbles.filter(marble => {
    const matchesCategory = selectedCategory === 'all' || marble.category === selectedCategory;
    const matchesSearch = marble.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      marble.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by material
    const matchesMaterial = selectedFilters.material.length === 0 ||
      selectedFilters.material.includes(marble.material);

    // Filter by color
    const matchesColor = selectedFilters.color.length === 0 ||
      selectedFilters.color.includes(marble.color);

    return matchesCategory && matchesSearch && matchesMaterial && matchesColor;
  });

  useEffect(() => {
    setMarbles(marbleData);
  }, []);

  const handleFilterChange = (filterType, filterId) => {
    setSelectedFilters(prev => {
      const updatedFilters = { ...prev };
      if (updatedFilters[filterType].includes(filterId)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(id => id !== filterId);
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], filterId];
      }
      return updatedFilters;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

return (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative bg-white text-[#0E5543] pb-10 pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://thumbs.dreamstime.com/b/industrial-worker-handyman-installing-big-ceramic-tiles-bathroom-walls-industrial-worker-handyman-installing-big-ceramic-tiles-251216060.jpg')] bg-cover bg-center"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <HeaderContent
          tagline="Luxury in Every Layer"
          title="Our Stones"
          subtitle="We have a wide variety of premium stones available that can come in a number of different finishes and styles. The stones we provide can be used in various applications from kitchens and bathrooms to flooring."
        />

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0E5543] text-white px-6 py-3 rounded-full font-medium hover:bg-[#14745c] transition-colors">
            Get A Quote
          </button>
          <button className="bg-transparent text-[#0E5543] border border-[#0E5543] px-6 py-3 rounded-full font-medium hover:bg-[#0E5543] hover:text-white transition-colors">
            Book A Showroom Visit
          </button>
        </div>
      </div>
    </section>

    {/* Navigation & Filter Section */}
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="sticky top-0 z-40 bg-[#14745c] backdrop-blur-lg border-b border-[#0E5543]/10"
    >
      {/* Navigation content can go here */}
    </motion.section>

    {/* Main Content Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filters Sidebar */}
        <div className="lg:block hidden lg:w-1/4">
          <div className="bg-white/50 p-6 rounded-2xl sticky top-24 border border-[#0E5543]/20">
            <h3 className="text-lg font-semibold text-[#0E5543] mb-4">FILTERS</h3>

            {/* Material Filter */}
            <div className="mb-6">
              <h4 className="font-medium text-[#0E5543] mb-3">Material</h4>
              <div className="space-y-2">
                {materials.map(material => (
                  <div key={material.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`material-${material.id}`}
                      checked={selectedFilters.material.includes(material.id)}
                      onChange={() => handleFilterChange('material', material.id)}
                      className="h-4 w-4 text-[#0E5543] border-[#0E5543]/30 rounded focus:ring-[#0E5543]"
                    />
                    <label htmlFor={`material-${material.id}`} className="ml-2 text-sm text-[#0E5543]/80">
                      {material.name} <span className="text-[#0E5543]/60">({material.count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h4 className="font-medium text-[#0E5543] mb-3">Colour</h4>
              <div className="space-y-2">
                {colors.map(color => (
                  <div key={color.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`color-${color.id}`}
                      checked={selectedFilters.color.includes(color.id)}
                      onChange={() => handleFilterChange('color', color.id)}
                      className="h-4 w-4 text-[#0E5543] border-[#0E5543]/30 rounded focus:ring-[#0E5543]"
                    />
                    <label htmlFor={`color-${color.id}`} className="ml-2 text-sm text-[#0E5543]/80">
                      {color.name} <span className="text-[#0E5543]/60">({color.count})</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden flex justify-end mb-4">
          <button
            className="flex items-center gap-2 bg-[#0E5543] text-white px-4 py-2 rounded-lg"
            onClick={() => setIsTooltipOpen(true)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
            <span>Filters</span>
          </button>
        </div>

        {/* Mobile Filter Sidebar */}
        <AnimatePresence>
          {isTooltipOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsTooltipOpen(false)}
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-20  right-0 h-full w-48 bg-white z-40 lg:hidden shadow-2xl"
              >
                {/* Sidebar Header */}
                <div className="flex items-center mb-20 justify-between p-4 border-b border-[#0E5543]/20">
                  <h3 className="text-lg font-semibold text-[#0E5543]">FILTERS</h3>
                  <button
                    onClick={() => setIsTooltipOpen(false)}
                    className=" hover:bg-[#0E5543]/10 rounded-full transition-colors"
                  >
                    <FiX  className="text-[#0E5543]" />
                  </button>
                </div>

                {/* Sidebar Content */}
                <div className="h-full overflow-y-auto p-4">
                  {/* Material Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium text-[#0E5543] mb-3">Material</h4>
                    <div className="space-y-2">
                      {materials.map(material => (
                        <div key={material.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mobile-material-${material.id}`}
                            checked={selectedFilters.material.includes(material.id)}
                            onChange={() => handleFilterChange('material', material.id)}
                            className="h-4 w-4 text-[#0E5543] border-[#0E5543]/30 rounded focus:ring-[#0E5543]"
                          />
                          <label htmlFor={`mobile-material-${material.id}`} className="ml-2 text-sm text-[#0E5543]/80">
                            {material.name} <span className="text-[#0E5543]/60">({material.count})</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Color Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium text-[#0E5543] mb-3">Colour</h4>
                    <div className="space-y-2">
                      {colors.map(color => (
                        <div key={color.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mobile-color-${color.id}`}
                            checked={selectedFilters.color.includes(color.id)}
                            onChange={() => handleFilterChange('color', color.id)}
                            className="h-4 w-4 text-[#0E5543] border-[#0E5543]/30 rounded focus:ring-[#0E5543]"
                          />
                          <label htmlFor={`mobile-color-${color.id}`} className="ml-2 text-sm text-[#0E5543]/80">
                            {color.name} <span className="text-[#0E5543]/60">({color.count})</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#0E5543]/10 bg-white">
                    <button
                      onClick={() => setIsTooltipOpen(false)}
                      className="w-full bg-[#0E5543] text-white py-3 rounded-lg font-medium hover:bg-[#0a3d2f] transition-colors"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Stone Grid Section */}
        <div className="lg:w-3/4 py-0">
          <AnimatePresence mode="wait">
            {filteredMarbles.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20 bg-white/50 rounded-3xl border border-[#0E5543]/20"
              >
                <div className="text-6xl mb-6 opacity-20 text-[#0E5543]">⚱️</div>
                <h3 className="font-serif text-2xl text-[#0E5543] mb-4">
                  No stones found
                </h3>
                <p className="text-[#0E5543]/70">
                  Try adjusting your search criteria
                </p>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                animate="visible"
                className={`gap-8 ${viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'flex flex-col max-w-4xl mx-auto'
                  }`}
              >
                {filteredMarbles.map((marble) => (
                  <motion.div
                    key={marble.id}
                    variants={itemVariants}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#0E5543]/10"
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedMarble(marble)}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-80">
                      <motion.img
                        src={marble.image}
                        alt={marble.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Premium Badge */}
                      {marble.premium && (
                        <div className="absolute top-4 right-4 bg-[#0E5543] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <FiAward size={12} />
                          Premium
                        </div>
                      )}

                      {/* Origin */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-1 text-white/90 text-sm">
                          <FiMapPin size={14} />
                          {marble.origin}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-serif text-xl font-semibold text-[#0E5543]">
                          {marble.name}
                        </h3>
                        <motion.div
                          className="text-[#0E5543] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ x: 3 }}
                        >
                          <FiChevronRight size={20} />
                        </motion.div>
                      </div>

                      <p className="text-[#0E5543]/70 text-sm leading-relaxed mb-4 line-clamp-2">
                        {marble.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-[#0E5543] font-semibold">
                          {marble.price}
                        </span>
                        <span className="text-xs text-[#0E5543]/60 uppercase tracking-wide">
                          {marble.specifications.thickness}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>

    {/* Stone Detail Modal */}
    <AnimatePresence>
      {selectedMarble && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4"
          onClick={() => setSelectedMarble(null)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-t-3xl sm:rounded-3xl w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-96">
              <img
                src={selectedMarble.image}
                alt={selectedMarble.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedMarble(null)}
                className="absolute top-4 right-4 bg-white/90 text-[#0E5543] p-2 rounded-full hover:bg-white transition-colors"
              >
                <FiX size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-light mb-2">
                  {selectedMarble.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm sm:text-base">
                  <div className="flex items-center gap-1">
                    <FiMapPin size={14} />
                    {selectedMarble.origin}
                  </div>
                  {selectedMarble.premium && (
                    <div className="flex items-center gap-1 bg-[#0E5543] px-2 py-1 rounded-full text-xs sm:text-sm">
                      <FiAward size={12} />
                      Premium Grade
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#0E5543] mb-3 sm:mb-4">Description</h3>
                  <p className="text-[#0E5543]/80 leading-relaxed text-sm sm:text-base">
                    {selectedMarble.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#0E5543] mb-3 sm:mb-4">Specifications</h3>
                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex justify-between border-b border-[#0E5543]/10 pb-2">
                      <span className="text-[#0E5543]/70">Thickness</span>
                      <span className="text-[#0E5543] font-medium">{selectedMarble.specifications.thickness}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#0E5543]/10 pb-2">
                      <span className="text-[#0E5543]/70">Finish</span>
                      <span className="text-[#0E5543] font-medium">{selectedMarble.specifications.finish}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#0E5543]/10 pb-2">
                      <span className="text-[#0E5543]/70">Applications</span>
                      <span className="text-[#0E5543] font-medium">{selectedMarble.specifications.applications}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price + Button */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#0E5543]/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xl sm:text-2xl font-serif text-[#0E5543] font-light">
                      {selectedMarble.price}
                    </div>
                    <div className="text-[#0E5543]/60 text-xs sm:text-sm">Starting price</div>
                  </div>
                  <button className="bg-[#0E5543] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#0a3d2f] transition-colors font-medium text-sm sm:text-base">
                    Request Sample
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
};

export default OurStones;