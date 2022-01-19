import clsx from 'clsx';
import { ArrowLeft, X } from 'phosphor-react'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { MODAL_CLOSE_SUCCESS } from '../../../../redux/constants/profileModals';
import GradientBorder from '../../../gradientBorderBtn/GradientBorder';
import InputField from '../../../inputField/Input';
import styles from './modal.module.css';

const Modal = () => {

    const [modals, setModals] = useState({modal1: true, modal2: false, modal3:false, modal4:false})

     const dispatch = useDispatch()
    const closeModal = () => {
        dispatch ({type: MODAL_CLOSE_SUCCESS})
        setModals({modal1: true, modal2: false, modal3:false, modal4:false})
    }

    return (
        <>
            <div onClick={e=> e.stopPropagation()} className={styles.modal}>
                <div className={clsx('container', styles.modalContent)}>
                    <div className={clsx(styles.firstModal, modals.modal1 ? styles.show : styles.hide)}>
                    <p className={styles.crossFirst}><X onClick={closeModal} size={30} weight='bold' /></p>
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
                                <img className={styles.imgWithMoney} src="/images/sellYourwork.png" alt="heu" />
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
                        
                        <div className={styles.bottom}>
                            <p className={styles.comingSoon}>Many more features are coming soon!</p>
                            <p className={styles.comingSoonDesc}>With a creator account, you can unlock a plethora of benefits and extra features.</p>

                            <GradientBorder onClick={() => setModals({modal1: false, modal2: true, modal3:false, modal4:false})} text='Upgrade to Creator Account' />
                        </div>

                    </div>




                    <div className={clsx(styles.secondModal, modals.modal2 ? styles.show : styles.hide)}>
                    <p className={styles.cross}><ArrowLeft onClick={() => setModals({modal1: true, modal2: false, modal3:false, modal4:false})} size={30} weight="bold" /><X onClick={closeModal} size={30} weight='bold' /></p>
                    <h2 className={styles.gradientTitle}>Upgrade to a Creator Account</h2>

                        <p className={styles.secTopDesc}>We check each creator application manually to ensure authenticity on the platform. Don’t worry, you don’t need to have a huge following to be a creator, we welcome all, small or big influencers.  </p>
                        <div className={styles.step1}>
                            <p className={styles.step1Title}>STEP 1: SOCIAL MEDIA HANDLES</p>
                                <form action="#">
                                    <div className={styles.inputs}>
                                        <InputField required garyBold lableText='INSTAGRAM' typeOfInput='text' placeholder='Enter Link...'/>
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                        <InputField required garyBold lableText='TWITTER' typeOfInput='text' placeholder='Enter Link...'/>
                                        <InputField required garyBold lableText='YOUTUBE' typeOfInput='text' placeholder='Enter Link...'/>
                                        <InputField required garyBold lableText='YOUR PERSONAL WEBSITE' typeOfInput='text' placeholder='Enter Link...'/>
                                    </div>

                                    <div className={styles.modal2Btn}>
                                        <GradientBorder types='submit' onClick={() => setModals({modal1: false, modal2: false, modal3:true, modal4:false})} text='Next'/>
                                    </div>
                                </form>

                        </div>
                    </div>


                    <div className={clsx(styles.thirdModal, modals.modal3 ? styles.show : styles.hide)}>
                    <p className={styles.cross}><ArrowLeft onClick={() => setModals({modal1: false , modal2: true, modal3:false, modal4:false})} size={30} weight="bold" /><X onClick={closeModal} size={30} weight='bold' /></p>
                        <h2 className={styles.gradientTitle}>Upgrade to a Creator Account</h2>
                        <p className={styles.secTopDesc}>We check each creator application manually to ensure authenticity on the platform. Don’t worry, you don’t need to have a huge following to be a creator, we welcome all, small or big influencers.  </p>
                        <div className={styles.step2}>
                            <p className={styles.step1Title}>STEP 2: SUBMIT BANK DETAILS</p>
                            <div className={styles.inputs}>
                                <InputField className='mb-3' garyBold lableText='NAME OF THE ACCOUNT HOLDER' typeOfInput='text' placeholder='eg. John Maxwell'/>
                                <InputField className='mb-3' garyBold lableText='ACCOUNT NUMBER' typeOfInput='number' placeholder='eg. 1234567890'/>
                                <InputField  className='mb-3' garyBold lableText='IFSC CODE' typeOfInput='text' placeholder='eg. HYPR09879854'/>
                                
                                <div className={clsx('d-flex align-items-center', styles.savingsAndCurrent)}>
                                    <div className={clsx(styles.selectDiv, 'halfWidth')}>
                                        <label className="grayBold">ACCOUNT TYPE</label>
                                        <Form.Select className={clsx( styles.select, 'mb-3')} aria-label="Default select example">
                                            <option value="1">SAVINGS</option>
                                            <option value="2">CURRENT</option>
                                        </Form.Select>
                                    </div>
                                    <InputField className='mb-3' half garyBold lableText='PHONE NUMBER' typeOfInput='number' placeholder='+91 1234567890'/>
                                </div>
                            </div>

                            <div className={styles.modal2Btn}>
                                <GradientBorder onClick={() => setModals({modal1: false, modal2: false, modal3:false, modal4:true})} text='Next'/>
                            </div>
                        </div>
                    </div>


                    {/* last one */}
                    <div className={clsx(styles.thirdModal, modals.modal4 ? styles.show : styles.hide)}>
                    <p className={styles.crossLast}><X onClick={closeModal} size={30} weight='bold' /></p>
                        <div className={styles.thankYouDiv}>
                            <h2 className={styles.gradientTitleLast}>Thank You For Applying!</h2>
                            <p className={styles.lastDesc}>We will reach out to you soon! Be sure to check your registered email to activate your creator account at HyprClub. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
