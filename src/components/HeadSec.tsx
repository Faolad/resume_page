import Image from 'next/image'
import React from 'react'
import { navLinks, navTags } from '@/utils/links'
import { Tag } from '.'
import { TagProps } from '@/types'

const HeadSec = () => {
  return (
    <div>
        <div className='flex w-full max-w-3xl justify-between items-center'>
            <div className=''>
                <h2 className=' font-semibold'>Adeyeye Faishal Adeola</h2>
                <p className='text-base'>Software Engineer</p>
            </div>
            <div className=' items-center'>
              <Image src='/passport.jpg' alt='profilepic' width={100} height={100} className='' />
            </div>
        </div>
        <div className=''>
          {navLinks.map((link)=>(
            <div key={link.name} className='flex m-1'>
              <Image src={link.image} alt={link.name} width={20} height={20} className=' mr-3'  />
              {link.href ? <a href={link.href}>{link.name}</a> : link.name} 
              
            </div>  
          ))}
        </div>
        <div className='mt-5'>
          {navTags.map((tag:TagProps)=>(
            <Tag name={tag.name}  />
          ))}
        </div>
    </div>

    
  )
}

export default HeadSec