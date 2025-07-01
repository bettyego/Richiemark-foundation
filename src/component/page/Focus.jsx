import React from 'react';
import Navbar from '../Navbar';
import FocusAreas from '../FocusAreas';
import Footer from '../Footer';

const Focus = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Focus Areas</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive programs designed to create lasting positive change in communities worldwide.
          </p>
        </div>
      </section>

      {/* Focus Areas Component */}
      <FocusAreas />

      {/* Impact Statistics */}
      <section className="py-16 bg-[#228B22] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FFA500] mb-2">10,000+</div>
              <p className="text-lg">Lives Impacted</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FFA500] mb-2">50+</div>
              <p className="text-lg">Communities Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FFA500] mb-2">25+</div>
              <p className="text-lg">Health Programs</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FFA500] mb-2">100+</div>
              <p className="text-lg">Educational Initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">Program Details</h2>
          
          <div className="space-y-12">
            {/* Health Programs */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">🩺 Health Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Medical Outreach</h4>
                  <p className="text-gray-700">Free medical camps and health screenings in underserved areas.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Health Education</h4>
                  <p className="text-gray-700">Community workshops on preventive care and healthy living.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Maternal Care</h4>
                  <p className="text-gray-700">Support for expectant mothers and newborn care programs.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Mental Health</h4>
                  <p className="text-gray-700">Counseling services and mental health awareness initiatives.</p>
                </div>
              </div>
            </div>

            {/* Education Programs */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">📚 Education Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Scholarship Programs</h4>
                  <p className="text-gray-700">Financial support for students from disadvantaged backgrounds.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Adult Literacy</h4>
                  <p className="text-gray-700">Reading and writing programs for adults in rural communities.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Vocational Training</h4>
                  <p className="text-gray-700">Skills development programs for sustainable employment.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">School Infrastructure</h4>
                  <p className="text-gray-700">Building and renovating schools in underserved areas.</p>
                </div>
              </div>
            </div>

            {/* Human Rights Programs */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">⚖️ Human Rights Programs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Legal Aid</h4>
                  <p className="text-gray-700">Free legal assistance for those who cannot afford representation.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Women's Rights</h4>
                  <p className="text-gray-700">Empowerment programs and advocacy for gender equality.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Child Protection</h4>
                  <p className="text-gray-700">Safeguarding children's rights and welfare in communities.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Awareness Campaigns</h4>
                  <p className="text-gray-700">Educational programs on human rights and social justice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6">Get Involved</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join us in making a difference. There are many ways you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/donate"
              className="bg-[#FFA500] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="border-2 border-[#228B22] text-[#228B22] hover:bg-[#228B22] hover:text-white px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Focus;
