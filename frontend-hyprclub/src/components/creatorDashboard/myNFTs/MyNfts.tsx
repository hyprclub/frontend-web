import clsx from 'clsx';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Card from '../../card/Card';
import Sold from './sold/Sold';
import styles from './styles.module.css'

const NFTs = [
    {
        title: "European themed Collage",
        desc: "Classic collage capturing the essence of Europian fashion.",
        price: "INR 10,753",
        image: "images/nftImg.png",
        creatorImg: "images/pfx.png",
        creatorUsername: 'chootalks',
        stage:"under review"
        },
         {
        title: "European themed Collage",
        desc: "Classic collage capturing the essence of Europian fashion.",
        price: "INR 10,753",
        image: "images/nftImg.png",
        creatorImg: "images/pfx.png",
        creatorUsername: 'chootalks',
        stage:"rejected"
        },
         {
        title: "European themed Collage",
        desc: "Classic collage capturing the essence of Europian fashion.",
        price: "INR 10,753",
        image: "images/nftImg.png",
        creatorImg: "images/pfx.png",
        creatorUsername: 'chootalks',
        stage:"under review"

        },
         {
        title: "European themed Collage",
        desc: "Classic collage capturing the essence of Europian fashion.",
        price: "INR 10,753",
        image: "images/nftImg.png",
        creatorImg: "images/pfx.png",
        creatorUsername: 'chootalks',
        stage:"approved"

        },
]
const MyNfts = () => {

    const [created, setCreated] = useState(true)

    const createdHandler = () => {
        setCreated(true)
    }


  return <>
        <div className='container'>
            <h2 className={styles.heading}>My NFTs</h2>

            <div className='d-flex justify-content-between'>
                <p className={styles.createdAndSold}><span onClick={()=> setCreated(true)} className={created ? styles.active: ""}>Created</span> <span className={!created ? styles.active: ""} onClick={() => setCreated(false)}>Sold</span></p>
                {created && <div className={clsx(styles.selectDiv)}>
                    <label className="grayBold">SORT BY</label>
                    <Form.Select name='bank acc' className={clsx( styles.select, 'mb-3')} aria-label="Default select example">
                        <option selected>Filter</option>
                        <option value="1">Rejected</option>
                        <option value="2">Under Review</option>
                        <option value="3">Selected</option>
                    </Form.Select>
                </div>}
            </div>

            {created && <div className={clsx(styles.createdNfts, 'd-flex align-items-center')}>
                {
                    NFTs.map((n, index) => {
                        return <Card creatorPage key={index} className='col-md-5' item={n} />
                    })
                }
            </div>}

            {
                !created && <Sold/>
            }
        </div>
  </>;
};

export default MyNfts;
