import clsx from "clsx";
import React from "react";
import SingleTransaction from "./singleTransaction/SingleTransaction";
import styles from "./transaction.module.css";

const Transaction = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <h2 className={styles.title}>Transaction History</h2>
        <div className={styles.content}>
        <div className={clsx("container",styles.tranInfo)}>
            <div className={clsx("row",styles.row)}>
              <div className={clsx("col-sm",styles.contP)}>Product</div>
              <div className={clsx("col-sm",styles.contD)}>Date</div>
              <div className={clsx("col-sm",styles.contT)}>Transaction ID</div>
              <div className={clsx("col-sm",styles.contO)}><p>Item Type</p></div>
              <div className={clsx("col-sm ",styles.contS)}>Status</div>
              <div className={clsx("col-sm",styles.contO)}><p>Order Total</p></div>
            </div>
          </div>

          <SingleTransaction
            price="10,475"
            transactionID="HYPR9459207532"
            transactionType="SayThanks"
            date={"14/01/2022"}
            success
            NFTname="Ethereal Skies"
          />
          <SingleTransaction
            price="15,560"
            transactionID="HYPR9459207532"
            transactionType="SayThanks"
            date={"14/01/2022"}
            NFTname="Homegrown Tulips"
          />
          <SingleTransaction
            price="10,475"
            transactionID="HYPR9459207532"
            transactionType="SayThanks"
            date={"14/01/2022"}
            success
            NFTname="Ethereal Skies"
          />
          <SingleTransaction
            price="15,560"
            transactionID="HYPR9459207532"
            transactionType="SayThanks"
            date={"14/01/2022"}
            NFTname="Homegrown Tulips"
          />
          <SingleTransaction
            price="10,475"
            transactionID="HYPR9459207532"
            transactionType="SayThanks"
            date={"14/01/2022"}
            success
            NFTname="Ethereal Skies"
          />
          <SingleTransaction
            price="15,560"
            transactionID="HYPR9459207532"
            transactionType="SayThanks"
            date={"14/01/2022"}
            NFTname="Homegrown Tulips"
          />
        </div>

        <div className="d-flex justify-content-center mt-5">
          <button className={styles.loadMoreBtn}>Load More</button>
        </div>
      </div>
    </>
  );
};

export default Transaction;
