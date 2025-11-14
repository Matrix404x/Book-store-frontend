import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import GoogleMap from '../Components/GoogleMap';
import Header from '../users/Components/Header';

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
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>

      <Header />


    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contacts</h1>
      
      <div className="text-center mb-12">
        <p className="text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eligendi blanditiis! Ipsa dolor aliquam odit consequatur illum ipsam necessitatibus veritatis? Eius dolorem corporis ratione. Pariatur provident explicabo cumque.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-gray-600" />
            <div>
              <p>123 Main Street, Apt 4B,</p>
              <p>Anytown, CA 91234</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-2xl text-gray-600" />
            <p>+91 9876543210</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-gray-600" />
            <p>bookstore@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Send me Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 rounded border border-gray-300"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="E Mail Id"
                className="w-full p-3 rounded border border-gray-300"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-3 rounded border border-gray-300"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded flex items-center justify-center space-x-2"
            >
              <span>Send</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>

        <div className="h-[400px] rounded-lg overflow-hidden">
          <GoogleMap />
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;