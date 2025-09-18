import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiEye, FiFilter, FiX, FiStar, FiAward } from 'react-icons/fi';

const Products = ({ category }) => {
  const [theme, setTheme] = useState('dark');
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Sample product data
  const furnitureProducts = [
    {
      id: 1,
      name: "Modern Sofa Set",
      price: "$1,299",
      originalPrice: "$1,599",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Elegant contemporary sofa with premium fabric and built-in lumbar support",
      category: "living",
      featured: true,
      rating: 4.9,
      reviews: 124,
      material: "Premium Fabric",
      colors: ["#2C3E50", "#7D3C98", "#1A5276"]
    },
    {
      id: 2,
      name: "Wooden Dining Table",
      price: "$899",
      originalPrice: "$1,099",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Solid oak table with minimalist design and natural wood finish",
      category: "dining",
      featured: false,
      rating: 4.7,
      reviews: 89,
      material: "Solid Oak",
      colors: ["#784212", "#5D4037", "#3E2723"]
    },
    {
      id: 3,
      name: "Leather Armchair",
      price: "$499",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted leather armchair with premium Italian leather and walnut legs",
      category: "living",
      featured: true,
      rating: 4.8,
      reviews: 156,
      material: "Italian Leather",
      colors: ["#8B4513", "#654321", "#3B2F2F"]
    },
    {
      id: 4,
      name: "Bookshelf Unit",
      price: "$650",
      originalPrice: "$799",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Modular bookshelf with adjustable shelves and hidden storage compartments",
      category: "office",
      featured: false,
      rating: 4.6,
      reviews: 67,
      material: "Engineered Wood",
      colors: ["#795548", "#5D4037", "#3E2723"]
    },
    {
      id: 5,
      name: "Designer Coffee Table",
      price: "$450",
      image: "https://images.unsplash.com/photo-1539990095345-d6f7c354d5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Glass top coffee table with gold accents and geometric metal base",
      category: "living",
      featured: true,
      rating: 4.9,
      reviews: 203,
      material: "Tempered Glass & Metal",
      colors: ["#FFD700", "#C0C0C0", "#000000"]
    },
    {
      id: 6,
      name: "Executive Office Desk",
      price: "$1,150",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Premium executive desk with built-in storage, cable management and power outlets",
      category: "office",
      featured: false,
      rating: 4.7,
      reviews: 98,
      material: "Walnut & Steel",
      colors: ["#3E2723", "#263238", "#455A64"]
    },
    {
      id: 7,
      name: "Velvet Accent Chair",
      price: "$375",
      originalPrice: "$449",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Luxurious velvet chair with brass legs and ergonomic design for maximum comfort",
      category: "living",
      featured: true,
      rating: 4.8,
      reviews: 142,
      material: "Velvet & Brass",
      colors: ["#7B1FA2", "#E91E63", "#2196F3"]
    },
    {
      id: 8,
      name: "Minimalist Bed Frame",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Platform bed frame with integrated lighting, USB ports and under-bed storage",
      category: "bedroom",
      featured: false,
      rating: 4.9,
      reviews: 178,
      material: "Solid Wood & LED",
      colors: ["#212121", "#37474F", "#455A64"]
    }
  ];

  const kitchenProducts = [
    {
      id: 1,
      name: "Ceramic Dinner Set",
      price: "$249",
      originalPrice: "$299",
      image: "https://images.unsplash.com/photo-1581578021470-9c7c619f2c61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "20-piece hand-painted ceramic dinner set with gold accents and dishwasher safe",
      category: "dinnerware",
      featured: true,
      rating: 4.9,
      reviews: 234,
      material: "Premium Ceramic",
      colors: ["#FFFFFF", "#F5F5F5", "#FFEB3B"]
    },
    {
      id: 2,
      name: "Marble Countertop",
      price: "$2,499",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Premium marble countertop with elegant veining, heat and stain resistant",
      category: "countertops",
      featured: false,
      rating: 4.8,
      reviews: 89,
      material: "Carrara Marble",
      colors: ["#FFFFFF", "#E0E0E0", "#BDBDBD"]
    },
    {
      id: 3,
      name: "Copper Cookware Set",
      price: "$399",
      originalPrice: "$499",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Professional copper cookware set with stainless steel interior and even heat distribution",
      category: "cookware",
      featured: true,
      rating: 4.9,
      reviews: 167,
      material: "Copper & Stainless Steel",
      colors: ["#B87333", "#FFD700", "#C0C0C0"]
    },
    {
      id: 4,
      name: "Wooden Cutting Board",
      price: "$89",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted oak cutting board with juice groove, handle and natural antibacterial properties",
      category: "accessories",
      featured: false,
      rating: 4.7,
      reviews: 203,
      material: "Solid Oak",
      colors: ["#795548", "#5D4037", "#3E2723"]
    },
    {
      id: 5,
      name: "Designer Kitchen Island",
      price: "$3,200",
      image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Custom kitchen island with marble top, built-in appliances and smart storage solutions",
      category: "furniture",
      featured: true,
      rating: 4.9,
      reviews: 78,
      material: "Marble & Wood",
      colors: ["#FFFFFF", "#616161", "#9E9E9E"]
    },
    {
      id: 6,
      name: "Artisanal Knife Set",
      price: "$349",
      originalPrice: "$429",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba94693?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Hand-forged chef knives with walnut handles, razor-sharp edges and lifetime warranty",
      category: "cutlery",
      featured: false,
      rating: 4.8,
      reviews: 312,
      material: "High-Carbon Steel",
      colors: ["#212121", "#37474F", "#455A64"]
    },
    {
      id: 7,
      name: "Porcelain Tea Set",
      price: "$175",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Delicate porcelain tea set for afternoon tea, microwave and dishwasher safe",
      category: "dinnerware",
      featured: true,
      rating: 4.7,
      reviews: 145,
      material: "Fine Porcelain",
      colors: ["#FFFFFF", "#F3E5F5", "#E1BEE7"]
    },
    {
      id: 8,
      name: "Smart Refrigerator",
      price: "$4,299",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Premium smart fridge with touchscreen display, camera interior and voice control",
      category: "appliances",
      featured: false,
      rating: 4.9,
      reviews: 67,
      material: "Stainless Steel",
      colors: ["#37474F", "#455A64", "#546E7A"]
    }
  ];

  const products = category === 'furniture' ? furnitureProducts : kitchenProducts;
  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 }
  };

  const buttonVariants = {
    rest: { y: 10, opacity: 0 },
    hover: { y: 0, opacity: 1 }
  };

return (
    <section className={`py-20 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen transition-colors duration-500 relative overflow-hidden`}>
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-0 right-0">
            <motion.button
              onClick={toggleTheme}
              className="p-3 bg-gray-800/50 backdrop-blur-sm text-amber-400 transition-colors duration-300 border border-amber-500/20 hover:bg-amber-500/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(217, 119, 6, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <FiFilter size={20} />
            </motion.button>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-amber-300">Premium</span> {category === 'furniture' ? 'Furniture' : 'Kitchen'} Collection
          </motion.h2>
          
          <motion.div 
            className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          
          <motion.p 
            className="text-lg text-gray-300/90 max-w-2xl mx-auto leading-relaxed tracking-wide font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover exquisite handcrafted pieces that blend timeless elegance with modern functionality
          </motion.p>
        </motion.div>

        {/* Filters and Sort */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-center mb-12 p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm border border-amber-500/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 font-medium transition-all duration-300 border ${activeFilter === 'all' 
                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 shadow-lg' 
                : 'bg-gray-800/50 text-gray-300 border-gray-600/30 hover:border-amber-500/20'
              }`}
            >
              All Products
            </button>
            
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 font-medium transition-all duration-300 border capitalize ${activeFilter === cat 
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 shadow-lg' 
                  : 'bg-gray-800/50 text-gray-300 border-gray-600/30 hover:border-amber-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm font-light tracking-wide">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800/50 text-white px-4 py-2 border border-gray-600/30 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 outline-none backdrop-blur-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </motion.div>

        {/* Products grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={itemVariants}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-lg overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                {/* Product image */}
                <div className="relative overflow-hidden h-72">
                  <motion.img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    initial="rest"
                    whileHover="hover"
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"
                    variants={overlayVariants}
                    initial="rest"
                    whileHover="hover"
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Featured badge */}
                  {product.featured && (
                    <motion.div 
                      className="absolute top-4 left-4 bg-amber-500/90 text-gray-900 px-3 py-1 text-xs font-semibold flex items-center shadow-lg border border-amber-300/50"
                      initial={{ scale: 0, x: -20 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <FiAward className="mr-1" size={12} />
                      Featured
                    </motion.div>
                  )}
                  
                  {/* Discount badge */}
                  {product.originalPrice && (
                    <motion.div 
                      className="absolute top-4 right-4 bg-rose-500/90 text-white px-2 py-1 text-xs font-semibold shadow-lg border border-rose-300/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Save ${parseInt(product.originalPrice.replace('$', '').replace(',', '')) - parseInt(product.price.replace('$', '').replace(',', ''))}
                    </motion.div>
                  )}
                  
                  {/* Action buttons */}
                  <motion.div 
                    className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0"
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    transition={{ staggerChildren: 0.1 }}
                  >
                    <motion.button 
                      className="p-3 bg-gray-900/80 backdrop-blur-sm text-amber-400 border border-amber-500/20 hover:bg-amber-500 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(217, 119, 6, 1)" }}
                      whileTap={{ scale: 0.9 }}
                      variants={buttonVariants}
                    >
                      <FiShoppingCart size={16} />
                    </motion.button>
                    <motion.button 
                      className="p-3 bg-gray-900/80 backdrop-blur-sm text-amber-400 border border-amber-500/20 hover:bg-rose-500/90 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(244, 63, 94, 0.9)" }}
                      whileTap={{ scale: 0.9 }}
                      variants={buttonVariants}
                    >
                      <FiHeart size={16} />
                    </motion.button>
                    <motion.button 
                      className="p-3 bg-gray-900/80 backdrop-blur-sm text-amber-400 border border-amber-500/20 hover:bg-blue-500/90 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.9)" }}
                      whileTap={{ scale: 0.9 }}
                      variants={buttonVariants}
                    >
                      <FiEye size={16} />
                    </motion.button>
                  </motion.div>
                </div>
                
                {/* Product info */}
                <div className="p-5">
                  <h3 className="text-lg font-serif font-normal text-white mb-2 group-hover:text-amber-300 transition-colors duration-300 tracking-wide">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400/90 text-sm mb-4 leading-relaxed font-light tracking-wide">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-600'} mr-1`} 
                          size={12} 
                        />
                      ))}
                    </div>
                    <span className="text-amber-400 text-sm font-medium">{product.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                  </div>
                  
                  {/* Material and Colors */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400/90 text-xs font-light tracking-wide">{product.material}</span>
                    <div className="flex space-x-1">
                      {product.colors.slice(0, 3).map((color, i) => (
                        <motion.div 
                          key={i} 
                          className="w-3 h-3 border border-gray-600/50"
                          style={{ backgroundColor: color }}
                          whileHover={{ scale: 1.3 }}
                          transition={{ duration: 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700/30">
                    <div>
                      <span className="text-amber-400 font-bold text-lg">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500/80 line-through text-sm ml-2">{product.originalPrice}</span>
                      )}
                    </div>
                    <motion.button 
                      className="px-3 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-colors duration-300 flex items-center text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(217, 119, 6, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiShoppingCart className="mr-1" size={14} />
                      Add
                    </motion.button>
                  </div>
                </div>

                {/* Golden shimmer effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* View all button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.button 
            className="px-6 py-2.5 border border-amber-500/30 text-amber-300 rounded font-medium hover:bg-amber-500/10 transition-all duration-300 flex items-center mx-auto backdrop-blur-sm"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(217, 119, 6, 0.1)", borderColor: "rgba(217, 119, 6, 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            View All Products
            <FiShoppingCart className="ml-2" size={16} />
          </motion.button>
        </motion.div>
      </div>

      {/* Custom font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
  
};

export default Products;