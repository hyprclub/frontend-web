import clsx from 'clsx';
import React, { useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { addDoc, collection,setDoc,doc, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../firebaseConfig';
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import styles from './help.module.css';

const Help = () => {
   
    
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    
    const userData = useSelector((state : RootStateOrAny) => state.userData);
    const [data, setData] = useState({
        name: userData?.name,
        description: '',
        reportedBy: userData?.email,
     });
    const makeReportABugId = (len : number) =>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const characterLengths = characters.length;
        for( let i = 0 ; i< len ; i++) {
            result += characters.charAt(Math.floor(Math.random() * characterLengths));
        } 
        return result;
    }
    const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((state) => ({ ...state, [e.target.name]: e.target.value }));
        console.log({ data });
    };
    // Function that reports the problem when the submitted
    const handleSubmit = async () => {
        const db = getFirestore(firebaseApp);
        const bugId = "bug_id_"+makeReportABugId(26);
        await setDoc(doc(db, "bugReport",bugId),{
            dateOfReporting : date,
            description : data.description,
            reporterEmailId : userData?.email,
            reporterUid : userData?.uid,
            isResolved : false
        })
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
