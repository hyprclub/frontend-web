import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./profile.module.css";
import Icon from "../../components/Icon";


// data
import User from "../../components/user/User";
import Header_login from "../../components/header/header_after_login/Header_login";
import Nft from "../../components/NFT/Nft";

// const navLinks = [
//   "NFT",
// ];

const socials = [
  {
    title: "twitter",
    url: "https://twitter.com/ui8",
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/ui8net/",
  },
  {
    title: "facebook",
    url: "https://www.facebook.com/ui8.net/",
  },
];


const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <>
    <Header_login/>
    <div className={clsx(styles.profile)}>
      <div
        className={clsx(styles.head, { [styles.active]: visible })}
        style={{
          backgroundImage: "url(images/bg-img.png)",
        }}
      >
        <div className={clsx("container", styles.container)}>
          <div className={styles.btns}>
            <button
              className={clsx("button-stroke button-small", styles.button)}
              onClick={() => setVisible(true)}
            >
              <span className="me-2 editCover">Edit cover photo</span>
              <Icon name="edit" size="16" />
            </button>

            <Link
              to="profile-edit"
            >
              <button
               className={clsx("button-stroke button-small", styles.button)}
               >
                <span className="me-2">Edit profile</span>
                <Icon name="image" size="16" />
              </button>
            </Link>
          </div>
          <div className={styles.file}>
            <input type="file" />
            <div className={styles.wrap}>
              <Icon name="upload-file" size="48" />
              <div className={styles.info}>Drag and drop your photo here</div>
              <div className={styles.text}>or click to browse</div>
            </div>
            <button
              className={clsx("button-small", styles.button)}
              onClick={() => setVisible(false)}
            >
              Save photo
            </button>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={clsx("container", styles.container)}>
          <User className={styles.user} item={socials} />
          <div className={styles.wrapper}>
            {/* <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={clsx(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  {x}
                </button>
              ))}
            </div> */}
            <div className={styles.group}>
              <div className={styles.item}>
                {/* {activeIndex === 0 && (
                  <div className={styles.posts}>
                    <div className={styles.postSection}>
                      <SinglePost/>
                      <SinglePost/>
                      <SinglePost/>
                    </div>
                  </div>
                )} */}
                {activeIndex === 0 && (
                  <Nft/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
