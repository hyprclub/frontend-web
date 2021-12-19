import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
           <div className="ft">

            <div className=" footer_left">
                <div className="footer__phrase">
                    <p>Democratizing the Creator Economy</p>
                 <div className="footer_2">
                    <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit.</p>
                 </div>
                </div>
                <div className="footer_logos">
                   <Link to="#" className="link"> <img id="fb" src="./images/facebook.svg" alt=""/></Link>
                   <Link to="#" className="link">  <img id="insta" src="./images/instagram.svg" alt=""/></Link>
                   <Link to="#" className="link">  <img id="link" src="./images/linkedin.svg" alt=""/></Link>
                   <Link to="#" className="link">  <img id="twit" src="./images/twitter.svg" alt=""/></Link>
                </div>
                <div className="footer_bottom">
                    <p>All Rights Reserved With HyprClub.</p>
                </div>

            </div>

            <div className="footer_middle">
                    
                    <li className="title1"><Link to="#" className="link">HyprClub</Link></li>
           
                    <li><Link to="#" className="link">Home</Link></li>
                    <li><Link to="#" className="link"> Discover</Link></li>
                    <li><Link to="#" className="link"> Marketplace</Link></li>
                    <li><Link to="#" className="link">Store</Link> </li>

                


            </div>
            <div className="footer_right">
                
                    <li className="title2"><Link to="#" className="link">Company</Link></li>
                
               
                    <li><Link to="#" className="link">Contact Us</Link></li>
                    <li> <Link to="#" className="link">About Us</Link></li>
                    <li><Link to="#" className="link"> FAQs</Link></li>
                    <li><Link to="#" className="link">Careers</Link></li>

               

            </div>
            <div className="footer_other">
                <li className="title3"><Link to="#" className="link">Other</Link></li>
               <Link to="#" className="link"> <li>Terms of Use</li></Link>
                <Link to="#" className="link"><li>Privacy Policy</li></Link>
            </div>
           </div>
            <div className="footer_logo">
                <Link to="#" className="link"><img src="./images/logo.png" alt=""/></Link>

            </div>

            
        </div>
    )
}

export default Footer
