"use client";

import { useState, FormEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Clear form fields
    setFormData({
      name: '',
      email: '',
      rating: 0,
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

  const handleRatingChange = (rating: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      rating,
    }));
  };

  return (
    <>
      <Head>
        <title>Feedback - Mehak</title>
        <meta name="description" content="We value your feedback! Share your experiences and suggestions about our perfumes." />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="ptext text-5xl font-bold text-center mb-8 font-poppins">Feedback</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">We Value Your Feedback</h2>
            <p className="text-gray-600 mb-6">
              Your feedback helps us to continually improve our products and services. Please share your experiences and suggestions with us.
            </p>
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
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`cursor-pointer ${star <= formData.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      onClick={() => handleRatingChange(star)}
                    />
                  ))}
                </div>
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
                Submit Feedback
              </button>
            </form>
          </div>
        </div>

        {/* Confirmation Popup */}
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Feedback Sent</h2>
              <p className="text-gray-600 mb-4">Thank you for your feedback! We appreciate your input and will use it to improve our offerings.</p>
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

export default Feedback;
