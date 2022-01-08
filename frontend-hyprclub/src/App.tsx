import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbox from './components/ChatBox/Chatbox';
import Footer from './components/footer/Footer';
import Header from './components/header/header_before_login/Header';
import Feed from './screens/Feed/Feed';
import FollowCreater from './screens/FollowCreater/FollowCreater';
import Login from './screens/Login/Login';
import Register from './screens/Regiter/Register';
import Interests from './screens/yourInterest/Interests';
import Header_login from './components/header/header_after_login/Header_login';
import Profile from './screens/Profile/Profile';
import Marketplace from './screens/Marketplace/Marketplace';
import Settings from './screens/Settings/Settings';
import Landing from './screens/Landing/Landng';
import NFTS from './screens/NFTs/NFTS';
import UploadNft from './screens/UploadNft/UploadNft';
// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NFTS/>
          <UploadNft/>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/follow' element={<FollowCreater/>}/>
            <Route path='/interest' element={<Interests/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/market' element={<Marketplace/>}/>
            <Route path='/settings' element={<Settings/>}/>
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
