'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBag, Menu, X, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { state } = useCart();
  const router = useRouter();

  const filteredSuggestions = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.style.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (productName: string) => {
    setSearchQuery(productName);
    setShowSuggestions(false);
    router.push(`/shop?search=${encodeURIComponent(productName)}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-black to-gray-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-sm">PS</span>
            </div>
            <span className="font-bold text-xl text-gray-900 group-hover:text-black transition-colors duration-300">PremiumStep</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-black font-medium transition-colors duration-200 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Home</span>
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200 hover:scale-105 transform"
            >
              Contact
            </Link>
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden md:block relative">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search premium shoes..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="w-72 pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50 hover:bg-white transition-colors duration-200"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </form>

            {/* Enhanced Search Suggestions */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl mt-2 z-50 overflow-hidden">
                {filteredSuggestions.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSuggestionClick(product.name)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-500">PKR {product.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Cart */}
            <Link
              href="/cart"
              className="relative p-3 text-gray-700 hover:text-black transition-colors duration-200 hover:bg-gray-100 rounded-xl group"
            >
              <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-black to-gray-800 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold shadow-lg">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-gray-700 hover:text-black transition-colors duration-200 hover:bg-gray-100 rounded-xl"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-md">
            <div className="space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search premium shoes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </form>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 font-medium transition-colors duration-200 rounded-xl"
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 font-medium transition-colors duration-200 rounded-xl"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 font-medium transition-colors duration-200 rounded-xl"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 font-medium transition-colors duration-200 rounded-xl"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;