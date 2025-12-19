import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    // { path: '/about', label: 'About Us' },
    // { path: '/services', label: 'Services' },
    // { path: '/projects', label: 'Projects' },
    // { path: '/industries', label: 'Industries' },
    // { path: '/clients', label: 'Clients' },
    { path: '/certifications', label: 'Certifications' },
    // { path: '/contact', label: 'Contact Us' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-emerald-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-6 text-sm">
          <a href="tel:+919876543210" className="flex items-center space-x-2 hover:text-emerald-200 transition">
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:info@rpenviro.com" className="flex items-center space-x-2 hover:text-emerald-200 transition">
            <Mail size={14} />
            <span>info@rpenviro.com</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              RP
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">RP Enviro Associates</div>
              <div className="text-xs text-emerald-600">Labs and Consultants</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  isActive(link.path)
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition ${
                  isActive(link.path)
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
