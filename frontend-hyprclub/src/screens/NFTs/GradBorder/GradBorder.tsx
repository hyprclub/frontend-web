import React from 'react';
import cn from "classnames";
import styles from './GradBorder.module.css';

interface BtnText {
    text: string,
    className:any,
}

const GradBorder = ({text, className}:BtnText) => {
    return (
        <div>
            <button className={cn(styles.gradientBorder,className)}><span className={styles.btnName}>{text}</span></button>
        </div>
    )
}

export default GradBorder
