import React from 'react'
import Discover from '../../components/Marketplace/Discover/Discover'
import Selection from '../../components/Selection';
import Popular from '../../components/Marketplace/Popular/Popular';
import Collections from '../../components/Marketplace/Collections/Collections';
import styles from "./Marketplace.module.css";
function Marketplace() {
    return (
        <div className={styles.home}>
            <Selection/>
            <hr className={styles.divider} />
            <Popular />
            <hr className={styles.divider} />
            <Collections/>
            <hr className={styles.divider} />
            <Discover/>
            
        </div>
    )
}

export default Marketplace
