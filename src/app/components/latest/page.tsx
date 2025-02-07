import React from "react";
import { client } from "@/sanity/lib/client";
import Latest from "./latest";


const Lt = async () => {
  const querry = `*[_type == 'latest'] | order(_updatedAt asc ){
name,"imageUrl": image.asset->url,title,price,oldprice,percentOff,
tagGender,tagCategory,tagType,available,description,"slug":slug.current}`

  const l_data: product[] = await client.fetch(querry);
  return (

    <div>
      <h2 className="ptext text-4xl font-bold font-poppins mb-6 flex justify-center mt-20">Latest</h2>

    <div className="flex flex-wrap justify-center gap-4 p-4">

      {l_data.map((ldata: product) => (
        
        <Latest ldata={ldata} key={ldata.slug} />
      ))}

    </div>
      </div>

  );
};

export default Lt;