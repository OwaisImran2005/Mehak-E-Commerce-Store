"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "@/app/media/Logo.png";
import Image from "next/image";



const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleSubscribe = () => {
    
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address !!");
      setIsPopupVisible(true);
      setTimeout(() => setIsPopupVisible(false), 3000); // Hide message after 3 seconds
      return;
    }

    setMessage(`Email submitted! You will get the latest sales and discount updates from us  👍 `);
    setIsPopupVisible(true);
    setTimeout(() => setIsPopupVisible(false), 4000); // Hide message after 4 seconds
    setEmail(""); // Clear the input field
  };

  return (
    <>
      <footer className="bg-black text-white p-8 mt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-4 text-center md:text-left">
              <Link href={""}>
                <Image
                  src={logo.src}
                  alt="Logo"
                  className="mx-auto md:ml-11 w-32 md:w-40" 
                  width={175}
                  height={100}
                />
              </Link>
              <p className="font-sans text-sm">
                <b>مہک</b> is where luxury meets fragrance. We craft <br /> captivating  scents that inspire confidence and leave
                <br /> a lasting  impression. Discover your signature aroma with us.
              </p>
            </div>

            
            <div className="footerlinks space-y-4 text-center md:text-left">
              <div className="grid grid-cols-2 gap-4">
               
                <div className="space-y-5">
                  <Link href="/components/aboutus" className="block text-base hover:text-cyan-600">
                    About us
                  </Link>
                  <Link href="/components/feedback" className="block text-base hover:text-cyan-600">
                    Feedback
                  </Link>
                  <Link href="/components/privacypolicy" className="block text-base hover:text-cyan-600">
                    Privacy policy
                  </Link>
                  <Link href="/components/faqs" className="block text-base hover:text-cyan-600">
                    FAQs
                  </Link>
                  <Link href="/components/terms&service" className="block text-base hover:text-cyan-600">
                    Term & service
                  </Link>
                </div>
               
                <div className="space-y-5">
                  <Link href="/components/latest" className="block text-base hover:text-cyan-600">
                    New Arrivals
                  </Link>
                  <Link href="/components/bestsellers" className="block text-base hover:text-cyan-600">
                    Best sellers
                  </Link>
                  <Link href="/components/men" className="block text-base hover:text-cyan-600">
                    Men's Fragrances
                  </Link>
                  <Link href="/components/women" className="block text-base hover:text-cyan-600">
                    Women's Fragrances
                  </Link>
                  <Link href="/components/bodysprays" className="block text-base hover:text-cyan-600">
                    Body sprays
                  </Link>
                </div>
              </div>
            </div>

            
            <div className="space-y-4 text-center md:text-left">
              <div className="subscribe">
                <h3 className="font-bold mb-2">Get Latest News & Offers from Us</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded-l-lg text-black flex-grow"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-cyan-500 text-white p-2 rounded-r-lg hover:bg-cyan-600"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <FaEnvelope className="text-yellow-500" />
                  <p className="text-sm">mehakscents@gmail.com</p>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <FaPhone className="text-green-700" />
                  <p className="text-sm text-cyan-500 font-semibold">+1 234 567 890</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold">Follow us:</h4>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-600">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="text-yellow-300 hover:text-yellow-400">
                    <FaSnapchat size={24} />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-500">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        {isPopupVisible && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
            {message}
          </div>
        )}
      </footer>

      
      <div className="bg-cyan-700 text-white py-4 text-center">
        <p className="text-sm">
       <span className="pr-3">    &copy; {new Date().getFullYear()}  <b>   مہک </b> </span>  |    <span className="pl-3"> All rights reserved </span><span className="pl-3"> | </span><span className="pl-3"> Designed & Managed by <b> Muhammad Owais</b></span>
        </p>
      </div>
    </>
  );
};

export default Footer;
