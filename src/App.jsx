import { useReducer, useState } from 'react'
import './App.css'
import MainSection from './components/HOC/MainSection'
import Panel from './components/HOC/Panel'
import InputField from './components/common/inputField/InputField'
import Canvas from './components/HOC/Canvas'
import TextType1 from './components/common/texts/TextType1'

function App() {

  const [updateText, setUpdateText] = useState('')

  return (
    <>
      <main>
        <MainSection>
          <Panel>
            <InputField name='ass' updateStringHere={setUpdateText}/>
          </Panel>
          <Canvas>
            <TextType1 text={updateText}/>
          </Canvas>
        </MainSection>
      </main>
    </>
  )
}

export default App
