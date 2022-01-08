import React, { useState } from "react";
import cn from "classnames";
import styles from "./UploadNFT.module.css";
import { FileUploader } from "react-drag-drop-files";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import Collection from "./Collection_Categories/Collection";
import { CaretDown, FileArrowUp } from "phosphor-react";
import GradientBorder from "../../gradientBorderBtn/GradientBorder";

const fileTypes = ["GIF", "PNG", "WEBP", "MP4", "MP3"];
const items=[
    {    
        title:"Crypto Legend -Professor",
        color: '#45B26B'

    },
    {    
        title:"Crypto Legend -Professor",
        color: '#EF466F'

    },
    {    
        title:" Legend Photography",
        color: '#9757D7'

    }
]


const UploadNFT = () => {
    const handleChange = (file: any) => {
        setFile(file);
    };
    const [file, setFile] = useState(null);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.section}>
                    <div className={styles.title}> Create an NFT</div>
                    <div className={styles.Upload}>
                        <span className={styles.upldFile}>Upload file</span>
                        <span className={styles.drag}>Drag or choose your file to upload</span>
                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} >
                        <FileArrowUp size={24} id={styles.Filearrow}/>
                        <span className={styles.fileTypes}>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</span>
                        </FileUploader>
                    </div>
                    <div className={styles.ItemName}>
                        <span className={styles.Heading}>Enter Item Name</span>
                        <input className={styles.Input} />
                    </div>
                    <div className={styles.Item_stck_prc}>
                        <div className={styles.ItemCred}>
                            <span className={styles.Heading}>Enter Stock Number</span>
                            <input className={styles.Input_1} />
                        </div>
                        <div className={styles.ItemCred}>
                            <span className={styles.Heading}>Enter Price</span>
                            <input className={styles.Input_1} />
                        </div>
                    </div>
                    <div className={styles.ItemDesc}>
                        <span className={styles.Heading}>Enter Item Description</span>
                        <textarea className={styles.Input_Description} />
                        <span className={styles.note}>Use 30-500 characters </span>

                    </div>
                    <div className={styles.dropdowns}>
                        <div className={styles.dropdown1}>
                            <span className={styles.Heading}>Royalties</span>
                            <div className={styles.drop1}>
                                <span className={styles.drop_text}>10%</span>
                                <CaretDown size={14} />
                            </div>
                        </div>
                        <div className={styles.dropdown2}>
                            <span className={styles.Heading}>Category</span>
                            <div className={styles.drop1}>
                                <span className={styles.drop_text}>Art</span>
                                <CaretDown size={14} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Sale}>
                        <div className={styles.Sell}>
                            <span className={styles.Sale_text}>Put on Sale</span>
                            <ToggleBtn />
                        </div>
                        <span className={styles.Sale_Note}>You will receive bids on this item</span>
                    </div>
                    <div className={styles.Sale}>
                        <div className={styles.Sell}>
                            <span className={styles.Sale_text}>Instant Sale</span>
                            <ToggleBtn />
                        </div>
                        <span className={styles.Sale_Note}>The NFT will be sold at the price entered</span>
                    </div>
                    <div className={styles.Collection}>
                        <h3 className={styles.Collection_title}>Choose Collection</h3>
                        <span className={styles.Collection_sub}>Choose an existing collection or create a new one</span>

                        <Collection item={items}/>

                        
                    </div>
                    <div className={styles.createbtn}>
                    <GradientBorder text="Create NFT"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadNFT