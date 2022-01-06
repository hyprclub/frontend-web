import React from "react";
import styles from "./Landing.module.css";
import PostButton from "../../components/postButton/PostButton";
import Header_login from "../../components/header/header_after_login/Header_login";
import { height, style } from "@mui/system";
import { Button } from "react-bootstrap";
import BG_STARS from "./BG_STARS.svg";
import clsx from 'clsx';
const Landing = () => {
  return (
    <>
    <Header_login/>
    {/* style={{ backgroundImage: `url(${BG_STARS})` }} */}
      <div className={styles.part1}  >
        <div className={styles.hypr}><span><a>HYPRCLUB</a>&nbsp;PRESENTS</span></div>
        <div className={styles.Revolution}>The Next <span>Social <br></br> Revolution</span></div>
        <div className={styles.SocialNetwork}>A Social Network where Creator Economy<br></br> meets the Metaverse.</div>
        <Button className={styles.postBtna}> <span className={styles.PostbtnTexta}>Get Early Access</span></Button>
        {/* <PostButton btnText='Get Early Access' small={false}></PostButton></div> */}
      </div>

    {/* creativity meets commerce */}
      <div className={clsx(styles.creativity)}>
            <h1 className={styles.title}><span className={styles.gradient}>Creativity </span>Meets <br /><span className={styles.gradient}> Commerce</span></h1>
            <p className={styles.desc}>Create or Join Exclusive Memberships, Buy or Sell Digital & Physical Items via Shop, Support your favourite creator through easy One-Time Payments. </p>
            <div className={clsx(styles.card, styles.thanks)}>
              <div className={styles.cardInside}>
                <div className={styles.imgDiv}>
                  <img className={styles.cardImg} src="images/Present-1.png" alt="" />
                </div>
                  <h3 className={styles.cardTitle}>Say Thanks</h3>
                  <p>Encourage your favorite creator to continue their work by contributing with ‘Say Thanks’!</p>
                </div>
            </div>

          {/* Create store  */}
            <div className={clsx(styles.card, styles.CreatorStore)}>
              <div className={styles.cardInside}>
                <div className={styles.imgDiv}>
                  <img className={styles.cardImg} src="images/Trolly2.png" alt="" />
                </div>
                  <h3 className={styles.cardTitle}>Creator Store</h3>
                  <p>Buy NFTs from your favorite creators and unlock special perks curated exclusively!</p>
                </div>
            </div>

             {/* NFT with perks */}
             <div className={clsx(styles.card, styles.nftWithPerks)}>
              <div className={styles.cardInside}>
                <div className={styles.imgDiv}>
                  <img className={styles.cardImg} src="images/Diamond.png" alt="" />
                </div>
                  <h3 className={styles.cardTitle}>NFTs With Perks</h3>
                  <p>Buy NFTs from your favorite creators and unlock special perks curated exclusively!</p>
                </div>
            </div>


          {/* Membership  */}

            <div className={clsx(styles.card, styles.membership)}>
              <div className={styles.cardInside}>
                <div className={styles.imgDiv}>
                  <img className={styles.cardImg} src="images/shoping.png" alt="" />
                </div>
                  <h3 className={styles.cardTitle}>Memberships</h3>
                  <p>Buy NFTs from your favorite creators and unlock special perks curated exclusively!</p>
                </div>
            </div>
           
      </div>
    </>
  );
};
// width 120
// Trolly2
// height55
export default Landing;
