import React, {useState} from "react";
import cn from "classnames";
import styles from "./user.module.css";
import Icon from "../Icon";
import GradientBorder from "../gradientBorderBtn/GradientBorder";
import { useSelector ,RootStateOrAny} from "react-redux";

interface Item {
    title: string,
    url : string
}

interface UserType{
    className: string,
    item: Item[],
    name : any,
    username : any,
    category : any,
    portfolioUrl : any,
    bio : any,
    joiningDate : any 
}

const User = ({ className, item ,name , username ,category , portfolioUrl,bio,joiningDate }:UserType) => {
  const userData = useSelector((state : RootStateOrAny) => state.userData);
  const [visiblity , setVisiblity] = useState("hidden");
  
  return (
    <>
      <div className={cn(styles.user, className)}>
        <div className={styles.avatar}>
          <img src="/images/content/avatar-big.jpg" alt="Avatar" />
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.code}>
          <div className={styles.username}>@{username}</div>
          <div className={styles.prof}>{category}</div>
        </div>
        <div className={styles.info}>
          {bio}
        </div>
        <a
          className={styles.href}
          href={portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={cn("bi bi-link", styles.linkicon)}></i>
          <span>{portfolioUrl}</span>
        </a>
        {/* <div>
        <p className={cn(styles.hypes, 'text-center')}> <img src="images/FireSimple.png" className={styles.fire} alt="" /> 1,000,573 hypes</p> */}
        {/* <div className={cn(styles.followersAndFollowiing, 'd-flex')}>
          <p className={cn(styles.followers, 'text-center')}><span className={styles.nums}>100K</span><br /> Followers</p>
          <p className={cn(styles.followings, 'text-center')}><span className={styles.nums}>359</span><br /> Followings</p>
        </div>
        <GradientBorder text='View Dashboard'/>
        </div> */}
        <div className={styles.gradbtn}><GradientBorder text='View Dashboard'/></div>
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
        <div className={styles.note}><i className={cn("bi bi-calendar-week", styles.calendarIcon)}></i>Member since {joiningDate}</div>
      </div>
    </>
  );
};

export default User;
