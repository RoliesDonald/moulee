// src/components/Clients.tsx
'use client'

import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import { Page, Media } from '@/payload-types' // Pastikan ini path yang benar
import Image from 'next/image'
import { testimonials } from 'data/index' // Pastikan path ini benar

// Ubah definisi ClientProps
// Kita akan langsung mengambil tipe block 'client' dari Page['layout']
type ClientBlockFromPayload = Extract<
  Page['layout'][number], // Menggunakan 'number' untuk mendapatkan union dari semua block types
  { blockType: 'client' }
>

// Sekarang, definisikan ClientProps berdasarkan ClientBlockFromPayload
// Ini lebih eksplisit dan aman
export interface ClientProps extends ClientBlockFromPayload {}

// type ClientProps = Extract< // <--- Ini definisi lama
//   Page['layout'][0],
//   {
//     blockType: 'client'
//     id?: string
//     blockName?: string | null
//     clients?: // Ini yang dulu menjadi masalah karena Payload-types.ts salah
//       | {
//           id: string | null
//           name: string
//           logo?: Media | null
//           nameLogo?: Media | null
//         }[]
//       | null
//   }
// >

type ClientItem = {
  id: string | null
  name: string
  logo?: number | Media | null
  nameLogo?: number | Media | null
}

export default function Clients({ block }: { block: ClientProps }) {
  // Defensive checks for optional/nullable data
  // Baris ini akan lebih jarang terpanggil jika payload-types.ts sudah benar
  // Tapi tetap baik untuk validasi data runtime.
  if (!block || !block.clients || !Array.isArray(block.clients)) {
    console.warn(
      "Clients component received 'clients' property that is not an array or is missing.",
      block,
    )
    console.log('Received block data:', block) // Log the received data for debugging
    return null
  }

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading font-bold text-slate-600 text-2xl text-center">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} speed="fast" />
        </div>

        <div className="flex flex-wrap items-center bg-slate-700/50 rounded-lg justify-center gap-4 md:gap-16 max-lg:mt-10 px-5 py-10">
          {/* Type assertion untuk map agar lebih aman, meskipun seharusnya tidak perlu jika ClientProps sudah benar */}
          {block.clients.map((item: ClientItem) => {
            const clientLogo = item.logo as Media | null
            const clientLogoUrl = clientLogo?.url || null

            const clientNameLogo = item.nameLogo as Media | null
            const clientNameLogoUrl = clientNameLogo?.url || null
            const clientNameLogoAlt = clientNameLogo?.alt || item.name

            return (
              <React.Fragment key={item.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2 m-0">
                  {clientLogoUrl && (
                    <Image
                      src={clientLogoUrl}
                      alt={item.name}
                      className="md:w-40 w-40 object-contain"
                      width={clientLogo?.width || 100}
                      height={clientLogo?.height || 100}
                      priority
                    />
                  )}
                  {clientNameLogoUrl && (
                    <Image
                      src={clientNameLogoUrl}
                      alt={clientNameLogoAlt}
                      width={
                        clientNameLogo?.width || (item.id === '4' || item.id === '5' ? 300 : 500)
                      }
                      height={clientNameLogo?.height || 300}
                      className="md:w-44 w-40 object-contain"
                    />
                  )}
                  {!clientLogoUrl && !clientNameLogoUrl && (
                    <span className="text-white text-sm">{item.name}</span>
                  )}
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
