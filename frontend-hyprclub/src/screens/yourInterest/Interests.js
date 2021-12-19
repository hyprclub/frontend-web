import React from 'react'
import Card_interest from '../../components/card_interest/Card_interest'
import Logo from '../../components/logo/Logo'
import "./Interests.css"


function Interests() {
    return (
        <div className="interest_container">
            <div className="logo">

            <Logo/>
            </div>
            <div className="contain">

            <Card_interest/>
            </div>
            
        </div>
    )
}

export default Interests
