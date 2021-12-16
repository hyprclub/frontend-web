import React from 'react';
import './socials.css';

interface Purpose {
    purpose: string
}

const SocialLogins = ({purpose}: Purpose) => {
    return (
        <div className='text-center mt-4'>
            <div className="Login">
                <img className='me-3 googleImg' src="images/Google.png" alt="google" />
                <p className='socialLoginText'>{purpose} with Google</p>
            </div>
            <div className="Login">
                <img className='me-3 googleImg' src="images/Facebook.png" alt="google" />
                <p className='socialLoginText'>{purpose} with Fcacebook</p>
            </div>
        </div>
    )
}

export default SocialLogins
