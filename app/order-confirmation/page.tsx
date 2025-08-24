'use client'

import React from 'react';
import Link from 'next/link';
import { Check, Home, ShoppingBag } from 'lucide-react';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <Check className="w-12 h-12 text-green-600" />
        </div>
        
        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
        </p>
        
        {/* Order ID */}
        <div className="bg-gray-50 rounded-xl p-4 mb-8">
          <p className="text-sm text-gray-500 mb-1">Order ID</p>
          <p className="font-mono font-bold text-gray-800">
            #{Math.random().toString(36).substring(2, 10).toUpperCase()}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <Link
            href="/shop"
            className="border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>
        
        {/* Support Message */}
        <p className="text-sm text-gray-500 mt-8">
          Need help? <a href="#" className="text-green-600 hover:underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
}