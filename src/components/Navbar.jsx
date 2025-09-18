// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiInfo, FiBox, FiPhone, FiSearch, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl py-1' : 'bg-gradient-to-b from-gray-900 to-gray-850 py-2 border-b border-gray-700/30'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-serif font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent tracking-wide flex items-center">
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 shadow-lg shadow-amber-500/30"></div>
              Artisan Craft
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="#" 
              className={`transition-all duration-300 flex items-center group ${activeItem === 'home' ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'}`}
              onClick={() => handleItemClick('home')}
            >
              <div className={`p-1.5 rounded-lg mr-2 transition-all duration-300 ${activeItem === 'home' ? 'bg-amber-400/10' : 'group-hover:bg-gray-700/50'}`}>
                <FiHome className="text-lg" />
              </div>
              <span className="relative font-medium after:absolute after:w-0 after:h-px after:bg-amber-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                Home
              </span>
            </Link>
            <Link 
              to="#about" 
              className={`transition-all duration-300 flex items-center group ${activeItem === 'about' ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'}`}
              onClick={() => handleItemClick('about')}
            >
              <div className={`p-1.5 rounded-lg mr-2 transition-all duration-300 ${activeItem === 'about' ? 'bg-amber-400/10' : 'group-hover:bg-gray-700/50'}`}>
                <FiInfo className="text-lg" />
              </div>
              <span className="relative font-medium after:absolute after:w-0 after:h-px after:bg-amber-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                About
              </span>
            </Link>
            <Link 
              to="#products" 
              className={`transition-all duration-300 flex items-center group ${activeItem === 'products' ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'}`}
              onClick={() => handleItemClick('products')}
            >
              <div className={`p-1.5 rounded-lg mr-2 transition-all duration-300 ${activeItem === 'products' ? 'bg-amber-400/10' : 'group-hover:bg-gray-700/50'}`}>
                <FiBox className="text-lg" />
              </div>
              <span className="relative font-medium after:absolute after:w-0 after:h-px after:bg-amber-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                Products
              </span>
            </Link>
            <Link 
              to="/contact" 
              className={`transition-all duration-300 flex items-center group ${activeItem === 'contact' ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'}`}
              onClick={() => handleItemClick('contact')}
            >
              <div className={`p-1.5 rounded-lg mr-2 transition-all duration-300 ${activeItem === 'contact' ? 'bg-amber-400/10' : 'group-hover:bg-gray-700/50'}`}>
                <FiPhone className="text-lg" />
              </div>
              <span 
              className="relative font-medium after:absolute after:w-0 after:h-px after:bg-amber-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                Contact
              </span>
            </Link>
            
            {/* Unique elements */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-700">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all duration-300 w-40"
                />
              </div>
              
              <button className="p-2.5 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg text-amber-400 hover:text-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 relative group">
                <FiHeart className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md shadow-amber-500/20">
                  2
                </span>
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="p-2 text-amber-400 bg-gray-800 rounded-lg">
              <FiSearch className="text-lg" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-amber-400 rounded-lg focus:outline-none transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-900/98 backdrop-blur-lg overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-6 space-y-2 sm:px-4">
          <Link 
            to="#" 
            className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === 'home' ? 'bg-amber-400/10 text-amber-400' : 'text-gray-300 hover:bg-gray-800/50 hover:text-amber-300'}`}
            onClick={() => handleItemClick('home')}
          >
            <div className={`p-1.5 rounded-lg mr-3 transition-all duration-300 ${activeItem === 'home' ? 'bg-amber-400/20' : 'group-hover:bg-gray-700/50'}`}>
              <FiHome className="text-lg" />
            </div>
            <span className="font-medium">Home</span>
          </Link>
          <Link 
            to="#about" 
            className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === 'about' ? 'bg-amber-400/10 text-amber-400' : 'text-gray-300 hover:bg-gray-800/50 hover:text-amber-300'}`}
            onClick={() => handleItemClick('about')}
          >
            <div className={`p-1.5 rounded-lg mr-3 transition-all duration-300 ${activeItem === 'about' ? 'bg-amber-400/20' : 'group-hover:bg-gray-700/50'}`}>
              <FiInfo className="text-lg" />
            </div>
            <span className="font-medium">About</span>
          </Link>
          <Link 
            to="#products" 
            className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === 'products' ? 'bg-amber-400/10 text-amber-400' : 'text-gray-300 hover:bg-gray-800/50 hover:text-amber-300'}`}
            onClick={() => handleItemClick('products')}
          >
            <div className={`p-1.5 rounded-lg mr-3 transition-all duration-300 ${activeItem === 'products' ? 'bg-amber-400/20' : 'group-hover:bg-gray-700/50'}`}>
              <FiBox className="text-lg" />
            </div>
            <span className="font-medium">Products</span>
          </Link>
          <Link 
            to="#contact" 
            className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === 'contact' ? 'bg-amber-400/10 text-amber-400' : 'text-gray-300 hover:bg-gray-800/50 hover:text-amber-300'}`}
            onClick={() => handleItemClick('contact')}
          >
            <div className={`p-1.5 rounded-lg mr-3 transition-all duration-300 ${activeItem === 'contact' ? 'bg-amber-400/20' : 'group-hover:bg-gray-700/50'}`}>
              <FiPhone className="text-lg" />
            </div>
            <span className="font-medium">Contact</span>
          </Link>
          
          <div className="pt-3 mt-3 border-t border-gray-800">
            <div className="px-4 py-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all duration-300 w-full"
                />
              </div>
            </div>
            
            <Link to="#" className="block px-4 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-amber-300 rounded-xl transition-all duration-300 flex items-center group">
              <div className="p-1.5 rounded-lg mr-3 bg-gray-800 group-hover:bg-gray-700/50 transition-all duration-300">
                <FiHeart className="text-lg" />
              </div>
              <span className="font-medium">Wishlist</span>
              <span className="ml-auto bg-amber-500 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;