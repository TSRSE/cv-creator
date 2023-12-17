import InfoBlock from '../shared/infoBlock/InfoBlock'
import './style.css'
import React, { useReducer, useState } from 'react'

export default function Canvas({elements = null}) {

  return (
    <>
    <div className='canvas-main'>
      <InfoBlock title={'Personal'} blocks={elements.personal}/>
      <InfoBlock title={'EXP'} blocks={elements.job}/>
      <InfoBlock title={'Education'} blocks={elements.education}/>
    </div>
    </>
  )
}
