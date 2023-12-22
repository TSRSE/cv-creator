import React from 'react'
import InputField from '../../common/inputField/InputField'

export default function Education({onChange = () => null}) {
  return (
    <div>
        <h2>Education</h2>
        <div>
            <InputField name='from' placeholder='from' onChange={onChange}/>
            <InputField name='to' placeholder='to' onChange={onChange}/>
            <InputField name='place' placeholder='place' onChange={onChange}/>
        </div>
    </div>
  )
}
