import { defineField, defineType } from 'sanity'

export const bodysprays = defineType({
    name: 'bodysprays',
    title: 'Body sprays',
    type: 'document',
    fields: [

        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            },
        }),
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
        }),
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string',
        }),

        defineField({
            name: 'price',
            title: 'Original Price',
            type: 'number',
        }),
        defineField({
            name: 'oldprice',
            title: 'Old Price',
            type: 'number',
        }),
        defineField({
            name: 'percentOff',
            title: 'Percent Off',
            type: 'number',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'tagGender',
            title: 'Tag-(Gender)',
            type: 'string',
            options: {
              list: [
                {title: 'For Him', value: 'for-him'},
                {title: 'For Her', value: 'for-her'},
              ],
            },
          }),
          defineField({
            name: 'tagCategory',
            title: 'Tag-(Category)',
            type: 'string',
            options: {
              list: [
                {title: 'Latest', value: 'latest'},
                {title: 'Best Sellers', value: 'best-sellers'},
                {title: 'Discounted', value: 'discounted'},
              ],
            },
          }),
          defineField({
            name: 'tagType',
            title: 'Tag-(Type)',
            type: 'string',
            options: {
              list: [
                {title: 'Fragrance', value: 'fragrance'},
                {title: 'Attar', value: 'attar'},
                {title: 'Bodyspray', value: 'bodyspray'},
              ],
            },
          }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),

         {
          name: 'available',
          type: 'boolean',
          title: 'Available',
          description: 'Availability status of the item',
        },
    ],


})
