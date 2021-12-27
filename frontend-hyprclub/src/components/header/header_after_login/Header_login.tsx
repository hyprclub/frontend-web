import React,  { useState } from 'react'
import { Link } from 'react-router-dom'
import ExpSearchBar from '../../expandablesearch/ExpSearchBar'
import "./Header_login.scss"
import Upload_Button from '../../uploadButton/UploadButton'
import MobileNavigation from '../../MobileNav/MobileNavigation'
import UploadButton from '../../uploadButton/UploadButton'


function Header_login() {

   
    return (
        <div className="header">
            <div className="header__logo">
                <div className="logo">
                   

                    <Link className="link" to="#"><img src="./images/logo.png" alt="" /></Link>
                </div>
            </div>


            <hr />

            <div className="header__info"  >
            <Link to="#" className="link"> <h3> Discover</h3></Link> 
            <Link to="#" className="link"><h3>  Creators </h3></Link> 

           

            </div>
            
            <div className="header__search">
              
                <ExpSearchBar/>
            </div>
            <div className="header__right">
               <UploadButton/>
            </div>
            <div className="header_account">
                <img id="msg" src="./images/message.png" alt="" />
                <img id="notif" src="./images/notification.png" alt="" />
                <img id="avatar" src="./images/avatar.png" alt="" />

            </div>
            <div className="header_menu">
            <MobileNavigation/>

            </div>
            
        </div>
    )
}

export default Header_login
