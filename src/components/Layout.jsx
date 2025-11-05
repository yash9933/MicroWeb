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
      <nav className="fixed top-0 left-0 right-0 glass z-50 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Link 
                to="/" 
                className="font-semibold text-xl tracking-tight px-3 py-2 rounded-lg hover:bg-gray-100/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">Micro</span>
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
      {/* Global Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 text-gray-300 py-6 z-40">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium">Crafted with ❤️ by MicroWeb ®</p>
        </div>
      </footer>
    </div>
  )
}