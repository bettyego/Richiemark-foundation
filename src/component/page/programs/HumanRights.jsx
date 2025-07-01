import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const HumanRights = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Human Rights</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Defending dignity, promoting justice, and protecting fundamental human rights for all.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6">
              Standing Up for Human Dignity
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Human rights are universal and inalienable. Our programs focus on protecting 
              vulnerable populations, advocating for justice, and empowering communities 
              to know and defend their rights.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">1,200+</div>
              <p className="text-gray-600">People Assisted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">300</div>
              <p className="text-gray-600">Legal Cases Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">50+</div>
              <p className="text-gray-600">Awareness Campaigns</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFA500] mb-2">25</div>
              <p className="text-gray-600">Communities Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Our Human Rights Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Legal Aid Services</h3>
              <p className="text-gray-700 mb-4">
                Free legal assistance and representation for those who cannot afford 
                legal services, ensuring equal access to justice.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Legal consultation and advice</li>
                <li>• Court representation</li>
                <li>• Document preparation</li>
                <li>• Rights education workshops</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">👩</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Women's Rights</h3>
              <p className="text-gray-700 mb-4">
                Empowerment programs and advocacy initiatives focused on promoting 
                gender equality and protecting women's rights.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Domestic violence support</li>
                <li>• Economic empowerment programs</li>
                <li>• Leadership training</li>
                <li>• Legal rights education</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Child Protection</h3>
              <p className="text-gray-700 mb-4">
                Safeguarding children's rights and welfare through protection programs, 
                advocacy, and community education initiatives.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Child abuse prevention</li>
                <li>• Educational support</li>
                <li>• Family reunification</li>
                <li>• Child-friendly legal processes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-2xl font-bold text-[#228B22] mb-4">Advocacy & Awareness</h3>
              <p className="text-gray-700 mb-4">
                Community education and advocacy campaigns to raise awareness about 
                human rights and promote social justice.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Human rights education</li>
                <li>• Community mobilization</li>
                <li>• Policy advocacy</li>
                <li>• Media campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Key Focus Areas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Housing Rights</h3>
              <p className="text-gray-600">
                Protecting against forced evictions and ensuring access to adequate housing 
                for vulnerable communities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Labor Rights</h3>
              <p className="text-gray-600">
                Advocating for fair wages, safe working conditions, and protection 
                against workplace discrimination.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗳️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Civil Rights</h3>
              <p className="text-gray-600">
                Promoting democratic participation, freedom of expression, and 
                protection against discrimination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Stories of Justice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Justice for Land Rights"
              </h3>
              <p className="text-gray-700 mb-4">
                "When developers tried to take our ancestral land, the legal aid program 
                helped us fight back. We won our case and kept our community together. 
                Justice was served."
              </p>
              <p className="text-[#FFA500] font-medium">- Community Leader, Rural Village</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Breaking the Cycle of Abuse"
              </h3>
              <p className="text-gray-700 mb-4">
                "The women's rights program gave me the courage and support to leave 
                an abusive relationship. Now I'm independent and helping other women 
                in similar situations."
              </p>
              <p className="text-[#FFA500] font-medium">- Sarah, Survivor and Advocate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Campaigns */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">
            Current Campaigns
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-[#228B22] mb-4">
                    #JusticeForAll Campaign
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A comprehensive campaign to improve access to justice for marginalized 
                    communities through legal aid expansion and rights education.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Mobile legal clinics in remote areas</li>
                    <li>• Community paralegal training</li>
                    <li>• Digital rights education platform</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-center mb-3">
                      <div className="text-2xl font-bold text-[#FFA500]">Campaign Progress</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Legal Clinics</span>
                        <span>8/12</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2">
                        <div className="bg-[#FFA500] h-2 rounded-full" style={{width: '67%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-[#228B22] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stand Up for Human Rights</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us in the fight for justice and human dignity. Together, we can create a more just world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/donate"
              className="bg-[#FFA500] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Support Justice
            </a>
            <a
              href="/volunteer"
              className="border-2 border-white text-white hover:bg-white hover:text-[#228B22] px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Become an Advocate
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HumanRights;
