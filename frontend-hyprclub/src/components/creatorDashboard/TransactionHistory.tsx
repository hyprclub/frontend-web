import React from "react";
import styles from "./transactionHistory.module.css";
import TransactionSingle from "./transactionSingle/TransactionSingle";
const TransactionHistory = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <h2 className={styles.heading}>Recent Transactions</h2>
        <div className={styles.content}>
          <TransactionSingle
            price="15,560"
            transactionID="HYPR9459207532"
            date={"14/01/2022"}
            NFTname="Homegrown Tulips"
          />
        </div>
        <div className={styles.content}>
          <TransactionSingle
            price="15,560"
            transactionID="HYPR9459207532"
            date={"14/01/2022"}
            NFTname="Homegrown Tulips"
            success
          />
        </div>
        <div>
          <TransactionSingle
            price="15,560"
            transactionID="HYPR9459207532"
            date={"14/01/2022"}
            NFTname="Homegrown Tulips"
            success
          />
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
