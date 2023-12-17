import React, { useState } from 'react'
import InputField from '../../shared/InputField/InputField'

export default function Personal() {

    const [PersonalForm, setPersonalForm] = useState({name : '', surname: ''})

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPersonalForm((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

  return (
    <div>
        <h2>Personal</h2>
        <div>
            <InputField onChange={handleChange} name='name'/>
            <InputField onChange={handleChange} name='surname'/>
            <InputField></InputField>
            {console.log(name)}
        </div>
    </div>
  )
}
