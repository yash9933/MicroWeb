import React, { useState, useEffect } from 'react'
import { Menu, X, MapPin, Mail, Phone } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu when location changes (i.e., when navigating to a new page)
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 glass z-50 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Link 
                to="/" 
                className="font-semibold text-xl tracking-tight px-3 py-2 rounded-lg hover:bg-gray-100/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Micro </span>
                <span className="text-gray-900 font-bold">Web</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/' 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/30'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/services' 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/30'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/about' 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/30'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/contact' 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/30'
                }`}
              >
                Contact
              </Link>
            </div>

            <button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fadeIn border-t border-gray-200/50 mt-4">
              <div className="flex flex-col space-y-1">
                <Link 
                  to="/" 
                  className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === '/' 
                      ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/30'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === '/services' 
                      ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/30'
                  }`}
                >
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === '/about' 
                      ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/30'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === '/contact' 
                      ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/30'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-20">
        {children}
      </div>
      {/* Global Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Call to Action Section */}
          <div className="text-center mb-12 pb-12 border-b border-gray-800">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with modern web solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-200"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Micro</span>
                <span className="text-white">web</span>
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Custom Web Development • Digital Marketing • Website Maintenance
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-3">
                <a href="mailto:Microwebservices02@yahoo.com" className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Microwebservices02@yahoo.com</span>
                </a>
                <a href="tel:+919217014504" className="flex items-start gap-2 text-sm hover:text-blue-400 transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>+91-9217014504</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Address</h4>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                <div>
                  <p>J 18, Upper Ground Floor</p>
                  <p>MohanGarden, Block J</p>
                  <p>Rama ParkRoad</p>
                  <p>Uttam Nagar, DELHI - 110059</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © 2026 Microweb. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}