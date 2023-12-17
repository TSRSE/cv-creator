import React, { useState } from 'react'

export default function InputField({name = '', updateStringHere = () => null}) {

    const [inputData, setInputData] = useState('');

    const handleChange = (event) => {
        setInputData(event.target.value);
        updateStringHere(event.target.value)
    };

    return (
        <input type="text" name={name} value={inputData} onChange={handleChange}/>
    )
}
