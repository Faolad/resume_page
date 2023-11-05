import Image from 'next/image'
import React from 'react'
import { navLinks, navTags } from '@/utils/links'
// import { Tag } from '.'
// import { TagProps } from '@/types'

const HeadSec = () => {
  return (
    <div>
        <div className='lg:flex lg:gap-5 max-w-screen justify-between items-center my-5 lg:my-10 mb-2 lg:mb-5 text-blue-600'>

            <div className='flex-1 lg:hidden relative w-32 h-32 lg:h-64 mx-auto mb-5'>
                <Image src='/passport.jpg' alt='profilepic' fill={true} className='rounded-full object-cover' />
            </div>
            
            <div className=' flex-1 w-max mx-auto mb-5'>
                <span className=' text-3xl font-semibold'>Faishal Adeyeye</span>
                <p className='text-base text-black'>Software Engineer</p>
            </div>

            <div className='flex-1 hidden lg:block relative w-52 h-52 lg:h-32 lg:w-32'>
              <Image src='/passport.jpg' alt='profilepic' fill={true} className='rounded-full object-contain' />
            </div>

            <div className='flex-1 w-max mx-auto'>
              {navLinks.map((link)=>(

                <div key={link.name} className='flex m-1'>
                  <Image src={link.image} alt={link.name} width={20} height={20} className=' mr-3'  />
                  {link.href ? <a href={link.href}>{link.name}</a> : link.name}   
                </div>  

              ))}
          </div>

        </div>




        {/* <div className='mt-5'>
          {navTags.map((tag:TagProps)=>(
            <Tag name={tag.name}  />
          ))}
        </div> */}
    </div>

    
  )
}

export default HeadSec