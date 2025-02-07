"use client";

import { useState } from 'react';
import Head from 'next/head';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What makes Mehak perfumes unique?',
      answer: 'At Mehak, we use only the finest ingredients and meticulous craftsmanship to create our perfumes. Each fragrance is carefully crafted to evoke emotions and memories, making every moment special.',
    },
    {
      question: 'How should I store my Mehak perfumes?',
      answer: 'To preserve the quality of your Mehak perfumes, store them in a cool, dry place away from direct sunlight and extreme temperatures. This helps maintain the fragrance\'s integrity and longevity.',
    },
    {
      question: 'Do you offer samples of your perfumes?',
      answer: 'Yes, we offer samples of our perfumes so you can experience the unique scents before committing to a full-sized bottle. You can purchase samples directly from our website.',
    },
    {
      question: 'Are your perfumes cruelty-free?',
      answer: 'Absolutely! At Mehak, we are committed to ethical practices and do not test our products on animals. Our perfumes are cruelty-free and made with sustainably sourced ingredients.',
    },
    {
      question: 'How can I make my perfume last longer?',
      answer: 'To make your perfume last longer, apply it to pulse points such as your wrists, neck, and behind your ears. Additionally, moisturized skin helps retain the fragrance, so consider using an unscented lotion before applying your perfume.',
    },
    {
      question: 'Can I customize my own fragrance?',
      answer: 'Currently, we do not offer custom fragrance creation. However, we are always exploring new ways to enhance our offerings, so stay tuned for any updates!',
    },
  ];

  return (
    <>
      <Head>
        <title>FAQs - Mehak</title>
        <meta name="description" content="Find answers to frequently asked questions about Mehak perfumes." />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="ptext text-5xl font-bold text-center mb-8 font-poppins">FAQs</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left py-2 px-4 bg-gray-100 rounded-md font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="ml-2">
                    {activeIndex === index ? <FaMinus className="text-cyan-600" /> : <FaPlus className="text-cyan-600" />}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="mt-2 px-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
