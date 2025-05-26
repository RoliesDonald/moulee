'use client'

import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import { Page, Media } from '@/payload-types'
import Image from 'next/image'
import { testimonials } from 'data/index' // Asumsi Anda masih menggunakan data testimonials dari sini

// Definisi tipe untuk seluruh blok 'client'
// Blok ini diharapkan memiliki properti 'clients' yang berisi array dari item klien.
type ClientProps = Extract<
  Page['layout'][0],
  {
    blockType: 'client'
    // Payload menambahkan 'id' dan 'blockName' secara otomatis ke setiap block
    id?: string
    blockName?: string | null
    clients?: {
      // Array yang menampung daftar klien
      id: string // ID unik untuk setiap item klien (dari Payload 'text' field)
      name: string
      logo?: Media | null // Gambar logo klien (dari Payload 'upload' field)
      nameLogo?: Media | null // Gambar logo teks klien (dari Payload 'upload' field)
    }[]
  }
>

// Definisi tipe untuk setiap item klien di dalam array 'clients'
type ClientItem = {
  id: string
  name: string
  logo?: Media | null
  nameLogo?: Media | null
}

export default function Clients({ block }: { block: ClientProps }) {
  // Validasi data yang diterima
  if (!block || !block.clients || !Array.isArray(block.clients)) {
    console.warn(
      "Clients component received invalid block data. 'block.clients' array is missing or not an array.",
      block,
    )
    return null // Tidak merender apa pun jika data tidak valid
  }

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading font-bold text-slate-600 text-2xl text-center">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          {/* Komponen InfiniteMovingCards masih menggunakan data dummy 'testimonials' */}
          {/* Jika ingin data ini dari Payload, Anda perlu menambahkan field `testimonials` ke Payload
              atau mengambilnya dari koleksi/global lain. */}
          <InfiniteMovingCards items={testimonials} speed="fast" />
        </div>

        <div className="flex flex-wrap items-center bg-slate-700/50 rounded-lg justify-center gap-4 md:gap-16 max-lg:mt-10 px-5 py-10">
          {/* Mapping melalui array 'clients' yang berasal dari blok Payload */}
          {block.clients.map((item: ClientItem) => {
            // Mengambil URL dan alt text untuk logo klien
            const clientLogo = item.logo as Media | null
            const clientLogoUrl = clientLogo?.url || null

            // Mengambil URL dan alt text untuk logo teks klien
            const clientNameLogo = item.nameLogo as Media | null
            const clientNameLogoUrl = clientNameLogo?.url || null
            const clientNameLogoAlt = clientNameLogo?.alt || item.name

            return (
              <React.Fragment key={item.id}>
                {/* <div className="flex md:max-w-60 max-w-32 gap-2 m-0"> */}
                <div className="flex md:max-w-600 max-w-320 gap-2 m-0">
                  {/* Menampilkan logo klien jika ada URL */}
                  {clientLogoUrl && (
                    <Image
                      src={clientLogoUrl}
                      alt={item.name}
                      className="md:w-10 w-5 object-contain" // Gaya untuk gambar kecil
                      width={clientLogo?.width || 500} // Menggunakan width dari Payload Media jika ada, fallback ke 40
                      height={clientLogo?.height || 500} // Menggunakan height dari Payload Media jika ada, fallback ke 40
                      priority // Optimasi Next.js Image: memuat gambar ini lebih awal
                    />
                  )}
                  {/* Menampilkan logo teks klien jika ada URL */}
                  {clientNameLogoUrl && (
                    <Image
                      src={clientNameLogoUrl}
                      alt={clientNameLogoAlt}
                      // Menggunakan width dari Payload Media jika ada, fallback ke 100/150
                      width={
                        clientNameLogo?.width || (item.id === '4' || item.id === '5' ? 300 : 500) // Perbandingan ID sebagai string
                      }
                      height={
                        clientNameLogo?.height || 300 // Fallback ke 50
                      }
                      className="md:w-24 w-20 object-contain" // Gaya untuk gambar yang lebih besar
                    />
                  )}
                  {/* Fallback teks jika tidak ada gambar logo atau nama logo yang tersedia */}
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
