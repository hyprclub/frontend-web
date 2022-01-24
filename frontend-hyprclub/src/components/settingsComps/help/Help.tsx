import clsx from 'clsx';
import React, { useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../firebaseConfig';
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import styles from './help.module.css';

const Help = () => {
    const userData = useSelector((state: RootStateOrAny) => state?.userData);
    const today = new Date(Date.now()).toLocaleString().split(',')[0];
    const [bug, setBug] = useState({
        data: today,
        description: "",
        reportedBy: userData.username
    });
    const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBug((state) => ({ ...state, [e.target.name]: e.target.value }));
        console.log({ bug });
    };
    // Function that reports the problem when the submitted
    const handleSubmit = async () => {
        const db = getFirestore(firebaseApp);
        await addDoc(collection(db, "bugReport"), bug)
        .then(() => {
            console.log("Reported");
        })
        .catch((error) => {
            console.log(error);
        });      
    };
    return (
        <>
            <div className={styles.mainDiv}>    
                <h2 className={styles.title}>Help</h2>
                <div className={styles.content}>
                    <div className={styles.reportDiv}>
                        <h3 className={styles.heading}>Report a Problem</h3>
                        <p>Found a bug, inappropriate content, or feel a feature can be improved? Let us know:</p>

                        <label className={styles.lableText} htmlFor="exampleFormControlTextarea1">Report problem</label>
                        <textarea 
                            className={clsx("form-control", styles.textarea)}         id="exampleFormControlTextarea1" rows={5}
                            name="description"
                            onChange={(e: React.ChangeEvent<any>) => {
                                updateState(e);
                            }}>
                        </textarea>
                        <div className={clsx('col-md-3 text-center d-flex',styles.avt)}>
                        <GradientBorder 
                            text='Submit' 
                            onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleSubmit();
                            }}
                        />
                    </div>

                    </div>
                    <div className={styles.helpCenter}>
                        <h3 className={styles.heading}>Help Center</h3>
                        <p>If you haveany questions regarding how the platform works, payments or doubts in general, check out our FAQ Page.
                            <br />
                            <br />
                        If your questions are unanswered, you can also submit your query through the form provided here. We will reach out to you as soon as possible.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help
