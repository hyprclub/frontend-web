import clsx from 'clsx';
import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import styles from './singleTransaction.module.css';


interface Transaction {
    success?: boolean
    NFTname: string
    transactionID: string
    date: Date | string
    price: string

}

const SingleTransaction = ({success, NFTname, transactionID, date, price}: Transaction) => {
    return (
        <>
            <div className={styles.mainDiv}>
                <div className='d-flex  px-5 py-2 align-items-center'>
                        {/* <img src="/images/pfImage.png" alt="" className={styles.pfImage} /> */}
                    <div className={clsx('d-flex justify-content-between ', styles.nameUsernamePrice)}>
                        <div className={styles.nameAndPrice}>
                        <Link to='#'><p className={styles.boldTitle}>{NFTname}</p></Link>
                            <p className={styles.boldTitle}>{transactionID}</p>
                            <p className={styles.date}>{date}</p>
                        </div>

                        <Link to='#'><li className={styles.boldTitleDesk}>{NFTname}</li></Link>
                        <p className={styles.dateDesk}>{date}</p>
                        <p className={styles.transDesk}>{transactionID}</p>
                        <li className={styles.statusDesk}>{success ? "🟢 Success" : "🔴 Failed" }</li>
                        <p className={styles.price}><span className={styles.statusMob}>{success ? "🟢" : "🔴" }</span> INR {price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTransaction
