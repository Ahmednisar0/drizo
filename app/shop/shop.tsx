'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Shop() {
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    style: searchParams?.get('style') || '',
    priceRange: '',
    size: '', // ✅ added size filter
    sortBy: 'name',
  });

  const searchQuery = searchParams?.get('search') || '';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Style filter
    if (filters.style) {
      filtered = filtered.filter(product => product.style === filters.style);
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }

    // ✅ Size filter
    if (filters.size) {
      filtered = filtered.filter(product =>
        product.size.includes(filters.size)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [filters, searchQuery]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      style: '',
      priceRange: '',
      size: '',   // ✅ reset size too
      sortBy: 'name',
    });
  };

  const activeFiltersCount = Object.values(filters).filter(value => value && value !== 'name').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Premium Shoe Collection'}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover {filteredProducts.length} premium shoes crafted for style and comfort
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-800 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 font-semibold"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-gradient-to-r from-black to-gray-800 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Sidebar Filters */}
          <div className={`
            lg:w-80 lg:flex-shrink-0
            ${isFilterOpen ? 'fixed inset-0 z-50 bg-white lg:relative lg:inset-auto' : 'hidden lg:block'}
          `}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-fit sticky top-8">
              {isFilterOpen && (
                <div className="lg:hidden flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              )}

              <div className="space-y-8">
                {/* Style Filter */}
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Style</h3>
                  <div className="space-y-3">
                    {[
                      { value: '', label: 'All Styles' },
                      { value: 'formal', label: 'Formal' },
                      { value: 'casual', label: 'Casual' },
                      { value: 'sports', label: 'Sports' },
                      { value: 'boots', label: 'Boots' },
                      { value: 'heels', label: 'Heels' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="style"
                          value={option.value}
                          checked={filters.style === option.value}
                          onChange={(e) => handleFilterChange('style', e.target.value)}
                          className="w-4 h-4 text-black focus:ring-black border-gray-300"
                        />
                        <span className="text-gray-700 group-hover:text-black transition-colors duration-200">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Price Range</h3>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50 hover:bg-white transition-colors duration-200"
                  >
                    <option value="">All Prices</option>
                    <option value="0-4000">Under PKR 4,000</option>
                    <option value="4000-7000">PKR 4,000 - 7,000</option>
                    <option value="7000-10000">PKR 7,000 - 10,000</option>
                    <option value="10000-999999">PKR 10,000+</option>
                  </select>
                </div>

                {/* ✅ Size Filter */}
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {['6', '7', '8', '9', '10', '11'].map(size => (
                      <button
                        key={size}
                        onClick={() => handleFilterChange('size', filters.size === size ? '' : size)}
                        className={`px-4 py-2 rounded-xl border transition-all duration-200 font-medium ${
                          filters.size === size
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="w-full text-sm text-gray-600 hover:text-black transition-colors duration-200 py-2 px-4 border border-gray-300 rounded-xl hover:bg-gray-50"
                  >
                    Clear All Filters ({activeFiltersCount})
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-lg">
              <span className="text-gray-600 font-medium">
                Showing <span className="font-bold text-black">{filteredProducts.length}</span> results
              </span>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50 hover:bg-white transition-colors duration-200 font-medium"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                <Filter className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No products found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Try adjusting your filters or search terms to find the perfect shoes for you.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-3 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
}
