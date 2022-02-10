import React from "react";
import { Star } from "phosphor-react";
import cn from "classnames";
import styles from "./Option.module.css";

interface Option {
  className: string;
  onClick: any;
}
const Option = ({ className, onClick }: Option) => {
  return (
    <>
      <button onClick={onClick} className={cn(styles.options, className)}>
        <Star size={40} id={styles.star} />
      </button>
    </>
  );
};

export default Option;
