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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [marbles, setMarbles] = useState([]);
  const [selectedMarble, setSelectedMarble] = useState(null);
  const [isgrid, setIsgrid] = useState(true)
  const categories = [
    { id: 'all', name: 'All Marbles', count: 12 },
    { id: 'carrara', name: 'Carrara', count: 3 },
    { id: 'calacatta', name: 'Calacatta', count: 2 },
    { id: 'statuario', name: 'Statuario', count: 2 },
    { id: 'emperador', name: 'Emperador', count: 2 },
    { id: 'travertine', name: 'Travertine', count: 3 },
  ];

  const marbleData = [
    {
      id: 1,
      name: 'Carrara White',
      category: 'carrara',
      price: '$245/m²',
      description: 'Classic white marble with subtle grey veins, perfect for elegant interiors.',
      image: 'https://images.unsplash.com/photo-1554743365-a80c1243316e?w=600&h=400&fit=crop',
      premium: true,
      origin: 'Carrara, Italy',
      hardness: '3.5 Mohs',
      texture: 'Fine-grained',
      features: ['Water Resistant', 'Heat Resistant', 'Easy Maintenance'],
      specifications: {
        thickness: '2cm, 3cm',
        finish: 'Polished, Honed',
        applications: 'Flooring, Countertops, Wall Cladding'
      }
    },
    {
      id: 2,
      name: 'Calacatta Gold',
      category: 'calacatta',
      price: '$385/m²',
      description: 'Luxurious white marble with bold gold veins for statement pieces.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop',
      premium: true,
      origin: 'Apuan Alps, Italy',
      hardness: '4.0 Mohs',
      texture: 'Bold veining',
      features: ['Unique Patterns', 'High Gloss Finish', 'Premium Grade'],
      specifications: {
        thickness: '2cm, 3cm',
        finish: 'Polished',
        applications: 'Feature Walls, Luxury Bathrooms'
      }
    },
    {
      id: 3,
      name: 'Statuario Venato',
      category: 'statuario',
      price: '$420/m²',
      description: 'Premium white marble with dramatic grey veins and crystal formations.',
      image: 'https://images.unsplash.com/photo-1514053026555-49ce8886ae41?w=600&h=400&fit=crop',
      premium: true,
      origin: 'Tuscany, Italy',
      hardness: '4.2 Mohs',
      texture: 'Dramatic veining',
      features: ['Museum Quality', 'Extra Large Slabs', 'Limited Edition'],
      specifications: {
        thickness: '3cm',
        finish: 'Polished',
        applications: 'Grand Entrances, Hotel Lobbies'
      }
    },
    {
      id: 4,
      name: 'Dark Emperador',
      category: 'emperador',
      price: '$295/m²',
      description: 'Rich brown marble with light veins for warm, sophisticated spaces.',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop',
      premium: false,
      origin: 'Spain',
      hardness: '3.8 Mohs',
      texture: 'Medium-grained',
      features: ['Durable', 'Stain Resistant', 'Commercial Grade'],
      specifications: {
        thickness: '2cm, 3cm',
        finish: 'Polished, Honed',
        applications: 'Commercial Spaces, Flooring'
      }
    }
  ];

  const filteredMarbles = marbles.filter(marble => {
    const matchesCategory = selectedCategory === 'all' || marble.category === selectedCategory;
    const matchesSearch = marble.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      marble.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setMarbles(marbleData);
  }, []);

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
    <div className="min-h-screen bg-[#F2E1C5]">
      {/* Hero Section */}
      <section className="relative bg-[#F2E1C5] text-[#0E5543] pb-5 pt-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <HeaderContent
            tagline="Luxury in Every Layer"
            title="Our Marble Collection"
            subtitle="Experience world-class marble stones that bring sophistication and grandeur to every space."
          />

        </div>
      </section>

      {/* Navigation & Filter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="sticky top-0 z-40 bg-[#14745c] backdrop-blur-lg border-b border-[#0E5543]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${selectedCategory === category.id
                    ? 'bg-[#0E5543] text-white border-[#0E5543] shadow-lg'
                    : 'text-[#199072] bg-white/50 border-[#0E5543]/30 hover:border-[#0E5543]'
                    }`}
                >
                  {category.name}
                  <span className="text-xs opacity-70 ml-2">({category.count})</span>
                </motion.button>
              ))}
            </div>

            {/* Search and Controls */}
            <div className="flex items-center gap-4">

             
              <motion.div
                className="relative"
                whileFocus={{ scale: 1.02 }}
              >
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0E5543]/60" size={18} />
                <input
                  type="text"
                  placeholder="Search marbles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 rounded-full border border-[#0E5543]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E5543]/20 focus:border-[#0E5543] text-[#0E5543] placeholder-[#0E5543]/50 w-64"
                />
              </motion.div>

              <div className="flex  rounded-full p-1 border border-[#0E5543]/30">
              {
                isgrid ? <motion.button
                onClick={() => {setViewMode('grid'),setIsgrid(false)}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full transition-all ${viewMode === 'grid'
                  ? 'bg-[#0E5543] text-white shadow-md'
                  : 'text-[#0E5543] hover:bg-[#0E5543]/10'
                  }`}
              >
                <FiGrid size={18} />
              </motion.button>:<motion.button
                  onClick={() => {setViewMode('list'),setIsgrid(true)}}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-all ${viewMode === 'list'
                    ? 'bg-[#0E5543] text-white shadow-md'
                    : 'text-[#0E5543] hover:bg-[#0E5543]/10'
                    }`}
                >
                  <FiList size={18} />
                </motion.button>
              }
                
                
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Marble Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {filteredMarbles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20 bg-white/50 rounded-3xl"
            >
              <div className="text-6xl mb-6 opacity-20 text-[#0E5543]">⚱️</div>
              <h3 className="font-serif text-2xl text-[#0E5543] mb-4">
                No marbles found
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
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
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
                        {marble.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Marble Detail Modal */}
      <AnimatePresence>
        {selectedMarble && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMarble(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-96">
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h2 className="font-serif text-3xl text-white font-light mb-2">
                    {selectedMarble.name}
                  </h2>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1">
                      <FiMapPin size={14} />
                      {selectedMarble.origin}
                    </div>
                    {selectedMarble.premium && (
                      <div className="flex items-center gap-1 bg-[#0E5543] px-2 py-1 rounded-full">
                        <FiAward size={12} />
                        Premium Grade
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-xl text-[#0E5543] mb-4">Description</h3>
                    <p className="text-[#0E5543]/80 leading-relaxed">
                      {selectedMarble.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-[#0E5543] mb-4">Specifications</h3>
                    <div className="space-y-3">
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

                <div className="mt-8 pt-6 border-t border-[#0E5543]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-serif text-[#0E5543] font-light">
                        {selectedMarble.price}
                      </div>
                      <div className="text-[#0E5543]/60 text-sm">Starting price</div>
                    </div>
                    <button className="bg-[#0E5543] text-white px-8 py-3 rounded-full hover:bg-[#0a3d2f] transition-colors font-medium">
                      Request Sample
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <AdvicePage  /> */}
    </div>
  );
};

export default OurStones;