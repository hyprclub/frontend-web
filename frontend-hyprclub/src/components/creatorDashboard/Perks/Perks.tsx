import clsx from 'clsx';
import { Check } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import styles from './styles.module.css'

const Content = [
    {
        perk: "You will get access to my Discord server.",
        name:'Sandip Rout',
        username:'sandip@hyprclub.com',
        status: true,
    },
    {
        perk: "Get access to my How to create your own fonts! with FREE worksheets!",
        name:'Sandip',
        username:'sandip@hyprclub.com',
        status: false,
    },
]

const Perks = () => {
  return <>
        {/* <div className={clsx(styles.main, 'container')}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.head}>
                        <th className={styles.heading}>Perk</th>
                        <th className={styles.heading}>Purchased By</th>
                        <th className={styles.heading}>Satus</th>
                    </tr>
                </thead>
                <tbody>
                {Content.map((e, index) => (
                    <tr className={styles.body} key={index}>
                        <td className={styles.items}>{e.perk}</td>
                        <td className={styles.items}> 
                            <p className={styles.owner}>{e.name}</p>
                            <p className={styles.username}>@{e.username}</p>
                        </td>
                        <td className={styles.items}>{e.status ? <GradientBorder text='Fulfil'/> : 
                            <p><Check size={32} weight="bold" /> Fulfilled</p>}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div> */}


<div className={clsx(styles.main, 'container')}>
        <h2 className={styles.h2}>Perks</h2>
        <div className={styles.main2}>
            <div className={clsx('d-flex w-100 ', styles.heading)}>
                <div className={styles.heading1}>Perk</div>
                <div className={styles.heading2}>Purchased By</div>
                <div className={styles.heading3}>Status</div>
            </div>
            {
                Content.map((c, index) => {
                    return <div className={clsx('d-flex w-100 align-items-center', styles.elemm)}>
                                <div className={styles.elem1}>
                                    {c.perk}
                                </div>
                                <div className={clsx(styles.elem2, ' ')}>
                                        <p className={clsx(styles.owner)}>{c.name}</p>
                                        <p className={styles.username}>@{c.username}</p>
                                </div>
                                <div className={clsx(styles.elem3, 'text-center')}>{c.status ? <GradientBorder text='Fulfil'/> : 
                            <p><Check className={styles.icon} size={32} weight="bold" /> Fulfilled</p>}</div>
                            </div>
                })
            }
        </div>
        </div>
        
  </>;
};

export default Perks;


