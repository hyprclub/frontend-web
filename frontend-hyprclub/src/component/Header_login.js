import React,  { useState } from 'react'
import "./Header_login.scss"


function Header_login() {
    // const [view,SetView] = useState(true)
    return (
        <div className="header">
            <div className="header__logo">
                <div className="logo">

                    <img src="./images/logohypr.png" alt="" />
                </div>
            </div>
            <hr />
            <div className="header__info"  >
           
                <h3>Discover</h3>
                <h3>Creators</h3>
           

            </div>
            <div className="header__search">
                <div className="search-bar">

                    <input type="text" className="search-bar__input" placeholder="Search creator, posts, NFTs and more.." aria-label="search" />

                    <button className="search-bar__submit" aria-label=" submitsearch" >                     <img src="./images/search.svg" alt="" />
                    </button>

                </div>
            </div>
            <div className="header__right">
                <h3>Upload</h3>
            </div>
            <div className="header_account">
                <img id="msg" src="./images/message.png" alt="" />
                <img id="notif" src="./images/notification.png" alt="" />
                <img id="avatar" src="./images/avatar.png" alt="" />

            </div>
        </div>
    )
}

export default Header_login
