import clsx from "clsx";
import {
  ChartLineUp,
  CurrencyCircleDollar,
  HandPointing,
} from "phosphor-react";
import React from "react";
import styles from "./style.module.css";
import { useSelector, RootStateOrAny } from "react-redux";

const CreatorStats = () => {
  const userData = useSelector((state: RootStateOrAny) => state.userData);
  return (
    <>
      <div className="container mt-4 pt-4">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className={styles.creatorHeading}>
            Welcome to your Creator Dashboard
          </h2>
          {/* <select className={clsx("form-select w-25", styles.select)} aria-label="Default select example">
                    <option value="1">All Time</option>
                    <option value="2">Monthly</option>
                    <option value="3">Yearly</option>
                </select> */}
        </div>
        <div
          className={clsx("d-flex mt-4 justify-content-between", styles.cards)}
        >
          <div className={styles.card}>
            <CurrencyCircleDollar
              className={styles.icon}
              size={64}
              weight="bold"
            />
            <p className={styles.text}>Total revenue earned</p>
            <p className={styles.price}>₹ 75,000</p>
          </div>

          <div className={styles.card}>
            <HandPointing className={styles.icon} size={64} weight="bold" />
            <p className={styles.text}>Total profile visits</p>
            <p className={styles.price}>{userData?.profileViews}</p>
          </div>

          <div className={styles.card}>
            <ChartLineUp className={styles.icon} size={64} weight="bold" />
            <p className={styles.text}>User Thanksful</p>
            <p className={styles.price}>142</p>
          </div>

          <div className={styles.card}>
            <ChartLineUp className={styles.icon} size={64} weight="bold" />
            <p className={styles.text}>Total sales made</p>
            <p className={styles.price}>₹ 436,985</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorStats;
