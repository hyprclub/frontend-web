import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import GradientBorder from "../../gradientBorderBtn/GradientBorder";
import styles from "./getHelp.module.css";

const GetHelp = () => {
  return (
    <>
      <div className={clsx(styles.mainDiv)}>
        <h1 className={styles.heading}>Get Help</h1>
        <div className={clsx(styles.content)}>
            <p className={styles.ques}>Got any questions? Check out our <Link to='#'><span>FAQ page.</span></Link></p>
            <p className={styles.ques}>Couldn’t find your query? Ask us here!</p>

            <label className={styles.lableText} htmlFor="exampleFormControlTextarea1">ASK YOUR QUERY</label>
            <textarea className={clsx("form-control", styles.textarea)} id="exampleFormControlTextarea1" rows={5}></textarea>
            <div className={clsx('text-center d-flex',styles.avt)}>
                        <GradientBorder text='Submit'/>
            </div>
        </div>
      </div>
    </>
  );
};

export default GetHelp;
