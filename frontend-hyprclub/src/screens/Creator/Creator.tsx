import clsx from 'clsx';
import React from 'react';
import CreatorStats from '../../components/creatorDashboard/creatorStats/CreatorStats';
import GetHelp from '../../components/creatorDashboard/getHelp/GetHelp';
import MyNfts from '../../components/creatorDashboard/myNFTs/MyNfts';
import TransactionHistory from '../../components/creatorDashboard/TransactionHistory';
import Header_login from '../../components/header/header_after_login/Header_login';
import Perks from '../NFTs/Perks/Perks';
import styles from './styles.module.css'
const Creator = () => {
  return <>
        <div className={styles.body}>
            <Header_login/>
            <div className='container'>
                <div className={clsx('mt-4 pt-4 row', styles.mainDiv)}>
                    <div className='col-lg-8'>
                        <CreatorStats/>
                        <MyNfts/>
                        {/* <Perks/> */}
                    </div>
                    <div className='col-lg-4'>
                        <TransactionHistory/>
                        <GetHelp className='mt-4'/>
                    </div>

                </div>
            </div>
        </div>
  </>;
};

export default Creator;
