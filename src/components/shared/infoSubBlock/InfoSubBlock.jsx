import React, { useState } from 'react'
import InfoTextRow from '../infoTextRow/InfoTextRow'

export default function InfoSubBlock({title = 'title', infoToShow = []}) {
    
    const isModular = infoToShow.length > 1

    const listOfInfo = infoToShow.map((field) => 
        <InfoTextRow key={crypto.randomUUID()} field={Object.keys(field)[0]} value={field[`${Object.keys(field)[0]}`]}/>
    )
    return (
    <>
        <h2>{title}</h2>
        {listOfInfo}
        {/* {console.log(infoToShow)} */}
        
    </>

    )
}
