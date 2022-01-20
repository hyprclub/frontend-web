import React, { InputHTMLAttributes } from 'react'
import { FormControl } from 'react-bootstrap';
import './input.css';
import clsx from 'clsx';
interface Input extends InputHTMLAttributes<HTMLInputElement>{
    half?: boolean,
    lableText: string,
    typeOfInput: string,
    garyBold?:boolean
    value?:any
    placeholder?:string
    onChange?: any
    name? : string
    disabled? : boolean
    className? : any
    required?: boolean
    defaultValue? : string
}



const InputField = ({half, lableText, typeOfInput, garyBold,value, placeholder, onChange , name ,disabled ,className,defaultValue}: Input) => {
    return (
        <div className = {half ? "halfWidth" : "fullWidth"} >
            <label className={garyBold ? "grayBold" : ''}>{lableText}</label>
            <FormControl
            defaultValue={defaultValue}
            required
            type={typeOfInput}
            value = {value}
            className={clsx('mb-1 inputItself', className)}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            placeholder={placeholder}
            onChange={onChange}
            name = {name}
            disabled = {disabled}
            />
        </div>
    )
}

export default InputField;
