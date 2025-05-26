import React from 'react'
import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subHeading', type: 'richText', label: 'Sub Heading', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'cta_button',
      label: 'CTA Button',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
