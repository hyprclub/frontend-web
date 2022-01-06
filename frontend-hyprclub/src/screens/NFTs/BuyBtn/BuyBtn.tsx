import React from 'react'
import { Button } from 'react-bootstrap';
import styles from './BuyBtn.module.css';
import cn from "classnames";
interface BtnText {
    text: string,
    className:string
}

const BuyBtn = ({text, className}:BtnText) => {
    return (
        <>
            <Button id={styles.buyBtn} className={cn(styles.gradientBorder, className)}><span className={styles.btnName}>{text}</span></Button>
        </>
    )
}

export default BuyBtn
