import React from 'react'
import SingleTransaction from './singleTransaction/SingleTransaction'
import styles from './tracsaction.module.css'

interface transaction {
    items : any
}

const Transaction = ({items} : transaction) => {
    
    return (
        <>
            <div className={styles.mainDiv}>
                <h2 className={styles.title}>Transaction History</h2>
                <div className={styles.content}>
                    {items.map((x : any,index : any)=>(
                        <>
                        <SingleTransaction item={x} key={index} />
                        </>
                    ))}
                    
                    {/* <SingleTransaction username='loremipsum' date={"14/01/2022"} NFTname='Ethereal Skies'/> */}
                </div>
                
                <div className='d-flex justify-content-center mt-5'>
                    <button className={styles.loadMoreBtn}>Load More</button>
                </div>
            </div>
        </>
    )
}

export default Transaction
