import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/richmark.jpg"
                alt="Richmark Foundation Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
              <span className="text-xl font-bold text-[#FFA500]">
                Richmark Foundation
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to empowering Nigerian communities through health, education, human rights,
              and sustainable development initiatives. Together, we create lasting positive change across Nigeria.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#FFA500]" />
                <span className="text-gray-300">15 Ademola Adetokunbo Street, Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFA500]" />
                <span className="text-gray-300">+234 (0) 901 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFA500]" />
                <span className="text-gray-300">info@richmarkfoundation.org.ng</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFA500] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/focus" className="text-gray-300 hover:text-white transition">
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white transition">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-white transition">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFA500] mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/health-initiatives" className="text-gray-300 hover:text-white transition">
                  Health Initiatives
                </Link>
              </li>
              <li>
                <Link to="/programs/education-support" className="text-gray-300 hover:text-white transition">
                  Education Support
                </Link>
              </li>
              <li>
                <Link to="/programs/human-rights" className="text-gray-300 hover:text-white transition">
                  Human Rights
                </Link>
              </li>
              <li>
                <Link to="/programs/blood-donation" className="text-gray-300 hover:text-white transition">
                  Blood Donation
                </Link>
              </li>
              <li>
                <Link to="/programs/community-services" className="text-gray-300 hover:text-white transition">
                  Community Services
                </Link>
              </li>
              <li>
                <Link to="/programs/emergency-relief" className="text-gray-300 hover:text-white transition">
                  Emergency Relief
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-[#FFA500] mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FFA500] transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FFA500] transition"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FFA500] transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FFA500] transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-[#FFA500] mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                />
                <button className="bg-[#FFA500] hover:bg-orange-600 px-4 py-2 rounded-md font-medium transition">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Get updates on our latest programs and impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Richmark Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Annual Reports</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
