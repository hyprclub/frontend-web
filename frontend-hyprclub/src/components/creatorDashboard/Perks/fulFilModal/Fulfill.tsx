import clsx from 'clsx';
import { ArrowLeft, Gift } from 'phosphor-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PERK_MODAL_CLOSE_SUCCESS, PERK_MODAL_OPEN_SUCCESS } from '../../../../redux/constants/perkModal';
import { RootStore } from '../../../../store';
import ButtonItself from '../../../loginSignUpBtn/ButtonItself';
import styles from './styles.module.css'

const c = {
    name:'Sandip',
    email:'sandip@hyperclub.com',
    img:"images/pfx.png",

}

const Fulfill = () => {



    const dispatch = useDispatch();

    const closeModal = (e:any) => {
        dispatch({type: PERK_MODAL_CLOSE_SUCCESS})
    }


  return <>
        <div onClick={closeModal} className={clsx('position-fixed', styles.modalBg)}>
            <div onClick={e => e.stopPropagation()} className={clsx('position-absolute', styles.modal)}>
                <ArrowLeft className={styles.arrow} onClick={closeModal} size={28} />
                <div className={styles.uptoUser}>
                    <Gift className={styles.giftIcon} size={80} weight="bold" />
                    <p className={styles.heading}>Fulfil a Perk</p>
                    <p className={styles.desc}>To fulfil a perk, you would have to reach out to the user yourself. We can provide you with the email and name of the user.</p>

                    <div className={clsx('d-flex align-items-center justify-content-center')}>
                        <img className={styles.creatorImg} src={c.img} alt="" />
                        <div className={styles.ownerAndUsername}>
                            <p className={styles.owner}>{c.name}</p>
                            <p className={styles.username}>{c.email}</p>
                        </div>
                        
                    </div>
                    
                    </div>

                    <div className={clsx("d-flex mt-4 py-3 align-items-baseline", styles.checkBoxTexts)}>
                            <input name="newsletter" id="newsletter" type="checkbox" />
                            <label className="ms-2" htmlFor="newsletter">
                            I can confirm, I have fulfilled the perk request sent by the user.
                            </label>
                    </div>
                    <ButtonItself className='my-4 p-2'  full onClick={() => console.log('hii')} btnPurpose={"FulFil Perk"}/>
                    
            </div>  
        </div>
  </>;
};

export default Fulfill;
