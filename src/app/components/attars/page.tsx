import React from "react";
import { client } from "@/sanity/lib/client";
import Attars from "./attars";

const As = async () => {
  const query3 = `*[_type == 'attars'] | order(_updatedAt asc) {
    name,
    "imageUrl": image.asset->url,
    title,
    price,
    oldprice,
    percentOff,
    tagGender,
    tagCategory,
    tagType,
    available,
    description,
    "slug": slug.current
  }`

  const a_data: product[] = await client.fetch(query3);
  return (

    <div>

      <h2 className="ptext text-4xl font-bold font-poppins mb-6 flex justify-center mt-20">Attars</h2>
    <div className="flex flex-wrap justify-center gap-4 p-4">

      {a_data.map((adata: product) => (
      
        <Attars adata={adata} key={adata.slug} />
        
      ))}

    </div>
      </div>

  );
};

export default As