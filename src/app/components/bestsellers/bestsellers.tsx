import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Bestsellers = ({ bdata }: { bdata: product }) => {

  const getProductPath = (product: any) => {
    switch (bdata.tagType) {
      case 'fragrance':
        return `/Product/${bdata.slug}`;
      case 'attar':
        return `/Attars/${bdata.slug}`;
      case 'bodyspray':
        return `/Bodysprays/${bdata.slug}`;
      default:
        return `/Product/${product.slug}`; 
    }
  };
  return (
      <div className="flex-1 min-w-[280px] max-w-[320px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl m-2 transform transition-transform duration-300 hover:-translate-y-4">
<Link href={getProductPath(bdata.slug)}>
      <div className="relative h-64 w-full">
        <Image
          src={urlFor(bdata.imageUrl).url()}
          alt={bdata.name}
          layout="fill"
          // objectFit="cover"
          className="rounded-t-lg"
        />
        {bdata.percentOff && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {bdata.percentOff}% OFF
          </div>
        )}
      </div>

     
      <div className="p-4">
        
        <h2 className="text-xl font-bold font-poppins mb-2">{bdata.title}</h2>

        
        <div className="flex items-center space-x-4 mb-4">
          <p className="text-2xl font-bold text-cyan-500">${bdata.price}</p>
          {bdata.oldprice && (
            <p className="text-lg text-gray-500 line-through">
              ${bdata.oldprice}
            </p>
          )}
        </div>


        <div className="flex flex-wrap gap-2 mb-4">
          {bdata.tagGender && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {bdata.tagGender}
            </span>
          )}
          {bdata.tagCategory && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {bdata.tagCategory}
            </span>
          )}
          {bdata.tagType && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {bdata.tagType}
            </span>
          )}
        </div>

        <button
          disabled={!bdata.available}
          className={`w-full bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors ${
            !bdata.available ? " cursor-not-allowed bg-red-600 hover:bg-red-600" : ""
          }`}
        >
          {bdata.available ? "View Details" : "Out of Stock"}
        </button>
      </div>
          </Link>
    </div>
    )
}

export default Bestsellers