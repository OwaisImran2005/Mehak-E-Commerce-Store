import React from "react";
import { client } from "@/sanity/lib/client";
import Bestsellers from "./bestsellers";

const Bs = async () => {
  const querry = `*[_type == 'bestsellers'] | order(_updatedAt asc ){
name,"imageUrl": image.asset->url,title,price,oldprice,percentOff,
tagGender,tagCategory,tagType,available,description,"slug":slug.current}`

  const b_data: product[] = await client.fetch(querry);
  return (
<div>

<h2 className="ptext text-4xl font-bold font-poppins mb-6 flex justify-center mt-20">Best Sellers</h2>

    <div className="flex flex-wrap justify-center gap-4 p-4">

      {b_data.map((bdata: product) => (
        
        <Bestsellers bdata={bdata} key={bdata.slug} />
      ))}

    </div>
      </div>

  );
};

export default Bs;