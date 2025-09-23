import React, { useState, useEffect } from 'react';
import { FiSearch, FiChevronDown, FiGrid, FiList, FiStar } from 'react-icons/fi';
import { TbDiamond } from 'react-icons/tb';

// Google Fonts - Add these to your index.css or HTML head
// font-family: 'Inter', sans-serif;
// font-family: 'Playfair Display', serif;

const OurStones = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [marbles, setMarbles] = useState([]);

  // Categories
  const categories = [
    { id: 'all', name: 'All Marbles', count: 12 },
    { id: 'carrara', name: 'Carrara', count: 3 },
    { id: 'calacatta', name: 'Calacatta', count: 2 },
    { id: 'statuario', name: 'Statuario', count: 2 },
    { id: 'emperador', name: 'Emperador', count: 2 },
    { id: 'travertine', name: 'Travertine', count: 3 },
  ];

  // Dummy marble data
  const marbleData = [
    {
      id: 1,
      name: 'Carrara White',
      category: 'carrara',
      price: '$245/m²',
      rating: 4.8,
      description: 'Classic white marble with subtle grey veins',
      image: 'https://images.unsplash.com/photo-1554743365-a80c1243316e?w=400&h=300&fit=crop',
      premium: true
    },
    {
      id: 2,
      name: 'Calacatta Gold',
      category: 'calacatta',
      price: '$385/m²',
      rating: 4.9,
      description: 'Luxurious white marble with bold gold veins',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
      premium: true
    },
    {
      id: 3,
      name: 'Statuario Venato',
      category: 'statuario',
      price: '$420/m²',
      rating: 5.0,
      description: 'Premium white marble with dramatic grey veins',
      image: 'https://images.unsplash.com/photo-1514053026555-49ce8886ae41?w=400&h=300&fit=crop',
      premium: true
    },
    {
      id: 4,
      name: 'Dark Emperador',
      category: 'emperador',
      price: '$295/m²',
      rating: 4.7,
      description: 'Rich brown marble with light veins',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop',
      premium: false
    },
    {
      id: 5,
      name: 'Roman Travertine',
      category: 'travertine',
      price: '$195/m²',
      rating: 4.6,
      description: 'Warm beige stone with natural pores',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
      premium: false
    },
    {
      id: 6,
      name: 'Arabescato Corchia',
      category: 'carrara',
      price: '$325/m²',
      rating: 4.8,
      description: 'Elegant white marble with grey arabesque patterns',
      image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop',
      premium: true
    }
  ];

  // Filter marbles based on category and search
  const filteredMarbles = marbles.filter(marble => {
    const matchesCategory = selectedCategory === 'all' || marble.category === selectedCategory;
    const matchesSearch = marble.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      marble.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    // Simulate API call
    setMarbles(marbleData);
  }, []);

  return (
    <div className="min-h-screen bg-[#F2E1C5] font-['Inter']">
      {/* Hero Header */}
      <div className="relative bg-[#0E5543] text-[#F2E1C5] py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E5543] to-[#1a7d65]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <TbDiamond className="text-6xl mx-auto mb-6 text-[#F2E1C5]" />
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-light mb-4">
            Premium Marble Collection
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover the world's most exquisite natural stones. Each piece tells a story of luxury and timeless elegance.
          </p>
        </div>
      </div>

      {/* Navigation & Search Area */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#0E5543]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                      ? 'bg-[#0E5543] text-[#F2E1C5] shadow-lg'
                      : 'text-[#0E5543] bg-white/60 hover:bg-[#0E5543]/10'
                    }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Search and View Controls */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0E5543]/60" />
                <input
                  type="text"
                  placeholder="Search marbles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-full border border-[#0E5543]/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-[#0E5543]/30 focus:border-[#0E5543] text-[#0E5543] placeholder-[#0E5543]/50 w-64"
                />
              </div>

              {/* View Toggle */}
              <div className="flex bg-white/60 rounded-full p-1 border border-[#0E5543]/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-[#0E5543] text-[#F2E1C5]' : 'text-[#0E5543]'
                    }`}
                >
                  <FiGrid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-[#0E5543] text-[#F2E1C5]' : 'text-[#0E5543]'
                    }`}
                >
                  <FiList size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marble Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredMarbles.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-[#0E5543]/40 text-6xl mb-4">⚱️</div>
            <h3 className="font-['Playfair_Display'] text-2xl text-[#0E5543] mb-2">
              No marbles found
            </h3>
            <p className="text-[#0E5543]/70">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className={`grid gap-8 ${viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
            {filteredMarbles.map(marble => (
              <div
                key={marble.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={marble.image}
                    alt={marble.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Premium Badge */}
                  {marble.premium && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <FiStar size={12} />
                      PREMIUM
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4 bg-[#0E5543] text-[#F2E1C5] px-3 py-2 rounded-lg font-semibold">
                    {marble.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#0E5543]">
                      {marble.name}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500">
                      <FiStar size={16} />
                      <span className="text-sm font-medium">{marble.rating}</span>
                    </div>
                  </div>

                  <p className="text-[#0E5543]/70 text-sm leading-relaxed mb-4">
                    {marble.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-[#0E5543]/10 text-[#0E5543] rounded-full text-xs font-medium capitalize">
                      {marble.category}
                    </span>
                    <button className="text-[#0E5543] hover:text-[#0E5543]/70 transition-colors text-sm font-medium border-b border-[#0E5543] hover:border-transparent">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

        
    </div>
  );
};

export default OurStones;