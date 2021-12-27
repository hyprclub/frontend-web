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
// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Chatbox/>
        <header className="App-header">
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/follow' element={<FollowCreater/>}/>
            <Route path='/interest' element={<Interests/>}/>
            <Route path='/feed' element={<Feed/>}/>

          </Routes>
          {/* <Header></Header>
          <Footer></Footer> */}
        </header>
      </div>
    </Router>

    )}
    


 

export default App;
