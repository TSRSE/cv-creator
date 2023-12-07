import React, { useState } from 'react'

export default function InputField({placeholder='placeholder'}) {
    const [value, setValue] = useState(placeholder)

  return (
    <>
    <input className='field' placeholder={value} onChange={e => setValue(e.target.value)}></input>
    </>
  )
}
