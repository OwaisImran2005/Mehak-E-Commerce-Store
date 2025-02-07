import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Women = ({ wdata }: { wdata: product }) => {
  const getProductPath = (product: any) => {
    switch (wdata.tagType) {
      case 'fragrance':
        return `/Product/${wdata.slug}`;
      case 'attar':
        return `/Attars/${wdata.slug}`;
      case 'bodyspray':
        return `/Bodysprays/${wdata.slug}`;
      default:
        return `/Product/${product.slug}`;
    }
  };
  return (
    <div className="flex-1 min-w-[280px] max-w-[320px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl m-2 transform transition-transform duration-300 hover:-translate-y-4">
      <Link href={getProductPath(wdata.slug)}>
        <div className="relative h-64 w-full">
          <Image
            src={urlFor(wdata.imageUrl).url()}
            alt={wdata.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />

          {wdata.percentOff && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              {wdata.percentOff}% OFF
            </div>
          )}
        </div>


        <div className="p-4">

          <h2 className="text-xl font-bold font-poppins mb-2">{wdata.title}</h2>


          <div className="flex items-center space-x-4 mb-4">
            <p className="text-2xl font-bold text-cyan-500">${wdata.price}</p>
            {wdata.oldprice && (
              <p className="text-lg text-gray-500 line-through">
                ${wdata.oldprice}
              </p>
            )}
          </div>


          <div className="flex flex-wrap gap-2 mb-4">
            {wdata.tagGender && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {wdata.tagGender}
              </span>
            )}
            {wdata.tagCategory && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {wdata.tagCategory}
              </span>
            )}
            {wdata.tagType && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {wdata.tagType}
              </span>
            )}
          </div>

          <button
            disabled={!wdata.available}
            className={`w-full bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors ${!wdata.available ? " cursor-not-allowed bg-red-600 hover:bg-red-600" : ""
              }`}
          >
            {wdata.available ? "View Details" : "Out of Stock"}
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Women