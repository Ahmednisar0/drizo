'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, Award, Users, Heart } from 'lucide-react';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">About Drizoo</h1>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We're passionate about creating exceptional footwear that combines timeless style, 
            superior comfort, and uncompromising quality for the modern Pakistani individual.
          </p>
        </div>
      </section>

      {/* Enhanced Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded in 2020, Drizoo emerged from a simple belief: everyone deserves 
                  shoes that look exceptional and feel incredible. Our journey began when our 
                  founder noticed a gap in the market for premium Pakistani footwear that didn't compromise 
                  on either style or comfort.
                </p>
                <p>
                  Today, we work directly with skilled Pakistani artisans and use only the finest materials 
                  to create shoes that stand the test of time. Each pair is crafted with attention 
                  to detail and a commitment to excellence that has become our signature.
                </p>
                <p>
                  From our headquarters in Karachi, we've built relationships with customers across Pakistan who 
                  share our appreciation for quality craftsmanship and timeless design.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Craftsmanship"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-bold text-gray-900">Premium Quality</p>
                    <p className="text-sm text-gray-600">Since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-6 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-black to-gray-800 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We never compromise on materials or craftsmanship. Every shoe is built to last 
                and designed to impress with premium quality standards.
              </p>
            </div>

            <div className="text-center space-y-6 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-black to-gray-800 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Pakistani Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                We take pride in supporting local artisans and promoting traditional Pakistani 
                shoemaking techniques with a modern twist.
              </p>
            </div>

            <div className="text-center space-y-6 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-r from-black to-gray-800 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Customer Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. We listen, we care, and we're here to help 
                every step of the way with exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-14 h-14 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-900">Email</p>
                      <p className="text-gray-600">info@drizoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-14 h-14 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-900">Phone</p>
                      <p className="text-gray-600">+92 (300) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-14 h-14 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-900">Address</p>
                      <p className="text-gray-600">123 Fashion Street<br />Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-black to-gray-800 p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-6">Business Hours</h3>
                <div className="space-y-3 text-gray-200">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="bg-gray-50 p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white shadow-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white shadow-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none bg-white shadow-sm"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 px-8 rounded-2xl font-bold hover:from-gray-800 hover:to-black transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}