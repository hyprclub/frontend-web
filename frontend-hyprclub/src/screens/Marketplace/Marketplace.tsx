import React from 'react'

import Selection from '../../components/Selection';
import Popular from '../../components/Marketplace/Popular/Popular';
import Collections from '../../components/Marketplace/Collections/Collections';
import styles from "./Marketplace.module.css";
import Hero_section from '../../components/Marketplace/Hero_section/Hero_section';
import Header_login from '../../components/header/header_after_login/Header_login';
import Explore from '../../components/Marketplace/Explore/Explore';
import Discover from '../../components/Marketplace/Discover/Discover';
function Marketplace() {
    return (
        <>
            <Header_login />
            <div className={styles.home}>
                <Hero_section />
                <Explore />

            </div>
        </>
    )
}

export default Marketplace
