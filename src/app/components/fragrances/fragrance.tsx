import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Fragrances = ({ fdata }: { fdata: product }) => {
  console.log(fdata.available);
  return (
    <div className="flex-1 min-w-[280px] max-w-[320px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl m-2 transform transition-transform duration-300 hover:-translate-y-3">
        <div className="relative h-64 w-full">
          <Image
            src={urlFor(fdata.imageUrl).url()}
            alt={fdata.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />

          {fdata.percentOff && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              {fdata.percentOff}% OFF
            </div>
          )}
        </div>

        <div className="p-4">

          <h2 className="text-xl font-bold font-poppins mb-2">{fdata.title}</h2>


          <div className="flex items-center space-x-4 mb-4">
            <p className="text-2xl font-bold text-cyan-500">${fdata.price}</p>
            {fdata.oldprice && (
              <p className="text-lg text-gray-500 line-through">${fdata.oldprice}</p>
            )}
          </div>


          <div className="flex flex-wrap gap-2 mb-4">
            {fdata.tagGender && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {fdata.tagGender}
              </span>
            )}
            {fdata.tagCategory && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {fdata.tagCategory}
              </span>
            )}
            {fdata.tagType && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {fdata.tagType}
              </span>
            )}
          </div>


<Link href={`/Product/${fdata.slug}`}>
          <button
            disabled={!Boolean(fdata.available)}
            className={`w-full px-6 py-2 rounded-lg font-semibold transition-colors ${fdata.available
                ? "bg-cyan-500 text-white hover:bg-cyan-600"
                : "bg-red-600 text-white cursor-not-allowed hover:bg-red-600"
              }`}
          >
            {fdata.available ? "View Details" : "Out of Stock"}
          </button>

      </Link>
        </div>
    </div>
  );
};

export default Fragrances;
