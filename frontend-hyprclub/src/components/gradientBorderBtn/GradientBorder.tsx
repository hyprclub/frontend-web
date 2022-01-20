import React, { ButtonHTMLAttributes } from 'react'
import { Button } from 'react-bootstrap';
import styles from './gradientBorderBtn.module.css';

interface BtnText extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    onClick?: any
    className?: string
    types?:"button" | "submit" | "reset" | undefined
}

const GradientBorder = ({text, onClick, className, types}:BtnText) => {
    return (
        <div className={className}>
            <Button type='submit' onClick={onClick} className={(styles.gradientBorder)}><span className={styles.btnName}>{text}</span></Button>
        </div>
    )
}

export default GradientBorder
