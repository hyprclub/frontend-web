import React from 'react'
import { Button } from 'react-bootstrap';
import styles from './gradientBorderBtn.module.css';

interface BtnText {
    text: string
}

const GradientBorder = ({text}:BtnText) => {
    return (
        <div>
            <button className={styles.gradientBorder}><span className={styles.btnName}>{text}</span></button>
        </div>
    )
}

export default GradientBorder
