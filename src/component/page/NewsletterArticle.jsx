import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { newsUpdates } from '../../utils/newsletterData.js';

const NewsletterArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = newsUpdates[parseInt(id)];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article not found</h2>
          <button
            onClick={() => navigate('/newsletter')}
            className="text-[#228B22] hover:text-[#1a6b1a] font-medium"
          >
            Back to Newsletter
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => navigate('/newsletter')}
          className="text-[#228B22] hover:text-[#1a6b1a] font-medium flex items-center gap-2 mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Newsletter
        </button>

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <p className="text-gray-500 mb-8">{article.date}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{article.description}</p>
          
          {/* Additional article content would go here */}
          <div className="space-y-6">
            <p className="text-gray-700">
              At Richmark Foundation, we believe in creating lasting positive change in our communities.
              Through our various initiatives and programs, we strive to make a meaningful impact in the
              lives of those we serve.
            </p>
            <p className="text-gray-700">
              Our dedicated team of volunteers and staff work tirelessly to implement these programs
              and ensure they reach those who need them most. We are grateful for the continued support
              of our donors and partners who make this work possible.
            </p>
            <p className="text-gray-700">
              As we move forward, we remain committed to our mission of empowering communities and
              creating sustainable change. We invite you to join us in this journey and be part of
              our story of impact and transformation.
            </p>
          </div>

          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="text-[#228B22] hover:text-[#1a6b1a] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="text-[#228B22] hover:text-[#1a6b1a] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="text-[#228B22] hover:text-[#1a6b1a] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsletterArticle;
