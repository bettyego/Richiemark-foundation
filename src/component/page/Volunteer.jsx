import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { sendVolunteerApplication, sendVolunteerConfirmation } from '../../services/emailService';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    interests: [],
    availability: '',
    experience: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [submitMessage, setSubmitMessage] = useState('');

  const volunteerAreas = [
    'Health Programs',
    'Education Initiatives',
    'Human Rights Advocacy',
    'Blood Donation Drives',
    'Community Outreach',
    'Administrative Support',
    'Event Organization',
    'Fundraising',
    'Social Media & Marketing',
    'Translation Services'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestChange = (interest) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(item => item !== interest)
      : [...formData.interests, interest];
    
    setFormData({
      ...formData,
      interests: updatedInterests
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields.');
      return;
    }

    if (formData.interests.length === 0) {
      setSubmitStatus('error');
      setSubmitMessage('Please select at least one area of interest.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // Send volunteer application to foundation email
      const applicationResult = await sendVolunteerApplication(formData);

      if (applicationResult.success) {
        // Send confirmation email to volunteer
        await sendVolunteerConfirmation(formData);

        setSubmitStatus('success');
        setSubmitMessage('Thank you for your volunteer application! We have received your information and will contact you soon. A confirmation email has been sent to your email address.');

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          interests: [],
          availability: '',
          experience: '',
          motivation: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(applicationResult.message);
      }
    } catch (error) {
      console.error('Error submitting volunteer application:', error);
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again or contact us directly at volunteer@richmarkfoundation.org.ng');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Volunteer</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join our community of dedicated volunteers and help us create positive change in the world.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Why Volunteer With Us?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Make a Real Impact</h3>
              <p className="text-gray-600">
                Your time and skills directly contribute to improving lives and strengthening communities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Growth</h3>
              <p className="text-gray-600">
                Develop new skills, gain valuable experience, and expand your perspective on the world.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Build Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals and become part of a supportive volunteer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Volunteer Opportunities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{area}</h3>
                <p className="text-gray-600 text-sm">
                  Join our team in making a difference through {area.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#228B22] mb-8 text-center">
              Volunteer Application
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age Range *
                </label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                >
                  <option value="">Select age range</option>
                  <option value="16-18">16-18</option>
                  <option value="19-25">19-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-50">36-50</option>
                  <option value="51-65">51-65</option>
                  <option value="65+">65+</option>
                </select>
              </div>

              {/* Areas of Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {volunteerAreas.map((area) => (
                    <label key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(area)}
                        onChange={() => handleInterestChange(area)}
                        className="mr-3 h-4 w-4 text-[#228B22] focus:ring-[#228B22] border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both weekdays and weekends</option>
                  <option value="flexible">Flexible schedule</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about any relevant experience, skills, or qualifications..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                />
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with us? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Share your motivation for volunteering with Richmark Foundation..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#228B22] focus:border-transparent"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-red-700">{submitMessage}</span>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-green-700">{submitMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#FFA500] hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-12 py-4 rounded-md font-semibold text-lg transition duration-300 flex items-center justify-center gap-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Your application will be sent directly to volunteer@richmarkfoundation.org.ng
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-[#228B22] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">1. Application Review</h3>
              <p>We'll review your application and match you with suitable opportunities.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">2. Interview</h3>
              <p>We'll schedule a brief interview to discuss your interests and availability.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">3. Get Started</h3>
              <p>Begin your volunteer journey and start making a positive impact!</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;
