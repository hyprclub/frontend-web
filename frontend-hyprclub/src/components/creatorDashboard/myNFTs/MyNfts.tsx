import clsx from 'clsx';
import React, { useState } from 'react';
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
        <div className='container mt-4 py-4'>
            <h2 className={styles.heading}>My NFTs</h2>

            <div>
                <p className={styles.createdAndSold}><span onClick={()=> setCreated(true)} className={created ? styles.active: ""}>Created</span> <span className={!created ? styles.active: ""} onClick={() => setCreated(false)}>Sold</span></p>
            </div>

            {created && <div className={clsx(styles.createdNfts, 'row justify-content-center')}>
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
