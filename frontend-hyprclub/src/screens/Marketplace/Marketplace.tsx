import React, { useEffect } from "react";

import Selection from "../../components/Selection";
import Popular from "../../components/Marketplace/Popular/Popular";
import Collections from "../../components/Marketplace/Collections/Collections";
import styles from "./Marketplace.module.css";
import Hero_section from "../../components/Marketplace/Hero_section/Hero_section";
import Header_login from "../../components/header/header_after_login/Header_login";
import Explore from "../../components/Marketplace/Explore/Explore";
import Discover from "../../components/Marketplace/Discover/Discover";
import { getDocs, doc, getFirestore, collection } from "firebase/firestore";
import { firebaseApp } from "../../firebaseConfig";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import userData, { UserDataActions } from "../../redux/slices/userData";

const Marketplace = () => {
  const db = getFirestore(firebaseApp);
  const dispatch = useDispatch();
  const userData = useSelector((state: RootStateOrAny) => state.userData);

  useEffect(() => {
    const run = async () => {
      await getDocs(collection(db, "marketplace", "Nfts", "singleNfts"))
        .then((querySnapShot) => {
          let nftIds: string[] = [];
          querySnapShot.forEach((element) => {
            nftIds.push(element.id);
            // console.log(nftIds);
            dispatch(
              UserDataActions.nftTokenId({
                nftIds: nftIds
                  .map((elem) => parseInt(elem))
                  .sort((a, b) => b - a)
                  .map((elem) => elem.toString()),
              })
            );
            console.log(userData?.nftIds);
          });
        })
        .catch((error) => {
          console.error(error.code);
        });
    };
    run();
  }, [db, dispatch]);

  return (
    <>
      <Header_login />
      <div className={styles.home}>
        <Hero_section />
        <Explore items={userData?.nftIds} />
      </div>
    </>
  );
};

export default Marketplace;
