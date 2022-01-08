import React from "react";
import cn from "classnames";
import styles from "./Users.module.css"

interface Users {
    className: any,
    items: any
}

const Users = ({ className, items }: Users) => {
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
                                <div className={styles.position}>{x.position}</div>
                                <div className={styles.name}>{x.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Users;