import { useState } from 'react'
import './App.css'
import Panel from './components/lfetSidePanel/Panel'
import Canvas from './components/canvas/Canvas'

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
    {console.log(componentsArray)}
    // alert('wow')
  }

  return (
    <>
      <main>
      
        <Panel changeArray={handleChange} array={componentsArray}/>
        <Canvas elements={componentsArray} />
      </main>
    </>
  )
}

export default App
