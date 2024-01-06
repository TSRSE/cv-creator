import DropDownHOC from '../../hocs/dropDownHOC/DropDownHOC'
import Button from '../button/Button'
import InputField from '../inputFIled/InputField'
import './form.css'

import React from 'react'

export default function Form({fields = [], title = '', isModular = false, isDeletable = false, changeArray = () => null, changableArray, localKey, myKey='', isOpen = false}) {

  const handleDeleteClick = () => {
    // console.log(changableArray[myKey].findIndex((x) => x.id == localKey));
    // console.log(myKey + localKey);
    // console.log(changableArray[myKey].splice(changableArray[myKey].findIndex((x) => x.id == localKey)));

    const updatedArray = changableArray
    updatedArray[myKey] = updatedArray[myKey].splice(updatedArray[myKey].findIndex((x) => x.id == localKey)-1, 1)
    // changableArray[myKey].splice(changableArray[myKey].findIndex((x) => x.id == localKey))
    // console.log(updatedArray);
    console.log(changeArray);
    changeArray({...updatedArray})
  }

  const isNotDisplayable = fields == undefined || fields.length < 1

  const fieldList = fields.map((field) => 
    <InputField key={localKey + '_' + myKey + '_' + Object.keys(field)[0]} placeholder={field} changeArray={changeArray} changableArray={changableArray} myKey={myKey} localKey={localKey}/>
  )

  const getForm = () => {
    return(
      <div className='form'>
      {/* {console.log(fields)} */}
       <h2>{title}</h2>
       {fieldList}
       {isDeletable && <Button text='Delete' type='red' onClickHandle={handleDeleteClick}/>}
     </div>
    )
  }

  if (isNotDisplayable) { return null }
  if(isModular) {
    return (
    <DropDownHOC textCases={[title, title]} isOpen={isOpen} array={changableArray} type='secondary' myKey={myKey} localKey={localKey} handleClose={changeArray}>
      {getForm()}
    </DropDownHOC>
   )
  }
  return getForm()
  
}
