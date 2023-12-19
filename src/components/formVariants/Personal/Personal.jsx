import React, { useState } from 'react'
import InputField from '../../common/inputField/InputField'

export default function Personal({onChange = () => null}) {
  return (
    <div>
        <h2>Personal</h2>
        <div>
            <InputField name='name' placeholder='name' onChange={onChange}/>
            <InputField name='surname' placeholder='surname' onChange={onChange}/>
            <InputField name='phoneNumber' placeholder='phone' onChange={onChange}/>
            <InputField name='telegram' placeholder='telegram' onChange={onChange}/>
        </div>
    </div>
  )
}
