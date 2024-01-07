import React from 'react'
import './InfoBlock.css'
import InfoTextRow from '../infoTextRow/InfoTextRow'
import InfoSubBlock from '../infoSubBlock/InfoSubBlock'

export default function InfoBlock({title = 'title', blocks = []}) {

  const listOfSubBlocks = blocks.map((subBlock) => <InfoSubBlock key={crypto.randomUUID()} title={subBlock.id} infoToShow={subBlock.fields}/>)

  return (
    <div className='info-block'>
      <div className='info-block--header'>
        <h1>{title}</h1>
      </div>
      {listOfSubBlocks}
    </div>
  )
}
