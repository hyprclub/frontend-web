import clsx from 'clsx'
import React from 'react'
import styles from './editProfile.module.css'
import InputField from '../../inputField/Input'
import GradientBorder from '../../gradientBorderBtn/GradientBorder'

const EditProfile = () => {
    return (
        <>
            <div className={styles.mainDiv}>
                <h2 className={styles.title}>Edit Profile</h2>
                <div className={clsx('row', styles.content)}>
                    <div className={clsx('col-md-3 text-center d-flex')}>
                        <div className={clsx('position-relative d-inline')}>
                            <img src="images/pfImage.png" alt="" className={styles.pfImage} />
                            <i className={clsx("bi position-absolute bi-pencil-fill", styles.pencilIcon)}></i>
                        </div>
                    </div>
                    <div className={clsx('col-md-9', styles.inputs)}>
                        <div className={styles.userDetails}>
                            <div className='d-flex'>
                                <InputField garyBold half lableText='NAME' typeOfInput='text' value={'Lorem Ipsum'}/>
                                <InputField garyBold half lableText='CATEGORY' typeOfInput='text' value={'Digital Artist'}/>
                            </div>
                            <InputField garyBold half={false} value={'@loremipsum_'} lableText='USERNAME' typeOfInput='text'/>
                            <p className={styles.usernameRange}>Username can range between 3-10 characters.</p>
                            <InputField garyBold half={false} value={'lorem@hyprclub.com'} lableText='BIO' typeOfInput='text'/>
                            <InputField garyBold half={false} value={'www.lorem.art'} lableText='WEBSITE' typeOfInput='text'/>
                        </div>
                        <div className={styles.linkedAccounts}>
                            <h3 className={styles.sectionHeading}>Linked Accounts</h3>
                            <div className='d-flex'>
                                    <InputField garyBold half lableText='INSTAGRAM' value={'@loremipsum'} typeOfInput='text'/>
                                    <InputField garyBold half lableText='TWITTER' value={'@loremipsum'} typeOfInput='text'/>
                                </div>
                                <InputField garyBold half={false} value={'www.facebook.com/loremipsum'} lableText='FACEBOOK' typeOfInput='text'/>
                                <InputField garyBold half={false} value={'www.youtube.com/c/hyprclub'} lableText='YOUTUBE' typeOfInput='text'/>
                        </div>

                        <div className={styles.personalInfos}>
                            <h3 className={styles.sectionHeading}>Personal Information</h3>
                            <InputField garyBold half={false} lableText='EMAIL ADDRESS' value={'lorem@hyprclub.com'} typeOfInput='email'/>

                            <div className='d-flex'>
                                    <InputField garyBold half value={'+91 9990088776'} lableText='PHONE NUMBER' typeOfInput='tel'/>
                                    <InputField garyBold half value={'Female'} lableText='GENDER' typeOfInput='text'/>
                                </div>
                        </div>
                        <div className={styles.button}>
                            <GradientBorder text='Save Changes'/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditProfile