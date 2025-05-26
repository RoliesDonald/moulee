// src/blocks/ClientBlock.ts
import { Block } from 'payload'

export const ClientBlock: Block = {
  slug: 'client', // Slug untuk blok ini (misal: 'client-list-block')
  labels: {
    singular: 'Client List Block',
    plural: 'Client List Blocks',
  },
  fields: [
    {
      name: 'clients', // <--- Nama field yang menampung array dari klien
      type: 'array',
      label: 'List of Clients',
      minRows: 1,
      fields: [
        // Definisi field untuk SETIAP item klien di dalam array
        { name: 'id', type: 'text', label: 'Unique ID', required: true, unique: true }, // ID sebagai string
        { name: 'name', type: 'text', required: true, label: 'Client Name' },
        { name: 'logo', type: 'upload', relationTo: 'media', label: 'Client Logo' }, // Logo kecil (gambar)
        {
          name: 'nameLogo',
          type: 'upload',
          relationTo: 'media',
          label: 'Client Name Logo (Text Image)',
        }, // Logo teks (gambar)
      ],
    },
  ],
}
