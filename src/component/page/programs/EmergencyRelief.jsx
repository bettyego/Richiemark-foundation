import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const EmergencyRelief = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Relief</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Rapid response and disaster relief services providing immediate aid when communities need it most.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6">
              First to Respond, Last to Leave
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              When disasters strike, we're ready to respond. Our emergency relief programs 
              provide immediate assistance, coordinate rescue efforts, and support long-term 
              recovery to help communities rebuild stronger than before.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">25</div>
              <p className="text-gray-600">Emergency Responses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">15,000+</div>
              <p className="text-gray-600">People Assisted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">72hrs</div>
              <p className="text-gray-600">Average Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">100+</div>
              <p className="text-gray-600">Relief Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Our Emergency Response Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Immediate Response</h3>
              <p className="text-gray-700 mb-4">
                Rapid deployment of emergency teams and resources to provide immediate 
                assistance during natural disasters, conflicts, and humanitarian crises.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 24/7 emergency hotline</li>
                <li>• Rapid response teams</li>
                <li>• Emergency supply distribution</li>
                <li>• Evacuation assistance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Shelter & Housing</h3>
              <p className="text-gray-700 mb-4">
                Temporary shelter solutions and housing assistance for displaced families 
                and individuals affected by emergencies and disasters.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Emergency shelter setup</li>
                <li>• Temporary housing coordination</li>
                <li>• Relocation assistance</li>
                <li>• Housing reconstruction support</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🍲</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Food & Water</h3>
              <p className="text-gray-700 mb-4">
                Emergency food distribution, clean water provision, and nutrition support 
                for affected populations during crisis situations.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Emergency food packages</li>
                <li>• Clean water distribution</li>
                <li>• Mobile kitchens</li>
                <li>• Nutrition supplements</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Medical Aid</h3>
              <p className="text-gray-700 mb-4">
                Emergency medical services, first aid, and healthcare support for 
                injured and vulnerable populations during disasters.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobile medical units</li>
                <li>• Emergency medical supplies</li>
                <li>• Trauma counseling</li>
                <li>• Medication distribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Response Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Types of Emergencies We Respond To
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌪️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Natural Disasters</h3>
              <p className="text-gray-600">
                Floods, earthquakes, hurricanes, droughts, and other natural calamities 
                requiring immediate humanitarian response.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Man-Made Crises</h3>
              <p className="text-gray-600">
                Conflicts, industrial accidents, building collapses, and other human-caused 
                emergencies affecting communities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Health Emergencies</h3>
              <p className="text-gray-600">
                Disease outbreaks, pandemics, and public health crises requiring 
                coordinated medical and social response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Responses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Recent Emergency Responses
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-[#228B22] mb-4">
                    Flood Relief Operation - Northern Region
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Responded to severe flooding affecting 5,000 families. Provided emergency 
                    shelter, clean water, food supplies, and medical aid. Coordinated with 
                    local authorities for evacuation and temporary housing.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 5,000 families assisted</li>
                    <li>• 15 temporary shelters established</li>
                    <li>• 50,000 meals distributed</li>
                    <li>• Medical aid to 2,000 people</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-center mb-3">
                      <div className="text-lg font-bold text-[#FFA500]">Response Status</div>
                      <div className="text-sm text-gray-600">Completed</div>
                    </div>
                    <div className="text-sm text-gray-700">
                      <div className="mb-2"><strong>Duration:</strong> 3 weeks</div>
                      <div className="mb-2"><strong>Volunteers:</strong> 150</div>
                      <div><strong>Recovery:</strong> 95% complete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-[#228B22] mb-4">
                    Earthquake Emergency Response - Mountain District
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Immediate response to 6.2 magnitude earthquake. Deployed search and rescue 
                    teams, established medical stations, and provided emergency supplies to 
                    affected communities.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 3,200 people evacuated safely</li>
                    <li>• 8 medical stations set up</li>
                    <li>• 25 tons of supplies delivered</li>
                    <li>• 120 families relocated</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-center mb-3">
                      <div className="text-lg font-bold text-[#FFA500]">Response Status</div>
                      <div className="text-sm text-gray-600">Recovery Phase</div>
                    </div>
                    <div className="text-sm text-gray-700">
                      <div className="mb-2"><strong>Duration:</strong> Ongoing</div>
                      <div className="mb-2"><strong>Volunteers:</strong> 200</div>
                      <div><strong>Recovery:</strong> 70% complete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparedness */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Emergency Preparedness
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Community Training</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  First aid and CPR training
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Emergency evacuation procedures
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Disaster preparedness workshops
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Emergency communication systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Community response team formation
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Emergency Supplies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Emergency food and water reserves
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Medical supplies and equipment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Shelter materials and blankets
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Communication and rescue equipment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-3"></span>
                  Transportation and logistics support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">Emergency Hotline</h2>
          <p className="text-lg text-red-700 mb-8">
            If you're experiencing an emergency or need immediate assistance, contact us now.
          </p>
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg">
            <div className="text-4xl font-bold text-red-600 mb-2">📞 199</div>
            <div className="text-xl font-semibold text-gray-800 mb-4">Emergency Services</div>
            <div className="text-lg text-gray-700 mb-4">
              <strong>24/7 Emergency Line:</strong><br />
              +234 (0) 199 (Nigeria Emergency)<br />
              +234 (0) 802 987 6543 (Richmark Emergency)
            </div>
            <div className="text-sm text-gray-600">
              For non-emergency assistance, call our main line at +234 (0) 901 234 5678
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-[#228B22] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Emergency Response Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of our emergency response network. Help us save lives and support communities in crisis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/volunteer"
              className="bg-[#FFA500] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Volunteer for Emergency Response
            </a>
            <a
              href="/donate"
              className="border-2 border-white text-white hover:bg-white hover:text-[#228B22] px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Support Emergency Fund
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmergencyRelief;
