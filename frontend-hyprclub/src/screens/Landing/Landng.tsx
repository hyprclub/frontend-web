import React from "react";
import styles from "./Landing.module.css";
import PostButton from "../../components/postButton/PostButton";
import Header from "../../components/header/header_before_login/Header";
import { height, style } from "@mui/system";
import { Button} from "react-bootstrap";
import BG_STARS from "./BG_STARS.svg";
import clsx from 'clsx';
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";


const Landing = () => {
  return (
    <>
    <Header/>
    {/* style={{ backgroundImage: `url(${BG_STARS})` }} */}
      <div className={styles.part1}  >
        <div className={styles.hypr}><span><a>HYPRCLUB</a>&nbsp;PRESENTS</span></div>
        <div className={styles.Revolution}>The Next <span>Social <br></br> Revolution</span></div>
        <div className={styles.SocialNetwork}>A Social Network where Creator Economy<br></br> meets the Metaverse.</div>
        <Button className={styles.postBtna}> <span className={styles.PostbtnTexta}>Get Early Access</span></Button>
        {/* <PostButton btnText='Get Early Access' small={false}></PostButton></div> */}
      </div>


      <div className={styles.buyNFT}>
          <p className={styles.forthefirsttime}>FOR THE FIRST TIME IN INDIA</p>
          <p className={styles.buyNFTwithUPI}>Buy NFTs with UPI.</p>
          <p className={styles.buyNFTdesc}>It is no longer difficult or complex to be a part of the metaverse. Easily Buy or Sell NFTs through existing transaction methods like UPI, Credit/Debit & BNPL.</p>
          <div>
            <p className={styles.paymentSec}>Payments secured through</p>
              <img src="images/razorpay.png" alt="" />
          </div>
          <div>
            <img className={styles.visaImg} src="images/visa.png" alt="" />
            <img className={styles.mastercardImg} src="images/mastercard.png" alt="" />
            <img className={styles.upiImg} src="images/upi.png" alt="" />
            <img className={styles.rupayImg} src="images/rupay.png" alt="" />
          </div>

          <img className={styles.nftcards} src="images/nft cards.png" alt="" />
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


            {/* <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={4}
            >
            <Slider>

              <Slide index={0}>
                  <div className={clsx(styles.card, styles.thanks)}>
                    <div className={styles.cardInside}>
                      <div className={styles.imgDiv}>
                        <img className={styles.cardImg} src="images/Present-1.png" alt="" />
                      </div>
                        <h3 className={styles.cardTitle}>Say Thanks</h3>
                        <p>Encourage your favorite creator to continue their work by contributing with ‘Say Thanks’!</p>
                      </div>
                  </div>
                </Slide>


              

              <Slide index={1}>
              
                <div className={clsx(styles.card, styles.CreatorStore)}>
                  <div className={styles.cardInside}>
                    <div className={styles.imgDiv}>
                      <img className={styles.cardImg} src="images/Trolly2.png" alt="" />
                    </div>
                      <h3 className={styles.cardTitle}>Creator Store</h3>
                      <p>Buy NFTs from your favorite creators and unlock special perks curated exclusively!</p>
                    </div>
                </div>
              </Slide>

             <Slide index={2}>

              <div className={clsx(styles.card, styles.nftWithPerks)}>
                <div className={styles.cardInside}>
                  <div className={styles.imgDiv}>
                    <img className={styles.cardImg} src="images/Diamond.png" alt="" />
                  </div>
                    <h3 className={styles.cardTitle}>NFTs With Perks</h3>
                    <p>Buy NFTs from your favorite creators and unlock special perks curated exclusively!</p>
                  </div>
              </div>
              </Slide>
            



          <Slide index={3}>
          
              <div className={clsx(styles.card, styles.membership)}>
                <div className={styles.cardInside}>
                  <div className={styles.imgDiv}>
                    <img className={styles.cardImg} src="images/shoping.png" alt="" />
                  </div>
                    <h3 className={styles.cardTitle}>Memberships</h3>
                    <p>Buy NFTs from your favorite creators and unlock special perks curated exclusively!</p>
                  </div>
              </div>
              </Slide>

              </Slider>
            </CarouselProvider>
            */}
      </div>
    </>
  );
};
// width 120
// Trolly2
// height55
export default Landing;
