import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import PaymentIntegration from '../PaymentIntegration';
import { CheckCircle, AlertCircle } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const predefinedAmounts = [5000, 10000, 25000, 50000, 100000, 250000]; // Nigerian Naira amounts

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setPaymentError('Please fill in all required fields');
      return;
    }

    if (!selectedAmount && !customAmount) {
      setPaymentError('Please select or enter a donation amount');
      return;
    }

    // Clear any previous errors
    setPaymentError('');

    // Show payment modal
    setShowPayment(true);
  };

  const handlePaymentSuccess = (paymentData) => {
    setShowPayment(false);
    setPaymentSuccess(true);

    // Here you would typically send the payment data to your backend
    console.log('Payment successful:', paymentData);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setSelectedAmount(null);
    setCustomAmount('');
  };

  const handlePaymentError = (error) => {
    setShowPayment(false);
    setPaymentError(error);
  };

  const closePaymentModal = () => {
    setShowPayment(false);
  };

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your contribution helps us continue our mission to empower communities and create lasting change.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#228B22] mb-8 text-center">Choose Your Donation</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Donation Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-4">Donation Type</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`px-6 py-3 rounded-md font-medium transition ${
                      donationType === 'one-time'
                        ? 'bg-[#228B22] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`px-6 py-3 rounded-md font-medium transition ${
                      donationType === 'monthly'
                        ? 'bg-[#228B22] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-4">Select Amount</label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-3 rounded-md font-medium transition ${
                        selectedAmount === amount
                          ? 'bg-[#FFA500] text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      ₦{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Custom Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount in Naira"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Share why you're supporting our cause..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                />
              </div>

              {/* Error Message */}
              {paymentError && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-700">{paymentError}</span>
                </div>
              )}

              {/* Success Message */}
              {paymentSuccess && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-700">Thank you! Your donation has been processed successfully.</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!selectedAmount && !customAmount}
                  className="bg-[#FFA500] hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-12 py-4 rounded-md font-semibold text-lg transition duration-300"
                >
                  Donate ₦{(selectedAmount || customAmount || '0').toLocaleString ? (selectedAmount || customAmount || '0').toLocaleString() : (selectedAmount || customAmount || '0')} {donationType === 'monthly' ? '/month' : ''}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Secure payment processing via Paystack and Flutterwave
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">₦5,000</h3>
              <p className="text-gray-600">Provides basic medical supplies for one Nigerian family</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">₦25,000</h3>
              <p className="text-gray-600">Sponsors school supplies for 10 Nigerian children</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">₦100,000</h3>
              <p className="text-gray-600">Helps build clean water access for a Nigerian community</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Payment Modal */}
      {showPayment && (
        <PaymentIntegration
          amount={selectedAmount || customAmount}
          donorInfo={formData}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
          onClose={closePaymentModal}
        />
      )}
    </div>
  );
};

export default Donate;
