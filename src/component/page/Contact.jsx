import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Mail, Phone, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { FOUNDATION_EMAILS, FOUNDATION_CONTACT } from '../../config/emailConfig.js';
import { sendContactMessage } from '../../services/emailService.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      await sendContactMessage(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with us. We'd love to hear from you and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#228B22] mb-8 tracking-tight">Get in Touch</h2>
              <p className="text-lg font-body text-gray-700 mb-8 leading-relaxed tracking-wide">
                We're here to help and answer any questions you might have.
                We look forward to hearing from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      <strong>Head Office:</strong><br />
                      {FOUNDATION_CONTACT.address.head_office}<br /><br />
                      <strong>Branch Office:</strong><br />
                      {FOUNDATION_CONTACT.address.branch_office}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: {FOUNDATION_CONTACT.phone.main}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">
                      {FOUNDATION_CONTACT.phone.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      {FOUNDATION_EMAILS.info}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM (WAT)<br />
                      Saturday: 9:00 AM - 3:00 PM (WAT)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">{FOUNDATION_CONTACT.social.facebook}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                      <Instagram className="w-5 h-5 text-pink-600" />
                      <span className="text-sm text-gray-700">{FOUNDATION_CONTACT.social.instagram}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Twitter className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-700">{FOUNDATION_CONTACT.social.twitter}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Linkedin className="w-5 h-5 text-blue-700" />
                      <span className="text-sm text-gray-700">{FOUNDATION_CONTACT.social.linkedin}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-black rounded-lg">
                      <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                        <span className="text-xs font-bold text-black">T</span>
                      </div>
                      <span className="text-sm text-white">{FOUNDATION_CONTACT.social.tiktok}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-[#228B22] mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donation Questions</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="media">Media Inquiries</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-6 py-3 rounded-md font-semibold transition duration-300 ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#FFA500] hover:bg-orange-600'
                    } text-white`}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800 text-center">
                        ✅ Thank you for your message! We will get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800 text-center">
                        ❌ Sorry, there was an error sending your message. Please try again or email us directly at {FOUNDATION_EMAILS.info}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                How can I volunteer with Richmark Humanitarian Foundation?
              </h3>
              <p className="text-gray-600">
                We welcome volunteers! Contact us through this form or email us directly. 
                We have various opportunities available based on your skills and availability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Are donations tax-deductible?
              </h3>
              <p className="text-gray-600">
                Yes, Richmark Humanitarian Foundation is a registered non-profit organization.
                All donations are tax-deductible to the extent allowed by law.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                How do you use donations?
              </h3>
              <p className="text-gray-600">
                We allocate funds directly to our programs: health initiatives, education, 
                human rights advocacy, and community development projects.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Can organizations partner with you?
              </h3>
              <p className="text-gray-600">
                Absolutely! We're always looking for partnerships with like-minded organizations. 
                Please reach out to discuss collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
