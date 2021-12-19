import React from 'react'
import { FormControl } from 'react-bootstrap';
import './input.css';
import clsx from 'clsx';
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
            className={clsx('mb-1 inputItself')}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
        </div>
    )
}

export default InputField
