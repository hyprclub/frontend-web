import clsx from 'clsx';
import { ArrowLeft, Gift, Check, NotePencil } from 'phosphor-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AVAILNFT_MODAL_CLOSE_SUCCESS } from '../../../redux/constants/availnftModal';
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import ButtonItself from '../../loginSignUpBtn/ButtonItself';
import GradBorder from '../GradBorder/GradBorder';
import styles from './Avail.module.css'
const Avail = () => {
    const [modals, setModals] = useState({ Modal1: true, Modal2: false, Modal3: false });
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch({ type: AVAILNFT_MODAL_CLOSE_SUCCESS });
        setModals({ Modal1: true, Modal2: false, Modal3: false });
    }
    return (
        <>

            <div onClick={e => e.stopPropagation()} className={clsx(styles.first_modal, modals.Modal1 ? styles.show : styles.hide)}>
                <ArrowLeft size={32} weight="bold" className={styles.back} onClick={closeModal} />
                <div className={styles.box_head}>
                    <div className={styles.gift_icon}><Gift size={32} weight="bold" /> </div>
                    <h3 className={styles.heading}>Avail Your Perks</h3>
                    <p className={styles.p}>You can avail your perks by sending a request to the creator. The creator will reach out to you as soon as possible once you send the request. Remember! The availed perk is non-transferable upon reselling the NFT.</p>
                </div>
                <div className={styles.box_body}>
                    <div className={styles.rows}><p className={styles.content}>Get exclusive access to my Discord server!</p> <GradBorder className={styles.btn_grad} text="Avail Perk" onClick={() => setModals({ Modal1: false, Modal2: true, Modal3: false })} /></div>
                    <div className={styles.rows}><p className={styles.content}>Get exclusive access to my Discord server!</p> <div className={styles.availed}><Check size={30} weight="bold" className={styles.check} /> <p className={styles.p_availed}>Availed</p></div></div>
                    <div className={styles.rows}><p className={styles.content}>Get exclusive access to my Discord server!</p> <div className={styles.requested}><NotePencil size={30} weight="bold" className={styles.request} /> <p className={styles.p_request}>Requested</p></div></div>
                </div>
            </div>


            {/* /////////////////////////////////////MOdal2///////////////////////////////////// */}

            <div onClick={e => e.stopPropagation()} className={clsx(styles.second_modal, modals.Modal2 ? styles.show : styles.hide)}>
                <ArrowLeft size={32} weight="bold" className={styles.back} onClick={() => setModals({ Modal1: true, Modal2: false, Modal3: false })} />
                <div className={styles.box_head}>
                    <div className={styles.gift_icon}><Gift size={32} weight="bold" /></div>
                    <h3 className={styles.heading}>Confirmation</h3>
                    <p className={styles.p}>Are you sure you would like to avail the following perk?</p>
                </div>
                <div className={styles.body}>
                    <div className={styles.row2}>
                        <p className={styles.p_content2}>Get exclusive access to my Discord server!</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.btn_white} onClick={closeModal}><p className={styles.btn_white_text}>Cancel</p></button>
                        <button className={clsx(styles.btn, styles.btn_yes)} onClick={() => setModals({ Modal1: false, Modal2: false, Modal3: true })}><p className={styles.btn_text} >Yes, avail this perk</p></button>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////////////////MODAL3/////////////////////////////////////////////////////////////// */}

            <div onClick={e => e.stopPropagation()} className={clsx(styles.third_modal, modals.Modal3 ? styles.show : styles.hide)}>
                <div className={styles.box_head}>
                    <div className={styles.gift_icon}><Gift size={32} weight="bold" /></div>
                    <h3 className={styles.heading}>Perk Availed!</h3>
                    <p className={styles.p}>Congratulations on availing your perk! The creator will reach out to you soon with the promised perk.</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn} onClick={closeModal}><p className={styles.btn_text}>Back to my NFT</p></button>
                </div>

            </div>



        </>
    );
};

export default Avail;