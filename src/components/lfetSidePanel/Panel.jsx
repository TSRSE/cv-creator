import Cathegory from '../shared/cathegory/Cathegory'
import Form from '../shared/form/Form'
import './style.css'
import React from 'react'

export default function Panel() {

  const gigaProps = []

  return (
    <>
    {/* <div>Panel</div> */}
    <div className='panel-main'>
      <Cathegory title='Personal' isOpen={true}/>
      <Cathegory title='Education' modular={true}/>
    </div>
    </>
  )
}
