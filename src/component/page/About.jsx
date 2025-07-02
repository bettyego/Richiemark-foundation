import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SEO from '../SEO';
import BackToTop from '../BackToTop';

const About = () => {
  return (
    <div className="w-full min-h-screen">
      <SEO
        title="About Us - Richmark Foundation"
        description="Learn about Richmark Foundation's mission, vision, and impact in empowering Nigerian communities through health, education, and human rights initiatives."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Richmark Foundation</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Dedicated to empowering Nigerian communities through health, education, and human rights initiatives.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#228B22] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create lasting positive change in Nigerian communities by providing accessible healthcare,
                quality education, protecting human rights, and fostering sustainable development.
                We believe every Nigerian deserves the opportunity to thrive and reach their full potential.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#228B22] mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Nigeria where every community has access to essential services, where human dignity
                is respected, and where sustainable development creates opportunities for all.
                We envision empowered Nigerian communities that can build their own bright futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">Our Story</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded with a vision to make a meaningful difference, Richmark Foundation began as a
                grassroots initiative to address the pressing needs of underserved Nigerian communities. Our
                journey started when we recognized the gaps in essential services across Nigeria and decided to take action.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the years, we have grown from a small group of passionate individuals to a
                comprehensive foundation that impacts thousands of lives. Our work spans across
                multiple sectors including healthcare, education, human rights advocacy, and
                community development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to expand our reach and deepen our impact, always staying true
                to our core values of compassion, integrity, and sustainable change. Every project
                we undertake is designed to create lasting positive transformation in the communities we serve.
              </p>
            </div>
            <div className="relative">
              <img
                src="/richm4.jpg"
                alt="Richmark Foundation Community Development"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Building Communities</h3>
                <p className="text-sm opacity-90">Creating lasting change across Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach every situation with empathy and understanding, putting the needs of 
                communities at the heart of everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and transparency in all our 
                operations and relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We focus on creating long-term solutions that empower communities to become 
                self-sufficient and resilient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#228B22] mb-12">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Executive Director</h3>
              <p className="text-[#FFA500] font-medium mb-3">Leadership & Strategy</p>
              <p className="text-gray-600 text-sm">
                Leading our mission with vision and dedication to create meaningful change in communities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Program Director</h3>
              <p className="text-[#FFA500] font-medium mb-3">Operations & Implementation</p>
              <p className="text-gray-600 text-sm">
                Overseeing program delivery and ensuring our initiatives reach those who need them most.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Outreach</h3>
              <p className="text-[#FFA500] font-medium mb-3">Engagement & Partnerships</p>
              <p className="text-gray-600 text-sm">
                Building strong relationships with communities and partners to maximize our impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
