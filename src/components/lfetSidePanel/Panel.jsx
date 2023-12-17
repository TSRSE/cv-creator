import Cathegory from '../shared/cathegory/Cathegory'
import './style.css'
import React from 'react'

export default function Panel({changeArray = () => null, array={}}) {
  return (
    <div className='panel-main'>
      <Cathegory title='Personal' isOpen={true}  fields={array.personal} changeArray={changeArray} array={array} myKey={Object.keys(array)[0]}/>
      <Cathegory title='Education' modular={true} fields={array.education} changeArray={changeArray} array={array} myKey={Object.keys(array)[1]}/>
      <Cathegory title='Experience' modular={true} fields={array.jobs} changeArray={changeArray} array={array} myKey={Object.keys(array)[2]}/>
    </div>
  )
}
