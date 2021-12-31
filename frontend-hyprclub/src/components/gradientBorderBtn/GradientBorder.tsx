import React from 'react'
import { Button } from 'react-bootstrap';
import styles from './gradientBorderBtn.module.css';

interface BtnText {
    text: string
}

const GradientBorder = ({text}:BtnText) => {
    return (
        <div>
            <Button className={styles.gradientBorder}><span className={styles.btnName}>{text}</span></Button>
        </div>
    )
}

export default GradientBorder
