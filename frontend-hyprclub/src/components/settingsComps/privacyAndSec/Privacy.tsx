import clsx from 'clsx';
import React from 'react'
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import InputField from '../../inputField/Input';
import Switch from '../../switch/Switch';
import styles from './privacy.module.css';

const Privacy = () => {
    return (
        <>
           <div className={styles.mainDiv}>
                <h2 className={styles.title}>Privacy & Security</h2>
                <div className={styles.content}>
                    <div className={styles.private}>
                        <h3 className={styles.heading}>Private Account</h3>
                        <div className={clsx('d-flex align-items-center', styles.enablepvtdiv)}>
                            <p className={styles.enableprivate}>Enable private account</p>
                            <Switch/>
                        </div>
                        <p className={styles.desc}>By enabling private account, your posts can only be viewed by your followers and the accounts that you approve. Follower requests can be accessed through Notifications.</p>
                    </div>

                    <div className={styles.changePs}>
                        <h3 className={styles.heading}>Change Password</h3>
                        <div className='d-flex mb-2'>
                            <InputField placeholder={'************'} garyBold half lableText='ENTER OLD PASSWORD' typeOfInput='text'/>
                            <InputField placeholder={'************'} garyBold half lableText='ENTER NEW PASSWORD' typeOfInput='text'/>
                        </div>
                        <p className={styles.desc}>Password should be 7-12 characters long with at least one uppercase letter, one lowercase letter and a number.</p>
                        <GradientBorder text='Save Changes'/>
                    </div>

                    
                </div>
           </div> 
        </>
    )
}

export default Privacy