'use client'; // Required for client-side hooks

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    style: searchParams?.get('style') || '',
    priceRange: '',
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
      sortBy: 'name',
    });
  };

  const activeFiltersCount = Object.values(filters).filter(value => value && value !== 'name').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Collection'}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Sidebar Filters */}
          <div className={`
            lg:w-64 lg:flex-shrink-0
            ${isFilterOpen ? 'fixed inset-0 z-50 bg-white lg:relative lg:inset-auto' : 'hidden lg:block'}
          `}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
              {/* Mobile Filter Header */}
              {isFilterOpen && (
                <div className="lg:hidden flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              )}

              <div className="space-y-6">
                {/* Style Filter */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Style</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="style"
                        value=""
                        checked={filters.style === ''}
                        onChange={(e) => handleFilterChange('style', e.target.value)}
                        className="mr-2"
                      />
                      All
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="style"
                        value="formal"
                        checked={filters.style === 'formal'}
                        onChange={(e) => handleFilterChange('style', e.target.value)}
                        className="mr-2"
                      />
                      Formal
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="style"
                        value="casual"
                        checked={filters.style === 'casual'}
                        onChange={(e) => handleFilterChange('style', e.target.value)}
                        className="mr-2"
                      />
                      Casual
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="style"
                        value="sports"
                        checked={filters.style === 'sports'}
                        onChange={(e) => handleFilterChange('style', e.target.value)}
                        className="mr-2"
                      />
                      Sports
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="style"
                        value="boots"
                        checked={filters.style === 'boots'}
                        onChange={(e) => handleFilterChange('style', e.target.value)}
                        className="mr-2"
                      />
                      Boots
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="style"
                        value="heels"
                        checked={filters.style === 'heels'}
                        onChange={(e) => handleFilterChange('style', e.target.value)}
                        className="mr-2"
                      />
                      Heels
                    </label>
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">All Prices</option>
                    <option value="0-150">Under PKR 150</option>
                    <option value="150-250">PKR 150 - 250</option>
                    <option value="250-350">PKR 250 - 350</option>
                    <option value="350-1000">PKR 350+</option>
                  </select>
                </div>

                {/* Clear Filters */}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="w-full text-sm text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-600">
                Showing {filteredProducts.length} results
              </span>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link 
                    href={`/products/${product.id}`} 
                    key={product.id}
                    className="hover:opacity-90 transition-opacity"
                  >
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms.</p>
                <button
                  onClick={clearFilters}
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Clear Filters
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
};

export default Shop;