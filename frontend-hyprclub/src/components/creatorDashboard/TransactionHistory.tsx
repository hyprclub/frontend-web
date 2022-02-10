import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styles from "./transactionHistory.module.css";
import TransactionSingle from "./transactionSingle/TransactionSingle";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const TransactionHistory = () => {
  const userData = useSelector((state: RootStateOrAny) => state?.userData);
  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );
  const [transactionData, setTransactionData] = useState<any>([]);

  useEffect(() => {
    const run = async () => {
      let transactions: any = [];
      if (uid && loggedIn) {
        // console.log(uid);
        // console.log(loggedIn);
        await getDocs(
          query(
            collection(db, "paymentRecords"),
            where("recipientUID", "==", uid)
          )
        )
          .then((snapshot) => {
            snapshot.forEach((docs) => {
              if (docs.exists()) {
                transactions.push(docs.data());
              } else {
                transactions.push("Null");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
        // console.log(transactions[0].amount)
        setTransactionData(transactions);
      } else {
        console.log("Not Logged In");
      }
    };
    // console.log(transactionData[0].amount)

    run();
  }, [uid, loggedIn]);

  let numTrans = Object.keys(transactionData).length;

  return (
    <>
      <div className={styles.mainDiv}>
        <h2 className={styles.heading}>Recent Transactions</h2>
        {numTrans-- && (
          <div className={styles.content}>
            <TransactionSingle
              price={
                transactionData[numTrans > 0 ? --numTrans : numTrans].amount
              }
              transactionID={transactionData[numTrans].razorpayPaymentId}
              date={transactionData[numTrans].timestamp.slice(3, 15)}
              transHead={transactionData[numTrans].transactionType}
              success={
                transactionData[numTrans].transactionSuccess === "success"
              }
            />
          </div>
        )}
        {numTrans-- && (
          <div className={styles.content}>
            <TransactionSingle
              price={
                transactionData[numTrans > 0 ? --numTrans : numTrans].amount
              }
              transactionID={transactionData[numTrans].razorpayPaymentId}
              date={transactionData[numTrans].timestamp.slice(3, 15)}
              transHead={transactionData[numTrans].transactionType}
              success={
                transactionData[numTrans].transactionSuccess === "success"
              }
            />
          </div>
        )}
        {numTrans-- && (
          <div className={styles.content}>
            <TransactionSingle
              price={
                transactionData[numTrans > 0 ? --numTrans : numTrans].amount
              }
              transactionID={transactionData[numTrans].razorpayPaymentId}
              date={transactionData[numTrans].timestamp.slice(3, 15)}
              transHead={transactionData[numTrans].transactionType}
              success={
                transactionData[numTrans].transactionSuccess === "success"
              }
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TransactionHistory;
