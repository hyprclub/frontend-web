import React from 'react';
import cn from "classnames";
import styles from './GradBorder.module.css';

interface BtnText {
    text: string,
    className:any,
    onClick?:any,
}

const GradBorder = ({text, className, onClick}:BtnText) => {
    return (
        <div>
            <button className={cn(styles.gradientBorder,className)} onClick={onClick}><span className={styles.btnName}>{text}</span></button>
        </div>
    )
}

export default GradBorder
