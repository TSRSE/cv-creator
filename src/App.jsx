import { useState } from 'react'
import './App.css'
import Panel from './components/lfetSidePanel/Panel'
import Canvas from './components/canvas/Canvas'

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
