import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbox from './components/ChatBox/Chatbox';
import Footer from './components/footer/Footer';
import Header from './components/header/header_before_login/Header';
import Feed from './screens/Feed/Feed';

import FollowCreator from './screens/FollowCreater/FollowCreater';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Interests from './screens/yourInterest/Interests';
import Selection from './components/Selection';

import Profile from './screens/Profile/Profile';
import Marketplace from './screens/Marketplace/Marketplace';
import Logout from './logout';

// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Routes>
            {/* <Route path = '/logout'  */}
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/follow' element={<FollowCreator/>}/>
            <Route path='/interest' element={<Interests/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/market' element={<Marketplace/>}/>
          </Routes>
          {/* <Header></Header>
          <Footer></Footer> */}
        </header>
      </div>
    </Router>

    )}
    


 

export default App;
