import React, { useState,useEffect } from "react"
import styles from "./NFTS.module.css";
import cn from "classnames";
import Users from "./Users/Users";
import Bidders from "./Bidders/Bidders";
import Option from "./Options/Option";
import Header_login from "../../components/header/header_after_login/Header_login";
import { ArrowLeft } from "phosphor-react";
import Nft from "../../components/NFT/Nft";
import { Link } from "react-router-dom";
import GradBorder from "./GradBorder/GradBorder";
import { Avatar } from "@mui/material";
import ReadMore from "./Readmore/Readmore";
import Polygon from "./Poly/Polygon";
import { style } from "@mui/system";
import ItemsCarousel from "./ItemsCarousel/ItemsCarousel";
import Perks from "./Perks/Perks";
import { useParams } from "react-router";


const Desc = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."


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


const Perk_list = [
    {
        id: 1,
        content: "Unlock the creator discord channel.",
    },
    {
        id: 2,
        content: "Get a free workbook with over 25 different art prompts!",
    },
    {
        id: 3,
        content: "I dont know I googled this from some patreon page.",
    },

    {
        id: 4,
        content: "Unlock the creator discord channel.",
    },
    {
        id: 5,
        content: "Get a free workbook with over 25 different art prompts!",
    },
]

const NFTS = () => {
    const {collectionTag , idToken} = useParams();

    useEffect(()=>{
        // const idToken = new URLSearchParams(window?.location?.search).get("idToken");
        console.log(collectionTag);
        console.log(idToken);
    },[collectionTag,idToken])

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
                                <Option className={styles.options} />
                            </div>
                        </div>

                        <div className={styles.details}>
                            <h1 className={styles.title}>Edward Scissorhands</h1>
                            <div className={styles.cost}>
                                <GradBorder className={styles.price} text="10,075 INR" />
                                <span className={styles.Stock}>10 in Stock</span>
                            </div>

                            <GradBorder text="Buy Now" className={styles.buy} />

                            <div className={styles.Description_Perks}>
                                <h3 className={styles.subHeading}>Description</h3>
                                <ReadMore>
                                    {Desc}
                                </ReadMore>
                            </div>

                            <div className={styles.Description_Perks}>
                                <h3 className={styles.subHeading}>Perks</h3>
                                <Perks item={Perk_list} />
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
                        <span className={cn(styles.bottomHeading, styles.auth)}>View Authenticity</span>
                        <Polygon className={styles.poly} />
                    </div>
                </div>
                <p className={styles.more}>Discover NFTs Related to Edward Scissorhands</p>
                <ItemsCarousel />
            </div>
        </>
    );
};
export default NFTS;