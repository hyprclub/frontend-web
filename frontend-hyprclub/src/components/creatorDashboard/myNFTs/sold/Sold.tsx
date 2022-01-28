import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'


const Content = [
    {
        product: "Homegrown Tulips",
        date: "21/01/2022",
        id: "HYPR9459207532",
        name:'Choo',
        username:'chootalks',
        img:"images/pfx.png",
        status: "Success",
        color: "#95FF63",
        price: "INR 46,450.00",
        to: "",

    },
    {
        product: "Homegrown Tulips",
        date: "21/01/2022",
        id: "HYPR9459207532",
        name:'Choo',
        username:'chootalks',
        img:"images/pfx.png",
        status: "Success",
        color: "#95FF63",
        price: "INR 46,450.00",
        to: "",
    },
    {
        product: "Homegrown Tulips",
        date: "21/01/2022",
        id: "HYPR9459207532",
        name:'Choo',
        username:'chootalks',
        img:"images/pfx.png",
        status: "Sucess",
        color: "#95FF63",
        price: "INR 46,450.00",
        to: "",
    },
    {
        product: "Homegrown Tulips",
        date: "21/01/2022",
        id: "HYPR9459207532",
        name:'Choo',
        username:'chootalks',
        img:"images/pfx.png",
        status: "Success",
        color: "#95FF63",
        price: "INR 46,450.00",
        to: "",
    },
    {
        product: "Homegrown Tulips",
        date: "21/01/2022",
        id: "HYPR9459207532",
        name:'Choo',
        username:'chootalks',
        img:"images/pfx.png",
        status: "Success",
        color: "#95FF63",
        price: "INR 46,450.00",
        to: "",
    },
    {
        product: "Homegrown Tulips",
        date: "21/01/2022",
        id: "HYPR9459207532",
        name:'Choo',
        username:'chootalks',
        img:"images/pfx.png",
        status: "Success",
        color: "#95FF63",
        price: "INR 46,450.00",
        to: "",
    },
    {
        product: "Homegrown Tulips",
        date: "21/01/2022",
        id: "HYPR9459207532",
        name:'Choo',
        username:'chootalks',
        img:"images/pfx.png",
        status: "Success",
        color: "#95FF63",
        price: "INR 46,450.00",
        to: "",
    },
]


const Sold = () => {
  return <>
        <div className={styles.main2}>
            <div className={clsx('d-flex w-100 ', styles.heading)}>
                <div className={styles.heading1}>Item Name</div>
                <div className={styles.heading2}>Purchased By</div>
                <div className={styles.heading3}>Date</div>
                <div className={styles.heading4}>Amount</div>
            </div>
            {
                Content.map((c, index) => {
                    return <div className={clsx('d-flex w-100 align-items-center', styles.elemm)}>
                                <div className={styles.elem}>
                                    <span className={styles.bold}>{c.product}</span>
                                    <p className={styles.id}>{c.id}</p>
                                </div>
                                <div className={clsx(styles.elem, 'd-flex align-items-center justify-content-center')}>
                                    <img className={styles.creatorImg} src={c.img} alt="" />
                                    <div className={styles.ownerAndUsername}>
                                        <p className={clsx(styles.owner)}>{c.name}</p>
                                        <p className={styles.username}>@{c.username}</p>
                                    </div>
                                </div>
                                <div className={styles.elem}>{c.date}</div>
                                <div className={clsx(styles.elem, styles.Pricebold, 'd-flex align-items-center justify-content-center')}><span className={styles.circle} style={{ backgroundColor: c.color }} />{c.price} </div>
                            </div>
                })
            }
        </div>
  </>;
};

export default Sold;
