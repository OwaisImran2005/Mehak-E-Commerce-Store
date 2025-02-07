import React from "react";
import { client } from "@/sanity/lib/client";
import Men from "./men";
import BackToTopButton from "../back2top";

const men = async () => {
  const querry = `*[_type == 'men'] | order(_updatedAt asc ){
name,"imageUrl": image.asset->url,title,price,oldprice,percentOff,
tagGender,tagCategory,tagType,available,description,"slug":slug.current}`

  const m_data: product[] = await client.fetch(querry);
  return (

    <div>
      <h2 className="ptext text-4xl font-bold font-poppins mb-6 flex justify-center mt-20">For Mens</h2>

      <div className="flex flex-wrap justify-center gap-4 p-4">

        {m_data.map((mdata: product) => (

          <Men mdata={mdata} key={mdata.slug} />
        ))}

      </div>
      <BackToTopButton />
    </div>

  );
};

export default men;