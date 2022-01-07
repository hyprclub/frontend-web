import React, { ButtonHTMLAttributes } from 'react'
import { Button } from 'react-bootstrap';
import './button.css';

interface BtnPurpose extends ButtonHTMLAttributes<HTMLButtonElement>{
    btnPurpose:string
}

const ButtonItself = ({btnPurpose}: BtnPurpose) => {
    return (
        <div className=' d-flex justify-content-center'>
            <Button type='submit' className='buttonItself'>{btnPurpose} <i className="bi bi-arrow-right"></i></Button>
        </div>
    )
}

export default ButtonItself;

