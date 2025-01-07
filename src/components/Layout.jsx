import React, { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-1">
              <Link to="/" className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">
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

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-pink-500 font-medium px-3 py-2 rounded-md hover:bg-pink-50">Home</Link>
                <Link to="/services" className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50">Services</Link>
                <Link to="/about" className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50">About Us</Link>
                <Link to="/contact" className="text-gray-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50">Contact us</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        {children}
      </div>
    </div>
  )
}