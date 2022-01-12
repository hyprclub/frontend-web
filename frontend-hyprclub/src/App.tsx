import React from 'react';
import { useEffect } from 'react';
import { useSelector , useDispatch, RootStateOrAny, DefaultRootState } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbox from './components/ChatBox/Chatbox';
import Footer from './components/footer/Footer';
import Header from './components/header/header_before_login/Header';
import Feed from './screens/Feed/Feed';
import FollowCreater from './screens/FollowCreater/FollowCreater';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Interests from './screens/yourInterest/Interests';
import Header_login from './components/header/header_after_login/Header_login';
import Profile from './screens/Profile/Profile';
import Marketplace from './screens/Marketplace/Marketplace';
import Logout from './logout';
import Settings from './screens/Settings/Settings';
import Landing from './screens/Landing/Landing';
import NFTS from './screens/NFTs/NFTS';
import UploadNft from './screens/UploadNft/UploadNft';
import { firebaseApp } from "./firebaseConfig";
import { useNavigate } from "react-router";
import {
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
} from "@firebase/auth";

import {
  getDoc,
  doc,
  where,
  getDocs,
  collection,
  getFirestore,
  query,
  orderBy,
  limit
} from "firebase/firestore";


import userData, { UserDataActions } from './redux/slices/userData';
// import logo from './logo.svg';
// import './App.css';


function App() {
  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.userData
  );
  const userData = useSelector((state : RootStateOrAny) => state.userData);
  const auth = getAuth(firebaseApp);
  const db  = getFirestore(firebaseApp);
  


  const dispatch = useDispatch();


  // monitor any auth changes in the 
  useEffect(() => {
   
   onAuthStateChanged(auth , (user) => {
     if(user){
       console.log(user);
       if(user.emailVerified) {
         dispatch(UserDataActions.login(user));
       }else{
         sendEmailVerification(user)
         .then((result) =>{
           console.log("Verification Mail Sent! please verify email to continue");
         })
         .catch((error) => {
           if(error.code === "auth/too-many-requests"){
              console.log("Verify Email to continue further");
           }
           else{
             console.log("Something went wrong verification mail")
           }
         });
       }
     }else{
       dispatch(UserDataActions.logout());
     }
   })

  },[dispatch,auth]);


  // fetching userData from firebase
  useEffect(() => {
    const run = async () => {
      if(loggedIn && uid){
        getDoc(doc(db,"hyprUsers",uid)).then((docSnap) => {
          if(docSnap.exists()){
            dispatch(UserDataActions.updateCurrentUserDetail(docSnap.data()));
          console.log(docSnap.data());
          }
          else{
            console.log("No User Data");
          }
        })
        .catch((error) => {
          console.error(error);
        })
      }else{
        console.log("logged Out");
      }
    };
    run();
  },[dispatch,loggedIn,uid,db]);


  //after login redirect to market place
  // useEffect(() => {
  //   const run = async () => {
  //     if (loggedIn && uid) {
  //       navigate("/market");
  //     } else {
  //     }
  //   };
  //   run();
  // }, [loggedIn, uid, navigate]);


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <UploadNft></UploadNft> */}
          <Routes>
            <Route path='nft' element={<NFTS></NFTS>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path ='/logout' element={<Logout/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/follow' element={<FollowCreater/>}/>
            <Route path='/interest' element={<Interests/>}/>
            <Route path='/feed' element={<Feed/>}/>
            {/* <Route path='/profile' element={<Profile/>}/> */}
            <Route path='/market' element={<Marketplace/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path ='profile/:username' element= {<Profile/>}/>
            <Route path='/settings/:test' element={<Settings/>}/>
            <Route path='/' element={<Landing/>}></Route>
          </Routes>
          {/* <Header></Header>
          <Footer></Footer> */}
        </header>
      </div>
    </Router>

    )}
    


 

export default App;
