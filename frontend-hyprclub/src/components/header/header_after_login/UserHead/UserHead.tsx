import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./UserHead.module.css";
import Icon from "../../../Icon";

interface ClassName{
  className:any
}
const items = [
  {
    title: "My profile",
    url: "/profile",
  },

  {
    title: "Settings",
    url: "/settings",
  },

  {
    title: "Creator Dashboard",
    url: "#"
  },
  {
    title: "Disconnect",
    url: "https://ui8.net/ui8/products/crypter-nft-marketplace-ui-kit",
  },
];

const User = (className:any) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(styles.user, className)}>
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <div className={styles.avatar}>
            <img src="/images/content/avatar-user.jpg" alt="Avatar" />
          </div>
        </div>
        {visible && (
          <div className={styles.body}>
          <div className="d-flex flex-row">
          <div className={styles.userprof}><img src="/images/content/avatar-user.jpg" alt="Avatar" /></div>
          <div className="d-flex flex-column">
          <div className={styles.name}>Enrico Cole</div>
          <div className={styles.code}>
              <div className={styles.username}>@chootalks</div>
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
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default User;
