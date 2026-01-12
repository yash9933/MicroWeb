import { Link } from "react-router-dom";
import { Target, CheckCircle } from "lucide-react";

export const AboutPage = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Microweb
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fadeIn">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            Microweb is a digital solutions company focused on building practical, results-driven websites and marketing systems for businesses of all sizes.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            We don't believe in overcomplicating things. Our approach is straightforward: understand your business, identify what will move the needle, and build digital solutions that support growth.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg mb-16 border border-gray-100 animate-fadeIn">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            To help businesses grow online by delivering reliable, high-quality digital solutions that combine design, technology, and strategy.
          </p>
        </div>

        {/* Why Work With Us Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 shadow-2xl text-white mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Why Work With Us
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Clear Communication</h3>
                <p className="text-gray-300 leading-relaxed">
                  Clear communication and transparent pricing
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Performance Focused</h3>
                <p className="text-gray-300 leading-relaxed">
                  Focus on performance, not just appearance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Practical Solutions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Practical solutions aligned with business goals
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Long-Term Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Long-term support, not one-time delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fadeIn">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Work with us
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
