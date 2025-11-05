import { Link } from 'react-router-dom'; 

export const HomePage = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-100 via-purple-100 to-blue-100 min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-blue-900/10 pattern-grid-lg opacity-10 pointer-events-none"></div>

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
                href="/contact"
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3 opacity-50 pointer-events-none"></div>
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
                src="web.webp"
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
      <section className="bg-indigo-600 text-white pt-4 sm:pt-6 pb-24 sm:pb-24 flex items-center">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
      Get In Touch
    </h1>
    <p className="text-lg sm:text-xl text-indigo-200 max-w-xl mx-auto">
      We'd love to hear from you! Let's work together to bring your vision to life.
    </p>
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <a
        href="/contact"
        className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Contact Us
      </a>
      <a
        href="/contact"
        className="text-pink-300 font-medium hover:text-pink-400 hover:underline transition-all duration-300 transform hover:scale-105"
      >
        Schedule a Demo
      </a>
    </div>
  </div>
</section>



      {/* Footer handled globally in Layout */}
    </div>
  );
};
