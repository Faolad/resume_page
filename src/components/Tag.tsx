import React from 'react'
import { TagProps } from '@/types'


const Tag = ({name}:TagProps) => {
  return (
    <button className=' bg-blue-200 text-xs hover:bg-blue-300 hover:text-black p-1 rounded-sm text-blue-900 mr-2' >
        {name}
    </button>
  )
}

export default Tag