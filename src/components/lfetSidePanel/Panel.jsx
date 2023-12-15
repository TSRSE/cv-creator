import Cathegory from '../shared/cathegory/Cathegory'
import Form from '../shared/form/Form'
import './style.css'
import React from 'react'

export default function Panel() {

  const gigaProps = []
  const forms = {
    personal : [{id: 'personal', fields : [ 'Name', 'Surname', 'Phone', 'Email', 'Adress', 'Telegram', 'Facebook' ]}],

    education : [{id: 'education_1', fields : [ 'started', 'graduated', 'uni name', 'desc' ]}],

    jobs : [{id: 'job_1', fields : [ 'From', 'To', 'Place', 'Job', 'Description' ]}, {id: 'job_2', fields : [ 'From', 'To', 'Place', 'Job', 'Description' ]}]
  }

  return (
    <>
    <div className='panel-main'>
      <Cathegory title='Personal' isOpen={true}  fields={forms.personal}/>
      <Cathegory title='Education' modular={true} fields={forms.education}/>
      <Cathegory title='Experience' modular={true} fields={forms.jobs}/>
    </div>
    </>
  )
}
