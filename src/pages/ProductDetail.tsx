'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Heart, Minus, Plus, ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { dispatch } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  // Handle case where params might be null or undefined
  if (!params?.id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product ID not found</h1>
          <button
            onClick={() => router.push('/shop')}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
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
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push('/shop')}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: product,
    });

    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-black mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded-full font-medium">
                  New
                </span>
              )}
              {product.discount && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImageIndex === index ? 'border-black' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}'s Shoes</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount && (
                  <span className="text-green-600 font-semibold">
                    Save {product.discount}%
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Available Sizes & Colors */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Available Sizes</h3>
              <p className="text-gray-600 mb-4">{product.sizes.join(', ')}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Available Colors</h3>
              <p className="text-gray-600 mb-6">{product.colors.join(', ')}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 border rounded-lg transition-colors duration-200 ${
                    isWishlisted
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-300 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full border-2 border-black text-black py-3 px-6 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200"
              >
                Buy Now
              </button>
            </div>

            {/* Added to Cart Message */}
            {showAddedMessage && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2 text-green-800">
                <Check className="w-5 h-5" />
                <span>Added to cart successfully!</span>
              </div>
            )}

            {/* Product Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Product Features</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Premium quality materials</p>
                <p>• Comfortable all-day wear</p>
                <p>• Durable construction</p>
                <p>• Expert craftsmanship</p>
                <p>• 30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;