import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import owner from "../../media/ownerrr.jpg"

const Aboutus = () => {
  return (
    <>
      <Head>
        <title>About Us - Mehak</title>
        <meta name="description" content="Learn more about Mehak, our story, mission, and values." />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="ptext text-5xl font-bold text-center mb-8 font-poppins">About Us</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Welcome to Mehak, where passion for fragrances meets exquisite craftsmanship. Our journey began with a deep appreciation for the art of perfumery and a desire to create unique, unforgettable scents. Each of our perfumes is a masterpiece, carefully crafted to evoke emotions and memories, making every moment special.
            </p>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Mehak, our mission is to provide luxurious and innovative fragrances that captivate the senses and inspire confidence. We believe that a great perfume is not just a scent, but an experience that enhances your personality and leaves a lasting impression.
            </p>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We envision a world where every individual can find their signature scent, a fragrance that truly represents who they are. Our commitment to quality, creativity, and sustainability drives us to continually push the boundaries of perfumery and deliver exceptional products to our customers.
            </p>
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li><strong>Quality:</strong> We use only the finest ingredients and meticulous craftsmanship to create our perfumes.</li>
              <li><strong>Innovation:</strong> We embrace creativity and constantly seek new ways to delight our customers.</li>
              <li><strong>Sustainability:</strong> We are committed to environmentally responsible practices and sustainable sourcing.</li>
              <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do, and we strive to exceed their expectations.</li>
            </ul>
           
            <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
            <p className="text-gray-600 mb-6">
              Our team is composed of talented perfumers, designers, and industry experts who share a common passion for creating exceptional fragrances. We are dedicated to bringing you the best of what the world of perfumery has to offer.
            </p>
            <Image
              src={owner.src}
              alt="Our Values"
              width={300}
              height={400}
              className="rounded-lg mx-auto mb-8"
            />
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              We love hearing from our customers and are always here to help. Whether you have questions about our products or need assistance, please feel free to reach out to us.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Address:</strong>123 Mehak store, Malir Cantonment, 6969 </li>
              <li><strong>Phone:</strong> +1 234 567 890</li>
              <li><strong>Email:</strong> mehakscents@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
