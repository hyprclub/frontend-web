import React from "react";
import cn from "classnames";
import styles from "./items.module.css";
import Card from "../card/Card";
import clsx from "clsx";
import CardStore from "../store/Card/Card";

const Items = ({ className, items, created, nft }:any) => {
  return (
    <div className={cn(styles.items, className)}>
      <div className={clsx(styles.list, 'row')}>
        {items.map((x:any, index:any) => (
          nft ?
          <Card created={created} className={clsx(styles.card, 'col-md-6 col-lg-4')} item={x} key={index} />
          :  
          <CardStore className={clsx(styles.card, 'col-md-4')} item={x} key={index} />
        ))}
      </div>
      
    </div>
  );
};

export default Items;
