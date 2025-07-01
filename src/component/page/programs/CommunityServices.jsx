import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const CommunityServices = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Building stronger communities through comprehensive support services and development programs.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6">
              Strengthening Communities Together
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our community services programs focus on addressing local needs, building 
              social cohesion, and creating sustainable solutions that empower communities 
              to thrive and become self-sufficient.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">45</div>
              <p className="text-gray-600">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">150+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">8,000+</div>
              <p className="text-gray-600">Families Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">500+</div>
              <p className="text-gray-600">Volunteers Engaged</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Our Community Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Community Development</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive development programs that address infrastructure, social 
                services, and economic opportunities in underserved communities.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Infrastructure improvement projects</li>
                <li>• Community center establishment</li>
                <li>• Local leadership training</li>
                <li>• Participatory planning workshops</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Food Security</h3>
              <p className="text-gray-700 mb-4">
                Programs addressing hunger and malnutrition through food distribution, 
                nutrition education, and sustainable agriculture initiatives.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Emergency food distribution</li>
                <li>• Community gardens and farming</li>
                <li>• Nutrition education programs</li>
                <li>• School feeding initiatives</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Water & Sanitation</h3>
              <p className="text-gray-700 mb-4">
                Clean water access and sanitation projects to improve health outcomes 
                and quality of life in rural and urban communities.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Water well construction</li>
                <li>• Sanitation facility building</li>
                <li>• Hygiene education campaigns</li>
                <li>• Water quality testing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Social Support</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive social services supporting vulnerable populations including 
                elderly care, youth programs, and family support services.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Elderly care and support</li>
                <li>• Youth development programs</li>
                <li>• Family counseling services</li>
                <li>• Disability support programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Current Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#228B22] mb-4">Clean Water Initiative</h3>
              <p className="text-gray-700 mb-4">
                Installing water pumps and purification systems in 10 rural villages 
                to provide clean, safe drinking water.
              </p>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>7/10 villages</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-[#FFA500] h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#228B22] mb-4">Community Gardens</h3>
              <p className="text-gray-700 mb-4">
                Establishing sustainable community gardens to improve food security 
                and provide nutrition education.
              </p>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>12/15 gardens</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-[#FFA500] h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#228B22] mb-4">Youth Center</h3>
              <p className="text-gray-700 mb-4">
                Building a multi-purpose youth center providing education, recreation, 
                and skill development opportunities.
              </p>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>Construction 45%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-[#FFA500] h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Community Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Before Our Programs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Limited access to clean water
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  High unemployment rates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Poor sanitation facilities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Limited youth opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Food insecurity issues
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">After Our Programs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Clean water access for 90% of families
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  60% increase in local employment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Modern sanitation in all areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Youth centers in every community
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  75% reduction in food insecurity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Community Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Transformed Our Village"
              </h3>
              <p className="text-gray-700 mb-4">
                "The water project brought clean water to our village for the first time. 
                Our children are healthier, and women don't have to walk miles for water. 
                Our community is thriving now."
              </p>
              <p className="text-[#FFA500] font-medium">- Chief Elder, Riverside Village</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Youth Have Hope Again"
              </h3>
              <p className="text-gray-700 mb-4">
                "The youth center gave our young people a place to learn, play, and grow. 
                Many have learned new skills and found jobs. The future looks bright 
                for our community."
              </p>
              <p className="text-[#FFA500] font-medium">- Maria, Community Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-[#228B22] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Stronger Communities</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us in creating lasting positive change in communities. Together, we can build a better future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/donate"
              className="bg-[#FFA500] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Support Communities
            </a>
            <a
              href="/volunteer"
              className="border-2 border-white text-white hover:bg-white hover:text-[#228B22] px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Volunteer Locally
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityServices;
