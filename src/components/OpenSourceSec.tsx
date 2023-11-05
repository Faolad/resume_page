import React from 'react'
import OpenSourceCard from './OpenSourceCard'
import { OpenSource } from '@/utils/links'

const OpenSourceSec = () => {
  return (
    <div>
      <div className='title-div'>
        <h1 className='title-text'>OPEN SOURCE({OpenSource.length})</h1>
      </div>

      <OpenSourceCard />
      
    </div>
  )
}

export default OpenSourceSec