import React from "react";
import cn from "classnames";
import styles from "./GradBorder.module.css";

interface BtnProps {
  text: string;
  className: any;
  onClickHandler: any;
}

const GradBorder = ({ text, className, onClickHandler }: BtnProps) => {
  return (
    <div>
      <button
        className={cn(styles.gradientBorder, className)}
        onClick={onClickHandler}
      >
        <span className={styles.btnName}>{text}</span>
      </button>
    </div>
  );
};

export default GradBorder;
