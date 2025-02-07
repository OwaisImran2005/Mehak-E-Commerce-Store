import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Latest = ({ ldata }: { ldata: product }) => {

  const getProductPath = (product: any) => {
    switch (ldata.tagType) {
      case 'fragrance':
        return `/Product/${ldata.slug}`;
      case 'attar':
        return `/Attars/${ldata.slug}`;
      case 'bodyspray':
        return `/Bodysprays/${ldata.slug}`;
      default:
        return `/Product/${product.slug}`;
    }
  };

  return (
    <div className="flex-1 min-w-[280px] max-w-[320px] bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-3 m-2">
      <Link href={getProductPath(ldata.slug)}>
        <div className="relative h-64 w-full">
          <Image
            src={urlFor(ldata.imageUrl).url()}
            alt={ldata.name}
            layout="fill"

            className="rounded-t-lg"
          />

          {ldata.percentOff && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              {ldata.percentOff}% OFF
            </div>
          )}
        </div>


        <div className="p-4">

          <h2 className="text-xl font-bold font-poppins mb-2">{ldata.title}</h2>


          <div className="flex items-center space-x-4 mb-4">
            <p className="text-2xl font-bold text-cyan-500">${ldata.price}</p>
            {ldata.oldprice && (
              <p className="text-lg text-gray-500 line-through">
                ${ldata.oldprice}
              </p>
            )}
          </div>


          <div className="flex flex-wrap gap-2 mb-4">
            {ldata.tagGender && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {ldata.tagGender}
              </span>
            )}
            {ldata.tagCategory && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {ldata.tagCategory}
              </span>
            )}
            {ldata.tagType && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {ldata.tagType}
              </span>
            )}
          </div>

          <button
            disabled={!ldata.available}
            className={`w-full bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors ${!ldata.available
                ? 'cursor-not-allowed bg-red-600 hover:bg-red-600'
                : ''
              }`}
          >
            {ldata.available ? 'View Details' : 'Out of Stock'}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Latest;
