import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./profile.module.css";
import Icon from "../../components/Icon";

// data
import User from "../../components/user/User";
import Header_login from "../../components/header/header_after_login/Header_login";
import Nft from "../../components/NFT/Nft";
import Store from "../../components/store/Store";
import { useSelector, RootStateOrAny } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { firebaseApp } from "../../firebaseConfig";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { profile } from "console";
// import { isStepDivisible } from "react-range/lib/utils";

const navLinks = ["NFT"];

const Profile = () => {
  const { username } = useParams();
  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );
  const [profileData, setProfileData] = useState<any | null>({});
  const [docId, setDocId] = useState("");
  const [profilePhoto, setProfilePhoto] = useState<any | null>();
  const [coverPhoto, setCoverPhoto] = useState<any | null>();

  const userData = useSelector((state: RootStateOrAny) => state?.userData);
  const fetchData = async (username: any) => {
    const db = getFirestore(firebaseApp);
    const q = query(
      collection(db, "hyprUsers"),
      where("username", "==", username)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setDocId(doc.id);
      setProfileData(doc.data());
    });
  };

  const GetProfilePhoto = async () => {
    const storage = getStorage(firebaseApp);
    try {
      console.log(profileData.uid);
      const storagePFref = ref(
        storage,
        "users/" + profileData.uid + "/profile.jpg"
      );
      const storageCoverRef = ref(
        storage,
        "users/" + profileData.uid + "/cover.jpg"
      );

      const url = await getDownloadURL(ref(storagePFref));
      const coverUrl = await getDownloadURL(ref(storageCoverRef));
      setCoverPhoto(coverUrl);
      setProfilePhoto(url);
    } catch (error) {
      console.error(error);
    }
  };

  const ProfileViewCount = async () => {
    const db = getFirestore(firebaseApp);

    const ref = doc(db, "hyprUsers", docId);
    if (docId === uid) {
      //do nothing
    } else {
      await updateDoc(ref, {
        profileViewsCount: profileData?.profileViewsCount + 1,
      })
        .then(() => {
          console.log("++");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  ProfileViewCount();
  GetProfilePhoto();
  useEffect(() => {
    fetchData(username);
  }, [username]);

  const socials = [
    {
      title: "twitter",
      url: "https://twitter.com/" + profileData?.twitterUsername + "/",
    },
    {
      title: "instagram",
      url: "https://www.instagram.com/" + profileData?.instagramUsername + "/",
    },
    {
      title: "facebook",
      url: profileData?.facebookProfileUrl,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Header_login />
      <div className={clsx(styles.profile)}>
        <div
          className={clsx(styles.head, { [styles.active]: visible })}
          style={{
            backgroundImage: `url(${coverPhoto || "images/bg-img.png"} )`,
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

              <Link to="/settings">
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
            <User
              className={styles.user}
              item={socials}
              username={profileData?.username}
              category={profileData?.category}
              name={profileData?.name}
              portfolioUrl={profileData?.portfolioUrl}
              bio={profileData?.bio}
              joiningDate={profileData?.dateOfJoining}
              profilePhotoUrl={profilePhoto}
            />
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
                  {activeIndex === 0 && <Nft />}
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
