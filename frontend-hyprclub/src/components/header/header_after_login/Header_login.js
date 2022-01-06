import React,  { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header_login.module.css"
import cn from "classnames"
import Icon from '../../Icon'
import Image from '../../Image'
import User from './UserHead/UserHead'
import Notification from './Notification/NotificationHead'

import Upload_Button from '../../uploadButton/UploadButton'
// import MobileNavigation from '../../MobileNav/MobileNavigation'
// import UploadButton from '../../uploadButton/UploadButton'

const nav = [
    {
      url: "/search01",
      title: "Discover",
    },
    {
      url: "/faq",
      title: "How it work",
    },
    {
      url: "/item",
      title: "Create item",
    },
    {
      url: "/profile",
      title: "Profile",
    },
  ];
  
  const Header_login = () => {
    const [visibleNav, setVisibleNav] = useState(false);
    const [search, setSearch] = useState("");
  
    const handleSubmit = (e) => {
      alert();
    };
  
    return (
      <div className={styles.headDiv}>
      <header className={styles.header}>
        <div className={cn("container", styles.container)}>
          <Link className={styles.logo} to="/">
            <Image
              className={styles.pic}
              src="/images/logo.png"
              srcDark="/images/logo.png"
              alt="Fitness Pro"
            />
          </Link>
          <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
            <form
              className={styles.search}
              action=""
              onSubmit={() => handleSubmit()}
            >
              <input
                className={styles.input}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                placeholder="Search"
                required
              />
              <button className={styles.result}>
                <Icon name="search" size="20" />
              </button>
            </form>
            <Link
              className={cn("button-small", styles.button)}
              to="/upload-variants"
            >

            </Link>
          </div>
        <Upload_Button/>
          {/* <Link
            className={cn("button-stroke button-small", styles.button)}
            to="/connect-wallet"
          >
            Connect Wallet
          </Link> */}
          <User className={styles.user} />
          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </header>
      </div>

    );
  };
  
  export default Header_login;
  