import('./DropDownHOC.css')

import React, { useState } from 'react'
import Button from '../../shared/button/Button'

export default function DropDownHOC({children, array={}, handleClose = () => null, isOpen = false, textCases=['close','open'], width = 1, type = 'accent', myKey='', localKey=''}) {

  const [isShowing, toggleIsShowing] = useState(isOpen)
  
 

  const updateGlobalArray_V2_open = () => {
    if (Object.keys(array).length === 0) {
      return array
    }
    const tempArr = array
    tempArr[`${myKey}`].find(x => x.id == localKey).isOpen = !isShowing
    return tempArr
  }

  const dropDownClickHandle = () =>{
    
    const newArr = updateGlobalArray_V2_open()
    handleClose(newArr)
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
  }

  return (
    
    <div style={dropDownStyles}>
      <Button
          text={isShowing ? textCases[0] : textCases[1]}
          type={type}
          onClickHandle={dropDownClickHandle}
          icon='/icons/arrow-white.svg'
          isToggled={isShowing}
        />
      <div className={isShowing ? 'dropdown-back-open' : 'dropdown-back-closed'}>{children}</div>
    </div>
    
  )
}