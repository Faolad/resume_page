import { AppSec, ArticraftSec, ExperienceSec, HeadSec, OpenSourceSec} from '@/components'


export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col gap-5 lg:gap-10">
        <HeadSec />
        <ExperienceSec />
        <OpenSourceSec />
        <AppSec />
        <ArticraftSec />
        
    </div>
  )
}
