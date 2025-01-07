export const AboutPage = () => {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About MicroWeb</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're a team of passionate developers and designers dedicated to creating exceptional web experiences. With years of expertise in the industry, we bring creativity and technical excellence to every project.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to help businesses thrive in the digital world by providing innovative web solutions that drive growth and success.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img 
                src="6.jpg" 
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }