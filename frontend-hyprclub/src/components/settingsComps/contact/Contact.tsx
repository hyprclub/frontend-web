import clsx from 'clsx';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { firebaseApp } from '../../../firebaseConfig';
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import InputField from '../../inputField/Input';
import styles from './contact.module.css';

const Contact = () => {
    const [data, setData] = useState({
        name:"",
        phone: "",
        email: "",
        message: ""
    });
    const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((state) => ({ ...state, [e.target.name]: e.target.value }));
        console.log({ data });
    };
    const handleSubmit = async () => {
        const db = getFirestore(firebaseApp);
        await addDoc(collection(db, "contactus"), data)
            .then(() => {
                console.log("Data sent");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className={styles.mainDiv}>
                <h2 className={styles.title}>Contact Us</h2>
                <div className={styles.content}>
                    <p>Got any collaborations, ideas, or any questions? Let us know!</p>
                    <div className={clsx('d-flex',styles.contact)}>
                        <InputField 
                            garyBold 
                            half 
                            name="name"
                            lableText='NAME' 
                            typeOfInput='text'
                            onChange={(e: React.ChangeEvent<any>) => {
                                updateState(e);
                            }} 
                        />
                        <InputField 
                            garyBold 
                            half 
                            name="phone"
                            lableText='PHONE NUMBER' 
                            typeOfInput='tel'
                            onChange={(e: React.ChangeEvent<any>) => {
                                updateState(e);
                            }} 
                        />
                    </div>
                    <InputField 
                        garyBold 
                        half={false} 
                        name="email"
                        lableText='EMAIL ADDRESS' 
                        typeOfInput='text'
                        onChange={(e: React.ChangeEvent<any>) => {
                            updateState(e);
                        }} 
                    />
                    <div className={styles.messageDIv}>
                        <label className={styles.lableText} htmlFor="exampleFormControlTextarea1">Your Message</label>
                        <textarea 
                            className={clsx("form-control", styles.textarea)} 
                            placeholder='Enter your message...' 
                            id="exampleFormControlTextarea1" 
                            rows={5}
                            name="message"
                            onChange={(e: React.ChangeEvent<any>) => {
                                updateState(e);
                            }}
                        ></textarea>
                    </div>
                    <div className={clsx('col-md-3 text-center d-flex',styles.avt)}>
                    <GradientBorder 
                        text='Submit'
                        onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                            handleSubmit();
                        }}
                    />
                    </div>
 

                </div>
            </div>
        </>
    )
}

export default Contact
