import Button from '../button/Button'
import DropDown from '../dropDown/dropDown'
import Form from '../form/Form'
import './cathegory.css'

import React, { useState } from 'react'

export default function Cathegory({modular = false, title = '', isOpen = false}) {
  return (
    <>
      <div>{title}</div>
      <DropDown modular={modular} isOpen={isOpen}/>
    </>
  )
}
