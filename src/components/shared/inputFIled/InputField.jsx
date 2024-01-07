
import React, { useState } from 'react'

import './style.css'

export default function InputField({placeholder, hasLabel = true, changeArray = () => null, changableArray=[], myKey='', localKey='', isOpen = false}) {

    const currentField = changableArray[`${myKey}`].find(x => x.id == localKey).fields.find(x => [`${Object.keys(placeholder)[0]}`] in x)[`${Object.keys(placeholder)[0]}`]
    const [value, setValue] = useState(currentField)

    const updateGlobalArray_V2 = (referenceArray, actualValue) =>{
      referenceArray[`${myKey}`].find(x => x.id == localKey).fields.find(x => [`${Object.keys(placeholder)[0]}`] in x)[`${Object.keys(placeholder)[0]}`] = actualValue
      return referenceArray
    }


    const temp = (e) => {
      setValue(e.target.value)
      const newArray = updateGlobalArray_V2(changableArray, e.target.value)
      changeArray({...newArray})
    }

  return (
    <div className='field-container'>
      { hasLabel && <p>{Object.keys(placeholder)[0]}</p> }
      <input className='field' placeholder={Object.keys(placeholder)[0]} value={value} onChange={temp}></input>
    </div>
  )
}
