import React from "react";
import { Link } from "react-router-dom";
import { newsUpdates } from "../../utils/newsletterData";

const NewsletterPreview = () => {
  // Get only the first 3 newsletters for the preview
  const previewNewsletters = newsUpdates.slice(0, 3);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Featured Updates</h2>
          <Link
            to="/newsletter"
            className="text-[#228B22] hover:text-[#1a6b1a] font-medium flex items-center gap-2 group"
          >
            View all updates
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {previewNewsletters.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to="/newsletter"
                    className="bg-white text-[#228B22] px-4 py-2 rounded-md font-medium transform -translate-y-2 group-hover:translate-y-0 transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-[#228B22] mb-2 hover:text-[#1a6b1a] transition">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterPreview;
