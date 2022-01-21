import clsx from 'clsx';
import React, { useEffect } from 'react'
import styles from './singleTransaction.module.css';

interface Transaction {
    // purchased?: boolean
    // NFTname: string
    // date: Date | string
    // username: string,
    item :any,
    key:any,
   
}

const SingleTransaction = ({item : itemFromProps}: Transaction) => {
    useEffect(()=>{
        console.log(itemFromProps);
    },[itemFromProps])
    return (
        <>
            <div className={styles.mainDiv}>
                <div className='d-flex  px-4 py-3 align-items-center'>
                        <img src="/images/pfImage.png" alt="" className={styles.pfImage} />
                    <div className={clsx('d-flex justify-content-between ', styles.nameUsernamePrice)}>
                        <div className={styles.nameAndPrice}>
                            <p className={styles.boldTitle}> NFT purachased 1233</p>
                            <p className={styles.date}>12/12/2001</p>
                        </div>
                    
                        <p className={styles.username}>@loremipsem</p>
                        <p className={styles.price}>10,475 INR</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTransaction
