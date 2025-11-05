import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.jpg'; 

export const HomePage = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Modern Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/25"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-1 gap-16 items-center justify-center">
            {/* Left Section - Text Content */}
            <div className="space-y-8 text-center lg:text-left animate-fadeIn">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.8)]">
                  Crafting Digital
                  <span className="block text-blue-300 [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.8)]">
                    Excellence
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-xl [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.6)]">
                  Transform your vision into reality with modern, scalable web solutions that drive business growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="group relative px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Started</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white/90 backdrop-blur-md text-gray-900 font-semibold text-lg rounded-xl border-2 border-white/50 hover:bg-white hover:border-white shadow-lg transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Section - Image with modern styling */}
            {/* <div className="relative animate-slideIn">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/1.jpg" 
                  alt="Web Development"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to elevate your digital presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <img
                  src="2.jpg"
                  alt="Responsive Design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Responsive Web Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless experiences across all devices with modern, adaptive design principles.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <img
                  src="web.webp"
                  alt="E-commerce Development"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">E-commerce Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete e-commerce solutions with secure payment integration and scalable architecture.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <img
                  src="4.webp"
                  alt="Web Application Development"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Web Application Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Powerful, scalable web applications built with cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Modern Design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At MicroWeb, we believe in turning your ideas into reality with cutting-edge web technologies. 
              Our team of expert developers works closely with you to craft tailored solutions that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - Modern Design */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Get Started?
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with modern web solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 text-white font-semibold text-lg rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
