import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ServicesPage = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices.",
      icon: "🚀",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates engaging digital experiences.",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Solutions",
      description: "Scalable online stores with secure payment integration.",
      icon: "🛍️",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Digital Marketing",
      description: "Digital marketing services to help you grow your business online.",
      icon: "⚙️",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const handleServiceClick = () => {
    navigate('/contact');
  };

  return (
    <div className="h-[calc(100vh-5rem)] overflow-hidden pt-10 pb-24 -mb-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-10 pt-4 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={handleServiceClick}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">{service.icon}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-xs">
                  {service.description}
                </p>
              </div>
              
              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
