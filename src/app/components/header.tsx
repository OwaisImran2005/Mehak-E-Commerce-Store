"use client";

import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/app/media/Logo.png";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

type Product = {
  imageUrl: string;
  title: string;
  tagGender: string;
  tagCategory: string;
  tagType: string;
  slug: string;
  _type: string;
};

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    const fetchProducts = async () => {
      const fragrancesQuery = `*[_type == 'fragrances'] {
        title,
        tagGender,
        tagCategory,
        tagType,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        _type
      }`;
      const bodyspraysQuery = `*[_type == 'bodysprays'] {
        title,
        tagGender,
        tagCategory,
        tagType,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        _type
      }`;
      const attarsQuery = `*[_type == 'attars'] {
        title,
        tagGender,
        tagCategory,
        tagType,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        _type
      }`;

      const [fragrances, bodysprays, attars] = await Promise.all([
        client.fetch<Product[]>(fragrancesQuery),
        client.fetch<Product[]>(bodyspraysQuery),
        client.fetch<Product[]>(attarsQuery),
      ]);

      setProducts([...fragrances, ...bodysprays, ...attars]);
    };

    fetchProducts();
  }, []);


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filteredResults = products.filter((product) => {
        const tags = [
          product.title,
          product.tagGender,
          product.tagCategory,
          product.tagType,
        ].join(' ').toLowerCase();
        return tags.includes(query.toLowerCase());
      });
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };


  const getSlugPath = (product: Product) => {
    switch (product._type) {
      case 'fragrances':
        return `/Product/${product.slug}`;
      case 'bodysprays':
        return `/Bodysprays/${product.slug}`;
      case 'attars':
        return `/Attars/${product.slug}`;
      default:
        return '/';
    }
  };

  return (
    <>

      <div className="bg-cyan-500 text-black text-center p-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap space-y-0 font-sans">
          <p className="inline-block px-8">Enjoy upto 35% off on luxury winter fragrances</p>
          <p className="inline-block px-8">New Collection Available Now!</p>
          <p className="inline-block px-8">Exclusive Discounts on All Items!</p>
        </div>
      </div>


      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">

          <div className="text-2xl font-bold hover:opacity-80 transition-opacity">
            <Link href="/">
              <Image
                src={logo.src}
                alt="logo"
                width={160}
                height={50}
                className="w-32 md:w-40"
              />
            </Link>
          </div>


          <nav className="hidden md:flex items-center space-x-16 font-poppins">
            <Link href="/" className="link relative group">
              Home
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="/components/Shop" className="link relative group">
              Shop
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="/components/attars" className="link relative group">
              Attars
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="/components/latest" className="link relative group">
              Latest
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="/components/discount" className="link relative group">
              Sales & Discounts
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link href="/components/contactus" className="link relative group">
              Contact Us
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </nav>


          <div className="hidden md:flex items-center space-x-6">

            <div className="flex items-center relative">
              <FaSearch
                className="cursor-pointer hover:text-cyan-500 transition-colors"
                onClick={() => setSearchOpen(!isSearchOpen)}
              />
              {isSearchOpen && (
                <div className="absolute top-10 right-0 bg-white text-black rounded-md shadow-lg w-64">
                  <input
                    type="text"
                    placeholder="for-him/her, fragrance, attar, etc"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  {searchResults.length > 0 && (
                    <div className="mt-2 max-h-48 overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={product.slug}
                          href={getSlugPath(product)}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          <div className="flex items-center space-x-2">
                            <Image
                              src={urlFor(product.imageUrl).url()}
                              alt={product.title}
                              width={40}
                              height={40}
                              className="w-10 h-10 object-cover rounded"
                            />
                            <div>
                              <p className="font-semibold">{product.title}</p>
                              <p className="text-sm text-gray-600">{product._type}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>


          <div className="md:hidden flex items-center space-x-6">
            <FaSearch
              className="cursor-pointer hover:text-cyan-500 transition-colors"
              onClick={() => setSearchOpen(!isSearchOpen)}
            />
            <FaBars
              className="cursor-pointer hover:text-cyan-500 transition-colors"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>


        {isSearchOpen && (
          <div className="md:hidden bg-black p-4">
            <input
              type="text"
              placeholder="for-him/her , fragrance, attar, etc."
              value={searchQuery}
              onChange={handleSearch}
              className="bg-white text-black px-4 py-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {searchResults.length > 0 && (
              <div className="mt-2 max-h-48 overflow-y-auto">
                {searchResults.map((product) => (
                  <Link
                    key={product.slug}
                    href={getSlugPath(product)}
                    className="block px-4 py-2 hover:bg-gray-100 text-white"
                  >
                    <div className="flex items-center space-x-2">
                      <Image
                        src={urlFor(product.imageUrl).url()}
                        alt={product.title}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold">{product.title}</p>
                        <p className="text-sm text-gray-600">{product._type}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}


        {isMobileMenuOpen && (
          <div className="md:hidden bg-black text-white p-4 font-poppins">
            <div className="flex justify-end">
              <FaTimes
                className="cursor-pointer hover:text-cyan-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
            <div className="space-y-4 mt-4 text-right">

              <Link href="/" className="block hover:text-cyan-500 transition-colors">
                Home
              </Link>
              <Link href="/components/Shop" className="block hover:text-cyan-500 transition-colors">
                Shop
              </Link>
              <Link href="/components/attars" className="block hover:text-cyan-500 transition-colors">
                Attars
              </Link>
              <Link href="/components/latest" className="block hover:text-cyan-500 transition-colors">
                Latest
              </Link>
              <Link href="/components/discount" className="block hover:text-cyan-500 transition-colors">
                Sales & Discounts
              </Link>
              <Link href="/components/contactus" className="block hover:text-cyan-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;