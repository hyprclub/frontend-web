import clsx from 'clsx';
import React from 'react'
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import InputField from '../../inputField/Input';
import styles from './contact.module.css';

const Contact = () => {
    return (
        <>
            <div className={styles.mainDiv}>
                <h2 className={styles.title}>Contact Us</h2>
                <div className={styles.content}>
                    <p>Got any collaborations, ideas, or any questions? Let us know!</p>
                    <div className={clsx('d-flex',styles.contact)}>
                        <InputField garyBold half lableText='NAME' typeOfInput='text' />
                        <InputField garyBold half lableText='PHONE NUMBER' typeOfInput='tel' />
                    </div>
                    <InputField garyBold half={false} lableText='EMAIL ADDRESS' typeOfInput='text'/>
                    <div className={styles.messageDIv}>
                        <label className={styles.lableText} htmlFor="exampleFormControlTextarea1">Your Message</label>
                        <textarea className={clsx("form-control", styles.textarea)} placeholder='Enter your message...' id="exampleFormControlTextarea1" rows={5}></textarea>
                    </div>
                    <div className={clsx('col-md-3 text-center d-flex',styles.avt)}>
                    <GradientBorder text='Submit'/>
                    </div>
 

                </div>
            </div>
        </>
    )
}

export default Contact
