import Image from 'next/image'
import React from 'react'
import { Tag } from '.'
import { Apps } from '@/utils/links'

const AppCard = () => {
  return (
        <div>
            {Apps.map((app)=>(
                <div key={app.id} className='flex my-5 w-full'>
                    <div className=' w-[6%] h-14 relative mr-5'>
                        <Image src={app.image} alt={app.image} fill={true} className='object-contain'  />
                    </div>
                    <div className='w-[90%]'>
                        <div className='flex justify-between'>
                            <span className=' text-lg'>{app.name}</span>
                            <div className='flex'>
                            {app.sideImage.map((img)=>(
                                <div>
                                    <Image src={img.src} alt={img.src} width={20} height={20} className='m-1' />
                                </div>    
                                    ))}
                            </div>
                        </div>
                        <div>
                            <span className=' text-xs'>{app.date}</span>
                        </div>
                        <div className=' my-2'>
                            {app.tags?.map((tag)=>(
                                <Tag name={tag.name} />
                            ))}
                        </div>
                        <div className='text-sm'>
                            {app.details}
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default AppCard