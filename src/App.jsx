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
import EducationBlockCollector from './components/canvasBlockVariants/EducationBlockCollector'


function App() {
  const educationPanelModel = {from: '', to: '', place: ''}

  const [inputValue, setInputValue] = useState({ name: '', surname: '', phoneNumber: '', telegram: '' });

  const [educationValues, setEducationValues] = useState([
    {id: 'ed1', from: '', to: '', place: ''}, 
    {id: 'ed2', from: '', to: '', place: ''}, 
  ])

  const { name, surname } = inputValue;

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value}));
  };

  const handleTextUpdatedInForm = (e, id) => {
    const updatedTextFeildsArray = educationValues.map((block) => 
    {
      const { name, value } = e.target
      return block.id === id ? {...block, [name]: value} : {block}
    })

    setEducationValues(updatedTextFeildsArray)
  }

  const handleChangeEducation = (e) => {
    const { name, value } = e.target;
    // console.log(prev);
    setEducationValues((prev) => ({ ...prev, [name]: value}));
  };
  // const educationBlocksList = educationValues.map((x, index) => <EducationBlock key={`edBlock_`+index} displayableText = {x} />)
  const educationPanelsList = educationValues.map((x, index) => <Education key={crypto.randomUUID()} onChange={(e) => {handleTextUpdatedInForm(e, x.id)}}/> )

  return (
    <>
      <main>
        <MainSection>
          <Panel>
            <Personal onChange={handleChangePersonal} />
            {/* <Education onChange={handleChangeEducation}/> */}
            {educationPanelsList}
          </Panel>
          <Canvas>
          
            <PersonalBlock displayableText = {inputValue} />
            <div>--<br></br>--</div>
            <EducationBlockCollector fieldArray={educationValues}/>
            {/* {educationBlocksList} */}
            {/* <EducationBlock displayableText = {educationValues} /> */}
          </Canvas>
        </MainSection>
      </main>
    </>
  )
}

export default App
