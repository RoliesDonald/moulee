'use client'

import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { Page, Media } from '@/payload-types' // Ensure Media is imported

// 1. Define the type for a single grid item
// This type now precisely matches what Payload generates for the array elements.
export type GridItemType = {
  id: string | null // Can be string or null
  title: string
  description?: string | null // Can be string, null, or undefined
  className: string // Always a string
  img?: number | Media | null // Can be number, Media object, null, or undefined
  imgClassName?: string | null // Can be string, null, or undefined
  titleClassName?: string | null // Can be string, null, or undefined
  spareImg?: number | Media | null // Can be number, Media object, null, or undefined
}

// 2. Adjust GritProps to *exactly* match the optional/nullable properties in payload-types.ts
type GritProps = Extract<
  Page['layout'][0],
  {
    blockType: 'gridItems'
    grit?: {
      // <--- Make 'grit' optional here to match payload-types.ts
      items?: GridItemType[] | null // <--- Make 'items' optional AND nullable here to match payload-types.ts
    }
  }
>

export default function Grid({ block }: { block: GritProps }) {
  // Defensive checks are now even more critical because the types allow for optional/nullable data.
  // We need to ensure 'block', 'block.grit', and 'block.grit.items' are all valid before mapping.
  if (!block || !block.grit || !block.grit.items || !Array.isArray(block.grit.items)) {
    console.warn(
      "Grid component received invalid block data. 'grit.items' array is missing or not an array.",
      block,
    )
    return null // Render nothing if data is not in the expected shape
  }

  return (
    <section id="about bg-amber-400">
      <BentoGrid className="w-full py-20 ">
        {block.grit.items.map((item, i) => (
          <BentoGridItem
            // id: Ensure it's always a number. Provide a fallback if null or not a number.
            id={typeof item.id === 'number' ? item.id : i}
            key={i}
            title={item.title} // Title is always a string per your types
            // description: Pass undefined if null to match prop expectations (string | undefined)
            description={item.description ?? undefined}
            className={item.className} // className is always a string
            // img: Safely extract URL or pass undefined
            img={
              item.img && typeof item.img === 'object' && 'url' in item.img
                ? (item.img.url ?? undefined)
                : undefined
            }
            // imgClassName: Pass undefined if null
            imgClassName={item.imgClassName ?? undefined}
            // titleClassName: Pass undefined if null
            titleClassName={item.titleClassName ?? undefined}
            // spareImg: Safely extract URL or pass undefined
            spareImg={
              item.spareImg && typeof item.spareImg === 'object' && 'url' in item.spareImg
                ? (item.spareImg.url ?? undefined)
                : undefined
            }
          />
        ))}
      </BentoGrid>
    </section>
  )
}
