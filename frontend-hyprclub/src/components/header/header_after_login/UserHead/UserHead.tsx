import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./UserHead.module.css";
import { useSelector, RootStateOrAny } from "react-redux";
import Icon from "../../../Icon";

interface ClassName {
  className: any;
}

const User = (className: any) => {
  const [visible, setVisible] = useState(false);
  const userData = useSelector((state: RootStateOrAny) => state?.userData);
  const items = [
    {
      title: "My profile",
      url: "/" + userData.username,
    },

    {
      title: "Settings",
      url: "/settings",
    },
    {
      title: "Logout",
      url: "/logout",
    },
  ];

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.avatar}>
            <img
              src={
                userData?.profilePhotoUrl || "/images/content/avatar-user.jpg"
              }
              alt="Avatar"
            />
          </div>
        </div>
        {visible && (
          <div className={styles.body}>
            <div className="d-flex flex-row">
              <div className={styles.userprof}>
                <img
                  src={
                    userData?.profilePhotoUrl ||
                    "/images/content/avatar-user.jpg"
                  }
                  alt="Avatar"
                />
              </div>
              <div className="d-flex flex-column">
                <div className={styles.name}>{userData.name}</div>
                <div className={styles.code}>
                  <div className={styles.username}>@{userData.username}</div>
                </div>
              </div>
            </div>
            <div className={styles.menu}>
              {items.map((x, index) =>
                x.url ? (
                  x.url.startsWith("http") ? (
                    <a
                      className={styles.item}
                      href={x.url}
                      rel="noopener noreferrer"
                      key={index}
                    >
                      <div className={styles.text}>{x.title}</div>
                    </a>
                  ) : (
                    <Link
                      className={styles.item}
                      to={x.url}
                      onClick={() => setVisible(!visible)}
                      key={index}
                    >
                      <div className={styles.text}>{x.title}</div>
                    </Link>
                  )
                ) : (
                  <div className={styles.item} key={index}>
                    <div className={styles.text}>{x.title}</div>
                  </div>
                )
              )}
              {userData?.isCreator && (
                <Link
                  className={styles.item}
                  to="/creator"
                  onClick={() => setVisible(!visible)}
                >
                  <div className={styles.text}>Creator DashBoard</div>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default User;
