import React, { ButtonHTMLAttributes } from 'react'
import { Button } from 'react-bootstrap';
import styles from './gradientBorderBtn.module.css';

interface BtnText extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    onClick?: any
}

const GradientBorder = ({text, onClick}:BtnText) => {
    return (
        <div>
            <button onClick={onClick} className={styles.gradientBorder}><span className={styles.btnName}>{text}</span></button>
        </div>
    )
}

export default GradientBorder
