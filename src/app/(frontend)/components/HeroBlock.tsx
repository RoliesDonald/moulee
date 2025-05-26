import React from 'react'
import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import backLogo from '../../../../public/mol_logo.png'

type HeroProps = Extract<Page['layout'][0], { blockType: 'hero' }>

export default function HeroBlock({ block }: { block: HeroProps }) {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-120 md:-top-20 h-screen" fill="red" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="green" />
        <Spotlight className="left-20 top-38 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-slate-900 dark:bg-grid-red/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-red [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
        <Image
          src={backLogo}
          alt="Mol"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="opacity-25"
        ></Image>
      </div>
      <div className=" flex justify-center relative my-20 z-10">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <RichText
            data={block.subHeading}
            className="uppercase tracking-widest text-lg text-center font-bold text-slate-700 dark:text-blue-100 max-w-80"
          />
          <TextGenerateEffect
            words={block.heading}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {block.heading}
          </p>

          <Link href="#about">
            <MagicButton title="Read More" icon={<FaLocationArrow />} position="right" />
          </Link>
        </div>
      </div>
    </div>
  )
}
