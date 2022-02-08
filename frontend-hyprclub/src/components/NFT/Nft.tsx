import clsx from "clsx";
import React, { useState } from "react";
import { Iitems } from "../../components/item";
import Items from "../items/Items";
import styles from "./nft.module.css";

const Nft = ({ star, profile }: any) => {
  const [createdSel, setCreatedSel] = useState(true);
  const [ownedSel, setOwnedSel] = useState(false);
  const [stared, setStared] = useState(false);

  const createdClick = () => {
    setCreatedSel(true);
    setOwnedSel(false);
    setStared(false);
  };

  const ownedClick = () => {
    setCreatedSel(false);
    setOwnedSel(true);
    setStared(false);
  };

  const staredClick = () => {
    setCreatedSel(false);
    setOwnedSel(false);
    setStared(true);
  };

  return (
    <div className={styles.Nft}>
      <p className={styles.navLinks}>
        <span
          onClick={createdClick}
          className={clsx(styles.created, createdSel && styles.active)}
        >
          Created
        </span>
        <span
          onClick={ownedClick}
          className={clsx(styles.owned, ownedSel && styles.active)}
        >
          Owned
        </span>
        {profile && (
          <span
            onClick={staredClick}
            className={clsx(styles.owned, stared && styles.active)}
          >
            Stared
          </span>
        )}
      </p>
      {createdSel && <Items nft created={createdSel} items={Iitems} />}
      {ownedSel && <Items nft items={Iitems} />}
      {stared && profile && <Items nft items={star} />}
    </div>
  );
};

export default Nft;
