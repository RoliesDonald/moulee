import { Block } from 'payload'

export const LastProject: Block = {
  slug: 'last-project',
  fields: [
    {
      name: 'project',
      label: 'Project',
      type: 'group',
      fields: [
        {
          name: 'items', // This array field directly corresponds to 'block.items' in your React component
          label: 'Project Items',
          type: 'array',
          minRows: 1,
          required: true,
          fields: [
            // Define the fields for each item in the array
            { name: 'id', type: 'text', required: true, label: 'Item ID' },
            { name: 'title', type: 'text', required: true, label: 'Item Title' },
            { name: 'des', type: 'textarea', label: 'Item Description' }, // description is optional
            { name: 'img', type: 'upload', relationTo: 'media', label: 'Image' }, // img is optional
            { name: 'linkname', type: 'text', label: 'Link Image' }, // img is optional
            { name: 'link', type: 'text', label: 'Link' }, // img is optional
          ],
        },
      ],
    },
  ],
}
