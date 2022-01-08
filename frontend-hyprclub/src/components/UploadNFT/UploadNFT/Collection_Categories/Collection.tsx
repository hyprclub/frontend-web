import { Plus } from "phosphor-react";
import React from "react";
import styles from "./Collection.module.css";


const Collection = ({ item }: any) => {
    return (
        <>
            <div className={styles.section}>
            <div className={styles.item}>
                        <div className={styles.circle} style={{ backgroundColor: "#23262F"}} >
                        <Plus size={32} id={styles.plus}/></div>
                        <div className={styles.body}>
                            <span className={styles.Heading}>Create Collection</span>
                        </div>
                    </div>

                {item.map((x: any, index: number) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.circle} style={{ backgroundColor: x.color }} />
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