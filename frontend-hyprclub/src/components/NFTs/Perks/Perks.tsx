import React, { useState } from 'react';
import styles from "../../../screens/NFTs/NFTS.module.css";

const Perks = ({ item }: any) => {
    const [isIndex, setIsIndex] = useState(4);
    const toggleReadMore = () => {
        {isIndex===4?setIsIndex(item.length): setIsIndex(4)}
        
    }
    return (
        <>
            <ul className={styles.ul}>
                {item.map((e: any, index: number) => {
                    if (index < isIndex) {
                        return(<li key={index}>{e.content}</li>)
                    }
                })}
               
            </ul>
            {item.length>4 &&
            <span onClick={toggleReadMore} className={styles.readHide}> {isIndex===4 ? "View More" : "View Less"}</span>
        }
        </>
    );
};

export default Perks;