import clsx from "clsx";
import React, { useState } from "react";
import GradientBorder from "../../gradientBorderBtn/GradientBorder";
import InputField from "../../inputField/Input";
import Switch from "../../switch/Switch";
import styles from "./privacy.module.css";
import { firebaseApp } from "../../../firebaseConfig";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Privacy = () => {
  const [resetEmail, setResetEmail] = useState("");
  const auth = getAuth(firebaseApp);
  const __DEV__ = document.domain === "localhost";
  const updateState = (e: React.ChangeEvent<any>) => {
    setResetEmail(e.target.value);
  };

  const resetPassword = async () => {
    sendPasswordResetEmail(auth, resetEmail, {
      url: __DEV__
        ? "http://localhost:3000/login"
        : "http://hyprclub.com/login",
    });
    console.log("Email sent");
  };
  return (
    <>
      <div className={styles.mainDiv}>
        <h2 className={styles.title}>Privacy & Security</h2>
        <div className={styles.content}>
          <div className={styles.private}>
            <h3 className={styles.heading}>Private Account</h3>
            <div
              className={clsx("d-flex align-items-center", styles.enablepvtdiv)}
            >
              <p className={styles.enableprivate}>Enable private account</p>
              <Switch />
            </div>
            <p className={styles.desc}>
              By enabling private account, your posts can only be viewed by your
              followers and the accounts that you approve. Follower requests can
              be accessed through Notifications.
            </p>
          </div>

          <div className={styles.changePs}>
            <h3 className={styles.heading}>Change Password</h3>
            <div className={clsx("d-flex mb-2", styles.pass)}>
              <InputField
                placeholder={"example@hyprclub.com"}
                name="email"
                garyBold
                lableText="ENTER REGISTERED EMAIL"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />
            </div>
            <p className={styles.descPass}>
              A password reset link will be sent to your registered email
              address.
            </p>
            <div className={clsx("col-md-3 text-center d-flex", styles.avt)}>
              <GradientBorder onClick={resetPassword} text="Send Email" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
