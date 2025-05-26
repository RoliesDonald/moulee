import { Block } from 'payload'

export const GridItem: Block = {
  slug: 'gridItems',
  fields: [
    {
      name: 'grit',
      label: 'Grit Block',
      type: 'group',
      fields: [
        {
          name: 'items', // This array field directly corresponds to 'block.items' in your React component
          label: 'Grid Items',
          type: 'array',
          minRows: 1,
          required: true,
          fields: [
            // Define the fields for each item in the array
            { name: 'id', type: 'text', required: true, label: 'Item ID' },
            { name: 'title', type: 'text', required: true, label: 'Item Title' },
            { name: 'description', type: 'textarea', label: 'Item Description' }, // description is optional
            { name: 'className', type: 'text', required: true, label: 'Tailwind CSS Class Name' },
            { name: 'img', type: 'upload', relationTo: 'media', label: 'Image' }, // img is optional
            { name: 'imgClassName', type: 'text', label: 'Image CSS Class Name' }, // imgClassName is optional
            { name: 'titleClassName', type: 'text', label: 'Title CSS Class Name' }, // titleClassName is optional
            { name: 'spareImg', type: 'upload', relationTo: 'media', label: 'Spare Image' }, // spareImg is optional
          ],
        },
      ],
    },
  ],
}
