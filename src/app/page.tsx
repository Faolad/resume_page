import { AppSec, ArticraftSec, ExperienceSec, HeadSec, OpenSourceSec, ToolSec } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-6 sm:px-16 lg:px-60 lg:py-16 ">
        <HeadSec />
        <hr/>
        <ExperienceSec />
        <hr />
        <OpenSourceSec />
        <hr />
        <AppSec />
        <hr />
        <ArticraftSec />
        <hr />
        <ToolSec />
      
    </div>
  )
}
