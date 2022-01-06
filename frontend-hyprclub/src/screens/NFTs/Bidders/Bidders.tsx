import React from "react";
import cn from "classnames";
import styles from "./Bidders.module.css"

interface Users {
    className: string
    items: any
}

const Bidders = ({ className, items }: Users) => {
    return (
        <>
            <div className={cn(styles.user, className)}>
                <div className={styles.list}>
                    {items.map((x: any, index: number) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.avatar}>
                                <img src={x.avatar} alt="avatar" />
                            </div>
                            <div className={styles.details}>
                                <div className={styles.data}>
                                    <div className={styles.name}>{x.name}</div>
                                    <div className={styles.id}>{x.id}</div>
                                </div>
                                <div className={styles.bid}>{x.bids}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Bidders;