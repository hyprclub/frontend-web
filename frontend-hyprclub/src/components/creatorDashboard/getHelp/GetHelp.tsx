import clsx from "clsx";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { firebaseApp } from "../../../firebaseConfig";
import GradientBorder from "../../gradientBorderBtn/GradientBorder";
import styles from "./getHelp.module.css";

const GetHelp = ({ className }: any) => {
  const [message, setMessage] = useState("");
  const userData = useSelector((state: RootStateOrAny) => state.userData);
  const makeContactUsId = (len: number) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const characterLengths = characters.length;
    for (let i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * characterLengths));
    }
    return result;
  };
  const handleSubmit = async () => {
    const db = getFirestore(firebaseApp);
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    const contactUsId = "CONTACT" + makeContactUsId(26);
    await setDoc(doc(db, "contactus", contactUsId), {
      name: userData?.name,
      contactId: contactUsId,
      phone: userData?.phone,
      email: userData?.email,
      message: message,
      isResolved: false,
      dateOfMessage: date,
      status: "PENDING",
    })
      .then(() => {
        console.log("Data sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className={clsx(styles.mainDiv, className)}>
        <h1 className={styles.heading}>Get Help</h1>
        <div className={clsx(styles.content)}>
          <p className={styles.ques}>
            Got any questions? Check out our{" "}
            <Link to="#">
              <span>FAQ page.</span>
            </Link>
          </p>
          <p className={styles.ques}>Couldn’t find your query? Ask us here!</p>

          <label
            className={styles.lableText}
            htmlFor="exampleFormControlTextarea1"
          >
            ASK YOUR QUERY
          </label>
          <textarea
            className={clsx("form-control", styles.textarea)}
            id="exampleFormControlTextarea1"
            rows={5}
            onChange={(e: React.ChangeEvent<any>) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <div className={clsx("text-center d-flex", styles.avt)}>
            <GradientBorder
              text="Submit"
              onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetHelp;
