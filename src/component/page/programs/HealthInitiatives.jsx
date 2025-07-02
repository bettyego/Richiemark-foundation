import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const HealthInitiatives = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Initiatives</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Providing accessible healthcare and promoting wellness in underserved communities.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6">
              Transforming Healthcare Access
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our health initiatives focus on breaking down barriers to healthcare access across Nigeria,
              promoting preventive care, and building healthier communities through
              comprehensive medical programs and health education in both urban and rural areas.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">5,000+</div>
              <p className="text-gray-600">Patients Treated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">25</div>
              <p className="text-gray-600">Medical Camps</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">15</div>
              <p className="text-gray-600">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">100+</div>
              <p className="text-gray-600">Health Workers Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Our Health Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Medical Outreach</h3>
              <p className="text-gray-700 mb-4">
                Free medical camps providing basic healthcare services, health screenings,
                and medical consultations in remote Nigerian communities and underserved areas.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• General health checkups</li>
                <li>• Blood pressure and diabetes screening</li>
                <li>• Basic medication distribution</li>
                <li>• Health education sessions</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🤱</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Maternal & Child Health</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive care for mothers and children, including prenatal care, 
                safe delivery support, and child nutrition programs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Prenatal and postnatal care</li>
                <li>• Immunization programs</li>
                <li>• Nutrition education</li>
                <li>• Birth registration support</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Mental Health Support</h3>
              <p className="text-gray-700 mb-4">
                Mental health awareness, counseling services, and community support 
                programs to address psychological wellbeing.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Individual counseling sessions</li>
                <li>• Group therapy programs</li>
                <li>• Mental health awareness campaigns</li>
                <li>• Crisis intervention support</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Preventive Care</h3>
              <p className="text-gray-700 mb-4">
                Health education and preventive care programs to reduce disease 
                incidence and promote healthy lifestyle choices.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Health education workshops</li>
                <li>• Disease prevention campaigns</li>
                <li>• Hygiene and sanitation training</li>
                <li>• Community health worker training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Health Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/richm1.jpg"
                alt="Health Initiative in Action"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Mobile Health Clinic</h3>
                <p className="text-sm opacity-90">Bringing healthcare to remote communities</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6">
                Healthcare Where It's Needed Most
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our mobile health clinics travel to the most remote areas of Nigeria, providing
                essential medical services to communities that have limited access to healthcare facilities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Each clinic is equipped with modern medical equipment and staffed by qualified
                healthcare professionals who provide comprehensive care including diagnostics,
                treatment, and health education.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-[#FFA500]">500+</div>
                  <div className="text-sm text-gray-600">Patients/Month</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-[#FFA500]">15</div>
                  <div className="text-sm text-gray-600">Remote Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Impact Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Life-Saving Medical Camp"
              </h3>
              <p className="text-gray-700 mb-4">
                "Thanks to the medical camp in our village, my diabetes was detected early. 
                The free medication and regular checkups have completely changed my life. 
                I'm healthier now than I've been in years."
              </p>
              <p className="text-[#FFA500] font-medium">- Amina, 45, Rural Kano Community</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Safe Delivery Program"
              </h3>
              <p className="text-gray-700 mb-4">
                "The maternal health program ensured I had proper prenatal care and 
                a safe delivery. My baby and I are both healthy, and I learned so much 
                about nutrition and childcare."
              </p>
              <p className="text-[#FFA500] font-medium">- Fatima, 28, New Mother from Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-[#228B22] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Health Initiatives</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your support helps us provide essential healthcare services to those who need them most.
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
              className="border-2 border-white text-white hover:bg-white hover:text-[#228B22] px-8 py-3 rounded-md font-semibold transition duration-300"
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

export default HealthInitiatives;
