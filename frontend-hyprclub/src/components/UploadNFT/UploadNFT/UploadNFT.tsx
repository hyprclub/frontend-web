import React, { useState } from "react";
import styles from "./UploadNFT.module.css";
import { FileUploader } from "react-drag-drop-files";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import Collection from "./Collection_Categories/Collection";
import {FileArrowUp, Plus } from "phosphor-react";
import GradBorder from "../../../screens/NFTs/GradBorder/GradBorder";
import { Form } from "react-bootstrap";


const fileTypes = ["GIF", "PNG", "WEBP", "MP4", "MP3"];
const Categories = ["Art", "Bleh", "Blehh", "Blehh"]
const items = [
    {
        title: "Create Collection",
        color: '#23262F',
        icon: <Plus size={12} style={{ color: '#777E91' }} />


    },
    {
        title: "Crypto Legend -Professor",
        color: '#45B26B',


    },
    {
        title: "Crypto Legend -Professor",
        color: '#EF466F'

    },
    {
        title: " Legend Photography",
        color: '#9757D7'

    }
]


const UploadNFT = () => {
    const [category, setCategory] = useState(Categories[0]);
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
                            <FileArrowUp size={24} id={styles.Filearrow} />
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
                    <div className={styles.Perks}>
                        <div className={styles.PerkHead}>
                            <span className={styles.Heading}>ADD Perk</span>
                            <div className={styles.transferable}>
                                <span className={styles.Heading_transfer}>Make Transferable</span>
                                <ToggleBtn />
                            </div>
                        </div>
                        <input className={styles.Input} />
                        <div className={styles.PerkBody}>
                            <div className={styles.Plus}><Plus size={32} /></div>
                            <span className={styles.AddPerk}>Add Perk</span>
                        </div>
                    </div>

                    <div className={styles.dropdown}>
                        <span className={styles.Heading}>Category</span>
                        <Form.Select aria-label="Default select example" className={styles.drop}>
                            {Categories.map((x, index) => (
                                <option key={index}>{x} </option>
                            ))}
                        </Form.Select>
                    </div>
                </div>
                <div className={styles.Bottom}>
                    <div className={styles.Collection}>
                        <h3 className={styles.Collection_title}>Choose Collection</h3>
                        <span className={styles.Collection_sub}>Choose an existing collection or create a new one</span>
                        <Collection item={items} />
                    </div>
                    <div className={styles.btns}>
                        <GradBorder className={styles.Gradbtn} text="Create NFT" />
                        <button type="submit" className={styles.Previewbtn}><span className={styles.btnText}> Preview NFT</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadNFT