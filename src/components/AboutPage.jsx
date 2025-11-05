import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                About MicroWeb
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We're a team of passionate developers and designers dedicated to creating exceptional web experiences. 
              With years of expertise in the industry, we bring creativity and technical excellence to every project.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to help businesses thrive in the digital world by providing innovative web solutions 
              that drive growth and success.
            </p>
            
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Work with us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Section - Modern Design */}
          <div className="relative animate-slideIn">
            {/* Gradient background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl"></div>
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="6.jpg"
                alt="Our Team"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
