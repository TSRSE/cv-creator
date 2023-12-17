import { useReducer, useState } from 'react'
import './App.css'
import Panel from './components/lfetSidePanel/Panel'
import Canvas from './components/canvas/Canvas'
import MainWrapper from './components/hocs/mainWrapper/MainWrapper'

function App() {

  const PANEL_ELEMENTS = {
    personal : [
    {
      id: 'personal', 
      fields : [ 
        {'Name' : ''}, 
        {'Surname' : ''}, 
        {'Phone' : ''}, 
        {'Email' : ''}, 
        {'Adress' : ''}]
    }
  ],

    education : [
      {
        id: 'education_1', 
        fields : [ 
          {'started' : ''}, 
          {'graduated' : ''}, 
          {'uni name' : ''}, 
          {'desc' : ''} ]
        }
      ],

      jobs : [
      {
        id: 'job_1', 
        fields : [ 
          {'From' : ''}, 
          {'To' : ''}, 
          {'Place' : ''}, 
          {'Job' : ''}, 
          {'Description' : ''} ]
      }, 
      {
        id: 'job_2', 
        fields : [ 
          {'From' : ''}, 
          {'To' : ''}, 
          {'Place' : ''}, 
          {'Job' : ''}, 
          {'Description' : ''} ]
      }
    ]
  }

  const [componentsArray, setComponentsArray] = useState(PANEL_ELEMENTS)

  const handleChange = (newArray) => {
    setComponentsArray(newArray)
  }

  const [UpdateToggle, setUpdateToggle] = useState(false)

  const handleCanvasUpdate = () => {
    setUpdateToggle(!UpdateToggle)
  }

  return (
    <>
      <main>
        <MainWrapper changeArray={handleChange} array={componentsArray} toggleUpdater={handleCanvasUpdate}/>
      </main>
    </>
  )
}

export default App
