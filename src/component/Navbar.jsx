import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Focus Areas', path: '/focus' },
    { name: 'Donate', path: '/donate' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/richmark.jpg" // ensure image is inside /public folder
            alt="Richmark Foundation Logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <span className="text-xl md:text-2xl font-bold text-[#228B22]">
            Richmark Foundation
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition font-medium ${
                    isActive
                      ? 'text-[#FFA500] underline'
                      : 'text-gray-700 hover:text-[#FFA500]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block font-medium ${
                  isActive
                    ? 'text-[#FFA500] underline'
                    : 'text-gray-700 hover:text-[#FFA500]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
      </nav>
    </>
  );
};

export default Navbar;
