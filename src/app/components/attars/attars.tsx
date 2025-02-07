import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Attars = ({ adata }: { adata: product} ) => {
  return (
    
   
   <div className="flex-1 min-w-[280px] max-w-[320px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl m-2 transform transition-transform duration-300 hover:-translate-y-4">
  
   <div className="relative h-64 w-full">
        <Image
          src={urlFor(adata.imageUrl).url()}
          alt={adata.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        

        {adata.percentOff && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {adata.percentOff}% OFF
          </div>
        )}
      </div>

     
      <div className="p-4">
        <h2 className="text-xl font-bold font-poppins mb-2">{adata.title}</h2>
        <div className="flex items-center space-x-4 mb-4">
          <p className="text-2xl font-bold text-cyan-500">${adata.price}</p>
          {adata.oldprice && (
            <p className="text-lg text-gray-500 line-through">
              ${adata.oldprice}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {adata.tagGender && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {adata.tagGender}
            </span>
          )}
          {adata.tagCategory && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {adata.tagCategory}
            </span>
          )}
          {adata.tagType && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {adata.tagType}
            </span>
          )}
        </div>

        <Link href={`/Attars/${adata.slug}`}>
        <button
  disabled={!Boolean(adata.available)} 
  className={`w-full px-6 py-2 rounded-lg font-semibold transition-colors ${
    adata.available
      ? "bg-cyan-500 text-white hover:bg-cyan-600" 
      : "bg-red-600 text-white cursor-not-allowed hover:bg-red-600" 
  }`}
>
  {adata.available ? "View Details" : "Out of Stock"}
</button>
            </Link>
      </div>
    </div>
    )
}

export default Attars;
