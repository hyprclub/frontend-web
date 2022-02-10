import clsx from "clsx";
import React, { useEffect, useState } from "react";
import SingleTransaction from "./singleTransaction/SingleTransaction";
import styles from "./transaction.module.css";
import { db } from "../../../firebaseConfig";
import {
  getFirestore,
  query,
  where,
  collection,
  getDocs,
  limit,
  orderBy,
} from "firebase/firestore";
import { RootStateOrAny, useSelector } from "react-redux";

const Transaction = ({ transactionData }: any) => {
  return (
    <>
      <div className={styles.mainDiv}>
        <h2 className={styles.title}>Transaction History</h2>
        <div className={styles.content}>
          <div className={clsx("container", styles.tranInfo)}>
            <div className={clsx("row", styles.row)}>
              <div className={clsx("col-sm", styles.contP)}>Product</div>
              <div className={clsx("col-sm", styles.contD)}>Date</div>
              <div className={clsx("col-sm", styles.contT)}>Transaction ID</div>
              <div className={clsx("col-sm ", styles.contS)}>Status</div>
              <div className={clsx("col-sm", styles.contO)}>
                <p>Order Total</p>
              </div>
            </div>
          </div>

          {transactionData.map((e: any, index: number) => (
            <SingleTransaction
              price={`${e.amount}`}
              transactionID={e.razorpayPaymentId}
              date={e.timestamp.slice(4, 15)}
              success={e.transactionSuccess}
              nftUid={e.purchasedNftUID}
              itemName={e.transactionType}
            />
          ))}
        </div>

        {/* <div className="d-flex justify-content-center mt-5">
          <button className={styles.loadMoreBtn}>Load More</button>
        </div> */}
      </div>
    </>
  );
};

export default Transaction;
