import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { newsUpdates } from "../../utils/newsletterData.js";
import { subscribeToNewsletter } from "../../services/emailService.js";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      setLoading(true);
      setError("");
      await subscribeToNewsletter(email);
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      <Navbar />
      {/* Newsletter Signup Section */}
      <section className="pt-28 pb-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#228B22] mb-4">
            Sign Up for Our Newsletter
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Get Richmark Foundation's latest updates, project stories, and
            awareness articles straight to your inbox.
          </p>

          {submitted ? (
            <div className="space-y-4">
              <p className="text-[#228B22] text-lg font-semibold">
                🎉 You're now subscribed. Thank you!
              </p>
              <p className="text-gray-600">
                Check your inbox for a confirmation email from info@richmarkfoundation.com
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full sm:w-[350px] px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#228B22] transition"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className={`bg-[#FFA500] hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition ${
                    loading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              <p className="text-sm text-gray-500">
                You can also email us directly at{' '}
                <a
                  href="mailto:info@richmarkfoundation.com"
                  className="text-[#228B22] hover:text-[#1a6b1a] font-medium"
                >
                  info@richmarkfoundation.com
                </a>
              </p>
            </>
          )}
          {error && (
            <p className="text-red-500 mt-4">{error}</p>
          )}
        </div>
      </section>

      {/* News/Blog Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Latest News & Updates
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsUpdates.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition group"
              >
                <Link to={`/newsletter/article/${index}`} className="block">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-[#228B22] px-4 py-2 rounded-md font-medium transform -translate-y-2 group-hover:translate-y-0 transition duration-300">
                        Read More
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <h3 className="text-xl font-semibold text-[#228B22] mb-2 hover:text-[#1a6b1a] transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center text-[#228B22] text-sm font-medium hover:text-[#1a6b1a] transition">
                      <span>Read full article</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Newsletter;
