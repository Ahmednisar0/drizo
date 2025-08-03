import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Elevate Your Step
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Explore Our Premium Shoe Collection
                </p>
                <p className="text-lg text-gray-500">
                  Style and comfort, curated for Men & Women.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/shop"
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Shop All Shoes</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/shop?style=formal"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Shop Formal Shoes</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Premium Shoes Collection"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5.0 Rating</p>
                    <p className="text-sm text-gray-500">2,500+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $200</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600">Premium materials and craftsmanship</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">2-3 business days delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Discover our curated collections for every style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formal Category */}
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80">
                <img
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Formal Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Formal Collection</h3>
                  <p className="text-white/90 mb-4">Professional & Business Styles</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-200">
                    Explore Collection
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Casual Category */}
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80">
                <img
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Casual Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Casual Collection</h3>
                  <p className="text-white/90 mb-4">Comfortable & Everyday Styles</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-200">
                    Explore Collection
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </div>
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
            <p className="text-lg text-gray-600">Discover our latest arrivals and bestsellers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 space-x-2 group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;