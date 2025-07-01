import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const EducationSupport = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Education Support</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering communities through quality education and learning opportunities for all.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6">
              Building Brighter Futures Through Education
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Education is the foundation of progress. Our education support programs 
              focus on removing barriers to learning, improving educational infrastructure, 
              and providing opportunities for lifelong learning.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">2,500+</div>
              <p className="text-gray-600">Students Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">50</div>
              <p className="text-gray-600">Schools Improved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">200+</div>
              <p className="text-gray-600">Scholarships Awarded</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">75</div>
              <p className="text-gray-600">Teachers Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Our Education Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Scholarship Programs</h3>
              <p className="text-gray-700 mb-4">
                Financial assistance for students from disadvantaged backgrounds to 
                pursue primary, secondary, and higher education.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Full and partial scholarships</li>
                <li>• School supplies and uniforms</li>
                <li>• Transportation support</li>
                <li>• Mentorship programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Adult Literacy</h3>
              <p className="text-gray-700 mb-4">
                Reading and writing programs for adults who missed formal education 
                opportunities, empowering them with essential life skills.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Basic literacy classes</li>
                <li>• Numeracy training</li>
                <li>• Digital literacy programs</li>
                <li>• Life skills education</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Vocational Training</h3>
              <p className="text-gray-700 mb-4">
                Skills development programs that prepare individuals for sustainable 
                employment and entrepreneurship opportunities.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Technical skills training</li>
                <li>• Business development courses</li>
                <li>• Computer and IT training</li>
                <li>• Job placement assistance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">School Infrastructure</h3>
              <p className="text-gray-700 mb-4">
                Building and renovating schools, providing educational materials, 
                and creating safe learning environments for children.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Classroom construction</li>
                <li>• Library development</li>
                <li>• Technology integration</li>
                <li>• Safe water and sanitation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                "From Scholarship to University"
              </h3>
              <p className="text-gray-700 mb-3">
                "The scholarship program changed my life. I'm now studying medicine 
                and plan to return to serve my community as a doctor."
              </p>
              <p className="text-[#FFA500] font-medium">- James, University Student</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                "Learning to Read at 45"
              </h3>
              <p className="text-gray-700 mb-3">
                "I never thought I could learn to read. Now I can help my children 
                with homework and read important documents myself."
              </p>
              <p className="text-[#FFA500] font-medium">- Grace, Adult Learner</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                "New Skills, New Life"
              </h3>
              <p className="text-gray-700 mb-3">
                "The vocational training gave me computer skills. I now run my own 
                small business and support my family independently."
              </p>
              <p className="text-[#FFA500] font-medium">- Peter, Entrepreneur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Current Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#228B22] mb-4">Digital Learning Initiative</h3>
              <p className="text-gray-700 mb-4">
                Bringing technology to rural schools through computer labs, internet 
                connectivity, and digital literacy training for teachers and students.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-gray-600">75%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-[#FFA500] h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#228B22] mb-4">Girls' Education Campaign</h3>
              <p className="text-gray-700 mb-4">
                Focused initiative to increase girls' enrollment and retention in schools 
                through targeted scholarships and community engagement.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-gray-600">60%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-[#FFA500] h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-[#228B22] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Education for All</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Help us break the cycle of poverty through education. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/donate"
              className="bg-[#FFA500] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Sponsor a Student
            </a>
            <a
              href="/volunteer"
              className="border-2 border-white text-white hover:bg-white hover:text-[#228B22] px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Become a Tutor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationSupport;
