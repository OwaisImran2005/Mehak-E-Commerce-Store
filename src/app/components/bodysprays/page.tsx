import React from "react";
import { client } from "@/sanity/lib/client";
import Bodysprays from "./bodysprays";

const Bs = async () => {
  const query2 = `*[_type == 'bodysprays'] | order(_updatedAt asc) {
    name,
    "imageUrl": image.asset->url,
    title,
    price,
    oldprice,
    percentOff,
    tagGender,
    tagCategory,
    tagType,
    available,  // Ensure this field is being fetched
    description,
    "slug": slug.current
}`;


  const b_data: product[] = await client.fetch(query2);
  return (
<div>
<h2 className="ptext text-4xl font-bold font-poppins mb-6 flex justify-center mt-20">Bodysprays</h2>

    
    <div className="flex flex-wrap justify-center gap-4 p-4">

      {b_data.map((bdata: product) => (
        
        <Bodysprays bdata={bdata} key={bdata.slug} />
      ))}

    </div>
      </div>

  );
};

export default Bs;
