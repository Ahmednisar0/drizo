'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Enhanced Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-black to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="font-bold text-2xl text-gray-900">PremiumStep</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Elevating your style with premium shoes that combine comfort, quality, and sophistication. 
              Every step matters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-gray-900">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/shop?style=formal" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                Formal Shoes
              </Link>
              <Link href="/shop?style=casual" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                Casual Shoes
              </Link>
              <Link href="/shop?style=sports" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                Sports Shoes
              </Link>
              <Link href="/about" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                Contact
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-gray-900">Customer Service</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                Size Guide
              </a>
              <a href="#" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                Shipping Info
              </a>
              <a href="#" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                Returns & Exchanges
              </a>
              <a href="#" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                FAQ
              </a>
              <a href="#" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200 hover:translate-x-1 transform">
                Track Your Order
              </a>
            </div>
          </div>

          {/* Enhanced Newsletter */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-gray-900">Stay Updated</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Subscribe to get updates on new arrivals, exclusive offers, and style tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm bg-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 px-4 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 text-sm font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 PremiumStep. All rights reserved. Made with ❤️ for shoe lovers.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="mailto:info@premiumstep.com" className="text-gray-600 hover:text-black transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;