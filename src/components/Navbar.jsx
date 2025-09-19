// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { FiHeart, FiMenu, FiSearch, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0E5543] backdrop-blur-md shadow-xl py-1' : 'bg-gradient-to-b from-gray-900 to-gray-850 py-2 border-b border-gray-700/30'}`}>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="inline-flex items-center">
              <img src={logo} alt="RGM" className="h-9 md:h-13 w-auto object-contain rounded-" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden block md:flex items-center space-x-6">
            <Link
              to="/"
              className={`transition-all duration-300 group ${activeItem === 'home' ? 'text-white' : 'text-white hover:text-amber-300'}`}
              onClick={() => handleItemClick('home')}
            >
              <span className="relative font-medium text-white after:absolute after:w-0 after:h-px after:bg-amber-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                Home
              </span>
            </Link>
            <Link
              to="/about"
              className={`transition-all duration-300 group ${activeItem === 'about' ? 'text-white' : 'text-white hover:text-amber-300'}`}
              onClick={() => handleItemClick('about')}
            >
              <span className="relative font-medium text-white after:absolute after:w-0 after:h-px after:bg-amber-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                About
              </span>
            </Link>
            <Link
              to="/OurStones"
              className={`transition-all duration-300 group ${activeItem === 'Our Stones' ? 'text-white' : 'text-white hover:text-amber-300'}`}
              onClick={() => handleItemClick('Our Stones')}
            >
              <span className="relative font-medium text-white after:absolute after:w-0 after:h-px after:bg-amber-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
              Our Stones
              </span>
            </Link>
            <Link
              to="/Services"
              className={`transition-all duration-300 group ${activeItem === 'Services' ? 'text-white' : 'text-white hover:text-amber-300'}`}
              onClick={() => handleItemClick('Services')}
            >
              <span className="relative font-medium text-white after:absolute after:w-0 after:h-px after:bg-amber-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
              Services
              </span>
            </Link>
            <Link
              to="/contact"
              className={`transition-all duration-300 group ${activeItem === 'contact' ? 'text-white' : 'text-white hover:text-amber-300'}`}
              onClick={() => handleItemClick('contact')}
            >
              <span
                    className="relative font-medium text-white after:absolute after:w-0 after:h-px after:bg-amber-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                Contact
              </span>
            </Link>

            {/* Unique elements */}
            <div className="flex items-center ml-4 pl-4 border-l border-gray-700">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all duration-300 w-40"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="p-2 text-[#F2E1C5] bg-[#F2E1C5] rounded-lg">
              <FiSearch className="text-lg" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 bg-gradient-to-br from-[#F2E1C5] to-[#F2E1C5] border border-[#F2E1C5] text-[#F2E1C5] rounded-lg focus:outline-none transition-all duration-300 hover:shadow-lg hover:shadow-[#F2E1C5]/10"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (Right Drawer) */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-80 bg-gray-900/95 z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-800">
          <span className="text-[#F2E1C5] font-semibold tracking-wide">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-[#F2E1C5] hover:bg-gray-800/60 transition"
          >
            <FiX size={20} />
          </button>
        </div>
        <div className="px-2 pt-2 pb-6 space-y-2 sm:px-4 overflow-y-auto h-[calc(100%-4rem)]">
          <Link
            to="/"
            className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === 'home' ? 'bg-[#F2E1C5]/10 text-[#F2E1C5]' : 'text-[#F2E1C5] hover:bg-[#F2E1C5]/50 hover:text-[#F2E1C5]'}`}
            onClick={() => handleItemClick('home')}
          >
            <span className="font-medium">Home</span>
          </Link>
          <Link
            to="/about"
            className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === 'about' ? 'bg-[#F2E1C5]/10 text-[#F2E1C5]' : 'text-[#F2E1C5] hover:bg-[#F2E1C5]/50 hover:text-[#F2E1C5]'}`}
            onClick={() => handleItemClick('about')}
          >
            <span className="font-medium">About</span>
          </Link>
          <Link
            to="/products"
            className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === 'products' ? 'bg-[#F2E1C5]/10 text-[#F2E1C5]' : 'text-[#F2E1C5] hover:bg-[#F2E1C5]/50 hover:text-[#F2E1C5]'}`}
            onClick={() => handleItemClick('products')}
          >
            <span className="font-medium">Products</span>
          </Link>
          <Link
            to="/Services"
            className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === 'Services' ? 'bg-[#F2E1C5]/10 text-[#F2E1C5]' : 'text-[#F2E1C5] hover:bg-[#F2E1C5]/50 hover:text-[#F2E1C5]'}`}
            onClick={() => handleItemClick('Services')}
          >
            <span className="font-medium">Services</span>
          </Link>
          <Link
            to="/contact"
            className={`block px-4 py-3 rounded-xl transition-all duration-300 flex items-center group ${activeItem === 'contact' ? 'bg-[#F2E1C5]/10 text-[#F2E1C5]' : 'text-[#F2E1C5] hover:bg-[#F2E1C5]/50 hover:text-[#F2E1C5]'}`}
            onClick={() => handleItemClick('contact')}
          >
            <span className="font-medium">Contact</span>
          </Link>

          <div className="pt-3 mt-3 border-t border-gray-800">
            <div className="px-4 py-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiSearch className="text-[#F2E1C5]" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-all duration-300 w-full"
                />
              </div>
            </div>

            <Link to="/" className="block px-4 py-3 text-gray-300 hover:bg-gray-800/50 hover:text-amber-300 rounded-xl transition-all duration-300 flex items-center group">
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