import clsx from 'clsx';
import { UploadSimple } from 'phosphor-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { UPLOADNFT_MODAL_CLOSE_SUCCESS } from '../../../../redux/constants/uploadnftmodal';
import styles from './UploadModals.module.css'
const UploadModals = () => {
    const [modals, setModals] = useState({ Modal1: true, Modal2: false, Modal3: false });
    const [cont, setCont] = useState(0)
    const [cont2, setCont2] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const closeModal = () => {
        dispatch({ type: UPLOADNFT_MODAL_CLOSE_SUCCESS })
        setModals({ Modal1: true, Modal2: false, Modal3: false });
        setCont(0);
        setCont2(0);


    }
    const Redirect = (event: any) => {
        event.stopPropagation();
        if (cont === 1) {
            navigate("/uploadnft");
            closeModal();
        }
        else if (cont === 2) {
            setModals({ Modal1: false, Modal2: true, Modal3: false });
            setCont(0);
        }
    }
    const Redirect2 = (event:any) => {
        event.stopPropagation();
        if (cont2 === 1) {
            setModals({ Modal1: false, Modal2: false, Modal3: true });
            setCont2(0);
        }
        else if (cont2 === 2) {
            // navigate("/uploadnft");
            closeModal();
        }
    }
    const ClickFirst = (event: any) => {
        event.stopPropagation();
        setCont(0);
    }
    const ClickSecond = (event: any) => {
        event.stopPropagation();
        setCont2(0);
    }
    const Click1 = (event: any) => {
        event.stopPropagation();
        setCont(1);
    }
    const Click2 = (event: any) => {
        event.stopPropagation();
        setCont(2);
    }
    const Click3 = (event: any) => {
        event.stopPropagation();
        setCont2(1);
    }
    const Click4 = (event: any) => {
        event.stopPropagation();
        setCont2(2);
    }


    return (
        <>
            <div onClick={ClickFirst} className={clsx(styles.first_modal, modals.Modal1 ? styles.show : styles.hide)}>
                <div className={styles.box_head}>
                    <div className={styles.upload_icon}><UploadSimple size={32} weight="bold" /></div>
                    <h3 className={styles.heading}>Upload NFT</h3>
                    <p className={styles.p}>Please choose one of the following upload options:</p>
                </div>
                <div className={styles.box_body}>
                    <div className={clsx(styles.selection, cont === 1 ? styles.border : styles.borderless)} onClick={Click1}>
                        <h4 className={styles.selection_heading}>Upload Single NFT</h4>
                        <p className={styles.selection_subheading}>Upload a single NFT or add piece to collection.</p>
                    </div>
                    <div className={clsx(styles.selection, cont === 2 ? styles.border : styles.borderless)} onClick={Click2}>
                        <h4 className={styles.selection_heading}>Upload a Collection</h4>
                        <p className={styles.selection_subheading}>Get assisted in design and upload a collection of NFTs</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.btn_white} onClick={closeModal}><p className={styles.btn_white_text}>Cancel</p></button>
                        <button className={styles.btn} onClick={Redirect}><p className={styles.btn_text}>Continue</p></button>
                    </div>
                </div>
            </div>



            {/*////////////////////////////////// MODAL2 /////////////////////////////////*/}


            <div onClick={ClickSecond} className={clsx(styles.second_modal, modals.Modal2 ? styles.show : styles.hide)}>
                <div className={styles.box_head}>
                    <div className={styles.upload_icon}><UploadSimple size={32} weight="bold" /></div>
                    <h3 className={styles.heading}>Upload a Collection</h3>
                    <p className={styles.p}>Please choose one of the following upload options:</p>
                </div>
                <div className={styles.box_body}>
                    <div className={clsx(styles.selection, cont2 === 1 ? styles.border : styles.borderless)} onClick={Click3}>
                        <h4 className={styles.selection_heading}>I would like to be assisted in designing a collection.</h4>
                        <p className={styles.selection_subheading}>HyprClub can help you in designing your personalised collection with our talented NFT artists!</p>
                    </div>
                    <div className={clsx(styles.selection, cont2 === 2 ? styles.border : styles.borderless)} onClick={Click4}>
                        <h4 className={styles.selection_heading}>Upload a Collection</h4>
                        <p className={styles.selection_subheading}>Your collection will be uploaded automatically through us.</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.btn_white} onClick={closeModal}><p className={styles.btn_white_text}>Cancel</p></button>
                        <button className={styles.btn} onClick={Redirect2}><p className={styles.btn_text}>Continue</p></button>
                    </div>
                </div>
            </div>


            {/*/////////////////////////////// MODAL3 /////////////////////////////////////////*/}
            <div onClick={e => e.stopPropagation()} className={clsx(styles.third_modal, modals.Modal3 ? styles.show : styles.hide)}>
                <div className={styles.box_head}>
                    <div className={styles.upload_icon}><UploadSimple size={32} weight="bold" /></div>
                    <h3 className={styles.heading}>Congratulations</h3>
                    <p className={styles.p}>You have taken the first step to building an NFT collection! Our executives will be reaching out to you soon regarding the collection. Watch out your email for more!</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn_white} onClick={closeModal}><p className={styles.btn_white_text}>Okay</p></button>
                </div>

            </div>


        </>

    );
};

export default UploadModals;