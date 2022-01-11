import clsx from 'clsx';
import React from 'react'
import styles from './singleTransaction.module.css';

interface Transaction {
    purchased?: boolean
    NFTname: string
    date: Date | string
    username: string
}

const SingleTransaction = ({purchased, NFTname, date, username}: Transaction) => {
    return (
        <>
            <div className={styles.mainDiv}>
                <div className='d-flex  px-4 py-3 align-items-center'>
                        <img src="/images/pfImage.png" alt="" className={styles.pfImage} />
                    <div className={clsx('d-flex justify-content-between ', styles.nameUsernamePrice)}>
                        <div className={styles.nameAndPrice}>
                            <p className={styles.boldTitle}>{purchased ? "Purchased" : 'Your' } NFT - {NFTname}{!purchased && " was Purchased!"}</p>
                            <p className={styles.date}>{date}</p>
                        </div>
                    
                        <p className={styles.username}>@{username}</p>
                        <p className={styles.price}>10,475INR</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTransaction
