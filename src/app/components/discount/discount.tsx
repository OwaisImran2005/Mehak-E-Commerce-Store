import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Discount = ({ ddata }: { ddata: product }) => {
  const getProductPath = (product: any) => {
  switch (ddata.tagType) {
    case 'fragrance':
      return `/Product/${ddata.slug}`;
    case 'attar':
      return `/Attars/${ddata.slug}`;
    case 'bodyspray':
      return `/Bodysprays/${ddata.slug}`;
    default:
      return `/Product/${product.slug}`; 
  }
};

  return (
      <div className="flex-1 min-w-[280px] max-w-[320px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl m-2 transform transition-transform duration-300 hover:-translate-y-4">
<Link href={getProductPath(ddata.slug)}>
      <div className="relative h-64 w-full">
        <Image
          src={urlFor(ddata.imageUrl).url()}
          alt={ddata.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {/* Discount Badge */}
        {ddata.percentOff && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {ddata.percentOff}% OFF
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h2 className="text-xl font-bold font-poppins mb-2">{ddata.title}</h2>

        {/* Price and Old Price */}
        <div className="flex items-center space-x-4 mb-4">
          <p className="text-2xl font-bold text-cyan-500">${ddata.price}</p>
          {ddata.oldprice && (
            <p className="text-lg text-gray-500 line-through">
              ${ddata.oldprice}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {ddata.tagGender && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {ddata.tagGender}
            </span>
          )}
          {ddata.tagCategory && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {ddata.tagCategory}
            </span>
          )}
          {ddata.tagType && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {ddata.tagType}
            </span>
          )}
        </div>

        <button
          disabled={!ddata.available}
          className={`w-full bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors ${
            !ddata.available ? " cursor-not-allowed bg-red-600 hover:bg-red-600" : ""
          }`}
        >
          {ddata.available ? "View Details" : "Out of Stock"}
        </button>
      </div>
          </Link>
    </div>
    )
}

export default Discount 