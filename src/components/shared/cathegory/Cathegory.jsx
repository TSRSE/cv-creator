import DropDownHOC from '../../hocs/dropDownHOC/DropDownHOC'
import Button from '../button/Button'
import DropDown from '../dropDown/dropDown'
import Form from '../form/Form'
import InputField from '../inputFIled/InputField'
import './cathegory.css'

import React, { useState } from 'react'

export default function Cathegory({modular = false, title = '', fields=[], changeArray = () => null, array, myKey='', canvasUpdate= () => null}) {

  const formsList = fields.map((form, index) => 
    <Form key={crypto.randomUUID()} 
    fields={form.fields} 
    title={`${title} ${index+1}`} 
    isModular={fields.length > 1} 
    isDeletable={index > 0} 
    changeArray={changeArray} 
    array={array}
    localKey={form.id}
    myKey={myKey}></Form>
  )

  return (
    <>
      <DropDownHOC width={300} textCases={[title, title]} changeArray={changeArray} array={array}>
        {formsList}
        {modular && <Button type='primary' text={'Add new ' + title}/>}
      </DropDownHOC>
    </>
  )
}
