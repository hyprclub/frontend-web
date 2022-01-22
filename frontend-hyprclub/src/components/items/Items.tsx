import React from "react";
import cn from "classnames";
import styles from "./items.module.css";
import Card from "../card/Card";
import clsx from "clsx";
import CardStore from "../store/Card/Card";
import { Link } from "react-router-dom";

const Items = ({ className, items, created, nft, owned,token }:any) => {
  return (
    <div className={cn(styles.items, className)}>
      <div className={clsx(styles.list, 'row')}>
        {items.map((x:any, index:any) => (
          nft ?
          <Link className="col-md-6 col-lg-4" to='/nft' key={index}>
            <Card created={created} className={clsx(styles.card, '')} item={x} key={index} />
           </Link>
          :  
          <CardStore className={clsx(styles.card, 'col-md-4')} item={x} key={index} />
        ))}
      </div>
      
    </div>
  );
};

export default Items;
