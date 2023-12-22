import { useReducer, useState } from 'react'

import './App.css'

import MainSection from './components/HOC/MainSection'
import Panel from './components/HOC/Panel'
import InputField from './components/common/inputField/InputField'
import Canvas from './components/HOC/Canvas'
import TextType1 from './components/common/texts/TextType1'
import Personal from './components/formVariants/Personal/Personal'
import PersonalBlock from './components/canvasBlockVariants/PersonalBlock'
import EducationBlock from './components/canvasBlockVariants/EducationBlock'
import Education from './components/formVariants/Education/Education'


function App() {
  const educationPanelModel = {from: '', to: '', place: ''}

  const [inputValue, setInputValue] = useState({ name: '', surname: '', phoneNumber: '', telegram: '' });

  const [educationValues, setEducationValues] = useState({from: '', to: '', place: ''})

  const { name, surname } = inputValue;

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value}));
  };

  const handleChangeEducation = (e) => {
    const { name, value } = e.target;
    setEducationValues((prev) => ({ ...prev, [name]: value}));
  };

  return (
    <>
      <main>
        <MainSection>
          <Panel>
            <Personal onChange={handleChangePersonal} />
            <Education onChange={handleChangeEducation}/>
          </Panel>
          <Canvas>
          
            <PersonalBlock displayableText = {inputValue} />
            <div>--<br></br>--</div>
            <EducationBlock displayableText = {educationValues} />
          </Canvas>
        </MainSection>
      </main>
    </>
  )
}

export default App
