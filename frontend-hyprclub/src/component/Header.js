import React,  { useState } from 'react'
import "./Header_prelogin.scss"
function Header() {
    const [view,SetView] = useState(true)
    return (
        <div className="header">
            <div className="header__logo">
                <div className="logo">

                    <img src="./images/logo.png" alt="" />
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

                    <button className="search-bar__submit" aria-label=" submitsearch" onClick={()=>SetView(false)}>                     <img src="./images/search.svg" alt="" />
                    </button>

                </div>
            </div>
            <div className="header__right">
                <h3>Get Started</h3>
            </div>
           
        </div>
    )
}

export default Header
