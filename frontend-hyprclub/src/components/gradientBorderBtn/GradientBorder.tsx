import React, { ButtonHTMLAttributes } from 'react'
import { Button } from 'react-bootstrap';
import styles from './gradientBorderBtn.module.css';

interface BtnText extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    onClick?: any
    className?: string
    disable?:boolean
}

const GradientBorder = ({text, onClick, className, disable}:BtnText) => {
    return (
        <div className={className}>
            <button disabled={disable} type='submit' onClick={onClick} className={(styles.gradientBorder)}><span className={styles.btnName}>{text}</span></button>
        </div>
    )
}

export default GradientBorder
