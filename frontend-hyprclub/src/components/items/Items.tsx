import React from "react";
import cn from "classnames";
import styles from "./items.module.css";
import Card from "../card/Card";
import clsx from "clsx";
import CardStore from "../store/Card/Card";
import { Link } from "react-router-dom";
import { FileArrowUp } from "phosphor-react";
import GradientBorder from "../gradientBorderBtn/GradientBorder";

const Items = ({ className, items, created, nft, owned }:any) => {
  return (
    <div className={cn(styles.items, className)}>
      <div className={clsx(styles.list, 'row')}>
        {(items.length!==0) ? items.map((x:any, index:any) => (
          nft ?
          <Link className="col-md-6 col-lg-4" to='/nft' key={index}>
            <Card created={created} className={clsx(styles.card, '')} item={x} key={index} />
           </Link>
          :  
          <CardStore className={clsx(styles.card, 'col-md-4')} item={x} key={index} />
        )): 
          <div className="d-flex justify-content-center">
              <div className={styles.firstUpload}>
                <FileArrowUp className={styles.icon} size={76} />
                <h2>Create Your first NFT</h2>
                <p>Sell your work as NFT and reach a wide audience!</p>
                <GradientBorder text="Upload"/>
              </div>
          </div>
        }
      </div>
      
    </div>
  );
};

export default Items;
