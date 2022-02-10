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

const Transaction = () => {
  const [transactionData, setTransactionData] = useState<any>([]);
  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );
  const userData = useSelector((state: RootStateOrAny) => state?.userData);

  useEffect(() => {
    const run = async () => {
      let transactions: any = [];
      if (uid && loggedIn) {
        // console.log(uid);
        // console.log(loggedIn);
        await getDocs(
          query(collection(db, "paymentRecords"), where("buyerUID", "==", uid))
        )
          .then((snapshot) => {
            snapshot.forEach((docs) => {
              if (docs.exists()) {
                transactions.push(docs.data());
              } else {
                transactions.push("Null");
              }
            });
            console.log(transactions);
            setTransactionData(transactions);
          })
          .catch((error) => {
            console.log(error);
          });
        // console.log(transactions[0].amount)
      } else {
        console.log("Not Logged In");
      }
    };
    // console.log(transactionData[0].amount)

    run();
  }, [uid, loggedIn]);
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

        <div className="d-flex justify-content-center mt-5">
          <button className={styles.loadMoreBtn}>Load More</button>
        </div>
      </div>
    </>
  );
};

export default Transaction;
