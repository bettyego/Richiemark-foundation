import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SEO from '../SEO';
import BackToTop from '../BackToTop';

const About = () => {
  return (
    <div className="w-full min-h-screen">
      <SEO
        title="About Us - Richmark Humanitarian Foundation"
        description="Learn about Richmark Humanitarian Foundation's mission, vision, and impact in empowering Nigerian communities through health, education, and human rights initiatives."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-[#228B22] to-green-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 tracking-tight">About Richmark Humanitarian Foundation</h1>
          <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto leading-relaxed tracking-wide">
            Dedicated to delivering and empowering communities through medical and health, education, Human capital development, infrastructural , vocational skills and Human rights initiatives.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#228B22] mb-6 tracking-tight">Our Mission</h2>
              <p className="text-lg font-body text-gray-700 leading-relaxed tracking-wide">
                To eradicate suffering and ignite hope by delivering essential healthcare, transformative education, vital infrastructure, empowering skills, and unwavering advocacy for human rights – building resilient communities from within Nigeria and Africa at large.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#228B22] mb-6 tracking-tight">Our Vision</h2>
              <p className="text-lg font-body text-gray-700 leading-relaxed tracking-wide">
                A world where no community is left behind; where every individual thrives in dignity, equipped with opportunity, and where justice and fundamental rights are non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-[#228B22] mb-12 tracking-tight">Our Story (The Heartbeat Behind Richmark)</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg font-body text-gray-700 leading-relaxed mb-6 tracking-wide">
                Richmark was born in 2017 from a simple, aching truth: the cries from our communities were too loud to ignore. We couldn't stand by as people struggled without basic healthcare, quality education, or the means to build a better life. What started as a burning idea to answer that cry – to truly lift living conditions and empower the unheard – became our relentless pursuit.
              </p>
              <p className="text-lg font-body text-gray-700 leading-relaxed mb-6 tracking-wide">
                Today, as a foundation fully registered with the CAC and recognized by key bodies, our commitment is forged in action. But we know we can't do it alone. That's why we stand shoulder-to-shoulder with dedicated NGOs and leading research institutes.
              </p>
              <p className="text-lg font-body text-gray-700 leading-relaxed tracking-wide">
                Together, we combine passion with precision, ensuring every initiative – in health, education, infrastructure, skills, or rights – delivers not just aid, but lasting, meaningful change. This is our story. <span className="font-serif font-semibold text-[#228B22]">Join us as we write the next chapter.</span>
              </p>
            </div>
            <div className="relative">
              <img
                src="/richm4.jpg"
                alt="Richmark Humanitarian Foundation - Empowering Communities Since 2017"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Since 2017</h3>
                <p className="text-sm opacity-90">Answering the cries of our communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center text-[#228B22] mb-6 tracking-tight">Our Core Values</h2>
          <p className="text-center font-body text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed tracking-wide">
            These values are the foundation of everything we do, guiding our actions and shaping our impact in communities across Nigeria.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#228B22]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-white">💝</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#228B22] mb-3 tracking-tight">Unwavering Empathy</h3>
                  <p className="font-body text-gray-700 leading-relaxed tracking-wide mb-2">
                    <em>Hearing the cry behind the need.</em> We start by truly listening to the communities we serve, letting their struggles and hopes guide our hands and hearts. We see the person, not just the problem.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#FFA500]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-white">🛡️</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#228B22] mb-3 tracking-tight">Relentless Integrity</h3>
                  <p className="font-body text-gray-700 leading-relaxed tracking-wide mb-2">
                    <em>Doing right, even when unseen.</em> We are transparent, accountable stewards of every resource entrusted to us (CAC registered & compliant). Our word is our bond, and our actions build trust brick by brick.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#228B22]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-white">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#228B22] mb-3 tracking-tight">Collaborative Courage</h3>
                  <p className="font-body text-gray-700 leading-relaxed tracking-wide mb-2">
                    <em>Stronger shoulders, braver solutions.</em> We believe no single hero can lift a community. We actively seek and nurture partnerships (NGOs, research institutes), knowing that shared wisdom and shared burdens forge lasting change.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 4 */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#FFA500]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-white">🌱</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#228B22] mb-3 tracking-tight">Rooted in Community</h3>
                  <p className="font-body text-gray-700 leading-relaxed tracking-wide mb-2">
                    <em>Solutions grown, not flown in.</em> We don't impose; we empower. We work with communities, respecting their voice, building on their strengths, and ensuring initiatives are sustainable and truly theirs.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 5 */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#228B22]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-white">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#228B22] mb-3 tracking-tight">Transformative Accountability</h3>
                  <p className="font-body text-gray-700 leading-relaxed tracking-wide mb-2">
                    <em>Not just aid, but ascent.</em> We measure success not just by outputs, but by the tangible rise in dignity, opportunity, and resilience within the communities we serve. We are accountable for igniting lasting progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 6 */}
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#FFA500]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFA500] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-white">⚖️</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#228B22] mb-3 tracking-tight">Dignity in Action</h3>
                  <p className="font-body text-gray-700 leading-relaxed tracking-wide mb-2">
                    <em>Rights respected, potential unleashed.</em> Every health intervention, every classroom, every skill taught, every infrastructure project is built on the unshakeable belief in the inherent dignity and boundless potential of every individual. Justice isn't an add-on; it's the foundation.
                  </p>
                </div>
              </div>
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
