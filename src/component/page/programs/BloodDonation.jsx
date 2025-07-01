import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const BloodDonation = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blood Donation</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Saving lives through voluntary blood donation drives and awareness campaigns.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6">
              Every Drop Counts, Every Life Matters
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Blood donation is one of the most direct ways to save lives. Our blood donation 
              programs organize regular drives, maintain donor databases, and ensure safe 
              blood collection and distribution to those in need.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">3,500+</div>
              <p className="text-gray-600">Units Collected</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">85</div>
              <p className="text-gray-600">Donation Drives</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">2,800+</div>
              <p className="text-gray-600">Regular Donors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">10,000+</div>
              <p className="text-gray-600">Lives Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Our Blood Donation Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🩸</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Regular Blood Drives</h3>
              <p className="text-gray-700 mb-4">
                Organized blood collection events in communities, schools, and workplaces 
                to maintain adequate blood supply for emergencies and medical needs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Monthly community drives</li>
                <li>• Corporate blood donation events</li>
                <li>• University campus drives</li>
                <li>• Emergency response collections</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Donor Registration</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive donor database management system to track donors, 
                schedule appointments, and ensure safe donation practices.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Health screening and eligibility</li>
                <li>• Donor record management</li>
                <li>• Appointment scheduling</li>
                <li>• Follow-up care and support</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Awareness Campaigns</h3>
              <p className="text-gray-700 mb-4">
                Educational programs to raise awareness about the importance of blood 
                donation and dispel myths and misconceptions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Community education sessions</li>
                <li>• Social media campaigns</li>
                <li>• School awareness programs</li>
                <li>• Myth-busting workshops</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🚑</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Emergency Response</h3>
              <p className="text-gray-700 mb-4">
                Rapid blood collection and distribution during emergencies, disasters, 
                and critical medical situations requiring immediate blood supply.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 24/7 emergency response</li>
                <li>• Disaster relief blood drives</li>
                <li>• Hospital partnership program</li>
                <li>• Mobile blood collection units</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Types & Compatibility */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Blood Types & Compatibility
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Universal Donors & Recipients</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-semibold text-red-800">O- (Universal Donor)</h4>
                  <p className="text-red-700">Can donate to all blood types</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h4 className="font-semibold text-blue-800">AB+ (Universal Recipient)</h4>
                  <p className="text-blue-700">Can receive from all blood types</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Donation Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Age: 18-65 years old
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Weight: Minimum 50kg (110 lbs)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Good general health
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  No recent illness or medication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Valid identification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Drives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Upcoming Blood Drives
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-[#FFA500]">Dec 15</div>
                <div className="text-gray-600">2024</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Center Drive</h3>
              <p className="text-gray-600 mb-3">Main Community Hall, Downtown</p>
              <p className="text-sm text-gray-500">9:00 AM - 4:00 PM</p>
              <button className="w-full mt-4 bg-[#228B22] text-white py-2 rounded-md hover:bg-green-700 transition">
                Register Now
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-[#FFA500]">Dec 22</div>
                <div className="text-gray-600">2024</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">University Campus Drive</h3>
              <p className="text-gray-600 mb-3">State University, Student Center</p>
              <p className="text-sm text-gray-500">10:00 AM - 5:00 PM</p>
              <button className="w-full mt-4 bg-[#228B22] text-white py-2 rounded-md hover:bg-green-700 transition">
                Register Now
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-[#FFA500]">Jan 5</div>
                <div className="text-gray-600">2025</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Corporate Partnership Drive</h3>
              <p className="text-gray-600 mb-3">Tech Plaza, Conference Room A</p>
              <p className="text-sm text-gray-500">8:00 AM - 3:00 PM</p>
              <button className="w-full mt-4 bg-[#228B22] text-white py-2 rounded-md hover:bg-green-700 transition">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Lives Saved Through Donation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "A Second Chance at Life"
              </h3>
              <p className="text-gray-700 mb-4">
                "After my accident, I needed multiple blood transfusions. Thanks to generous 
                donors, I'm alive today and back with my family. I now donate regularly 
                to give others the same chance I received."
              </p>
              <p className="text-[#FFA500] font-medium">- Michael, Accident Survivor</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Saving My Newborn"
              </h3>
              <p className="text-gray-700 mb-4">
                "My baby was born with complications requiring immediate blood transfusion. 
                The blood bank had what we needed because of regular donors. My child 
                is healthy and thriving today."
              </p>
              <p className="text-[#FFA500] font-medium">- Lisa, Grateful Mother</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-[#228B22] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Life Saver</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of blood donors and help save lives. One donation can save up to three lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/volunteer"
              className="bg-[#FFA500] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Register as Donor
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#228B22] px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Schedule Drive
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloodDonation;
