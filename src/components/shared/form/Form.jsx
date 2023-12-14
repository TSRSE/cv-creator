import InputField from '../inputFIled/InputField'
import './form.css'

import React from 'react'

export default function Form({placeholders = []}) {

  const isNotDisplayable = placeholders == undefined || placeholders.length < 1
  const listInputFields = (obj) => obj.fields.map((field) => 
  <>
    <InputField key={obj.id + field} placeholder={field} />
  </>
  )

  const listFields = placeholders.map((obj) =>
    <>
      <div key={obj.id}>{obj.id}</div>
      {listInputFields(obj)}
    </>
  )

  if (isNotDisplayable) { return null }
  return (
      <>
      {listFields}
      <div>ok</div>
      </>
  )
}
