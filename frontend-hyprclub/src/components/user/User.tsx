import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./user.module.css";
import Icon from "../Icon";
import GradientBorder from "../gradientBorderBtn/GradientBorder";
import clsx from "clsx";
import { X } from "phosphor-react";
interface Item {
    title: string,
    url : string
}

interface UerType{
    className: string,
    item: Item[]
}



const User = ({ className, item }:UerType) => {

const [thanksValue, setThanksValue] = useState('100.00');
const [showModal, setShowModal] = useState(false);

const closeModal = () => {
  setShowModal(false)
}
const [vis,setvis]=useState(true);
useEffect(() => {
 if(showModal){
  document.body.style.overflow = 'hidden';
 } 
 else{
  document.body.style.overflow = 'unset';
 }
}, [showModal])

const [creator, setCreator] = useState(true);

  return (
    <>
      <div className={cn(styles.user, className)}>
        <div className={styles.avatar}>
          <img src="/images/content/avatar-big.jpg" alt="Avatar" />
        </div>
        <div className={creator ? styles.creatorName : styles.nonCreatorName}>Lorem Ipsum</div>
        <div className={styles.code}>
          <div className={styles.username}>@loremipsum_</div>
          <div className={styles.prof}>Digital Artist</div>
        </div>
        <div className={styles.info}>
        she/her | 19y old artist based in Queens! USC’23
        </div>
        <a
          className={styles.href}
          href="https://ui8.net"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <i className={cn("bi bi-link", styles.linkicon)}></i>
          <span>www.lorem.net</span>
        </a>

        {/* <p className={cn(styles.hypes, 'text-center')}> <img src="images/FireSimple.png" className={styles.fire} alt="" /> 1,000,573 hypes</p> */}
        {/* <div className={cn(styles.followersAndFollowiing, 'd-flex')}>
          <p className={cn(styles.followers, 'text-center')}><span className={styles.nums}>100K</span><br /> Followers</p>
          <p className={cn(styles.followings, 'text-center')}><span className={styles.nums}>359</span><br /> Followings</p>
        </div> */}
        {vis===true &&
        <div className={styles.gradbtn}>
          <GradientBorder onClick={() => setShowModal(true)} text='Say Thanks'/>
        </div>
        }
        <div className={cn(styles.socials, 'my-3')}>
          {item.map((x, index) => (
            <a
              className={styles.social}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Icon  name={x.title} size="30" />
            </a>
          ))}
        </div>
        <hr className={styles.hr} />
        <div className={styles.note}><i className={cn("bi bi-calendar-week", styles.calendarIcon)}></i>Member since Mar 15, 2021</div>
      </div>


      {/* MODAL */}

      <div onClick={closeModal} className={clsx(styles.modalDiv, showModal ? styles.show: styles.hide)}>
            <div onClick={e => e.stopPropagation()} className={styles.modal}>
              <p className={styles.cross}><X onClick={closeModal} size={30} weight='bold' /></p>
                <div className={styles.thankYouDiv}>
                    <h2 className={styles.gradientTitle}>Say Thanks to Lorem!</h2>
                    <p className={styles.lastDesc}>We will reach out to you soon! Be sure to check your registered email to activate your creator account at HyprClub. </p>

                    <p className={styles.addContribution}>Add a Contribution</p>
                </div>
                  <form>
                <div className={clsx("d-flex align-items-baseline", styles.inputDIV)}>
                    <div className={clsx('d-flex align-items-end', styles.inputAndINR)}>
                      <input required min={100} onChange={(e)=> setThanksValue((e.target.value)) } value={(thanksValue)} className={styles.input} type="number"/>
                      <span className={styles.INR}>INR</span>
                    </div>
                      <div className={styles.thanksBtn}>
                      <GradientBorder disable={(parseInt(thanksValue)<100)} text="Say Thanks"/>
                      </div>
                </div>
                    </form>
            </div>
      </div>
    </>
  );
};

export default User;
