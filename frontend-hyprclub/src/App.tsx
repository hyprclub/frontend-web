import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FollowCreater from './screens/FollowCreater/FollowCreater';
import Login from './screens/Login/Login';
import Register from './screens/Regiter/Register';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/follow' element={<FollowCreater/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
