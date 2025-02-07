import React from "react";
import { client } from "@/sanity/lib/client";
import B_details from "@/app/components/bodysprays/B-details";

const bd = async ({ params: { slug } }: { params: { slug: string } }) => {
    const query = `*[_type == 'bodysprays' && slug.current == "${slug}"] | order(_updatedAt asc) {
        name, "imageUrl": image.asset->url, title, price, oldprice, percentOff,
        tagGender, tagCategory, tagType, available, description
    }[0]`;
    
    const b_data = await client.fetch(query);
    if (!b_data) {
        return <div>Product not found</div>;
      }

    return (
        <div className="">
            
              <B_details bdata={b_data} key={b_data.slug} />
        
        </div>
    );
};

export default bd;
