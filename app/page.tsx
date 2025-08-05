import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Truck, Shield, Clock, Sparkles, Award, Users } from 'lucide-react'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-black/5 rounded-full"></div>
          <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-black/3 rounded-full" style={{animationDelay: '2s'}}></div>
          <div className="floating-element absolute bottom-20 left-1/4 w-16 h-16 bg-black/4 rounded-full" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-800">Premium Quality Guaranteed</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-text">Elevate</span>
                  <br />
                  <span className="text-gray-900">Your Step</span>
                </h1>
                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Premium Shoe Collection
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Style and comfort, curated with precision. Discover shoes that make every step count.
                  </p>
                </div>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-black mr-2" />
                    <span className="text-2xl font-bold text-gray-900">5K+</span>
                  </div>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-yellow-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">4.9</span>
                  </div>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Sparkles className="w-6 h-6 text-purple-500 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">100+</span>
                  </div>
                  <p className="text-sm text-gray-600">Premium Styles</p>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/shop" className="btn-primary group">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link href="/shop?style=formal" className="btn-secondary group">
                  <span>Premium Formal</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Enhanced Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Premium Shoes Collection"
                  width={600}
                  height={500}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Floating Price Badge */}
                <div className="absolute bottom-6 left-6 glass-effect p-4 rounded-2xl">
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="text-2xl font-bold text-gray-900">PKR 2,999</p>
                </div>
              </div>
              
              {/* Enhanced Floating Badge */}
              <div className="absolute -top-6 -right-6 glass-effect p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">5.0 Rating</p>
                    <p className="text-sm text-gray-600">2,500+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PremiumStep?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Experience the difference with our premium service and quality guarantee</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-6 p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Free Shipping</h3>
              <p className="text-gray-600 leading-relaxed">Free shipping on orders over PKR 5,000. Fast delivery across Pakistan.</p>
            </div>
            
            <div className="text-center space-y-6 p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">Premium materials and expert craftsmanship. 100% satisfaction guaranteed.</p>
            </div>
            
            <div className="text-center space-y-6 p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Express delivery in 2-3 business days. Track your order in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Category Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Style</h2>
            <p className="text-lg text-gray-600">Discover our curated collections for every occasion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formal Category */}
            <Link href="/shop?style=formal" className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover">
              <div className="relative h-96">
                <Image
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Formal Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <div className="glass-effect px-3 py-1 rounded-full mb-4">
                    <span className="text-sm font-semibold text-gray-800">Premium Collection</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Formal Shoes</h3>
                  <p className="text-white/90 mb-6 text-lg">Professional & Business Styles</p>
                  <span className="inline-flex items-center text-white font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                    Explore Collection
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Casual Category */}
            <Link href="/shop?style=casual" className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover">
              <div className="relative h-96">
                <Image
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Casual Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <div className="glass-effect px-3 py-1 rounded-full mb-4">
                    <span className="text-sm font-semibold text-gray-800">Comfort Collection</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Casual Shoes</h3>
                  <p className="text-white/90 mb-6 text-lg">Comfortable & Everyday Styles</p>
                  <span className="inline-flex items-center text-white font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                    Explore Collection
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-lg text-gray-600">Discover our latest arrivals and bestsellers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/shop" className="btn-primary group">
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}