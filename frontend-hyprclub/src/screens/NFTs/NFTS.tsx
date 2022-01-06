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
import { style } from "@mui/system";


const navLinks = ["Info", "Bids"];

const users = [
    {
        name: "HyprClub",
        position: "Owner",
        avatar: "./images/logo.png"
    },
    {
        name: "HyprClub",
        position: "Creator", 
        avatar: "./images/logo.png"
    },
];

const  bidders = [
    {
        name: "HyprClub",
        id: "@HyprClub",
        avatar: "./images/logo.png",
        bids:"11,345 INR"

    },
    {
        name: "HyprClub",
        id: "@HyprClub", 
        avatar: "./images/logo.png",
        bids:"9,345 INR"
    },
];


const NFTS = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>  
            <Header_login/>
            <div className={styles.Wrapper}>
            <p className={styles.back}><Link className={styles.link} to="#"><ArrowLeft size={16} /> Go Back to Lorem's Profile</Link></p>
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.bg}>
                        <div className={styles.preview}>
                            <img
                                src="./images/content/item-pic.jpg"
                                alt="NFT"
                            />
                        </div>
                        <Option className={styles.options}/>

                    </div>


                    <div className={styles.details}>
                        <h1 className={styles.title}>Renaissance Era French Painting</h1>
                        <div className={styles.cost}>
                            <div className={styles.price}>10,075 INR</div>
                            <div className={styles.stock}>In Stock</div>
                        </div>
                        <div className={styles.counter}>9 more in stock</div>
                        <p className={styles.info}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className={styles.buys}>

                        <BuyBtn text="Buy" className={styles.buy} />
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
                        {activeIndex===0?  <Users className={styles.users} items={users}/>:<Bidders className={styles.users} items={bidders}/>}
                    </div>
                </div>
            </div>
            <Nft/>
            </div>
        </>
    );
};
export default NFTS;