import clsx from "clsx";
import React, { useState } from "react";
import { Iitems } from "../../components/item";
import Items from "../items/Items";
import styles from "./nft.module.css";

interface nft {
  token: any;
}
const Nft = ({ token }: nft) => {
  const [createdSel, setCreatedSel] = useState(true);
  const [ownedSel, setOwnedSel] = useState(false);

  const createdClick = () => {
    setCreatedSel(true);
    setOwnedSel(false);
  };

  const ownedClick = () => {
    setCreatedSel(false);
    setOwnedSel(true);
  };

  return (
    <div className={styles.Nft}>
      <p className={styles.navLinks}>
        <span
          onClick={createdClick}
          className={clsx(styles.created, createdSel && styles.active)}
        >
          Owned
        </span>
        <span
          onClick={ownedClick}
          className={clsx(styles.owned, ownedSel && styles.active)}
        >
          Created
        </span>
      </p>
      {createdSel && <Items nft created={createdSel} items={token} />}
      {ownedSel && <Items nft items={Iitems} />}
    </div>
  );
};

export default Nft;
