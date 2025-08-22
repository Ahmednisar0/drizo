'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Heart, ShoppingBag, ArrowLeft, Check, Shield, Truck, RotateCcw } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { dispatch } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  // Handle case where params might be null or undefined
  if (!params?.id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Product ID not found</h1>
          <p className="text-gray-600 mb-8">The product ID is missing from the URL.</p>
          <button
            onClick={() => router.push('/shop')}
            className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-3 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/shop')}
            className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-3 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size first');
      return;
    }
    
    // Create a cart item with the selected size
    const cartItem = {
      ...product,
      selectedSize
    };

    dispatch({
      type: 'ADD_ITEM',
      payload: cartItem,
    });

    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size first');
      return;
    }
    
    handleAddToCart();
    router.push('/cart');
  };

  // Get available sizes from product data
  const availableSizes = Array.isArray(product.size) ? product.size : [product.size];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-black mb-8 transition-colors duration-200 bg-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                width={600}
                height={500}
                className="w-full h-96 lg:h-[600px] object-cover"
                priority
              />
              {product.isNew && (
                <span className="absolute top-6 left-6 bg-gradient-to-r from-black to-gray-800 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                  New Arrival
                </span>
              )}
              {product.discount && (
                <span className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-3 transition-all duration-300 ${
                      selectedImageIndex === index 
                        ? 'border-black shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-400 hover:shadow-md'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Enhanced Product Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <p className="text-sm text-gray-500 mb-3 uppercase tracking-wide font-semibold">Premium Shoes</p>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">PKR {product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">PKR {product.originalPrice.toLocaleString()}</span>
                )}
                {product.discount && (
                  <span className="text-green-600 font-bold text-lg bg-green-100 px-3 py-1 rounded-full">
                    Save {product.discount}%
                  </span>
                )}
              </div>

              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Select Size</h4>
                <div className="flex flex-wrap gap-3">
                  {availableSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-6 rounded-xl border-2 text-center transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-black bg-black text-white shadow-lg transform scale-105'
                          : 'border-gray-300 hover:border-black hover:shadow-md'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Info */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-2">Color</h4>
                <p className="text-gray-600 text-lg font-medium">{product.color}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-black to-gray-800 text-white py-4 px-8 rounded-2xl font-bold hover:from-gray-800 hover:to-black transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    <ShoppingBag className="w-6 h-6" />
                    <span>Add to Cart</span>
                  </button>
                  
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-4 border-2 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                      isWishlisted
                        ? 'border-red-500 bg-red-50 text-red-500'
                        : 'border-gray-300 hover:border-red-500 hover:text-red-500 bg-white'
                    }`}
                  >
                    <Heart className={`w-7 h-7 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full border-2 border-black text-black py-4 px-8 rounded-2xl font-bold hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Buy Now
                </button>
              </div>

              {/* Added to Cart Message */}
              {showAddedMessage && (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-center space-x-3 text-green-800 mt-4">
                  <Check className="w-6 h-6" />
                  <span className="font-semibold">Added to cart successfully!</span>
                </div>
              )}
            </div>

            {/* Enhanced Product Features */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-6">Why Choose This Product?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Premium Quality</h4>
                    <p className="text-gray-600 text-sm">Crafted with finest materials</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fast Delivery</h4>
                    <p className="text-gray-600 text-sm">2-3 business days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                    <RotateCcw className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Easy Returns</h4>
                    <p className="text-gray-600 text-sm">30-day return policy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Authentic Product</h4>
                    <p className="text-gray-600 text-sm">100% genuine materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}