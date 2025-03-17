import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              About MicroWeb
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We're a team of passionate developers & designers dedicated to creating exceptional web experiences. With years of expertise in the industry, we bring creativity and technical excellence to every project.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission is to help businesses thrive in the digital world by providing innovative web solutions that drive growth and success.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md"
            >
              Work with us
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-200 rounded-2xl blur-lg opacity-70"></div>
            <img
              src="6.jpg"
              alt="Our Team"
              className="relative z-10 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
