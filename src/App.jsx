import { useReducer, useState } from 'react'
import './App.css'
import Panel from './components/lfetSidePanel/Panel'
import Canvas from './components/canvas/Canvas'
import MainWrapper from './components/hocs/mainWrapper/MainWrapper'
import CreateDataSet from './components/utils/CreateDataSet'

function App() {

  const [UpdateToggle, setUpdateToggle] = useState(false)
  const [componentsArray, setComponentsArray] = useState(CreateDataSet)
  


  const handleChange = (newArray) => {
    setComponentsArray({...newArray})
    
  }
  const handleCanvasUpdate = () => {
    setUpdateToggle(!UpdateToggle)
  }

  return (
    <>
      <main>
      <Panel changeArray={handleChange} layoutArray={CreateDataSet} changableArray={componentsArray}/>
      <MainWrapper array={componentsArray} toggleUpdater={handleCanvasUpdate}/>
      
      </main>
    </>
  )
}

export default App
