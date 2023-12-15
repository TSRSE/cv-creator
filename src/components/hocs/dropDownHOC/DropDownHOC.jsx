import('./DropDownHOC.css')

import React, { useState } from 'react'
import Button from '../../shared/button/Button'

export default function DropDownHOC({children, isOpen = false, textCases=['close','open'], width = 1, height = 1, type = 'accent'}) {

  const [isShowing, toggleIsShowing] = useState(isOpen)
  
  const dropDownClickHandle = () =>{
    toggleIsShowing(!isShowing)
  }

  const switchSize = (size) =>{
    switch (size) {
      case 0:
        return '100%'
      
      case 1:
        return 'auto'
    
      default:
        return `${size}px`
    }
  }

  const dropDownStyles = {
    width : switchSize(width)
    // height : switchSize(height)
  }

  return (
    
    <div style={dropDownStyles}>
      <Button
          text={isShowing ? textCases[0] : textCases[1]}
          type={type}
          onClickHandle={dropDownClickHandle}
          icon='./public/icons/arrow.svg'
          isToggled={isShowing}
        />
      <div>{isShowing && children}</div>
    </div>
    
  )
}