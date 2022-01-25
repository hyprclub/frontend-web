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
        status: true,
    },
]

const Perks = () => {
  return <>
        <div className={styles.main}>
            <h2></h2>
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
        </div>
  </>;
};

export default Perks;
