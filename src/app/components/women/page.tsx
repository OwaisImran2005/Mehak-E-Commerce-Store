import React from "react";
import { client } from "@/sanity/lib/client";
import Women from "./women";
import BackToTopButton from "../back2top";

const women = async ({ data1 }: { data1: product }) => {
  const querry = `*[_type == 'women'] | order(_updatedAt asc ){
name,"imageUrl": image.asset->url,title,price,oldprice,percentOff,
tagGender,tagCategory,tagType,available,description,"slug":slug.current}`

  const w_data: product[] = await client.fetch(querry);
  return (
    <div>

      <h2 className="ptext text-4xl font-bold font-poppins mb-6 flex justify-center mt-20">For Womens</h2>


      <div className="flex flex-wrap justify-center gap-4 p-4">

        {w_data.map((wdata: product) => (

          <Women wdata={wdata} key={wdata.slug} />
        ))}

      </div>
      <BackToTopButton />

    </div>

  );
};

export default women;