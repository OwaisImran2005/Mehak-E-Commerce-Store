"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';
// import owner from "../../media/owner.jpg"
import owner from "../../media/ownerrr.jpg"

const Contactus = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Add form submission logic here (e.g., sending data to an API)
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us for any inquiries about our perfumes." />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="ptext text-4xl font-bold text-center mb-8 font-poppins flex justify-center">Contact Us</h1>
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Contact Information */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
              <p className="text-gray-600 mb-4">Feel free to reach out to us through any of the following channels:</p>
              <div className="mb-4">
                <h3 className="font-semibold">Address</h3>
                <p>123 Mehak store, Malir Cantonment, 6969</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Phone</h3>
                <p>+1 234 567 890</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Email</h3>
                <p>mehakscents@gmail.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Owner Information */}
        <div className="container mx-auto px-4 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Owner Information</h2>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="md:w-1/3">
                <Image
                  src={owner.src}
                  alt="Owner"
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  Hi,  I`m <b> Muhammad Owais </b>, the proud owner of <i> Mehak . </i> With a passion for fragrances, I`ve curated a unique selection of perfumes that cater to every individual`s taste. Feel free to reach out to me directly for any inquiries or special requests. I`m here to help you find the perfect scent!
                </p>
                <p className="text-gray-600">
                  Email: <Link href="https://mail.google.com/mail/u/0/#inbox" className="text-cyan-600">owaisimran55555@gmail.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Popup */}
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Message Sent</h2>
              <p className="text-gray-600 mb-4">Thank you for contacting us! We`ll get back to you shortly.</p>
              <button
                onClick={closePopup}
                className="bg-cyan-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-cyan-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contactus;
