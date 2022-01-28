import clsx from 'clsx';
import { Check } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PERK_MODAL_OPEN_SUCCESS } from '../../../redux/constants/perkModal';
import { RootStore } from '../../../store';
import GradientBorder from '../../gradientBorderBtn/GradientBorder';
import Fulfill from './fulFilModal/Fulfill';
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

    const { clicked } = useSelector((state: RootStore) => state.perksModalOpen)

    const dispatch = useDispatch();

    const openModal = () => {
        dispatch({type: PERK_MODAL_OPEN_SUCCESS})
    }

    useEffect(() => {
        if(clicked){
         document.body.style.overflow = 'hidden';
        } 
        else{
         document.body.style.overflow = 'unset';
        }
       }, [clicked])

  return <>
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
                                <div className={clsx(styles.elem3, 'text-center')}>{c.status ? <GradientBorder onClick={openModal} text='Fulfil'/> : 
                            <p><Check className={styles.icon} size={32} weight="bold" /> Fulfilled</p>}</div>
                            </div>
                })
            }
        </div>
        </div>
            {
                clicked && <Fulfill/>
            }
        
  </>;
};

export default Perks;


