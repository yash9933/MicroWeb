export const ServicesPage = () => {
    const services = [
      {
        title: "Web Development",
        description: "Custom websites built with modern technologies and best practices.",
        icon: "🚀"
      },
      {
        title: "UI/UX Design",
        description: "User-centered design that creates engaging digital experiences.",
        icon: "🎨"
      },
      {
        title: "E-commerce Solutions",
        description: "Scalable online stores with secure payment integration.",
        icon: "🛍️"
      },
      {
        title: "Web Applications",
        description: "Complex web applications with robust functionality.",
        icon: "⚙️"
      }
    ]
  
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive web solutions for your digital needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }