'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../types/Product';
import { ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        
        {/* Enhanced Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-gradient-to-r from-black to-gray-800 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
              New Arrival
            </span>
          )}
          {product.discount && (
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={`/product/${product.id}`}
            className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </Link>
        </div>
      </div>

      {/* Enhanced Product Info */}
      <div className="p-6">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-black transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500 capitalize bg-gray-100 px-3 py-1 rounded-full">
            {product.style}
          </p>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span>Size: {product.size}</span>
            <span>•</span>
            <span>{product.color}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-gray-900">PKR {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">PKR {product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          
          <Link
            href={`/product/${product.id}`}
            className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>View</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;