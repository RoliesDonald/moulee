// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Pages from './collections/Pages'
import MouleeLogo from './components/MouleeLogo'
import MouleeFavicon from './components/MouleeIcon'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: 'Moulee Garage | Admin',
      icons: [
        {
          rel: 'icon', // Penting: ini menunjukkan itu adalah favicon
          type: 'image/png', // Sesuaikan dengan tipe file favicon Anda
          url: '/mol_logo_kecil.png',
        },
      ],
    },
    components: {
      graphics: {
        Logo: MouleeLogo as any,
        Icon: MouleeLogo as any,
      },
    },
  },
  collections: [Users, Media, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  db: sqliteAdapter({
    // client: sqliteClientConfig,
    client: {
      // url: process.env.DATABASE_URI || '',
      url: process.env.TURSO_DATABASE_URL || '',
      authToken: process.env.TURSO_AUTH_TOKEN || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
