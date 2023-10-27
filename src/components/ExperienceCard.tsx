import Image from 'next/image'
import React from 'react'
import { Tag } from '.'
import { Experiences } from '@/utils/links'

const ExperienceCard = () => {
  return (
        <div>
            {Experiences.map((exp)=>(
                <div key={exp.id} className='flex my-5 w-full'>
                    <div className=' w-10 h-14 relative mr-5'>
                        <Image src={exp.image} alt={exp.image} fill={true} className='object-contain'  />
                    </div>
                    <div className='w-[70%]'>
                        <div>
                            <span className=' text-lg'>{exp.name}</span>
                        </div>
                        <div>
                            <span className='text-sm'><a href={exp.href} target='_blank'>{exp.place}</a></span>
                        </div>
                        <div>
                            <span className=' text-xs'>{exp.date}</span>
                        </div>
                        <div className=' my-2'>
                            {exp.tags?.map((tag)=>(
                                <Tag name={tag.name} />
                            ))}
                        </div>
                        <div className='text-sm'>
                            {exp.otherTexts?.text}
                        </div>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default ExperienceCard