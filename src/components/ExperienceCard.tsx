import Image from 'next/image'
import React from 'react'
import { Tag } from '.'
import { Experiences } from '@/utils/links'

const ExperienceCard = () => {
  return (
        <div>
            {Experiences.map((exp)=>(
                <div key={exp.id} className='flex my-5 lg:my-10 gap-5 lg:gap-10 w-full'>
                    <div className=' w-[20%] border-r-4 lg:border-r-8 border-blue-600'>
                        <div className='my-2'>
                            <div className=' text-xs lg:text-base font-bold'>{exp.date}</div>
                        </div>
                    </div>
                    <div className='w-[80%]'>
                        <div>
                            <div className=' text-lg lg:text-xl font-bold text-blue-600'>{exp.name}</div>
                            <div className='text-sm lg:text-lg'><a href={exp.href} target='_blank'>{exp.place}</a></div>
                        </div>
                        {/* <div>
                            <span className=' text-xs'>{exp.date}</span>
                        </div> */}
                        {/* <div className=' my-2'>
                            {exp.tags?.map((tag)=>(
                                <Tag name={tag.name} />
                            ))}
                        </div> */}
                        <div className='text-sm'>
                            {exp.otherTexts?.text}
                        </div>
                    </div>
                    {/* <div className=' w-[10%] h-14 relative mr-5'>
                        <Image src={exp.image} alt={exp.image} fill={true} className='object-contain'  />
                    </div> */}
                </div>
            ))}
        </div>
  )
}

export default ExperienceCard