import React, { useState } from 'react'
import InputField from '../../common/inputField/InputField'

export default function Personal() {
  return (
    <div>
        <h2>Personal</h2>
        <div>
            <InputField name='name' placeholder='name'/>
            <InputField name='surname' placeholder='surname'/>
            <InputField name='phoneNumber' placeholder='phone'/>
            <InputField name='telegram' placeholder='telegram'/>
        </div>
    </div>
  )
}
