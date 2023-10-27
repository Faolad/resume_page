import Image from 'next/image'
import React from 'react'
import { Tag } from '.'
import { Articraft } from '@/utils/links'

const ArticraftCard = () => {
  return (
        <div>
            {Articraft.map((art)=>(
                <div key={art.id} className='flex my-5 w-full'>
                    <div className=' w-[6%] h-14 relative mr-5'>
                        <Image src={art.image} alt={art.image} fill={true} className='object-contain'  />
                    </div>
                    <div className='w-[90%]'>
                        <div>
                            <span className=' text-lg'><a href={art.href} target='_blank'>{art.name}</a></span>
                        </div>
                        <div>
                            <span className=' text-xs'>{art.date}</span>
                        </div>
                        <div className=' my-2'>
                            {art.tags?.map((tag)=>(
                                <Tag name={tag.name} />
                            ))}
                        </div>
                        <div className='text-sm'>
                            {art.details}
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default ArticraftCard