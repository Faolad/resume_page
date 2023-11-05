import { ShowMoreProps } from '@/types'
import React from 'react'

const ShowMore = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {
    const showMore = ()=>{
        const newLimit = (pageNumber + 1) * 5
        console.log(newLimit)
        setLimit(newLimit)
    }
  return (
    <div>
        {isNext && <button onClick={()=>alert('fgfg')} className='cursor-pointer'>show more</button>}
      
    </div>
  )
}

export default ShowMore