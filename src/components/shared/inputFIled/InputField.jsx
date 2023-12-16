
import React, { useState } from 'react'

import './style.css'

export default function InputField({placeholder, hasLabel = true, changeArray = () => null, array=[], myKey='', localKey=''}) {

    const [value, setValue] = useState('')

    const updateGlobalArray = () => {
      const newArray = array
      newArray[`${myKey}`].map((element) => {
        if (element[Object.keys(element)[0]] == localKey) {
          const tmpX = Object.keys(placeholder)[0] + ''
          const tempIndex = element[Object.keys(element)[1]].findIndex(x => tmpX in x)
          element[Object.keys(element)[1]][tempIndex][Object.keys(placeholder)[0]] = value
          return element
        }
        return element
      });
      return newArray
    }


    const temp = (e) =>{
      setValue(e.target.value)
      const newArray = updateGlobalArray()
      changeArray(newArray);
    }

  return (
    <div className='field-container'>
      { hasLabel && <p>{Object.keys(placeholder)[0]}</p> }
      <input className='field' placeholder={Object.keys(placeholder)[0]} value={value} onChange={temp}></input>
    </div>
  )
}
