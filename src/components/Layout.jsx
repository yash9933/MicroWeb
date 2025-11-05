import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-1">
              <Link 
                to="/" 
                className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-blue-600 font-bold text-xl">Micro</span>
                <span className="text-gray-800 font-bold text-xl">Web</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-pink-500 font-medium px-3 py-2 rounded-md hover:bg-pink-50 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">Services</Link>
              <Link to="/about" className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">About Us</Link>
              <Link to="/contact" className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">Contact us</Link>
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
            <div className="md:hidden py-4 animate-fadeIn">
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/" 
                  className="text-pink-500 font-medium px-3 py-2 rounded-md hover:bg-pink-50 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        {children}
      </div>
      {/* Global Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-6 z-40">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">Crafted with ❤️ by MicroWeb Solutions. All rights reserved®</p>
        </div>
      </footer>
    </div>
  )
}