'use client'

import { FaLocationArrow } from 'react-icons/fa6'
import { PinContainer } from './ui/Pin'
import { Page, Media } from '@/payload-types'
import Image from 'next/image'

type ProjectProps = Extract<
  Page['layout'][0],
  {
    blockType: 'last-project'
    project?: {
      items?:
        | {
            id: string | null
            title: string
            des?: string | null
            img?: (number | null) | Media
            linkname?: string | null
            link?: string | null
          }[]
        | null
    }
  }
>

type LocalProjectItem = {
  id: string | null
  title: string
  des?: string | null
  img?: (number | null) | Media
  linkname?: string | null
  link?: string | null
}

export default function RecentProjects({ block }: { block: ProjectProps }) {
  if (!block || !block.project || !block.project.items || !Array.isArray(block.project.items)) {
    console.warn(
      "RecentProjects component received invalid block data. 'project.items' array is missing or not an array.",
      block,
    )
    return null
  }

  const typedBlock = block as ProjectProps

  type ProjectProps = Extract<Page['layout'][0], { blockType: 'last-project' }>

  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-slate-600 dark:text-sky-200">
        A small selection of{' '}
        <span className="text-purple dark:text-red-400"> our recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {/* Gunakan LocalProjectItem untuk 'item' di sini */}
        {typedBlock.project.items.map((item: LocalProjectItem) => {
          // Ambil objek media dari item.img
          const mediaObject = item.img as Media | null // Asumsi Payload sudah mempopulasi

          // Normalisasi src untuk Image komponen Next.js
          // Pastikan mediaObject ada, dan memiliki properti 'url' yang merupakan string non-kosong.
          const projectImageSrc =
            mediaObject && typeof mediaObject.url === 'string' && mediaObject.url.trim() !== ''
              ? mediaObject.url
              : null

          // Ambil alt text dari objek media
          const projectImageAlt =
            mediaObject && typeof mediaObject.alt === 'string' && mediaObject.alt.trim() !== ''
              ? mediaObject.alt
              : item.title || 'Project cover image' // Fallback ke title proyek

          // Debugging console.log: sekarang akan mencetak objek media utuh
          console.log(
            `Debug - Project ID: ${item.id}, Original img:`,
            item.img,
            `Normalized src: "${projectImageSrc}"`,
          )

          return (
            <div
              className="mt-10 lg:min-h-[32.5rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={item.linkname ?? undefined} href={item.link || '#'}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: '#13162D' }}
                  >
                    <Image
                      src="/bg.png"
                      alt="Background image"
                      width={500}
                      height={300}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  {projectImageSrc ? (
                    <Image
                      src={projectImageSrc}
                      alt={projectImageAlt}
                      className="z-10 absolute bottom-0"
                      // Gunakan width/height dari objek media jika tersedia, jika tidak gunakan fallback
                      width={mediaObject?.width || 500}
                      height={mediaObject?.height || 300}
                    />
                  ) : (
                    <div className="z-10 absolute bottom-0 flex items-center justify-center w-full h-full bg-gray-700/50 text-white-400">
                      No project image available
                    </div>
                  )}
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-red-500">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: '#BEC1DD',
                    margin: '1vh 0',
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-end mt-7 mb-3">
                  <a
                    href={item.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </PinContainer>
            </div>
          )
        })}
      </div>
    </div>
  )
}
