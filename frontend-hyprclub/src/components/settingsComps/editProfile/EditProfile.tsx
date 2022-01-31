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
  const [phoneCorrect, setPhoneCorrect] = useState(true);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  const [usernameTaken , setUsernameTaken] = useState(false);
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


  // check for valid phone number or not.
  const checkPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || e.target.value.length > 10) {
      setPhoneCorrect(true);
    } else {
      const phoneValidString = "(0|91)?[7-9][0-9]{9}";
      if (e.target.value.match(phoneValidString)) {
        console.log("Phone num correct");
        setPhoneCorrect(false);
      } else {
        console.log("Phone Num not correct");
        setPhoneCorrect(true);
      }
    }
  };

  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );
  const checkUsername = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
    } else {
      try {
        const q = query(
          collection(db, "hyprUsers"),
          where("username", "==", e.target.value)
        );
        const docSnap = await getDocs(q);
        if (docSnap.size !== 0) {
          console.log("Username Taken");
          setUsernameTaken(true);
        } else {
          setUsernameTaken(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const [data, setData] = useState({
    name: userData.name,
    email: userData.email,
    age: userData.age,
    category: userData.category,
    username: userData.username,
    profilePhotoUrl: userData.profilePhotoUrl,
    bio: userData.bio,
    portfolioUrl: userData.socials.portfolioUrl,
    instagramUsername: userData.socials.instagramUsername,
    twitterUsername: userData.socials.twitterUsername,
    facebookUrl: userData.socials.facebookUrl,
    youtubeUrl: userData.socials.youtubeUrl,
    phone: userData.phone,
    gender: userData.gender,
  });


  // handle update state changes
  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
    console.log({ data });
  };

  
  // update user data here.
  const handleSubmit = async () => {
    const ref = doc(db, "hyprUsers", uid);
    console.log(data);
    console.log(data.twitterUsername)
    if (phoneCorrect === true) {
      console.log("Please Enter Correct Phone Number");
    } else {
      if(usernameTaken){
        console.log("Please Choose Diff Username")
      }else{
        await updateDoc(ref, {
          name: data.name,
          category: data.category,
          bio: data.bio,
          age : data.age,
          username : data.username,
          socials : {
            instagramUsername: data.instagramUsername,
            twitterUsername: data.twitterUsername,
            facebookProfileUrl: data.facebookUrl,
            youtubeProfileUrl: data.youtubeUrl,
            portfolioUrl: data.portfolioUrl
          },
          phone: data.phone,
          gender: data.gender,
        })
          .then(() => {
            console.log("Data Updated");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      
    }
  };

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
                    lableText={"NAME"}
                    typeOfInput="text"
                    value={data?.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.preventDefault();
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
                    value={data.category}
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
                value={data?.username}
                lableText="USERNAME"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                  checkUsername(e);
                }}
              />
              <p className={styles.usernameRange}>
                <br/>
                Username can range between 3-10 characters.
              </p>
              <InputField
                garyBold
                half={false}
                name="bio"
                value={data?.bio}
                lableText="BIO"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />
              <InputField
                garyBold
                half={false}
                name="portfolioUrl"
                value={data?.portfolioUrl}
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
                  value={data?.instagramUsername}
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
                  value={data?.twitterUsername}
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
                value={data?.facebookUrl}
                lableText="FACEBOOK PROFILE URL"
                typeOfInput="text"
                onChange={(e: React.ChangeEvent<any>) => {
                  updateState(e);
                }}
              />
              <InputField
                garyBold
                half={false}
                name="youtubeUrl"
                value={data.youtubeUrl}
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
                value={data.email}
                typeOfInput="email"
                disabled
              />

              <div className={clsx("d-flex", styles.editProf)}>
                <InputField
                  garyBold
                  half
                  name="phone"
                  value={data?.phone}
                  lableText="PHONE NUMBER"
                  typeOfInput="tel"
                  onChange={(e: React.ChangeEvent<any>) => {
                    updateState(e);
                    checkPhoneNumber(e);
                  }}
                />
                <InputField
                  garyBold
                  half
                  value={data?.gender}
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
                  value={data.age}
                  name="age"
                  lableText="Age"
                  typeOfInput="number"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
