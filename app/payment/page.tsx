'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, Wallet, Phone, Shield, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Payment() {
  const { state, dispatch } = useCart();
  const router = useRouter();
  
  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [bankDetails, setBankDetails] = useState({
    accountName: '',
    accountNumber: '',
    bankName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleBankDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Clear cart after successful payment
      dispatch({ type: 'CLEAR_CART' });
      setIsProcessing(false);
      // Redirect to confirmation page
      router.push('/order-confirmation');
    }, 2000);
  };

  // Calculate order totals
  const shippingCost = state.total >= 5000 ? 0 : 300;
  const taxAmount = state.total * 0.08;
  const finalTotal = state.total + shippingCost + taxAmount;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/checkout"
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200 bg-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl inline-block mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Checkout</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Payment Method</h1>
          <p className="text-gray-600 mt-2">Choose how you want to pay for your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Options */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Payment Methods */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="w-6 h-6 mr-2" />
                  Select Payment Method
                </h2>
                
                <div className="space-y-4">
                  {/* Cash on Delivery */}
                  <div 
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      paymentMethod === 'cash' 
                        ? 'border-black bg-black bg-opacity-5' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    onClick={() => setPaymentMethod('cash')}
                  >
                    <div className="flex items-center">
                      <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center mr-4 ${
                        paymentMethod === 'cash' ? 'border-black bg-black' : 'border-gray-400'
                      }`}>
                        {paymentMethod === 'cash' && <div className="h-3 w-3 rounded-full bg-white"></div>}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Cash on Delivery</h3>
                        <p className="text-sm text-gray-600">Pay when you receive your order</p>
                      </div>
                    </div>
                  </div>

                  {/* Bank Transfer */}
                  <div 
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      paymentMethod === 'bank' 
                        ? 'border-black bg-black bg-opacity-5' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    onClick={() => setPaymentMethod('bank')}
                  >
                    <div className="flex items-center">
                      <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center mr-4 ${
                        paymentMethod === 'bank' ? 'border-black bg-black' : 'border-gray-400'
                      }`}>
                        {paymentMethod === 'bank' && <div className="h-3 w-3 rounded-full bg-white"></div>}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Bank Transfer</h3>
                        <p className="text-sm text-gray-600">Transfer money directly to our bank account</p>
                      </div>
                    </div>
                    
                    {paymentMethod === 'bank' && (
                      <div className="ml-10 mt-4 space-y-4">
                        <div>
                          <label htmlFor="accountName" className="block text-sm font-medium text-gray-700 mb-2">
                            Account Holder Name *
                          </label>
                          <input
                            type="text"
                            id="accountName"
                            name="accountName"
                            required
                            value={bankDetails.accountName}
                            onChange={handleBankDetailsChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-2">
                            Account Number *
                          </label>
                          <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            required
                            value={bankDetails.accountNumber}
                            onChange={handleBankDetailsChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="Your account number"
                          />
                        </div>
                        <div>
                          <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-2">
                            Bank Name *
                          </label>
                          <input
                            type="text"
                            id="bankName"
                            name="bankName"
                            required
                            value={bankDetails.bankName}
                            onChange={handleBankDetailsChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="Your bank name"
                          />
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-xl mt-4">
                          <h4 className="font-bold text-blue-800 mb-2">Our Bank Details:</h4>
                          <div className="text-sm text-blue-800 space-y-1">
                            <p><span className="font-medium">Bank:</span> Meezan Bank</p>
                            <p><span className="font-medium">Account Name:</span> ShoeStore PK</p>
                            <p><span className="font-medium">Account Number:</span> 1234-5678901234</p>
                            <p><span className="font-medium">IBAN:</span> PK36MEZN0001234567890123</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* EasyPaisa/JazzCash */}
                  <div 
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      paymentMethod === 'easypaisa' 
                        ? 'border-black bg-black bg-opacity-5' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    onClick={() => setPaymentMethod('easypaisa')}
                  >
                    <div className="flex items-center">
                      <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center mr-4 ${
                        paymentMethod === 'easypaisa' ? 'border-black bg-black' : 'border-gray-400'
                      }`}>
                        {paymentMethod === 'easypaisa' && <div className="h-3 w-3 rounded-full bg-white"></div>}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">EasyPaisa / JazzCash</h3>
                        <p className="text-sm text-gray-600">Mobile wallet payment</p>
                      </div>
                    </div>
                    
                    {paymentMethod === 'easypaisa' && (
                      <div className="ml-10 mt-4">
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <h4 className="font-bold text-blue-800 mb-2">Our EasyPaisa/JazzCash Details:</h4>
                          <div className="text-sm text-blue-800 space-y-1">
                            <p><span className="font-medium">Number:</span> 03XX-XXXXXXX</p>
                            <p><span className="font-medium">Account Name:</span> ShoeStore PK</p>
                            <p className="text-xs italic">Please include your order number in the transaction remarks</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Security Assurance */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start space-x-4">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-green-800 mb-1">Secure Payment</h3>
                  <p className="text-sm text-green-700">Your payment information is protected with encryption. We do not store your banking details.</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 px-8 rounded-2xl font-bold hover:from-gray-800 hover:to-black transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-6 h-6" />
                    <span>Complete Payment</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="bg-gray-100 rounded-md px-2 py-1 text-sm font-medium mr-2">
                        {item.quantity}
                      </span>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                    <span className="font-bold text-sm">PKR {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold">PKR {state.total.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-bold">
                    {shippingCost === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `PKR ${shippingCost.toLocaleString()}`
                    )}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-bold">PKR {taxAmount.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center text-lg font-bold border-t border-gray-200 pt-4">
                  <span>Total</span>
                  <span>PKR {finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Order Information */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-2">Order Information</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Order #: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                  <p>Estimated Delivery: 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}