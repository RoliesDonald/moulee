import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import config from '@/payload.config'
import { Page } from '@/payload-types'
import HeroBlock from './components/HeroBlock'
import { FloatingNav } from './components/ui/NavBar'
import { navItems } from 'data'
import RecentProjects from './components/RecentProjects'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Grid from './components/Grid'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'landing-page' },
    },
    depth: 1,
  })
  if (!page) {
    return <div>Page not found</div>
  }

  const renderBlock = (blocks: Page['layout'][0]) => {
    switch (blocks.blockType) {
      case 'hero':
        return <HeroBlock block={blocks} key={blocks.id} />
      case 'gridItems':
        return <Grid block={blocks} key={blocks.id} />
      case 'last-project':
        return <RecentProjects block={blocks} key={blocks.id} />
      case 'client':
        return <Clients block={blocks} key={blocks.id} />
      default:
        return null
    }
  }
  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        {page.layout?.map((block) => renderBlock(block))}
        <Footer />
      </div>
    </main>
  )
}
