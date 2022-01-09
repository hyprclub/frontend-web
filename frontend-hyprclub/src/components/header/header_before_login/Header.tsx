import React from 'react'
import { Link } from 'react-router-dom'
import ExpSearchBar from '../../expandablesearch/ExpSearchBar'
import GetStartBtn from '../../getstarttedbutton/GetStartBtn'
import MobileNavigation from '../../MobileNav/MobileNavigation'

 import "./Header.css"
function Header() {
    
    return (
        <div className="header1">
            <div className="header1__logo">
                <div className="logo1">
                   < Link to="#" className="link"><img src="./images/logo.png" alt="" /></Link>
                </div>
            </div>

            <hr />
            
            <div className="header1__info">
           
           <Link to="#" className="link"> <h3> Discover</h3></Link> 
            <Link to="#" className="link"><h3>  Creators </h3></Link> 

            </div>

            <div className="header1__search">
                <ExpSearchBar/>
            </div>

            <div className="header1__right">
               <GetStartBtn/>
            </div>

            <div className="header1_menu">
            <MobileNavigation/>
            </div>
        </div>
    )
}

export default Header
