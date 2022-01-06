import React from 'react'
import {Star} from 'phosphor-react'
import cn from "classnames";
import styles from "./Option.module.css"

interface Option{
    className: string
}
const Option=({className}:Option)=>{
    return (
        <>
        <button className={cn(styles.options, className)}>
          <Star size={40} id={styles.star}/>

        </button>
        </>
    )
}

export default Option
