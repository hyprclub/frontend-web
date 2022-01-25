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
        <div className={styles.main}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.head}>
                        <th className={styles.heading}>Item Name</th>
                        <th className={styles.heading}>Purchased By</th>
                        <th className={styles.heading}>Date</th>
                        <th className={styles.heading}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {Content.map((e, index) => (
                    <tr className={styles.body} key={index}>
                        <td className={styles.items}><Link to={e.to} className={styles.link}> <span className={styles.bold}>{e.product}</span> </Link> <br /> {e.id}</td>
                        <td className={styles.items}> 
                            <div className={clsx('d-flex align-items-center')}>
                                    <img className={styles.creatorImg} src={e.img} alt="" />
                                    <div className={styles.ownerAndUsername}>
                                        <p className={styles.owner}>{e.name}</p>
                                        <p className={styles.username}>@{e.username}</p>
                                    </div>
                            </div>
                        </td>
                        <td className={styles.items}> {e.date}</td>
                        <td className={styles.bold}>  <span className={styles.circle} style={{ backgroundColor: e.color }} />{e.price} </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
  </>;
};

export default Sold;
