import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

const GalleryNavbar = ({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) => {
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
    { id: 'outdoor', name: 'Outdoor' },
  ];

  return (
    <section className="py-10 bg-[#e8d5b5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#0E5543] text-[#F2E1C5] border-[#0E5543]'
                    : 'bg-transparent text-[#0E5543] border-[#0E5543]/30 hover:border-[#0E5543]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0E5543]/70" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#F2E1C5] border border-[#0E5543]/30 rounded-full text-[#0E5543] placeholder-[#0E5543]/70 focus:outline-none focus:ring-2 focus:ring-[#0E5543]/50 focus:border-[#0E5543]/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryNavbar;
