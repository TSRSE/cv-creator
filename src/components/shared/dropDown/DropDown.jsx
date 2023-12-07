import Button from '../button/Button'
import Form from '../form/Form'
import InputField from '../inputFIled/InputField'
import './drop.css'

import React, { useState } from 'react'

export default function DropDown({modular = false, isOpen = false}) {

  const [isShowing, toggleShow] = useState(isOpen)

  const onClickHandle = () => {
    toggleShow(!isShowing)
  }


  return (
    <div className={isShowing ? 'drop-down open' : 'drop-down'}>
      <Button 
        text={isShowing ? 'Close' : 'Open'} 
        type='accent' 
        onClickHandle={onClickHandle} 
        icon='./public/icons/arrow.svg' 
        isToggled={isShowing}
      />
      {isShowing && <Form />}
      {isShowing && <Form />}
      {isShowing && <Form />}
      {isShowing && modular && <Button text='Add new' type='secondary'/>}
    </div>
  )
}
