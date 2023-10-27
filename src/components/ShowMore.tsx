import { ShowMoreProps } from '@/types'
import React from 'react'

const ShowMore = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {
    const showMore = ()=>{
        const newLimit = (pageNumber + 1) * 5
        setLimit(newLimit)
    }
  return (
    <div>
        {isNext && <span onClick={showMore} className=' cursor-pointer'>view more</span>}
    </div>
  )
}

export default ShowMore