import { useReducer, useState } from 'react'
import './App.css'
import Panel from './components/lfetSidePanel/Panel'
import Canvas from './components/canvas/Canvas'
import CreateDataSet from './components/utils/CreateDataSet'

function App() {

  const [UpdateToggle, setUpdateToggle] = useState(false)
  const [componentsArray, setComponentsArray] = useState(CreateDataSet)
  
  const handleChange = (newArray) => {
    setComponentsArray(newArray)
    
  }

  return (
    <>
    <main>
      <Panel changeArray={handleChange} layoutArray={CreateDataSet} changableArray={componentsArray}/>
      <Canvas elements={componentsArray}/>
    </main>
    </>
  )
}

export default App
