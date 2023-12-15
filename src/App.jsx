import { useState } from 'react'
import './App.css'
import Panel from './components/lfetSidePanel/Panel'
import Canvas from './components/canvas/Canvas'
import BigDiv from './components/temp/BigDiv'
import ChildElement from './components/temp/ChildElement'
import DropDownHOC from './components/hocs/dropDownHOC/DropDownHOC'

function App() {

  return (
    <>
      <main>
        <Panel/>
        <Canvas/>
      </main>
    </>
  )
}

export default App
