import React, { useState } from 'react'
import './style.css'

export default function Button({text='button', type='default', onClickHandle = () => null, icon = '', isToggled = false}) {

    const [isRotated, setRotate] = useState(isToggled)

    const functionLoop = () => {
        onClickHandle()
        rotateOnClick()
    }

    const rotateOnClick = () => {
        setRotate(!isRotated)
    }

    const rotateIcon = {
        transform: `rotate(180deg)`,
        transition: '200ms'
    }

    return (
        <button className={type} onClick={functionLoop}>
            {text} 
            {icon.length > 0 && <img src={icon} style={isRotated ? null : rotateIcon}></img>}
        </button>
    )
}