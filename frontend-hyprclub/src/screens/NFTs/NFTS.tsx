import React, { useState } from "react"
import styles from "./NFTS.module.css";
import cn from "classnames";
import Users from "./Users/Users";
import Bidders from "./Bidders/Bidders";
import BuyBtn from "./BuyBtn/BuyBtn";
import Option from "./Options/Option";
import Header_login from "../../components/header/header_after_login/Header_login";
import { ArrowLeft } from "phosphor-react";
import Nft from "../../components/NFT/Nft";
import { Link } from "react-router-dom";
import GradBorder from "./GradBorder/GradBorder";
import { Avatar } from "@mui/material";
import ReadMore from "./Readmore/Readmore";
import Polygon from "./Poly/Polygon";


const navLinks = ["Info", "Bids"];

const users = [
    {
        name: "HyprClub",
        position: "Owner",
        avatar: "./images/logo-dark.jpg"
    },
    {
        name: "HyprClub",
        position: "Creator",
        avatar: "./images/logo-dark.jpg"
    },
];

const bidders = [
    {
        name: "HyprClub",
        id: "@hyprclub",
        avatar: "./images/logo-dark.jpg",
        bids: "11,345 INR"

    },
    {
        name: "HyprClub",
        id: "@hyprclub",
        avatar: "./images/logo-dark.jpg",
        bids: "9,345 INR"
    },
];

const NFTS = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isViewMore, setIsViewMore] = useState(true);
    const toggleReadMore = () => {
        setIsViewMore(!isViewMore);
    };

    return (
        <>
            <Header_login />
            <div className={styles.Wrapper}>
                <p className={styles.back}><Link className={styles.link} to="#"><ArrowLeft size={20} id={styles.backArrow} /> <span className={styles.spn}>Go Back</span></Link></p>
                <div className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.bg}>
                            <div className={styles.preview}>
                                <img
                                    id={styles.img}
                                    src="./images/nft-image.png"
                                    alt="NFT"
                                />
                            </div>
                            <Option className={styles.options} />
                        </div>

                        <div className={styles.details}>
                            <h1 className={styles.title}>Edward Scissorhands</h1>
                            <div className={styles.cost}>
                                <GradBorder className={styles.price} text="10,075 INR" />
                                <div className={styles.avatar}>
                                    <Avatar alt="profile" src="./images/nftprofile.png" id={styles.ava}/>
                                    <div className={styles.accountInfo}>
                                        <span className={styles.accid}>Creator</span>
                                        <span className={styles.accId}>@chootalks</span>
                                    </div>
                                </div>
                            </div>
                            <BuyBtn text="Buy Now" className={styles.buy} />
                            <div className={styles.Description_Perks}>
                                <h3 className={styles.subHeading}>Description</h3>
                                <p className={styles.info}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <ReadMore>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </ReadMore>
                            </div>

                            <div className={styles.Description_Perks}>
                                <h3 className={styles.subHeading}>Perks</h3>
                                <ul className={styles.ul}>
                                    <li className={styles.li}>Unlock the creator discord channel </li>
                                    <li className={styles.li}>Get a free workbook with over 25 different art prompts! </li>
                                    <li className={styles.li}>I dont know I googled this from some patreon page. </li>
                                </ul>
                                <span onClick={toggleReadMore} className={cn(styles.readHide,styles.view2)}>
                                    {isViewMore ? "View more" : " View less"}
                                </span>

                            </div>


                            <div className={styles.nav}>
                                {navLinks.map((x, index) => (
                                    <button
                                        className={cn(
                                            { [styles.active]: index === activeIndex },
                                            styles.navbtn)}
                                        onClick={() => setActiveIndex(index)}
                                        key={index}>
                                        {x}
                                    </button>
                                ))}
                            </div>
                            {activeIndex === 0 && <Users className={styles.users} items={users} />}
                            {activeIndex === 1 && <Bidders className={styles.users} items={bidders} />}
                            <Polygon className={styles.poly}/>
                        </div>
                    </div>
                </div>
                <p className={styles.more}>Discover NFTs Related to Edward Scissorhands</p>
                <Nft />
            </div>
        </>
    );
};
export default NFTS;