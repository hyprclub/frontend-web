import clsx from "clsx";
import React, { useEffect } from "react";
import CreatorStats from "../../components/creatorDashboard/creatorStats/CreatorStats";
import GetHelp from "../../components/creatorDashboard/getHelp/GetHelp";
import MyNfts from "../../components/creatorDashboard/myNFTs/MyNfts";
import SayThanks from "../../components/creatorDashboard/sayThanks/SayThanks";
import Perks from "../../components/creatorDashboard/Perks/Perks";
import TransactionHistory from "../../components/creatorDashboard/TransactionHistory";
import Header_login from "../../components/header/header_after_login/Header_login";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";
import { RootStateOrAny, useSelector } from "react-redux";
import SalesChart from "../../components/creatorDashboard/charts/SalesChart";
const Creator = () => {
  const userData = useSelector((state: RootStateOrAny) => state.userData);
  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state.userData
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (userData?.isCreator && loggedIn && uid) {
    } else {
      navigate("/" + userData?.username);
    }
  }, [userData, loggedIn, uid, navigate]);
  return (
    <>
      <div className={styles.body}>
        <Header_login />
        <div className="container">
          <CreatorStats />
          <div className={clsx("mt-4 pt-4 row", styles.mainDiv)}>
            <div className="col-lg-8">
              <SalesChart />
              <MyNfts />
              <Perks />
              <SayThanks />
            </div>
            <div className="col-lg-4  mt-4 pt-4">
              <TransactionHistory />
              <GetHelp className="mt-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creator;
