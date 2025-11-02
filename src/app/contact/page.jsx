"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Obfuscate from 'react-obfuscate'

// You can import your pitbull logo if you use this in your main app
// import { PitbullLogo } from './App.jsx';

// Re-using the SVG icons from your main App.jsx for consistency
const LocationIcon = () => (
  <svg
    className="w-6 h-6 text-purple-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-6 h-6 text-purple-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-6 h-6 text-purple-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You would typically send this to an email API or backend
    alert('Message sent! (Form submission logged to console)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    // Using the same background and text colors as your theme
    <div className="min-h-screen text-stone-500 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-stone-700 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Have a project in mind, a question about our services, or just want
            to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Column 1: Contact Form */}
          <div className="bg-purple-300 rounded-2xl p-8 border border-indigo-700 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-purple-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-purple-100 border border-indigo-700 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-purple-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-purple-100 border border-indigo-700 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-purple-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-purple-100 border border-indigo-700 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-purple-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-purple-100 border border-indigo-700 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your detailed message..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white md:hidden">
              Contact Details
            </h2>
            {/* Address Card */}
            <div className="bg-purple-300 rounded-2xl p-8 border border-indigo-700 shadow-xl flex items-start space-x-6">
              <div className="flex-shrink-0 bg-purple-100 p-4 rounded-lg">
                <LocationIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Our Office
                </h3>
                <p className="text-stone-600">
                  Barrackpore, Kolkata,
                  <br />
                  West Bengal, India
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-purple-300 rounded-2xl p-8 border border-indigo-700 shadow-xl flex items-start space-x-6">
              <div className="flex-shrink-0 bg-purple-100 p-4 rounded-lg">
                <EmailIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Email Us
                </h3>
                <p className="text-stone-600">
                  General Inquiries:
                  <br />
                  <Obfuscate className="text-purple-400 hover:text-purple-800" email="info@bbc.straxcel.com" />
                </p>
                <p className="text-stone-600 mt-2">
                  Support:
                  <br />
                  <Obfuscate className="text-purple-400 hover:text-purple-800" email="support@bbc.straxcel.com" />
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-purple-300 rounded-2xl p-8 border border-indigo-700 shadow-xl flex items-start space-x-6">
              <div className="flex-shrink-0 bg-purple-100 p-4 rounded-lg">
                <PhoneIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Call Us
                </h3>
                <p className="text-stone-600">
                  Sales & Support:
                  <br />
                  <Obfuscate className="text-purple-400 hover:text-purple-800" tel="9830020322" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
