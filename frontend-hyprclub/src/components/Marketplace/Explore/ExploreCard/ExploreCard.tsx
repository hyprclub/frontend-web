import React , {useEffect ,useState} from 'react';
import cn from 'classnames'
import styles from "./ExploreCard.module.css"
import clsx from 'clsx';
import axios from "axios";
import { getFirestore, getDoc , doc } from 'firebase/firestore';
import { firebaseApp } from '../../../../firebaseConfig';
import { getStorage , getDownloadURL,ref } from 'firebase/storage';
import { useNavigate } from 'react-router';

const ExploreCard = ({ className, items : itemFromProps }: any) => {
    const [item , setItem] = useState<null | any>({});
    const db = getFirestore(firebaseApp);
    const navigate = useNavigate();
    const storage = getStorage(firebaseApp);
    const [price, setPrice] = useState(0);
    const [creatorPhoto,setCreatorPhoto] = useState('');
    const [creatorUsername,setCreatorUsername] = useState('');

    const handleSendProfile = () =>{
        navigate("/"+creatorUsername);
    }

    const handleSendNft = () =>{
        navigate("/nft/singleNfts/"+itemFromProps);
    }

    useEffect(()=>{
        console.log(itemFromProps);
        const run = async () => {
            if(itemFromProps){
             await getDoc(doc(db ,"marketplace","Nfts","singleNfts",itemFromProps))
             .then((docs)=>{
                 if(docs.exists()){
                     setPrice(docs.data().price)
                     getDoc(doc(db,"hyprUsers",docs.data().creatorUid))
                     .then((document)=>{
                         if(document.exists()){
                            setCreatorUsername(document?.data()?.username);
                            const creatorPhotoRef  = ref(storage , "users/" +docs.data().creatorUid+"/profile.jpg");
                             getDownloadURL(ref(creatorPhotoRef))
                             .then((url) =>{
                                 setCreatorPhoto(url);
                             })
                             .catch((err) =>{
                                 console.error(err);
                             });
                         }        
                     })
                     .catch((err)=>{
                         console.error(err);
                     })
                     axios
                        .get("https://cdn.hyprclub.com/alumini/"+itemFromProps)
                        .then((repns)=>{
                            setItem(repns.data);
                        })
                        .catch((error) =>{
                            console.error(error);
                        })

                 }
             })
            }else{

            }
        }
        run();
    },[setItem ,db, itemFromProps])
    return (
        <div className={cn(styles.card, className)}>
            {/* <Link className={styles.link} to={item.url}> */}
            <div className={styles.body}>
                 <a onClick={handleSendNft}><div className={styles.line}>
                    <div className={clsx(styles.imgAndBtn, 'position-relative w-100')}>
                        <img className={styles.image} src={item.image} alt="" />
                    </div>
                    <div className={styles.title}>{item.name}</div>
                    <div className={clsx('d-flex align-items-center justify-content-between w-100 mt-2')}>
                        <div className={clsx('d-flex align-items-center')}>
                            <img className={styles.creatorImg} src={creatorPhoto || "images/pfx.png"} alt="Pht" />
                            <div className={styles.ownerAndUsername}>
                                <p className={styles.owner}>Creator</p>
                                <a onClick={handleSendProfile}><p className={styles.username}>@{creatorUsername}</p></a>
                            </div>
                        </div>
                        <div className={styles.price}><span className={styles.pricetxt}>INR {price}</span></div>
                    </div>
                </div></a>
            </div>
            {/* </Link> */}

        </div>
    );
};

export default ExploreCard;