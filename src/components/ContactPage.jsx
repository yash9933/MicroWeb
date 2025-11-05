import React, { useState } from 'react';
import { Check } from "lucide-react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowSuccess(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] overflow-hidden pt-8 pb-24 -mb-24 bg-gradient-to-b from-indigo-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-extrabold text-indigo-900 mb-2">Get in Touch</h2>
          <p className="text-lg text-indigo-700">
            We'd love to hear from you. Let's connect!
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Custom Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Thank you!</h3>
            </div>
            <p className="text-center text-gray-600">We'll be in touch soon.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;