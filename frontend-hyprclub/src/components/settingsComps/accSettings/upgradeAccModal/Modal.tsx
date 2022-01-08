import clsx from 'clsx';
import { X } from 'phosphor-react'
import React from 'react'
import styles from './modal.module.css';

const Modal = () => {
    return (
        <>
            <div className={styles.modal}>
                <p className={styles.cross}><X size={30} weight='bold' /></p>
                <div className='container'>
                    <div className={styles.topTitleDiv}>
                        <h2 className={styles.gradientTitle}>Upgrade to a Creator Account</h2>
                        <p className={styles.topDesc}>With a creator account, you can unlock a plethora of benefits and extra features.</p>
                    </div>

                    <div className={clsx('row align-items-center', styles.sellYourNftDiv)}>
                        <div className={clsx('col-md-6')}>
                            <h3 className={styles.sellYourNftTitle}>Sell your work as NFT</h3>
                            <p className={styles.sellYourNftdesc}>You can sell your content - be it photography, drawings, gaming clips or even videos- as NFTs.</p>
                        </div>
                        <div className={clsx('col-md-6', styles.sellYourNftImg)}>
                            <img src="/images/sellYourwork.png" alt="heu" />
                        </div>  
                    </div>

                    <div className={clsx('row align-items-center', styles.sellYourNftDiv)}>
                        <div className={clsx('col-md-6')}>
                           
                        </div>
                        <div className={clsx('col-md-6', styles.analyse)}>
                            <h3 className={styles.analyseTitle}>Analyse your progress with a personalised Creator Dashboard</h3>
                            <p className={styles.analysedesc}>You can sell your content - be it photography, drawings, gaming clips or even videos- as NFTs.</p>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
