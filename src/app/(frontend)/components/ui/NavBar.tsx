'use client'
import React, { JSX, useState } from 'react'
import Link from 'next/link'
import { cn } from 'lib/utils'
import { AnimatePresence, useMotionValueEvent, useScroll, motion } from 'framer-motion'
import Image from 'next/image'
import { ModeToggle } from './DarkMode'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-15 py-3 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4 dark:bg-slate-700/5 bg-neutral-300/5',
          className,
        )}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
        }}
      >
        <Image src="/mol_logo.png" width={50} height={50} alt="logo" className="pr-2"></Image>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative dark:text-neutral-50 items-center flex  text-neutral-500 dark:hover:text-neutral-300 hover:text-neutral-500 ',
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>

            <span className="text-lg !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        <ModeToggle />
      </motion.div>
    </AnimatePresence>
  )
}
