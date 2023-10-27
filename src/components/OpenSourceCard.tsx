'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import { OpenSource } from '@/utils/links'
import ShowMore from './ShowMore';

const OpenSourceCard = () => {

    const [limit, setLimit] = useState(5)
  return (
        <div>
            {OpenSource.slice(0, limit).map((source)=>(
                <div key={source.id} className='flex my-5 w-full'>
                    <div className=' w-[10%] h-14 relative mr-5'>
                        <Image src={source.image} alt={source.image} fill={true} className='object-contain'  />
                    </div>
                    <div className='w-[85%]'>
                        <div>
                            <span className=' text-lg'><a href={source.href} target='_blank'>{source.name}</a></span>
                        </div>
                        <div>

                            <span className='text-sm '>{source.commits}</span>
                        </div>
                        <div className=' my-2 text-sm'>
                            {source.details}
                        </div>
                    </div>
                </div>
            ))}
            <ShowMore
              pageNumber={(limit) / 5 }
              isNext = {OpenSource.length > limit}
              setLimit={setLimit}
            />
        </div>
  )
}

export default OpenSourceCard