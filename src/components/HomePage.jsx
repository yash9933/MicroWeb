import { Link } from 'react-router-dom'; 

export const HomePage = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-100 via-purple-100 to-blue-100 min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blue-900/10 pattern-grid-lg opacity-10"></div>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Crafting Digital Excellence with Precision
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
              Transform your vision into reality with our expert web development services. We build modern, responsive, and scalable web solutions that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/services"
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started →
              </a>
              <a
                href="/about"
                className="text-pink-600 font-medium hover:underline transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3 opacity-50"></div>
            <img 
              src="/1.jpg" 
              alt="Web Development"
              className="relative rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Our Web Development Services
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="space-y-4">
              <img
                src="2.jpg"
                alt="Responsive Design"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Responsive Web Design</h3>
              <p className="text-gray-600">
                We create designs that work seamlessly across all devices, ensuring a smooth user experience.
              </p>
            </div>
            {/* Service 2 */}
            <div className="space-y-4">
              <img
                src="3.png"
                alt="E-commerce Development"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-gray-800">E-commerce Development</h3>
              <p className="text-gray-600">
                From product catalogs to secure payments, we offer full e-commerce development services.
              </p>
            </div>
            {/* Service 3 */}
            <div className="space-y-4">
              <img
                src="4.webp"
                alt="Web Application Development"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Web Application Development</h3>
              <p className="text-gray-600">
                Build powerful and scalable web applications tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            At MicroWeb, we believe in turning your ideas into reality with cutting-edge web technologies. Our team of expert developers works closely with you to craft tailored solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-indigo-600 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Get In Touch</h2>
          <p className="text-base sm:text-lg mb-6">We'd love to hear from you! Let's work together to bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link
              to="/contact"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-center"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">
            Crafted with ❤️ by MicroWeb Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
