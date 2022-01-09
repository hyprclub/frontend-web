import clsx from "clsx";
import React from "react";
import styles from "./editProfile.module.css";
import InputField from "../../inputField/Input";
import GradientBorder from "../../gradientBorderBtn/GradientBorder";
import { useSelector, RootStateOrAny } from "react-redux";

const EditProfile = () => {
  const userData = useSelector((state: RootStateOrAny) => state.userData);
  return (
    <>
      <div className={styles.mainDiv}>
        <h2 className={styles.title}>Edit Profile</h2>
        <div className={clsx("row", styles.content)}>
          <div className={clsx("col-md-3 text-center d-flex")}>
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
              <div className="d-flex">
                <InputField
                  garyBold
                  half
                  lableText="NAME"
                  typeOfInput="text"
                  value={userData?.name}
                  placeholder="Lorem Ipsem"
                />
                <InputField
                  garyBold
                  half
                  lableText="CATEGORY"
                  typeOfInput="text"
                  value={userData?.category}
                  placeholder="Artists"
                />
              </div>
              <InputField
                garyBold
                half={false}
                value={userData?.username}
                lableText="USERNAME"
                typeOfInput="text"
                disabled={true}
              />
              <p className={styles.usernameRange}>
                Username can range between 3-10 characters.
              </p>
              <InputField
                garyBold
                half={false}
                value={userData?.bio}
                lableText="BIO"
                typeOfInput="text"
              />
              <InputField
                garyBold
                half={false}
                value={userData?.portfolioUrl}
                lableText="WEBSITE"
                typeOfInput="text"
              />
            </div>
            <div className={styles.linkedAccounts}>
              <h3 className={styles.sectionHeading}>Linked Accounts</h3>
              <div className="d-flex">
                <InputField
                  garyBold
                  half
                  lableText="INSTAGRAM"
                  value={userData?.instagramUsername}
                  typeOfInput="text"
                />
                <InputField
                  garyBold
                  half
                  lableText="TWITTER"
                  value={userData?.twitterUsername}
                  typeOfInput="text"
                />
              </div>
              <InputField
                garyBold
                half={false}
                value={userData?.facebookUrl}
                lableText="FACEBOOK"
                typeOfInput="text"
                placeholder="www.facebook.com/username"
              />
              <InputField
                garyBold
                half={false}
                value={userData?.youtubeProfileUrl}
                lableText="YOUTUBE"
                typeOfInput="text"
                placeholder="www.youtube.com/username"
              />
            </div>

            <div className={styles.personalInfos}>
              <h3 className={styles.sectionHeading}>Personal Information</h3>
              <InputField
                garyBold
                half={false}
                lableText="EMAIL ADDRESS"
                value={userData?.email}
                disabled={true}
                typeOfInput="email"
              />

              <div className="d-flex">
                <InputField
                  garyBold
                  half
                  value={userData?.phone}
                  lableText="PHONE NUMBER"
                  typeOfInput="tel"
                  placeholder="9899XXX999"
                />
                <InputField
                  garyBold
                  half
                  value={userData?.gender}
                  lableText="GENDER"
                  typeOfInput="text"
                  placeholder="MALE"
                />
              </div>
            </div>
            <div className={styles.button}>
              <GradientBorder text="Save Changes" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
