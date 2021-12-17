import React,  { useState } from 'react'
 import "./Header.css"
function Header() {
    const [view,SetView] = useState(true)
    return (
        <div className="header1">
            <div className="header1__logo">
                <div className="logo1">

                    <img src="./images/logohypr.png" alt="" />
                </div>
            <hr />
            <div className="header1__info"  >
           
                <h3>Discover</h3>
                <h3>Creators</h3>

            </div>

            </div>
            <div className="header_group">

            <div className="header1__search">
                <div className="search-bar1">

                    <input type="text" className="search-bar1__input" placeholder="Search creator, posts, NFTs and more.." aria-label="search" />

                    <button className="search-bar1__submit" aria-label=" submitsearch" onClick={()=>SetView(false)}>                     <img src="./images/search.svg" alt="" />
                    </button>

                </div>
            </div>
            <div className="header1__right">
                <h3>Get Started</h3>
            </div>
           
            </div>
        </div>
    )
}

export default Header
