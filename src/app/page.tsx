import { AppSec, ArticraftSec, ExperienceSec, HeadSec, OpenSourceSec, ToolSec } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen max-w-5xl flex-col mx-auto  px-24 py-12">
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
