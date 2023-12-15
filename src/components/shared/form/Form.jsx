import DropDownHOC from '../../hocs/dropDownHOC/DropDownHOC'
import Button from '../button/Button'
import InputField from '../inputFIled/InputField'
import './form.css'

import React from 'react'

export default function Form({fields = [], title = '', isModular = false, isDeletable = false}) {

  const isNotDisplayable = fields == undefined || fields.length < 1

  const fieldList = fields.map((field) => 
    <InputField key={title + field + '_'} placeholder={field}/>
  )

  const getForm = () => {
    return(
      <div className='form'>
       <h2>{title}</h2>
       {fieldList}
       {isDeletable && <Button text='Delete' type='red'/>}
     </div>
    )
  }

  if (isNotDisplayable) { return null }
  if(isModular) {
    return (
    <DropDownHOC textCases={[title, title]} type='secondary'>
      {getForm()}
    </DropDownHOC>
   )
  }
  return getForm()
  
}
