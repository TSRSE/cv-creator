import React from 'react'
import './InfoBlock.css'
import InfoTextRow from '../infoTextRow/InfoTextRow'

export default function InfoBlock({title = 'title', children}) {
  return (
    <div className='info-block'>
        <div className='info-block--header'>
            <h1>InfoBlock</h1>
        </div>
        <InfoTextRow/>
    </div>
  )
}
