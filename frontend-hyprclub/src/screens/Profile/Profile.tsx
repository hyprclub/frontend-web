import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./profile.module.css";
import Icon from "../../components/Icon";

// data
import Followers from "../../components/followers/Followers";
import User from "../../components/user/User";
import Items from "../../components/items/Items";
import { Iitems } from "../../components/item";
import Header_login from "../../components/header/header_after_login/Header_login";
import SinglePost from "../../components/feedComponents/singlePost/SinglePost";
import Nft from "../../components/NFT/Nft";
import Store from "../../components/store/Store";
import { useSelector ,RootStateOrAny } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
// import { isStepDivisible } from "react-range/lib/utils";

const navLinks = [
  "NFT",
];



// const following = [
//   {
//     name: "Sally Fadel",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-5.jpg",
//     url: "https://ui8.net",
//     buttonClass: "stroke",
//     buttonContent: "Unfollow",
//     gallery: [
//       "/images/content/follower-pic-1.jpg",
//       "/images/content/follower-pic-2.jpg",
//       "/images/content/follower-pic-3.jpg",
//       "/images/content/follower-pic-4.jpg",
//     ],
//   },
//   {
//     name: "Aniya Harber",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-6.jpg",
//     url: "https://ui8.net",
//     buttonClass: "stroke",
//     buttonContent: "Unfollow",
//     gallery: [
//       "/images/content/follower-pic-5.jpg",
//       "/images/content/follower-pic-6.jpg",
//       "/images/content/follower-pic-1.jpg",
//       "/images/content/follower-pic-3.jpg",
//     ],
//   },
//   {
//     name: "Edwardo Bea",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-7.jpg",
//     url: "https://ui8.net",
//     buttonClass: "stroke",
//     buttonContent: "Unfollow",
//     gallery: [
//       "/images/content/follower-pic-4.jpg",
//       "/images/content/follower-pic-1.jpg",
//       "/images/content/follower-pic-3.jpg",
//       "/images/content/follower-pic-6.jpg",
//     ],
//   },
//   {
//     name: "Reymundo",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-8.jpg",
//     url: "https://ui8.net",
//     buttonClass: "stroke",
//     buttonContent: "Unfollow",
//     gallery: [
//       "/images/content/follower-pic-5.jpg",
//       "/images/content/follower-pic-2.jpg",
//       "/images/content/follower-pic-6.jpg",
//       "/images/content/follower-pic-1.jpg",
//     ],
//   },
//   {
//     name: "Jeanette",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-9.jpg",
//     url: "https://ui8.net",
//     buttonClass: "stroke",
//     buttonContent: "Unfollow",
//     gallery: [
//       "/images/content/follower-pic-1.jpg",
//       "/images/content/follower-pic-3.jpg",
//       "/images/content/follower-pic-5.jpg",
//       "/images/content/follower-pic-4.jpg",
//     ],
//   },
// ];

// const followers = [
//   {
//     name: "Sally Fadel",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-5.jpg",
//     url: "https://ui8.net",
//     buttonClass: "blue",
//     buttonContent: "Follow",
//     gallery: [
//       "/images/content/follower-pic-1.jpg",
//       "/images/content/follower-pic-2.jpg",
//       "/images/content/follower-pic-3.jpg",
//       "/images/content/follower-pic-4.jpg",
//     ],
//   },
//   {
//     name: "Aniya Harber",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-6.jpg",
//     url: "https://ui8.net",
//     buttonClass: "blue",
//     buttonContent: "Follow",
//     gallery: [
//       "/images/content/follower-pic-5.jpg",
//       "/images/content/follower-pic-6.jpg",
//       "/images/content/follower-pic-1.jpg",
//       "/images/content/follower-pic-3.jpg",
//     ],
//   },
//   {
//     name: "Edwardo Bea",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-7.jpg",
//     url: "https://ui8.net",
//     buttonClass: "blue",
//     buttonContent: "Follow",
//     gallery: [
//       "/images/content/follower-pic-4.jpg",
//       "/images/content/follower-pic-1.jpg",
//       "/images/content/follower-pic-3.jpg",
//       "/images/content/follower-pic-6.jpg",
//     ],
//   },
//   {
//     name: "Reymundo",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-8.jpg",
//     url: "https://ui8.net",
//     buttonClass: "blue",
//     buttonContent: "Follow",
//     gallery: [
//       "/images/content/follower-pic-5.jpg",
//       "/images/content/follower-pic-2.jpg",
//       "/images/content/follower-pic-6.jpg",
//       "/images/content/follower-pic-1.jpg",
//     ],
//   },
//   {
//     name: "Jeanette",
//     counter: "161 followers",
//     avatar: "/images/content/avatar-9.jpg",
//     url: "https://ui8.net",
//     buttonClass: "blue",
//     buttonContent: "Follow",
//     gallery: [
//       "/images/content/follower-pic-1.jpg",
//       "/images/content/follower-pic-3.jpg",
//       "/images/content/follower-pic-5.jpg",
//       "/images/content/follower-pic-4.jpg",
//     ],
//   },
// ];

const Profile = () => {          // props to be passed here 

  const {username} = useParams();
  const userData = useSelector(
    (state :RootStateOrAny) => state?.userData
  );

  // useEffect(()=>{
  //   if(props && props.match && props.match.params) {
  //     const {
  //       match : {
  //         params : {username}
  //       },

  //     } = props;
  //   }

  // },[props])
  const socials = [
    {
      title: "twitter",
      url: "https://twitter.com/" + userData?.twitterUsername + "/",
    },
    {
      title: "instagram",
      url: "https://www.instagram.com/" + userData?.instagramUsername + "/" ,
    },
    {
      title: "facebook",
      url: userData?.facebookUrl,
    },
  ];
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
              to="settings"
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
