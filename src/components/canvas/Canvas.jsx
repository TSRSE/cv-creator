import InfoBlock from '../shared/infoBlock/InfoBlock'
import './style.css'
import React from 'react'

export default function Canvas({elements = []}) {
  return (
    <>
    <div className='canvas-main'>
      <InfoBlock title={''}>
        <>{console.log(elements)}</>
      </InfoBlock>
    </div>
    </>
  )
}
