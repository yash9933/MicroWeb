import React, { useEffect } from 'react';
import { Code, Palette, TrendingUp, Settings } from 'lucide-react';

export const ServicesPage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "We design and develop fast, secure, and scalable websites that reflect your brand and support your business objectives.",
      image: "/website-development.jpg",
      features: [
        "Custom website design and development",
        "Mobile-responsive layouts",
        "SEO-friendly structure",
        "Optimized performance and security",
        "Clean, maintainable code"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design & Branding",
      description: "Good design is not just about looks. We create user-focused interfaces that improve engagement and conversion rates.",
      image: "/ui-ux.jpg",
      features: [
        "User-centric UI/UX design",
        "Brand-aligned visual identity",
        "Conversion-focused layouts",
        "Clear user journeys and navigation"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "We help your business get discovered and generate consistent leads through strategic digital marketing.",
      image: "/Digital-Marketing.jpg",
      features: [
        "Search Engine Optimization (SEO)",
        "Paid advertising campaigns (Google & Social)",
        "Social media marketing support",
        "Performance tracking and reporting"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Settings,
      title: "Website Maintenance & Support",
      description: "A website needs regular updates and monitoring to stay secure and effective. We handle the technical side so you can focus on your business.",
      image: "/2.webp",
      features: [
        "Regular updates and backups",
        "Security monitoring",
        "Performance optimization",
        "Technical support and troubleshooting"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end digital solutions tailored to your business goals. Whether you need a new website, better visibility, or reliable ongoing support, we deliver solutions that work in the real world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delayClass = `scroll-reveal-delay-${index + 1}`;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl scroll-reveal ${delayClass}`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: Image */}
                  <div className="order-2 md:order-1">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="order-1 md:order-2">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500">
                        {service.title}
                      </h2>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">What you get:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
