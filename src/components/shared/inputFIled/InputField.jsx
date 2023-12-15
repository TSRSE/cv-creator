
import React, { useState } from 'react'

import './style.css'

export default function InputField({placeholder='placeholder', hasLabel = true}) {
    const [value, setValue] = useState('')

  return (
    <div className='field-container'>
      { hasLabel && <p>{placeholder}</p> } 
      <input className='field' placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)}></input>
    </div>
  )
}
