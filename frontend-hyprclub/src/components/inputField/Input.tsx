import React from 'react'
import { FormControl } from 'react-bootstrap'
import './input.css';

interface Input{
    half: boolean,
    lableText: string,
    typeOfInput: string,
}

const InputField = ({half, lableText, typeOfInput}: Input) => {
    return (
        <div className = {half ? "halfWidth" : "fullWidth"} >
            <label>{lableText}</label>
            <FormControl
            required
            type={typeOfInput}
            className='p-2 mb-2'
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
        </div>
    )
}

export default InputField
