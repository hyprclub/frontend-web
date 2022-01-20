import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header_login.module.css";
import cn from "classnames";
import Icon from "../../Icon";
import Image from "../../Image";
import User from "./UserHead/UserHead";
import { Button } from "react-bootstrap";
import { useSelector, RootStateOrAny } from "react-redux";
const nav = [
  {
    url: "/market",
    title: "Marketplace",
  },
];

const Header_login = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");
  const  userData = useSelector(
    (state: RootStateOrAny) => state?.userData
  );
  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );
  const handleSubmit = () => {
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
              srcSet="/images/logo.png"
              srcSetDark="/images/logo.png"
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
            {/* //upload button only of creater */}
            {visibleNav === true && (
              <Link to="/uploadnft">
                <button className={styles.up}>
                  {" "}
                  <span className={styles.uptxt}>Upload</span>
                </button>
              </Link>
            )}
            {visibleNav === true && (
              <Link to="/login">
                <Button className={styles.logBtn}>
                  {" "}
                  <span className={styles.logbtnTxt}>Log In</span>
                </Button>
              </Link>
            )}
            {visibleNav === true &&
            <Link to="register">
              <button className={styles.signbtn}>
                {" "}
                <span className={styles.signbtntxt}>Sign up</span>
              </button>
            </Link>
            }
          </div>
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
