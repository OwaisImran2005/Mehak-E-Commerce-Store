import React from "react";
import { client } from "@/sanity/lib/client";
import Fragrances from "./fragrance";

const Fs = async () => {
  const query = `*[_type == 'fragrances'] | order(_updatedAt asc) {
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
  }`;


  const f_data: product[] = await client.fetch(query);
  return (
    <div>

      <h2 className="ptext text-4xl font-bold font-poppins mb-6 flex justify-center mt-20">Fragrances</h2>

      <div className="flex flex-wrap justify-center gap-4 p-4">


        {f_data.map((fdata: product) => (

          <Fragrances fdata={fdata} key={fdata.slug} />
        ))}

      </div>
    </div>

  );
};

export default Fs;