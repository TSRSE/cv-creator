import('./DropDownHOC.css')

import React, { useState } from 'react'
import Button from '../../shared/button/Button'

export default function DropDownHOC({children, isOpen = false, textCases=['close','open'], variant = 1}) {

  const [isShowing, toggleIsShowing] = useState(isOpen)
  
  const dropDownClickHandle = () =>{
    toggleIsShowing(!isShowing)
  }

  const switchSize = (variant) =>{
    switch (variant) {
      case 0:
        return '100%'
      
      case 1:
        return 'auto'
    
      default:
        return `${variant}px`
    }
  }

  const dropDownStyles = {
    width : switchSize(variant)
  }

  return (
    <>
    <div style={dropDownStyles}>
      <Button
          text={isShowing ? textCases[0] : textCases[1]}
          type='accent'
          onClickHandle={dropDownClickHandle}
          icon='./public/icons/arrow.svg'
          isToggled={isShowing}
        />
      <div>{isShowing && children}</div>
    </div>
    </>
  )
}