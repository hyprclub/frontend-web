import React from 'react'
import './Footer.css'

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
                    <img id="fb" src="./images/facebook.svg" alt=""/>
                    <img id="insta" src="./images/instagram.svg" alt=""/>
                    <img id="link" src="./images/linkedin.svg" alt=""/>
                    <img id="twit" src="./images/twitter.svg" alt=""/>
                </div>
                <div className="footer_bottom">
                    <p>All Rights Reserved With HyprClub.</p>
                </div>

            </div>

            <div className="footer_middle">
                    
                    <li className="title1">HyprClub</li>
           
                    <li>Home</li>
                    <li>Discover</li>
                    <li>Marketplace</li>
                    <li>Store</li>

                


            </div>
            <div className="footer_right">
                
                    <li className="title2">Company</li>
                
               
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>FAQs</li>
                    <li>Careers</li>

               

            </div>
            <div className="footer_other">
                <li className="title3">Other</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
            </div>
           </div>
            <div className="footer_logo">
                <img src="./images/logo.png" alt=""/>

            </div>

            
        </div>
    )
}

export default Footer
