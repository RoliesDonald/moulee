import { ClientBlock } from '@/blocks/ClientBlock'
import { GridItem } from '@/blocks/GritItems'
import { HeroBlock } from '@/blocks/HeroBlock'
import { LastProject } from '@/blocks/Project'
import { CollectionConfig } from 'payload'

const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    { name: 'title', type: 'text' },
    { name: 'slug', type: 'text', required: true },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [HeroBlock, LastProject, GridItem, ClientBlock],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
        {
          name: 'ogImage', // <--- Pastikan ada field ini dan tipenya 'upload'
          type: 'upload',
          relationTo: 'media', // Menghubungkan ke koleksi media Anda
          label: 'Open Graph Image',
          admin: {
            description: 'Gambar ini akan digunakan saat halaman dibagikan di media sosial.',
          },
        },
      ],
    },
  ],
}

export default Pages
