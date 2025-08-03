import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter subscription
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <span className="font-bold text-xl text-gray-900">PremiumStep</span>
            </div>
            <p className="text-gray-600 text-sm">
              Elevating your style with premium shoes that combine comfort, quality, and sophistication.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/shop?style=formal" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Formal Shoes
              </Link>
              <Link to="/shop?style=casual" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Casual Shoes
              </Link>
              <Link to="/shop?style=sports" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Sports Shoes
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Customer Service</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Size Guide
              </a>
              <a href="#" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Shipping Info
              </a>
              <a href="#" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200">
                Returns
              </a>
              <a href="#" className="block text-gray-600 hover:text-black text-sm transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Stay Updated</h3>
            <p className="text-gray-600 text-sm">
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 PremiumStep. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:info@premiumstep.com" className="text-gray-400 hover:text-black transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;