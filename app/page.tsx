'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Truck, Shield, Clock, Sparkles, Award, Users } from 'lucide-react'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
}

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
}

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black py-20 lg:py-32 overflow-hidden">
  <motion.div 
    initial="hidden"
    animate="show"
    variants={container}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        {/* Trust Badge */}
        <motion.div variants={item} className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
          <Award className="w-5 h-5 text-gray-300" />
          <span className="text-sm font-semibold text-gray-300">Premium Quality Guaranteed</span>
        </motion.div>

        <div className="space-y-6">
          <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            <span className="text-gray-300">Elevate</span>
            <br />
            <span className="text-white">Your Step</span>
          </motion.h1>
          <motion.div variants={item} className="space-y-4">
            <p className="text-2xl md:text-3xl font-semibold text-gray-300">
              Premium Shoe Collection
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Style and comfort, curated with precision. Discover shoes that make every step count.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
       
        {/* CTA Buttons */}
        <motion.div variants={container} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.div variants={item}>
            <Link href="/shop" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 group">
              <span>Explore Collection</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
          <motion.div variants={item}>
            <Link href="/shop?style=formal" className="bg-transparent border-2 border-gray-400 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 group">
              <span>Premium Formal</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Premium Shoes Collection"
            width={600}
            height={500}
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Price Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-700"
          >
            <p className="text-sm text-gray-300 mb-1">Starting from</p>
            <p className="text-2xl font-bold text-white">PKR 2,999</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
</section>
      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-4xl font-bold text-white mb-4">Why Choose Us?</motion.h2>
            <motion.p variants={item} className="text-lg text-gray-400 max-w-2xl mx-auto">Experience the difference with our premium service and quality guarantee</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={item} className="text-center space-y-6 p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mx-auto"
              >
                <Truck className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-bold text-xl text-white">Free Shipping</h3>
              <p className="text-gray-400 leading-relaxed">Free shipping on orders over PKR 5,000. Fast delivery across Pakistan.</p>
            </motion.div>
            
            <motion.div variants={item} className="text-center space-y-6 p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mx-auto"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-bold text-xl text-white">Quality Guarantee</h3>
              <p className="text-gray-400 leading-relaxed">Premium materials and expert craftsmanship. 100% satisfaction guaranteed.</p>
            </motion.div>
            
            <motion.div variants={item} className="text-center space-y-6 p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mx-auto"
              >
                <Clock className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-bold text-xl text-white">Fast Delivery</h3>
              <p className="text-gray-400 leading-relaxed">Express delivery in 2-3 business days. Track your order in real-time.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-4xl font-bold text-gray-900 mb-4">Shop by Style</motion.h2>
            <motion.p variants={item} className="text-lg text-gray-600">Discover our curated collections for every occasion</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Formal Category */}
            <motion.div variants={item}>
              <Link href="/shop?style=formal" className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 block">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative h-96"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Formal Collection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full mb-4 inline-block">
                      <span className="text-sm font-semibold text-white">Premium Collection</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Formal Shoes</h3>
                    <p className="text-gray-300 mb-6 text-lg">Professional & Business Styles</p>
                    <span className="inline-flex items-center text-white font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                      Explore Collection
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Casual Category */}
            <motion.div variants={item}>
              <Link href="/shop?style=casual" className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 block">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative h-96"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Casual Collection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full mb-4 inline-block">
                      <span className="text-sm font-semibold text-white">Comfort Collection</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Casual Shoes</h3>
                    <p className="text-gray-300 mb-6 text-lg">Everyday Comfort Styles</p>
                    <span className="inline-flex items-center text-white font-semibold text-lg group-hover:translate-x-2 transition-transform duration-300">
                      Explore Collection
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</motion.h2>
            <motion.p variants={item} className="text-lg text-gray-600">Discover our latest arrivals and bestsellers</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                variants={item}
                custom={index}
                whileHover={{ y: -10 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link href="/shop" className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 group inline-flex mx-auto">
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}