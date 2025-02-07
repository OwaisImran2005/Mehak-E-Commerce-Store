import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Product {
  slug: string;
  tagType: string;
  imageUrl: string;
  name: string;
  title: string;
  price: number;
  oldprice?: number;
  percentOff?: number;
  available: boolean;
  tagGender?: string;
  tagCategory?: string;
}

const Men = ({ mdata }: { mdata: Product }) => {

  const getProductPath = (product: Product) => {
    switch (mdata.tagType) {
      case 'fragrance':
        return `/Product/${mdata.slug}`;
      case 'attar':
        return `/Attars/${mdata.slug}`;
      case 'bodyspray':
        return `/Bodysprays/${mdata.slug}`;
      default:
        return `/Product/${product.slug}`;
    }
  };
  return (
    <div className="flex-1 min-w-[280px] max-w-[320px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl m-2 transform transition-transform duration-300 hover:-translate-y-4">
        <div className="relative h-64 w-full">
          <Image
            src={urlFor(mdata.imageUrl).url()}
            alt={mdata.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />

          {mdata.percentOff && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              {mdata.percentOff}% OFF
            </div>
          )}
        </div>


        <div className="p-4">

          <h2 className="text-xl font-bold font-poppins mb-2">{mdata.title}</h2>


          <div className="flex items-center space-x-4 mb-4">
            <p className="text-2xl font-bold text-cyan-500">${mdata.price}</p>
            {mdata.oldprice && (
              <p className="text-lg text-gray-500 line-through">
                ${mdata.oldprice}
              </p>
            )}
          </div>


          <div className="flex flex-wrap gap-2 mb-4">
            {mdata.tagGender && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {mdata.tagGender}
              </span>
            )}
            {mdata.tagCategory && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {mdata.tagCategory}
              </span>
            )}
            {mdata.tagType && (
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {mdata.tagType}
              </span>
            )}
          </div>

                <Link href={getProductPath(mdata)}>
          <button
            disabled={!mdata.available}
            className={`w-full bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors ${!mdata.available ? " cursor-not-allowed bg-red-600 hover:bg-red-600" : ""
              }`}
          >
            {mdata.available ? "View Details" : "Out of Stock"}
          </button>
      </Link>
        </div>


    </div>
  )
}

export default Men
