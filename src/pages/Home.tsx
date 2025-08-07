'use client';

import Link from 'next/link';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const trendingProducts = products.slice(2, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Step Into <span className="text-indigo-600">Style</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Handcrafted footwear designed for comfort and durability
                </p>
                <div className="h-1 w-20 bg-indigo-500"></div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/shop"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Shop Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Our Story</span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
                  alt="Premium Shoes Collection"
                  className="w-full h-96 lg:h-[500px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $150</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">2-Year Warranty</h3>
              <p className="text-gray-600">Quality guaranteed</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Collections</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for every occasion, crafted for every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Men's Collection */}
            <Link
              href="/shop/men"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Men's Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">Men's</h3>
                <p className="text-white/90 mt-1">Explore Collection</p>
              </div>
            </Link>

            {/* Women's Collection */}
            <Link
              href="/shop/women"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Women's Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">Women's</h3>
                <p className="text-white/90 mt-1">Explore Collection</p>
              </div>
            </Link>

            {/* New Arrivals */}
            <Link
              href="/shop/new-arrivals"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                alt="New Arrivals"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">New Arrivals</h3>
                <p className="text-white/90 mt-1">Shop Latest Styles</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most loved styles, curated for your everyday adventures
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 space-x-2 group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending Now</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what's popular right now
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Crafted With Purpose</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2010, we've been committed to creating footwear that combines timeless design with modern comfort. 
                Each pair is thoughtfully designed and rigorously tested to ensure quality that lasts.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200 space-x-2 group"
              >
                <span>Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-xl shadow-xl aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Our Workshop"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;