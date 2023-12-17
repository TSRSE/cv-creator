import React, { useState } from 'react'
import Panel from '../../lfetSidePanel/Panel'
import Canvas from '../../canvas/Canvas'
import RightPanel from '../../rightSidePanel/RightPanel'

export default function MainWrapper({changeArray = () => null, array = null, updater = false, toggleUpdater = () => null}) {

    return (
    <>
        <div>MainWrapper</div>
        {console.log(array)}
        <Panel changeArray={changeArray} array={array}/>
        <Canvas elements={array}/>
        <RightPanel updater={updater} toggleUpdater={toggleUpdater}/>
    </>
    
  )
}
