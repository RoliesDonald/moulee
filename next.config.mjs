// next.config.mjs
import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  // Mungkin biarkan ini jika Anda memang butuh rule SVG
  eslint: { ignoreDuringBuilds: true },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

const payloadConfig = withPayload(nextConfig, { devBundleServerPackages: false })

// Coba hapus properti experimental.turbo setelah withPayload
if (payloadConfig.experimental && payloadConfig.experimental.turbo) {
  // Pilihan 1: hapus properti turbo
  delete payloadConfig.experimental.turbo
}
// Pilihan 2 (alternatif): set ke undefined
// if (payloadConfig.experimental) {
//   payloadConfig.experimental.turbo = undefined;
// }

export default payloadConfig
