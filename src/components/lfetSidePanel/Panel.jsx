import Cathegory from '../shared/cathegory/Cathegory'
import './style.css'
import React from 'react'

export default function Panel({changeArray = () => null, array={}}) {

  const forms = {
    personal : [{id: 'personal', fields : [ 'Name', 'Surname', 'Phone', 'Email', 'Adress']}],

    education : [{id: 'education_1', fields : [ 'started', 'graduated', 'uni name', 'desc' ]}],

    jobs : [{id: 'job_1', fields : [ 'From', 'To', 'Place', 'Job', 'Description' ]}, {id: 'job_2', fields : [ 'From', 'To', 'Place', 'Job', 'Description' ]}]
  }

  return (
    <div className='panel-main'>
      <Cathegory title='Personal' isOpen={true}  fields={array.personal} changeArray={changeArray} array={array} myKey={Object.keys(array)[0]}/>
      <Cathegory title='Education' modular={true} fields={array.education} changeArray={changeArray} array={array} myKey={Object.keys(array)[1]}/>
      <Cathegory title='Experience' modular={true} fields={array.jobs} changeArray={changeArray} array={array} myKey={Object.keys(array)[2]}/>
    </div>
  )
}
