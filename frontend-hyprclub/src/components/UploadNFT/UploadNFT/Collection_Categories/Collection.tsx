import { Plus } from "phosphor-react";
import React from "react";
import styles from "./Collection.module.css";


const Collection = ({ item }: any) => {
    return (
        <>
            <div className={styles.section}>
                {item.map((x: any, index: number) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.circle} style={{ backgroundColor: x.color }} >
                            {x.icon}</div>
                        <div className={styles.body}>
                            <span className={styles.Heading}>{x.title}</span>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
};

export default Collection;