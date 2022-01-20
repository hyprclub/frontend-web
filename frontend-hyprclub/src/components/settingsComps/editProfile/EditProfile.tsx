import clsx from "clsx";
import React from "react";
import styles from "./editProfile.module.css";
import InputField from "../../inputField/Input";
import GradientBorder from "../../gradientBorderBtn/GradientBorder";
import { useSelector, RootStateOrAny } from "react-redux";
import { useState, useEffect } from "react";
import { firebaseApp } from "../../../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

const EditProfile = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    username: "",
    bio: "",
    website: "",
    instagramUsername: "",
    twitterUsername: "",
    facebookProfileUrl: "",
    youtubeProfileUrl: "",
    email: "",
    phone: "",
    gender: ""
  });
  const [uid, setUid] = useState("");
  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
    console.log({ data });
  };
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
    } else {
      // User is signed out
      // ...
    }
  });
  const handleSubmit = async() => {
    const db = getFirestore(firebaseApp);
    const ref = doc(db, "hyprUsers", uid);
    updateDoc(ref, {
      name: data.name,
      category: data.category,
      username: data.username,
      bio: data.bio,
      website: data.website,
      instagramUsername: data.instagramUsername,
      twitterUsername: data.twitterUsername,
      facebookProfileUrl: data.facebookProfileUrl,
      youtubeProfileUrl: data.youtubeProfileUrl,
      email: data.email,
      phone: data.phone,
      gender: data.gender
    })
      .then(() => {
        console.log("Data Updated");
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <>
      <div className={styles.mainDiv}>
        <h2 className={styles.title}>Edit Profile</h2>
        <div className={clsx("row", styles.content)}>
          <div className={clsx("col-md-3 text-center d-flex", styles.avt)}>
            <div className={clsx("position-relative d-inline")}>
              <img src="images/pfImage.png" alt="" className={styles.pfImage} />
              <i
                className={clsx(
                  "bi position-absolute bi-pencil-fill",
                  styles.pencilIcon
                )}
              ></i>
            </div>
          </div>
          <div className={clsx("col-md-9", styles.inputs)}>
            <div className={styles.userDetails}>
              <div className={clsx("d-flex", styles.editProf)}>
                <div className={clsx("flex-grow-1", styles.inName)}>
                  <InputField
                    garyBold
                    half={false}
                    name="name"
                    lableText="NAME"
                    typeOfInput="text"
                    value={"Lorem Ipsum"}
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                </div>
                <div className="flex-grow-1">
                  <InputField
                    garyBold
                    half={false}
                    name="category"
                    lableText="CATEGORY"
                    typeOfInput="text"
                    value={"Digital Artist"}
                    onChange={(e: React.ChangeEvent<any>) => {
                      updateState(e);
                    }}
                  />
                </div>
              </div>
              <InputField
                garyBold
                half={false}
                name="username"
                value={"@loremipsum_"}
                lableText="USERNAME"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />
              <p className={styles.usernameRange}>
                Username can range between 3-10 characters.
              </p>
              <InputField
                garyBold
                half={false}
                name="bio"
                value={"lorem@hyprclub.com"}
                lableText="BIO"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />
              <InputField
                garyBold
                half={false}
                name="website"
                value={"www.lorem.art"}
                lableText="WEBSITE"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />
            </div>
            <div className={styles.linkedAccounts}>
              <h3 className={styles.sectionHeading}>Linked Accounts</h3>
              <div className={clsx("d-flex", styles.editProf)}>
                <InputField
                  garyBold
                  half
                  name="instagramUsername"
                  lableText="INSTAGRAM"
                  value={"@loremipsum"}
                  typeOfInput="text"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
                <InputField
                  garyBold
                  half
                  name="twitterUsername"
                  lableText="TWITTER"
                  value={"@loremipsum"}
                  typeOfInput="text"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
              </div>
              <InputField
                garyBold
                half={false}
                name= "facebookProfileUrl"
                value={"www.facebook.com/loremipsum"}
                lableText="FACEBOOK"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />
              <InputField
                garyBold
                half={false}
                name= "youtubeProfileUrl"
                value={"www.youtube.com/c/hyprclub"}
                lableText="YOUTUBE"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />
            </div>

            <div className={styles.personalInfos}>
              <h3 className={styles.sectionHeading}>Personal Information</h3>
              <InputField
                garyBold
                half={false}
                name="email"
                lableText="EMAIL ADDRESS"
                value={"lorem@hyprclub.com"}
                typeOfInput="email"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />

              <div className={clsx("d-flex", styles.editProf)}>
                <InputField
                  garyBold
                  half
                  name="phone"
                  value={"+91 9990088776"}
                  lableText="PHONE NUMBER"
                  typeOfInput="tel"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
                <InputField
                  garyBold
                  half
                  value={"Female"}
                  name="gender"
                  lableText="GENDER"
                  typeOfInput="text"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={clsx("col-md-3 text-center d-flex", styles.gradbtn)}>
            <GradientBorder 
              text="Save Changes" 
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

export default EditProfile;
