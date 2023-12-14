import Button from '../button/Button'
import DropDown from '../dropDown/dropDown'
import Form from '../form/Form'
import './cathegory.css'

import React, { useState } from 'react'

export default function Cathegory({modular = false, title = '', isOpen = false, fields=[]}) {
  return (
    <>
      <div>{title}</div>
      {/* {console.log(fields)} */}
      <DropDown modular={modular} isOpen={isOpen} fields={fields}/>
    </>
  )
}
