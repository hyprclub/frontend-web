import React from 'react';
import cn from 'classnames'
import styles from "./CollectionCard.module.css"
import clsx from 'clsx';
import { Star } from 'phosphor-react';

const CollectionCard = ({ className, item }: any) => {
    return (
        <div className={cn(styles.card, className)}>
            {/* <Link className={styles.link} to={item.url}> */}
            <div className={styles.body}>
                <div className={styles.line}>
                    <div className={clsx(styles.imgAndBtn, 'position-relative w-100')}>
                        <img className={styles.image} src={item.image} alt="" />
                        <button className={styles.option}><Star size={30} id={styles.star}  /></button>
                    </div>
                    <div className={styles.title}>{item.title}</div>
                    <div className={clsx('d-flex align-items-center justify-content-between w-100 mt-2')}>
                        <div className={clsx('d-flex align-items-center')}>
                            <img className={styles.creatorImg} src={item.creatorImg} alt="" />
                            <div className={styles.ownerAndUsername}>
                                <p className={styles.owner}>Owner</p>
                                <p className={styles.username}>@{item.creatorUsername}</p>
                            </div>
                        </div>
                        <div className={styles.price}><span className={styles.pricetxt}>{item.price}</span></div>
                    </div>
                </div>
            </div>
            {/* </Link> */}

        </div>
    );
};

export default CollectionCard;