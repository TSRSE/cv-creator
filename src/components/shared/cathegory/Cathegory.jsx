import DropDownHOC from '../../hocs/dropDownHOC/DropDownHOC'
import Button from '../button/Button'
import DropDown from '../dropDown/dropDown'
import Form from '../form/Form'
import InputField from '../inputFIled/InputField'
import './cathegory.css'

import React, { useState } from 'react'

export default function Cathegory({modular = false, title = '', fields=[], changeArray = () => null, changableArray, myKey='', canvasUpdate= () => null}) {

  const formsList = fields.map((form, index) => 
    <Form key={form.id} 
    fields={form.fields} 
    isOpen={form.isOpen}
    title={`${title} ${index+1}`} 
    isModular={fields.length > 1} 
    isDeletable={index > 0} 
    changeArray={changeArray} 
    changableArray={changableArray}
    localKey={form.id}
    myKey={myKey}></Form>
  
  )

  return (
    <>
      <DropDownHOC width={300} textCases={[title, title]} changeArray={changeArray} changableArray={changableArray}>
        {formsList}
        {modular && <Button type='primary' text={'Add new ' + title}/>}
      </DropDownHOC>
    </>
  )
}