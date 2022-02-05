import { Snackbar } from '@mui/material';
import clsx from 'clsx';
import React, { useState } from 'react'
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import InputField from '../../inputField/Input';
import styles from './contact.module.css';
import MuiAlert from '@mui/material/Alert';
import { AlertProps } from 'react-bootstrap';
import SuccPopup from '../../popups/SuccPopup';
import ErrPopup from '../../popups/ErrPopup';




const Alert = React.forwardRef<HTMLDivElement, any>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

const Contact = () => {

    const [success, setSuccess] = useState(false)

    const [name, setName] = useState('')
    const [num, setNum] = useState<any>()
    const [email, seEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const [open, setOpen] = useState(false);
    const [openErrMsg, setOpenErrMsg] = useState(false)


  const Submit = () => {
    setSuccess(true)
    setOpen(true);

  }

  const handelClose = (reason:any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

    return (
        <>
            <div className={styles.mainDiv}>
                <h2 className={styles.title}>Contact Us</h2>
                <div className={styles.content}>
                    <p>Got any collaborations, ideas, or any questions? Let us know!</p>
                    <form action="">
                        <div className={clsx('d-flex',styles.contact)}>
                            <InputField required garyBold half lableText='NAME' typeOfInput='text' />
                            <InputField required garyBold half lableText='PHONE NUMBER' typeOfInput='tel' />
                        </div>
                        <InputField required garyBold half={false} lableText='EMAIL ADDRESS' typeOfInput='email'/>
                        <div className={styles.messageDIv}>
                            <label className={styles.lableText} htmlFor="exampleFormControlTextarea1">Your Message</label>
                            <textarea minLength={20} required className={clsx("form-control", styles.textarea)} placeholder='Enter your message...' id="exampleFormControlTextarea1" rows={5}></textarea>
                        </div>
                        <div className={clsx('col-md-3 text-center d-flex',styles.avt)}>
                            <GradientBorder disable={(name && num && email && message)} onClick={Submit} text='Submit'/>
                        </div>
                    </form>
 

                </div>
            </div>

            {success && <SuccPopup handelClose={(r:any) => handelClose(r)} open={open} message="Sent Successfully!"/>}
            {openErrMsg && <ErrPopup handelClose={(r:any) => handelClose(r)} open={open} message="Send Error!"/>}
        </>
    )
}

export default Contact
