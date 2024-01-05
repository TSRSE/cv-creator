import Cathegory from '../shared/cathegory/Cathegory'
import './style.css'
import React from 'react'

export default function Panel({changeArray = () => null, layoutArray={}, changableArray = {} }) {
  return (
    <div className='panel-main'>
    {/* {console.log('panel rerendered')} */}
    {/* {console.log(layoutArray)} */}
      <Cathegory title='Personal' isOpen={true}  fields={layoutArray.personal} changeArray={changeArray} changableArray={changableArray} myKey={Object.keys(changableArray)[0]}/>
      <Cathegory title='Education' modular={true} fields={layoutArray.education} changeArray={changeArray} changableArray={changableArray} myKey={Object.keys(changableArray)[1]}/>
      <Cathegory title='Experience' modular={true} fields={layoutArray.jobs} changeArray={changeArray} changableArray={changableArray} myKey={Object.keys(changableArray)[2]}/>
    </div>
  )
}
