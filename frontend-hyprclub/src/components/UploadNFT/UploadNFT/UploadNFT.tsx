import React, { useState, useRef } from "react";
import styles from "./UploadNFT.module.css";
import { FileUploader } from "react-drag-drop-files";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import Collection from "./Collection_Categories/Collection";
import { FileArrowUp, Plus } from "phosphor-react";
import GradBorder from "../../../screens/NFTs/GradBorder/GradBorder";
import { Form } from "react-bootstrap";
import InputField from "../../inputField/Input";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


const fileTypes = ["GIF", "PNG", "WEBP", "MP4", "MP3"];
const Categories = ["Art", "Bleh", "Blehh", "Blehh"]
const items = [
    {
        title: "Create Collection",
        color: '#23262F',
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
    const [perks, setPerks]: any[] = useState([])
    const [file, setFile] = useState(null);
    const [itemname, setItemname] = useState('');
    const [stock, setStock] = useState('');
    const [cred, setCred] = useState('');
    // const [desc, setDesc] = useState('');
    // const [itemname, setItemname]=useState('');

    const inputRef = useRef<HTMLInputElement | null>(null);
    // const textRef =useRef<HTMLTextAreaElement | null>(null);
    // console.log(perks);
    const addPerk = () => {
        if (inputRef!.current!.value === "") return;
        setPerks([...perks, inputRef!.current!.value]);
        inputRef!.current!.value = "";
    }
    const enterPerk = (e: any) => {
        if (e.key === 'Enter') return addPerk();

    }
    // const descs=

    const handleChange = () => {
        setFile(file);
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.section}>
                    <h1 className={styles.title}> Create an NFT</h1>
                    <div className={styles.Upload}>
                        <h4 className={styles.upldFile}>Upload file</h4>
                        <h6 className={styles.drag}>Drag or choose your file to upload</h6>
                        <FileUploader handleChange={handleChange} name="file" types={fileTypes} >
                            <FileArrowUp size={24} id={styles.Filearrow} />
                            <h6 className={styles.fileTypes}>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</h6>
                        </FileUploader>
                    </div>
                    <div className={styles.ItemName}>
                        {/* <h6 className={styles.Heading}>Enter Item Name</h6> */}
                        <InputField
                            typeOfInput="text"
                            lableText="ENTER ITEM NAME"
                            garyBold={true}
                            className={styles.Input}
                            onChange={(e: any) => setItemname(e.target.value)} />
                    </div>
                    <div className={styles.Item_stck_prc}>
                        <div className={styles.ItemCred}>
                            <InputField
                                typeOfInput="text"
                                lableText="ENTER STOCK NUMBER"
                                garyBold={true}
                                className={styles.Input}
                                onChange={(e: any) => setStock(e.target.value)} />
                        </div>
                        <div className={styles.ItemCred}>
                            <InputField
                                typeOfInput="text"
                                lableText="ENTER PRICE"
                                garyBold={true}
                                className={styles.Input}
                                onChange={(e: any) => setCred(e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.ItemDesc}>
                        <h6 className={styles.Heading}>Enter Item Description</h6>
                        <textarea className={styles.Input_Description} />
                        <h6 className={styles.note}>Use 30-500 characters </h6>
                    </div>
                    <div className={styles.Perks}>
                        <div className={styles.PerkHead}>
                            <h6 className={styles.Heading}>ADD Perk</h6>
                            <div className={styles.transferable}>
                                <h6 className={styles.Heading_transfer}>Make Transferable</h6>
                                <ToggleBtn />
                            </div>
                        </div>
                        <input type="text" onKeyDown={enterPerk} className={styles.Input} ref={inputRef} />
                        <div className={styles.PerkBody}>
                            <button onClick={addPerk} className={styles.Plus}><Plus size={20} className={styles.hh} /></button>
                            <h5 className={styles.AddPerk}>Add Perk</h5>
                            {perks && perks.map((e: any) => (
                                <>
                                    <div className={styles.Plus} />
                                    <h6 className={styles.AddPerk}>{e}</h6>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <h6 className={styles.Heading}>Category</h6>
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
                        <h6 className={styles.Collection_sub}>Choose an existing collection or create a new one</h6>
                        <Collection item={items} />
                    </div>
                    <div className={styles.btns}>
                        <GradBorder className={styles.Gradbtn} text="Create NFT" />
                        <button type="submit" className={styles.Previewbtn}><p className={styles.btnText}> Preview NFT</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadNFT