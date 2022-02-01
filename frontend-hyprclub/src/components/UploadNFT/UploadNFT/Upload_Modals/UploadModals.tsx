import { UploadSimple } from 'phosphor-react';
import React, { useState } from 'react';
import ButtonItself from '../../../loginSignUpBtn/ButtonItself';
import styles from './UploadModals.module.css'
const UploadModals = () => {
    const [modals,setModals]=useState({Modal1:true, Modal2:false, Modal3:false});
    // const closeModal=()=>{
    //     setModals({})
    // }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.first_modal}>
                    <div className={styles.box_head}>
                        <div className={styles.upload_icon}><UploadSimple size={32} weight="bold" /></div>
                        <h3 className={styles.heading}>Upload NFT</h3>
                        <p className={styles.p}>Please choose one of the following upload options:</p>
                    </div>
                    <div className={styles.box_body}>
                        <div className={styles.selection}>
                            <h4 className={styles.selection_heading}>Upload Single NFT</h4>
                            <p className={styles.selection_subheading}>Upload a single NFT or add piece to collection.</p>
                        </div>
                        <div className={styles.selection}>
                            <h4 className={styles.selection_heading}>Upload a Collection</h4>
                            <p className={styles.selection_subheading}>Get assisted in design and upload a collection of NFTs</p>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.btn_white}><p className={styles.btn_white_text}>Cancel</p></button>
                            <button className={styles.btn}><p className={styles.btn_text}>Continue</p></button>
                        </div>
                    </div>
                </div>



                {/*////////////////////////////////// MODAL2 /////////////////////////////////*/}


                <div className={styles.second_modal}>
                    <div className={styles.box_head}>
                        <div className={styles.upload_icon}><UploadSimple size={32} weight="bold" /></div>
                        <h3 className={styles.heading}>Upload a Collection</h3>
                        <p className={styles.p}>Please choose one of the following upload options:</p>
                    </div>
                    <div className={styles.box_body}>
                        <div className={styles.selection}>
                            <h4 className={styles.selection_heading}>I would like to be assisted in designing a collection.</h4>
                            <p className={styles.selection_subheading}>HyprClub can help you in designing your personalised collection with our talented NFT artists!</p>
                        </div>
                        <div className={styles.selection}>
                            <h4 className={styles.selection_heading}>Upload a Collection</h4>
                            <p className={styles.selection_subheading}>Your collection will be uploaded automatically through us.</p>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.btn_white}><p className={styles.btn_white_text}>Cancel</p></button>
                            <button className={styles.btn}><p className={styles.btn_text}>Continue</p></button>
                        </div>
                    </div>
                </div>


                {/*/////////////////////////////// MODAL3 /////////////////////////////////////////*/}
                <div className={styles.third_modal}>
                    <div className={styles.box_head}>
                        <div className={styles.upload_icon}><UploadSimple size={32} weight="bold" /></div>
                        <h3 className={styles.heading}>Congratulations</h3>
                        <p className={styles.p}>You have taken the first step to building an NFT collection! Our executives will be reaching out to you soon regarding the collection. Watch out your email for more!</p>
                    </div>
                    <div className={styles.buttons}>
                    <button className={styles.btn_white}><p className={styles.btn_white_text}>Okay</p></button>
                    </div>

                </div>
            </div>
        </>

    );
};

export default UploadModals;