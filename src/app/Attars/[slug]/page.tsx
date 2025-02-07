import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import A_details from "@/app/components/attars/A-details";

const ad = async ({ params: { slug } }: { params: { slug: string } }) => {
    const query = `*[_type == 'attars' && slug.current == "${slug}"] | order(_updatedAt asc) {
        name, "imageUrl": image.asset->url, title, price, oldprice, percentOff,
        tagGender, tagCategory, tagType, available, description
    }[0]`;
    
    const a_data = await client.fetch(query);
  
    if (!a_data) {
        return <div>Product not found</div>;
      }
    return (
        <div className="">
            
              <A_details adata={a_data} key={a_data.slug} />
            
        </div>
    );
};

export default ad;
