import { useReducer, useState } from 'react'
import './App.css'
import MainSection from './components/HOC/MainSection'
import Panel from './components/HOC/Panel'
import InputField from './components/common/inputField/InputField'
import Canvas from './components/HOC/Canvas'
import TextType1 from './components/common/texts/TextType1'
import Personal from './components/formVariants/Personal/Personal'

function App() {
  const [inputValue, setInputValue] = useState({ name: "", surname: "" });
  const { name, surname } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value}));
    // console.log(inputValue);
  };

  return (
    <>
      <main>
        <MainSection>
          <Panel>
          <Personal />
          {/* <div>
            <InputField name='name' onChange={handleChange}/>
            <InputField name='surname' onChange={handleChange}/>
          </div> */}
          </Panel>
          <Canvas>
            <TextType1 text={inputValue.name}/>
            <TextType1 text={inputValue.surname}/>
            <TextType1 text={inputValue.surname}/>
            <TextType1 text={inputValue.surname}/>
          </Canvas>
        </MainSection>
      </main>
    </>
  )
}

export default App
