import React, { useState } from 'react'
import './style.css'

export default function Button({text='button', size=[30, 150], type='default', onClickHandle = () => null, icon = '', isToggled = false}) {
    const buttonSize = {
        width: size[1],
        height: size[0]
    }

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
        <button className={type} onClick={functionLoop}>{text}<img src={icon} style={isRotated ? null : rotateIcon}></img></button>
    )
}