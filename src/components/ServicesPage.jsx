import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ServicesPage = () => {
  const navigate = useNavigate();
  
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
  ];

  const handleServiceClick = () => {
    navigate('/contact');
  };

  return (
    <div className="py-20 bg-gradient-to-b from-indigo-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-indigo-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-indigo-700">
            Comprehensive web solutions tailored to your digital needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={handleServiceClick}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 text-4xl rounded-full mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-indigo-700 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
