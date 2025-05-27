// src/blocks/ClientBlock.ts
import { Block } from 'payload'

export const ClientBlock: Block = {
  slug: 'client',
  labels: {
    singular: 'Client List Block',
    plural: 'Client List Blocks',
  },
  fields: [
    {
      name: 'clients', // <--- Nama field yang menampung array dari klien
      type: 'array', // *** UBAH INI DARI 'group' MENJADI 'array' ***
      label: 'List of Clients',
      minRows: 0, // Opsional: jumlah minimum item
      maxRows: 999, // Opsional: jumlah maksimum item
      fields: [
        // Definisi field untuk SETIAP item klien di dalam array
        // NOTE: Kamu tidak perlu 'id' di sini jika Payload otomatis menghasilkan ID untuk array items
        // Tapi jika kamu butuh ID unik yang diinput manual, biarkan saja
        { name: 'id', type: 'text', label: 'Unique ID', required: true, unique: true },
        { name: 'name', type: 'text', required: true, label: 'Client Name' },
        { name: 'logo', type: 'upload', relationTo: 'media', label: 'Client Logo' },
        {
          name: 'nameLogo',
          type: 'upload',
          relationTo: 'media',
          label: 'Client Name Logo (Text Image)',
        },
      ],
    },
  ],
}
