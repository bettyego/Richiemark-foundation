import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';
import { FOUNDATION_EMAILS } from '../config/emailConfig.js';

const EmailButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Email address for the foundation
  const emailAddress = 'Info@richmarkfoundation.com';
  
  // Pre-written email templates for different purposes
  const emailTemplates = [
    {
      title: "General Inquiry",
      subject: "General Inquiry - Richmark Humanitarian Foundation",
      body: "Dear Richmark Humanitarian Foundation Team,\n\nI hope this email finds you well. I would like to learn more about your foundation and the important work you do in empowering Nigerian communities.\n\nCould you please provide me with more information about:\n- Your current programs and initiatives\n- How I can get involved or support your mission\n- Any upcoming events or activities\n\nThank you for your time and dedication to making a positive impact.\n\nBest regards,\n[Your Name]"
    },
    {
      title: "Volunteer Application",
      subject: "Volunteer Application - Richmark Humanitarian Foundation",
      body: "Dear Volunteer Coordinator,\n\nI am writing to express my interest in volunteering with Richmark Humanitarian Foundation. I am passionate about humanitarian work and would love to contribute to your mission of empowering communities.\n\nI would appreciate information about:\n- Available volunteer opportunities\n- Application process and requirements\n- Training programs\n- Time commitments and schedules\n\nI am eager to make a meaningful contribution to your important work.\n\nThank you for considering my application.\n\nSincerely,\n[Your Name]\n[Your Phone Number]\n[Your Location]"
    },
    {
      title: "Donation Inquiry",
      subject: "Donation Inquiry - Richmark Humanitarian Foundation",
      body: "Dear Richmark Humanitarian Foundation,\n\nI am interested in making a donation to support your humanitarian work and community empowerment initiatives.\n\nCould you please provide information about:\n- Donation methods and processes\n- Specific programs I can support\n- Tax-deductible receipt procedures\n- How donations are utilized\n\nI believe in your mission and would like to contribute to the positive change you're creating in Nigerian communities.\n\nThank you for your transparency and dedication.\n\nBest regards,\n[Your Name]"
    },
    {
      title: "Partnership Proposal",
      subject: "Partnership Proposal - Richmark Humanitarian Foundation",
      body: "Dear Partnership Team,\n\nI represent [Organization Name] and we are interested in exploring potential collaboration opportunities with Richmark Humanitarian Foundation.\n\nOur organization focuses on [Brief Description] and we believe there may be synergies between our missions that could benefit the communities we both serve.\n\nWe would welcome the opportunity to:\n- Discuss potential collaboration areas\n- Share our respective capabilities and resources\n- Explore joint initiatives or programs\n\nWould it be possible to schedule a meeting or call to discuss this further?\n\nThank you for considering this partnership opportunity.\n\nSincerely,\n[Your Name]\n[Your Title]\n[Organization Name]\n[Contact Information]"
    }
  ];

  const handleEmailClick = (template = null) => {
    try {
      let subject = '';
      let body = '';
      
      if (template) {
        subject = encodeURIComponent(template.subject);
        body = encodeURIComponent(template.body);
      } else {
        subject = encodeURIComponent('Inquiry - Richmark Humanitarian Foundation');
        body = encodeURIComponent('Dear Richmark Humanitarian Foundation Team,\n\nI hope this email finds you well.\n\n[Please write your message here]\n\nBest regards,\n[Your Name]');
      }
      
      const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      setIsExpanded(false);
    } catch (error) {
      console.error('Error opening email client:', error);
      // Fallback: try to open email without pre-filled content
      window.location.href = `mailto:${emailAddress}`;
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Floating Email Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Menu */}
        {isExpanded && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-80 animate-in slide-in-from-bottom-2 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-gray-800 text-sm">
                    Email us
                  </h3>
                  <p className="text-xs text-gray-500 font-body">
                    Info@richmarkfoundation.com
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Email Template Options */}
            <div className="space-y-2">
              <p className="text-xs font-accent font-medium text-gray-600 uppercase tracking-wider mb-3">
                Email Templates
              </p>
              {emailTemplates.map((template, index) => (
                <button
                  key={index}
                  onClick={() => handleEmailClick(template)}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all duration-200 group"
                >
                  <div className="font-body font-medium text-gray-800 text-sm mb-1 group-hover:text-blue-700">
                    {template.title}
                  </div>
                  <div className="text-xs text-gray-500 line-clamp-2 group-hover:text-blue-600">
                    {template.subject}
                  </div>
                </button>
              ))}
              
              {/* Custom Email Option */}
              <button
                onClick={() => handleEmailClick()}
                className="w-full text-left p-3 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all duration-200"
              >
                <div className="font-body font-medium text-blue-800 text-sm mb-1">
                  Custom Email
                </div>
                <div className="text-xs text-blue-600">
                  Compose your own email message
                </div>
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-body">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span>We respond to emails promptly</span>
              </div>
            </div>
          </div>
        )}

        {/* Main Email Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`group relative w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
            isExpanded ? 'rotate-180' : 'hover:scale-110'
          }`}
          aria-label="Contact us via Email"
        >
          {isExpanded ? (
            <X className="w-6 h-6 text-white transition-transform duration-300" />
          ) : (
            <Mail className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
          )}
          
          {/* Pulse Animation */}
          {!isExpanded && (
            <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
          )}
        </button>

        {/* Tooltip for collapsed state */}
        {!isExpanded && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs font-body px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Email us at Info@richmarkfoundation.com
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmailButton;
