import React from 'react'
import Header_login from '../../components/header/header_after_login/Header_login';
import PreviewNFT from '../../components/UploadNFT/PreviewNFT/PreviewNFT'
import UploadNFT from '../../components/UploadNFT/UploadNFT/UploadNFT'
import styles from './UploadNft.module.css';

function UploadNft() {
    return (
        <>
        <Header_login />
        <div className={styles.body}>
            <UploadNFT/>
            <PreviewNFT/>

        </div>
            
        </>
    )
}

export default UploadNft
