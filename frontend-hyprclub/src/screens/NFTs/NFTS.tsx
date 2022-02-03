/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import styles from "./NFTS.module.css";
import cn from "classnames";
import Users from "./Users/Users";
// import Bidders from "./Bidders/Bidders";
import Option from "./Options/Option";
import Header_login from "../../components/header/header_after_login/Header_login";
import { ArrowLeft } from "phosphor-react";
// import Nft from "../../components/NFT/Nft";
import { Link } from "react-router-dom";
import GradBorder from "./GradBorder/GradBorder";
// import { Avatar } from "@mui/material";
// import ReadMore from "./Readmore/Readmore";
import Polygon from "./Poly/Polygon";
// import { style } from "@mui/system";
import ItemsCarousel from "./ItemsCarousel/ItemsCarousel";
import Perks from "./Perks/Perks";
import displayRazorpay from "../../razorpay";
import { useParams } from "react-router";
import {
  getFirestore,
  //   getDocs,
  //   collection,
  doc,
  getDoc,
  //   QuerySnapshot,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { firebaseApp } from "../../firebaseConfig";

// const Desc =
//   " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// const Perk_list = [
//     {
//         id: 1,
//         content: "Unlock the creator discord channel.",
//     },
//     {
//         id: 2,
//         content: "Get a free workbook with over 25 different art prompts!",
//     },
//     {
//         id: 3,
//         content: "I dont know I googled this from some patreon page.",
//     },

//     {
//         id: 4,
//         content: "Unlock the creator discord channel.",
//     },
//     {
//         id: 5,
//         content: "Get a free workbook with over 25 different art prompts!",
//     },
// ]

const NFTS = () => {
  const { collectionTag, idToken } = useParams();
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  const [creatorData, setCreatorData] = useState<any | null>({});
  const [ownerData, setOwnerData] = useState<any | null>({});
  const [item, setItem] = useState<any | null>({});
  const [itemPrice, setItemPrice] = useState(0);
  //   let perkId: any = [];
  const [perks, setPerksData] = useState<any>([]);
  const [creatorImage, setCreatorImage] = useState("");
  const [ownerImage, setOwnerImage] = useState("");

  const users = [
    {
      name: ownerData.name,
      position: "Owner",
      avatar: ownerImage || "../../images/logo-dark.jpg",
    },
    {
      name: creatorData.name,
      position: "Creator",
      avatar: creatorImage || "../../images/logo-dark.jpg",
    },
  ];

  useEffect(() => {
    // const idToken = new URLSearchParams(window?.location?.search).get("idToken");
    const run = async () => {
      if (collectionTag && idToken) {
        await getDoc(doc(db, "marketplace", "Nfts", collectionTag, idToken))
          .then((QuerySnapshot) => {
            console.log("1");
            if (QuerySnapshot.exists()) {
              console.log(QuerySnapshot.data().perks);
              console.log(QuerySnapshot.data().price);
              setItemPrice(QuerySnapshot.data().price);
              setPerksData(QuerySnapshot.data().perks);
              //   let Perk_list: any = [];
              axios
                .get("https://cdn.hyprclub.com/alumini/" + idToken) // add custom uri settings here.
                .then((result) => {
                  if (result) {
                    setItem(result.data);
                  } else {
                    console.log("No Data");
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
              getDoc(doc(db, "hyprUsers", QuerySnapshot.data().ownerUid))
                .then((snapshotOwner) => {
                  if (snapshotOwner.exists()) {
                    const storageOwnerRef = ref(
                      storage,
                      "users/" + snapshotOwner.id + "/profile.jpg"
                    );
                    getDownloadURL(ref(storageOwnerRef))
                      .then((url) => {
                        console.log(url);
                        setOwnerImage(url);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                    setOwnerData(snapshotOwner.data());
                    console.log("Owner : " + snapshotOwner.data());
                  } else {
                  }
                })
                .catch((err) => {
                  console.log(err);
                });

              getDoc(doc(db, "hyprUsers", QuerySnapshot.data().creatorUid))
                .then((snapshotCreator) => {
                  if (snapshotCreator.exists()) {
                    setCreatorData(snapshotCreator.data());
                    console.log("Creator : " + snapshotCreator.data());
                    const storageCreatorRef = ref(
                      storage,
                      "users/" + snapshotCreator.id + "/profile.jpg"
                    );
                    getDownloadURL(ref(storageCreatorRef))
                      .then((url) => {
                        console.log(url);
                        setCreatorImage(url);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              console.log("No snapshot");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
      }
    };
    run();
  }, [collectionTag, idToken, db, storage]);

  return (
    <>
      <Header_login />
      <div className={styles.Wrapper}>
        <p className={styles.back}>
          <Link className={styles.link} to="#">
            <ArrowLeft size={20} id={styles.backArrow} />{" "}
            <span className={styles.spn}>Go Back</span>
          </Link>
        </p>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.bg}>
              <div className={styles.preview}>
                <img
                  id={styles.img}
                  src={item.image || "../../images/nft-image.png"}
                  alt="NFT"
                />
                <Option className={styles.options} />
              </div>
            </div>

            <div className={styles.details}>
              <h1 className={styles.title}>{item.name}</h1>
              <div className={styles.cost}>
                <GradBorder
                  className={styles.price}
                  text={` INR ${itemPrice}`}
                  onClickHandler={() => {}}
                />
                {/* <span className={styles.Stock}>10 in Stock</span> */}
              </div>

              <GradBorder
                text="Buy Now"
                className={styles.buy}
                onClickHandler={displayRazorpay}
              />

              <div className={styles.Description_Perks}>
                <h3 className={styles.subHeading}>Description</h3>
                {item.description}
              </div>

              <div className={styles.Description_Perks}>
                <h3 className={styles.subHeading}>Perks</h3>
                <Perks item={perks} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.Bottom_part}>
            <span className={styles.bottomHeading}>Owners</span>
            <Users className={styles.users} items={users} />
          </div>
          <div className={styles.Bottom_part1}>
            <span className={cn(styles.bottomHeading, styles.auth)}>
              View Authenticity
            </span>
            <Polygon className={styles.poly} />
          </div>
        </div>
        <p className={styles.more}>
          Discover NFTs Related to Edward Scissorhands
        </p>
        <ItemsCarousel />
      </div>
    </>
  );
};
export default NFTS;
