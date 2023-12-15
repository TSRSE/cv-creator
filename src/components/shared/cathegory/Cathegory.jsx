import DropDownHOC from '../../hocs/dropDownHOC/DropDownHOC'
import Button from '../button/Button'
import DropDown from '../dropDown/dropDown'
import Form from '../form/Form'
import InputField from '../inputFIled/InputField'
import './cathegory.css'

import React, { useState } from 'react'

export default function Cathegory({modular = false, title = '', fields=[]}) {

  const formsList = fields.map((form) => 
    <Form key={crypto.randomUUID()} fields={form.fields} title={title} isModular={fields.length > 1}></Form>
  )

  return (
    <>
      <DropDownHOC width={300} textCases={[title, title]}>
        {formsList}
        {modular && <Button type='primary' text={'Add new ' + title}/>}
      </DropDownHOC>
    </>
  )
}
