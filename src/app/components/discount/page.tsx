import React from "react";
import { client } from "@/sanity/lib/client";
import Discount from "./discount";

const Ds = async () => {
  const querry = `*[_type == 'discounted'] | order(_updatedAt asc ){
name,"imageUrl": image.asset->url,title,price,oldprice,percentOff,
tagGender,tagCategory,tagType,available,description,"slug":slug.current}`

  const d_data: product[] = await client.fetch(querry);
  return (

    <div>
 <h2 className="ptext text-4xl font-bold font-poppins mb-6 flex justify-center mt-20">Sales & Discounts</h2>
    <div className="flex flex-wrap justify-center gap-4 p-4">

      {d_data.map((ddata: product) => (

        <Discount ddata={ddata} key={ddata.slug} />
      ))}

    </div>
        </div>

  );
};

export default Ds;
