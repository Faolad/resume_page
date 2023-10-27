import React from 'react'
import OpenSourceCard from './OpenSourceCard'
import { OpenSource } from '@/utils/links'

const OpenSourceSec = () => {
  return (
    <div>
      <h1 className=' text-xs mb-5 font-bold'>OPEN SOURCE({OpenSource.length})</h1>

      <OpenSourceCard />
      
    </div>
  )
}

export default OpenSourceSec