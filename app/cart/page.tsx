'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const shippingCost = state.total >= 5000 ? 0 : 300;
  const taxAmount = state.total * 0.08;
  const finalTotal = state.total + shippingCost + taxAmount;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-16 rounded-3xl shadow-2xl max-w-md">
          <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">Start shopping to add premium shoes to your cart</p>
          <Link
            href="/shop"
            className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-2xl font-bold hover:from-gray-800 hover:to-black transition-all duration-300 inline-flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <Link
              href="/shop"
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200 bg-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Continue Shopping</span>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800 transition-colors duration-200 text-sm font-medium bg-red-50 px-4 py-2 rounded-xl hover:bg-red-100"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center space-x-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="w-28 h-28 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-3 capitalize bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {item.style} Shoes
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <span className="bg-gray-50 px-3 py-1 rounded-full">Size: {item.size}</span>
                      <span className="bg-gray-50 px-3 py-1 rounded-full">Color: {item.color}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-bold text-2xl text-gray-900">PKR {item.price.toLocaleString()}</p>
                    {item.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">PKR {item.originalPrice.toLocaleString()}</p>
                    )}
                  </div>
                </div>

                {/* Quantity and Actions */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600 font-medium">Quantity:</span>
                    <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-3 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-6 py-3 font-bold text-lg bg-gray-50">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-3 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <span className="font-bold text-xl text-gray-900">
                      Subtotal: PKR {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200 p-2 hover:bg-red-50 rounded-xl"
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Summary</h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">
                    Subtotal ({state.items.reduce((sum, item) => sum + item.quantity, 0)} items)
                  </span>
                  <span className="font-bold text-lg">PKR {state.total.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-bold text-lg">
                    {shippingCost === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `PKR ${shippingCost.toLocaleString()}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-bold text-lg">PKR {taxAmount.toLocaleString()}</span>
                </div>
                
                <div className="border-t-2 border-gray-200 pt-6">
                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span>PKR {finalTotal.toLocaleString()}</span>
                  </div>
                </div>
                
                {state.total < 5000 && (
                  <div className="text-sm text-amber-700 bg-amber-50 p-4 rounded-xl border border-amber-200">
                    <p className="font-semibold">💡 Pro Tip:</p>
                    <p>Add PKR {(5000 - state.total).toLocaleString()} more for free shipping!</p>
                  </div>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 px-8 rounded-2xl font-bold hover:from-gray-800 hover:to-black transition-all duration-300 mt-8 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3">
                <CreditCard className="w-6 h-6" />
                <span>Proceed to Checkout</span>
              </button>

              <div className="mt-6 text-center">
                <Link
                  href="/shop"
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-200 font-medium"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Enhanced Security Features */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Your Benefits</h3>
                <div className="text-sm text-gray-600 space-y-3">
                  <p className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Secure checkout with SSL encryption
                  </p>
                  <p className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    30-day hassle-free returns
                  </p>
                  <p className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Free shipping over PKR 5,000
                  </p>
                  <p className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    24/7 customer support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}