import React from "react";
import { client } from "@/sanity/lib/client";
import F_details from "@/app/components/fragrances/F-details";

const fd = async ({ params: { slug } }: { params: { slug: string } }) => {
  const query = `*[_type == 'fragrances' && slug.current == "${slug}"] | order(_updatedAt asc) {
    name, "imageUrl": image.asset->url, title, price, oldprice, percentOff,
    tagGender, tagCategory, tagType, available, description
  }[0]`;

  const f_data = await client.fetch(query);

  if (!f_data) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <F_details fdata={f_data} key={f_data.slug} />
    </div>
  );
};

export default fd;
