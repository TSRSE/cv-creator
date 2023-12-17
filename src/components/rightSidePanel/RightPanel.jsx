import React from 'react'
import Button from '../shared/button/Button'

export default function RightPanel({updater = false, toggleUpdater = () => null}) {
  return (
    <div className='right-side'>
        <Button onClickHandle={toggleUpdater} type='accent' text='Update CV!'/>
    </div>
    
  )
}
