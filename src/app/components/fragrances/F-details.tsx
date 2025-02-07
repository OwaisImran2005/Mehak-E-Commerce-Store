"use client";

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React, { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import Link from 'next/link';

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "");

const F_details = ({ fdata }: { fdata: product }) => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    paymentMethod: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleCheckout = async () => {
    if (orderDetails.paymentMethod === "card") {
      const stripeUI = await stripe;

      // Prepare the product data for Stripe
      const productData = {
        name: fdata.title,
        description: fdata.description,
        price_data: {
          currency: "usd",
          unit_amount: Math.round(fdata.price * 100), // Convert to cents
        },
        quantity: 1,
        imageUrl: urlFor(fdata.imageUrl).url(),
      };

      let sessionResponse: any = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [productData],
        }),
      });
      sessionResponse = await sessionResponse.json();

      stripeUI?.redirectToCheckout({
        sessionId: sessionResponse.sessionId,
      });
    } else if (orderDetails.paymentMethod === "cash") {
      // Simulate order submission for cash on delivery
      setOrderSubmitted(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    handleCheckout();
  };

  return (
    <div className="bg-gray-50 py-12">
    
      <div className="container mx-auto px-4">
        <h2 className="ptext text-4xl md:text-[40px] font-bold font-poppins mb-6 text-center md:text-left">
          Product Details
        </h2>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
         
          <div className="relative h-[500px] w-full">
            <Image
              src={urlFor(fdata.imageUrl).url()}
              alt={fdata.name}
              layout="fill"
              objectFit="contain"
              className="rounded-lg p-6"
              priority
            />
          </div>

        
          <div className="p-8 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 text-center md:text-left">
              {fdata.title}
            </h1>

           
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {fdata.tagGender && (
                <span className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {fdata.tagGender}
                </span>
              )}
              {fdata.tagCategory && (
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {fdata.tagCategory}
                </span>
              )}
              {fdata.tagType && (
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {fdata.tagType}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <p className="text-2xl md:text-4xl font-bold text-cyan-600">
                ${fdata.price}
              </p>
              {fdata.oldprice && (
                <p className="text-xl md:text-2xl text-gray-400 line-through">
                  ${fdata.oldprice}
                </p>
              )}
            </div>

            {fdata.percentOff && (
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-lg font-semibold">
                {fdata.percentOff}% OFF
              </span>
            )}

            <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">
              {fdata.description}
            </p>
            <div className="flex justify-center md:justify-start mt-8">
              <button
                disabled={!Boolean(fdata.available)}
                className={`w-full md:w-auto bg-cyan-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-700 transition-colors ${fdata.available
                    ? "bg-cyan-500 text-white hover:bg-cyan-600"
                    : "bg-red-600 text-white cursor-not-allowed hover:bg-red-600"
                  }`}
                onClick={() => setShowOrderForm(true)}
              >
                {fdata.available ? "Buy Now" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>

     
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Order Details</h2>
            <form onSubmit={handleSubmitOrder}>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded"
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="w-full p-2 border rounded"
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded"
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  required
                  onChange={handleInputChange}
                />
                <select
                  name="paymentMethod"
                  className="w-full p-2 border rounded"
                  required
                  onChange={handleInputChange}
                >
                  <option value="">Select Payment Method</option>
                  <option value="card">Pay with Card/Online</option>
                  <option value="cash">Cash on Delivery</option>
                </select>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setShowOrderForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-cyan-600 text-white px-4 py-2 rounded"
                >
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    
      {orderSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Order Received!</h2>
            <p className="text-green-600 mb-4">Your order has been submitted successfully.</p>
            <div className="text-left">
              <p><strong>Name:</strong> {orderDetails.name}</p>
              <p><strong>Address:</strong> {orderDetails.address}</p>
              <p><strong>Phone:</strong> {orderDetails.phone}</p>
              <p><strong>Email:</strong> {orderDetails.email}</p>
              <p><strong>Product:</strong> {fdata.title}</p>
              <p><strong>Total:</strong> ${fdata.price}</p>
            </div>
            <button
              className="mt-6 bg-cyan-600 text-white px-4 py-2 rounded"
              onClick={() => {
                setOrderSubmitted(false);
                setShowOrderForm(false);
              }}
            >
              <Link href={'/'}>

                Back to Home
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default F_details;
