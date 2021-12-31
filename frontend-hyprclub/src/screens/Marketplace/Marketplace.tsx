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
            <Popular />
            <Collections/>
            <Discover/>
            
        </div>
    )
}

export default Marketplace
