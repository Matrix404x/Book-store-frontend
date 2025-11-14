import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import GoogleMap from '../Components/GoogleMap';
import Header from '../Components/Header';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Header />

      <div className="w-full min-h-screen p-4 md:p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Contacts</h1>
        
        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eligendi blanditiis! Ipsa dolor aliquam odit consequatur illum ipsam necessitatibus veritatis? Eius dolorem corporis ratione. Pariatur provident explicabo cumque.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaMapMarkerAlt className="text-2xl text-gray-600" />
              </div>
              <div>
                <p>123 Main Street, Apt 4B,</p>
                <p>Anytown, CA 91234</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaPhone className="text-2xl text-gray-600" />
              </div>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <FaEnvelope className="text-2xl text-gray-600" />
              </div>
              <p>bookstore@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Send me Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="E Mail Id"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition duration-300"
              >
                <span>Send</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="h-[500px] rounded-lg overflow-hidden">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
