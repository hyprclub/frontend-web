import clsx from "clsx";
import React, { useState, useEffect } from "react";
import styles from "./editProfile.module.css";
import InputField from "../../inputField/Input";
import GradientBorder from "../../gradientBorderBtn/GradientBorder";
import { useSelector, RootStateOrAny } from "react-redux";

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
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const EditProfile = () => {
  const [file, setFile] = useState<any>(null);
  const storage = getStorage(firebaseApp);

  const userData = useSelector((state: RootStateOrAny) => state?.userData);

  // file changes
  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;
    setFile(file);
    console.log(file.size);
    if (file.size >= 5242880) {
      console.log("File Size Too Big");
    } else {
      const storagePFref = ref(
        storage,
        "users/" + userData.uid + "/profile.jpg"
      );
      await uploadBytesResumable(storagePFref, file)
        .then((result) => {
          
          console.log(result.state);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );

  const [data, setData] = useState<any | null>({});

  // handle update state changes
  const updateState = (e: any) => {
    setData((state: any) => ({ ...state, [e.target.name]: e.target.value }));
    console.log({ data });
  };

  // update user data here.
  const handleSubmit = async () => {
    const db = getFirestore(firebaseApp);
    const ref = doc(db, "hyprUsers", uid);
    console.log(data);

    // await updateDoc(ref, {
    //   name: data.name,
    //   category: data.category,
    //   bio: data.bio,
    //   website: data.website,
    //   instagramUsername: data.instagramUsername,
    //   twitterUsername: data.twitterUsername,
    //   facebookProfileUrl: data.facebookProfileUrl,
    //   youtubeProfileUrl: data.youtubeProfileUrl,
    //   phone: data.phone,
    //   gender: data.gender,
    // })
    //   .then(() => {
    //     console.log("Data Updated");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    setData(userData);
  }, [userData]);
  return (
    <>
      <div className={styles.mainDiv}>
        <h2 className={styles.title}>Edit Profile</h2>
        <div className={clsx("row", styles.content)}>
          <div className={clsx("col-md-3 text-center d-flex", styles.avt)}>
            <div className={clsx("position-relative d-inline")}>
              <img
                src={data.profilePhotoUrl}
                alt=""
                className={styles.pfImage}
              />
              <label htmlFor="fileInput">
                <i
                  className={clsx(
                    "bi position-absolute bi-pencil-fill",
                    styles.pencilIcon
                  )}
                ></i>
              </label>
              <input
                accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
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
                    defaultValue={data.name}
                    // value = {data?.name}
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
                    defaultValue={`${data.category}`}
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
                defaultValue={data?.username}
                lableText="USERNAME"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
                disabled
              />
              <p className={styles.usernameRange}>
                Username can range between 3-10 characters.
              </p>
              <InputField
                garyBold
                half={false}
                name="bio"
                defaultValue={data?.bio}
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
                defaultValue={data?.portfolioUrl}
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
                  defaultValue={data?.instagramUsername}
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
                  defaultValue={data?.twitterUsername}
                  typeOfInput="text"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
              </div>
              <InputField
                garyBold
                half={false}
                name="facebookProfileUrl"
                defaultValue={data?.facebookUrl}
                lableText="FACEBOOK PROFILE URL"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />
              <InputField
                garyBold
                half={false}
                name="youtubeProfileUrl"
                defaultValue={data.youtubeUrl}
                lableText="YOUTUBE CHANNEL URL"
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
                defaultValue={data.email}
                typeOfInput="email"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
                disabled
              />

              <div className={clsx("d-flex", styles.editProf)}>
                <InputField
                  garyBold
                  half
                  name="phone"
                  defaultValue={data?.phone}
                  lableText="PHONE NUMBER"
                  typeOfInput="tel"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
                <InputField
                  garyBold
                  half
                  defaultValue={data?.gender}
                  name="gender"
                  lableText="GENDER"
                  typeOfInput="text"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                  }}
                />
                <InputField
                  garyBold
                  half
                  defaultValue={data.age}
                  name="age"
                  lableText="Age"
                  typeOfInput="number"
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
