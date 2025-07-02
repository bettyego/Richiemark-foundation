import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

const PaymentIntegration = ({ amount, donorInfo, onSuccess, onError, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Paystack Integration
  const initiatePaystackPayment = () => {
    setIsProcessing(true);
    
    // Load Paystack script if not already loaded
    if (!window.PaystackPop) {
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.onload = () => processPaystackPayment();
      document.head.appendChild(script);
    } else {
      processPaystackPayment();
    }
  };

  const processPaystackPayment = () => {
    const handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || 'pk_test_your_paystack_public_key_here', // Replace with your actual key
      email: donorInfo.email,
      amount: amount * 100, // Paystack expects amount in kobo
      currency: 'NGN',
      ref: `richmark_${Date.now()}`,
      metadata: {
        donor_name: `${donorInfo.firstName} ${donorInfo.lastName}`,
        phone: donorInfo.phone,
        foundation: 'Richmark Foundation'
      },
      callback: function(response) {
        setIsProcessing(false);
        setPaymentStatus('success');
        onSuccess({
          reference: response.reference,
          amount: amount,
          method: 'Paystack',
          donor: donorInfo
        });
      },
      onClose: function() {
        setIsProcessing(false);
        if (paymentStatus !== 'success') {
          onError('Payment was cancelled');
        }
      }
    });
    handler.openIframe();
  };

  // Flutterwave Integration
  const initiateFlutterwavePayment = () => {
    setIsProcessing(true);
    
    if (!window.FlutterwaveCheckout) {
      const script = document.createElement('script');
      script.src = 'https://checkout.flutterwave.com/v3.js';
      script.onload = () => processFlutterwavePayment();
      document.head.appendChild(script);
    } else {
      processFlutterwavePayment();
    }
  };

  const processFlutterwavePayment = () => {
    window.FlutterwaveCheckout({
      public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY || 'FLWPUBK_TEST-your_flutterwave_public_key_here', // Replace with your actual key
      tx_ref: `richmark_${Date.now()}`,
      amount: amount,
      currency: 'NGN',
      payment_options: 'card,mobilemoney,ussd,banktransfer',
      customer: {
        email: donorInfo.email,
        phone_number: donorInfo.phone,
        name: `${donorInfo.firstName} ${donorInfo.lastName}`,
      },
      customizations: {
        title: 'Richmark Foundation Donation',
        description: 'Supporting Nigerian communities',
        logo: '/richiemark.jpg',
      },
      callback: function (data) {
        setIsProcessing(false);
        setPaymentStatus('success');
        onSuccess({
          reference: data.tx_ref,
          amount: amount,
          method: 'Flutterwave',
          donor: donorInfo
        });
      },
      onclose: function() {
        setIsProcessing(false);
        if (paymentStatus !== 'success') {
          onError('Payment was cancelled');
        }
      },
    });
  };

  // Bank Transfer Details
  const bankDetails = {
    bankName: "First Bank of Nigeria",
    accountName: "Richmark Foundation",
    accountNumber: "1234567890", // Replace with actual account
    sortCode: "011151003" // Replace with actual sort code
  };

  const handlePaymentMethod = () => {
    if (paymentMethod === 'paystack') {
      initiatePaystackPayment();
    } else if (paymentMethod === 'flutterwave') {
      initiateFlutterwavePayment();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#228B22] mb-2">Complete Your Donation</h3>
          <p className="text-gray-600">₦{amount.toLocaleString()} to Richmark Foundation</p>
        </div>

        {!isProcessing && paymentStatus !== 'success' && (
          <>
            {/* Payment Method Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Choose Payment Method</label>
              
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paystack"
                    checked={paymentMethod === 'paystack'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">Paystack</div>
                    <div className="text-sm text-gray-500">Card, Bank Transfer, USSD</div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="flutterwave"
                    checked={paymentMethod === 'flutterwave'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">Flutterwave</div>
                    <div className="text-sm text-gray-500">Card, Mobile Money, Bank Transfer</div>
                  </div>
                </label>

                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">Direct Bank Transfer</div>
                    <div className="text-sm text-gray-500">Transfer directly to our account</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Bank Transfer Details */}
            {paymentMethod === 'bank' && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Bank Transfer Details</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Bank:</strong> {bankDetails.bankName}</div>
                  <div><strong>Account Name:</strong> {bankDetails.accountName}</div>
                  <div><strong>Account Number:</strong> {bankDetails.accountNumber}</div>
                  <div><strong>Sort Code:</strong> {bankDetails.sortCode}</div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Please use your email as the transfer reference and send proof of payment to donate@richmarkfoundation.org.ng
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={paymentMethod === 'bank' ? () => {
                  setPaymentStatus('bank_info');
                } : handlePaymentMethod}
                className="flex-1 px-4 py-2 bg-[#228B22] text-white rounded-md hover:bg-green-700 transition"
              >
                {paymentMethod === 'bank' ? 'Show Details' : 'Proceed to Payment'}
              </button>
            </div>
          </>
        )}

        {/* Processing State */}
        {isProcessing && (
          <div className="text-center py-8">
            <Loader className="w-8 h-8 animate-spin mx-auto mb-4 text-[#228B22]" />
            <p className="text-gray-600">Processing your payment...</p>
          </div>
        )}

        {/* Success State */}
        {paymentStatus === 'success' && (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h4>
            <p className="text-gray-600 mb-4">Your donation has been processed successfully.</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#228B22] text-white rounded-md hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        )}

        {/* Bank Transfer Info State */}
        {paymentStatus === 'bank_info' && (
          <div className="text-center py-4">
            <CheckCircle className="w-8 h-8 text-[#228B22] mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Bank details have been provided above. Please complete your transfer and send proof of payment.</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#228B22] text-white rounded-md hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentIntegration;
