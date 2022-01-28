import clsx from 'clsx';
import { Check } from 'phosphor-react';
import React from 'react';
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import styles from './styles.module.css'

const Content = [
    {
        date: "07/02/2022",
        name:'choo',
        username:'@chootalks',
        status: true,
        amount: "46,450.00",
        img:"images/pfx.png",

    },
    {
        date: "07/02/2022",
        name:'choo',
        username:'@chootalks',
        status: true,
        amount: "46,450.00",
        img:"images/pfx.png",

    },
    {
        date: "07/02/2022",
        name:'choo',
        username:'@chootalks',
        status: true,
        amount: "46,450.00",
        img:"images/pfx.png",

    },
    {
        date: "07/02/2022",
        name:'choo',
        username:'@chootalks',
        status: true,
        amount: "46,450.00",
        img:"images/pfx.png",

    },
]

const SayThanks = () => {
  return <>

<div className={clsx(styles.main, 'container')}>
        <h2 className={styles.h2}>Say Thanks</h2>
        <div className={styles.main2}>
            <div className={clsx('d-flex w-100 ', styles.heading)}>
                <div className={styles.heading1}>User</div>
                <div className={styles.heading2}>Date</div>
                <div className={styles.heading3}>Amount</div>
            </div>
            {
                Content.map((c, index) => {
                    return <div className={clsx('d-flex w-100 align-items-center', styles.elemm)}>
                                <div className={styles.elem1}>
                                    <div className={clsx('d-flex align-items-center justify-content-center')}>
                                        <img className={styles.creatorImg} src={c.img} alt="" />
                                        <div className={styles.ownerAndUsername}>
                                            <p className={styles.owner}>{c.name}</p>
                                            <p className={styles.username}>{c.username}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(styles.elem2, ' text-center')}>{c.date}</div>
                                <div className={clsx(styles.elem3, 'text-center', styles.Pricebold)}><span className={styles.circle}/>INR {c.amount}</div>
                        </div>
                })
            }
        </div>
        </div>
  </>;
};

export default SayThanks;
