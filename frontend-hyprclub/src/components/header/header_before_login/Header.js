import React,  { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"
import cn from "classnames"
import Icon from '../../Icon'
import Image from '../../Image'
import { Button} from "react-bootstrap";
// import User from './UserHead/UserHead'
// import Notification from './Notification/NotificationHead'

import Upload_Button from '../../uploadButton/UploadButton'
// import MobileNavigation from '../../MobileNav/MobileNavigation'
// import UploadButton from '../../uploadButton/UploadButton'

const nav = [
    {
      url: "/market",
      title: "Marketplace",
    },
  ];
  
  const Header = () => {
    const [visibleNav, setVisibleNav] = useState(false);
    const [search, setSearch] = useState("");
  
    const handleSubmit = (e) => {
      alert();
    };
  
    return (
      <div className={styles.headDiv}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link className={styles.logo} to="/">
            <Image
              className={styles.pic}
              src="/images/logo.png"
              srcDark="/images/logo.png"
              alt="Fitness Pro"
            />
          </Link>
          <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                className={styles.link}
                // activeClassName={styles.active}
                to={x.url}
                key={index}
              >
                {x.title}
              </Link>
            ))}
            </nav>
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
            <Button className={styles.logBtn}> <span className={styles.logbtnTxt}>Log In</span></Button>
            <button className={styles.signbtn}> <span className={styles.signbtntxt}>Sign up</span></button>
          </div>
          <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
        </div>
      </header>
      </div>

    );
  };
  
  export default Header;
  