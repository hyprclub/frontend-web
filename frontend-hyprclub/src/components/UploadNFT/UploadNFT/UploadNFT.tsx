import React, { useState, useRef } from "react";
import styles from "./UploadNFT.module.css";
import { FileUploader } from "react-drag-drop-files";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import Collection from "./Collection_Categories/Collection";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { FileArrowUp, Plus, X } from "phosphor-react";

import { Form } from "react-bootstrap";
import InputField from "../../inputField/Input";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import GradBorder from "../../NFTs/GradBorder/GradBorder";
import { firebaseApp } from "../../../firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { RootStateOrAny, useSelector } from "react-redux";
const fileTypes = ["GIF", "PNG", "WEBP", "MP4", "MP3"];
const Categories = ["Art", "Bleh", "Blehh", "Blehh"];
const items = [
  {
    title: "Create Collection",
    color: "#23262F",
  },
  {
    title: "Crypto Legend -Professor",
    color: "#45B26B",
  },
  {
    title: "Crypto Legend -Professor",
    color: "#EF466F",
  },
  {
    title: " Legend Photography",
    color: "#9757D7",
  },
];

const UploadNFT = () => {
  const [category, setCategory] = useState(Categories[0]);
  const [perks, setPerks]: any[] = useState(() => new Set());
  const userData = useSelector((state: RootStateOrAny) => state.userData);
  const [file, setFile] = useState(null);
  const [itemname, setItemname] = useState("");
  const [coll, setCollection] = useState("");
  const [cred, setCred] = useState(100);
  const perksarray = [...perks];
  const [nft, setNft] = useState("");
  const [desc, setDesc] = useState("");
  const db = getFirestore(firebaseApp);
  // const [itemname, setItemname]=useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);
  // const textRef =useRef<HTMLTextAreaElement | null>(null);
  // console.log(perks);
  const capitalise = {};

  const [perks1, setPerks1]: any[] = useState(() => new Set());

  const addPerk = () => {
    if (inputRef!.current!.value === "") {
      alert("Please add a perk");
      return;
    }
    // setPerks([...perks, inputRef!.current!.value]); prevState:any)=> new Set(prevState).add(inputRef!.current!.value)

    if (perks1.has(inputRef!.current!.value!.toLowerCase())) {
      alert("Duplicate Perks Not Allowed");
      return;
    }

    setPerks1(new Set([...perks, inputRef!.current!.value!.toLowerCase()]));

    setPerks(new Set([...perks, inputRef!.current!.value!]));
    console.log(inputRef!.current!.value);
    inputRef!.current!.value = "";
  };
  const enterPerk = (e: any) => {
    if (e.key === "Enter") addPerk();
  };

  const makeNftId = (len: number) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const characterLengths = characters.length;
    for (let i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * characterLengths));
    }
    return result;
  };

  let nftid = "NFT" + makeNftId(26);

  const storage = getStorage(firebaseApp);
  const current = new Date();
  const [isVideo, setVideo] = useState(false);
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const storageNFTref = ref(storage, "nftRequest/" + nftid + "/nft.jpg");
  const handleChange = async (e: any) => {
    const file = e;

    console.log(file);
    if (!file) return;
    console.log(file.size);
    if (file.size >= 157286400) {
      console.log("File Size too Big Max Size 150Mb");
    } else {
      if (file.type.split("/")[0] !== "video") {
        setVideo(false);
      } else {
        console.log("video");
        setVideo(true);
      }
      await uploadBytesResumable(storageNFTref, file)
        .then((result) => {
          console.log(result.state);
        })
        .then(() => {
          getDownloadURL(storageNFTref)
            .then((url) => {
              setNft(url);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .then(() => {
          console.log("Success");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const nftRequest = async () => {
    let perksList: any = [];
    for (let i = 0; i < perksarray.length; i++) {
      perksList.push({ description: perksarray[i], isAvailed: false });
    }

    console.log(nft);
    if (
      itemname === "" ||
      nft === "" ||
      coll === "" ||
      desc === "" ||
      perks === ""
    ) {
      console.log("Feild Empty");
    } else {
      const reqID = "REQNFT" + makeNftId(24);
      await setDoc(doc(db, "nftRequest", reqID), {
        creatorName: userData?.name,
        creatorEmail: userData?.email,
        creatorPhone: userData?.phone,
        creatorUsername: userData?.username,
        creatorUid: userData?.uid,
        requestId: reqID,
        nftMedia: nft,
        applyDate: date,
        isMinted: false,
        isApproved: false,
        video: isVideo,
        state: "PENDING",
        perks: perksList,
        price: cred,
        description: desc,
        title: itemname,
        collectionTag: coll,
        category: category,
      })
        .then(() => {
          console.log("REQ SENT!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const removePerk = (e: any) => {
    const updatedPerks = new Set(perks);
    const updatedPerks1 = new Set(perks1);
    updatedPerks.delete(e);
    updatedPerks1.delete(e.toLowerCase());
    setPerks(updatedPerks);
    setPerks1(updatedPerks1);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <h1 className={styles.title}> Create an NFT</h1>
          <div className={styles.Upload}>
            <h4 className={styles.upldFile}>Upload file</h4>
            <h6 className={styles.drag}>Drag or choose your file to upload</h6>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            >
              <FileArrowUp size={24} id={styles.Filearrow} />
              <h6 className={styles.fileTypes}>
                PNG, GIF, WEBP, MP4 or MP3. Max 150MB.
              </h6>
            </FileUploader>
          </div>
          <div className={styles.ItemName}>
            {/* <h6 className={styles.Heading}>Enter Item Name</h6> */}
            <InputField
              typeOfInput="text"
              lableText="ENTER ITEM NAME"
              garyBold={true}
              className={styles.Input}
              onChange={(e: any) => setItemname(e.target.value)}
            />
          </div>
          <div className={styles.Item_stck_prc}>
            <div className={styles.ItemCred}>
              <InputField
                typeOfInput="text"
                lableText="ENTER COLLECTION TAG"
                garyBold={true}
                className={styles.Input}
                onChange={(e: any) => setCollection(e.target.value)}
              />
            </div>
            <div className={styles.ItemCred}>
              <InputField
                typeOfInput="text"
                lableText="ENTER PRICE"
                garyBold={true}
                className={styles.Input}
                onChange={(e: any) => setCred(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.ItemDesc}>
            <h6 className={styles.Heading}>Enter Item Description</h6>
            <textarea
              onChange={(e: any) => setDesc(e.target.value)}
              className={styles.Input_Description}
            />
            <h6 className={styles.note}>Use 30-500 characters </h6>
          </div>
          <div className={styles.Perks}>
            <div className={styles.PerkHead}>
              <h6 className={styles.Heading}>ADD Perk</h6>
              {/* <div className={styles.transferable}>
                <h6 className={styles.Heading_transfer}>Make Transferable</h6>
                <ToggleBtn />
              </div> */}
            </div>
            <input
              type="text"
              onKeyDown={enterPerk}
              className={styles.Input}
              ref={inputRef}
            />
            <div className={styles.PerkBody}>
              <button onClick={addPerk} className={styles.Plus}>
                <Plus size={20} className={styles.perkicon} />
              </button>
              <h5 className={styles.AddPerk}>Add Perk</h5>
              {perksarray &&
                perksarray.map((e: any) => (
                  <div className={styles.addedPerk} key={e}>
                    <button
                      className={styles.Plus}
                      onClick={() => removePerk(e)}
                    >
                      <X size={20} className={styles.perkicon} />{" "}
                    </button>
                    <h6 className={styles.AddPerk}>{e}</h6>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.dropdown}>
            <h6 className={styles.Heading}>Category</h6>
            <Form.Select
              aria-label="Default select example"
              className={styles.drop}
            >
              {Categories.map((x, index) => (
                <option key={index}>{x} </option>
              ))}
            </Form.Select>
          </div>
        </div>
        <div className={styles.Bottom}>
          {/* <div className={styles.Collection}>
            <h3 className={styles.Collection_title}>Choose Collection</h3>
            <h6 className={styles.Collection_sub}>
              Choose an existing collection or create a new one
            </h6>
            <Collection item={items} />
          </div> */}
          <div className={styles.btns}>
            <GradBorder
              className={styles.Gradbtn}
              text="SEND NFT REQUEST"
              onClick={nftRequest}
            />
            {/* <button type="submit" className={styles.Previewbtn}>
              <p className={styles.btnText}> Preview NFT</p>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default UploadNFT;
